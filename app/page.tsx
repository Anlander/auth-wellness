import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <main className="flex flex-col items-center h-screen justify-center bg-sky-500 gap-5">
      <div className="space-y-6 text-center">
        <h1
          className={cn(
            "drop-shadow-md font-semibold text-white text-6xl",
            font.className
          )}
        >
          Auth!
        </h1>
        <p className="text-white text-lg">A simple auth</p>
        <div>
          <LoginButton>
            <Button variant={"secondary"} size="lg">
              Sign in
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
