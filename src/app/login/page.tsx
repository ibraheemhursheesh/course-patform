// @ts-nocheck
import BackgroundGradientLayer from "@/components/BackgroundGradientLayer";
import LoginForm from "@/components/LoginForm";

export default function page() {
  return (
    <div className="relative">
      <BackgroundGradientLayer login={true} />
      <LoginForm />
    </div>
  );
}
