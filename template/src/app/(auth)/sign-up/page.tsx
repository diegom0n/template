import { RegisterForm } from "@/components/register-form";

export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 w-full">
      <div className="w-full max-w-sm">
        <RegisterForm />
      </div>
    </div>
  );
}
