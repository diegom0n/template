'use client';

import useUser from "@/hooks/useUser";

const Dashboard = () => {
  const { user, role, loading } = useUser();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>No estás logueado</div>;
  }

  return (
    <div>
      <h1>Bienvenido, {user.email}</h1>
      <p>Tu rol es: {role}</p>
    </div>
  );
};

export default Dashboard;
