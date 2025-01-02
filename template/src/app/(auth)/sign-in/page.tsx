import { LoginForm } from "@/components/login-form";

export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 w-full">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  );
}
