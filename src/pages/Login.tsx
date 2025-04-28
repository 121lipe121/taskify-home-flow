
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center py-12">
        <div className="mx-auto max-w-md w-full p-6 space-y-6 bg-card rounded-lg shadow-lg border">
          <div className="text-center">
            <h1 className="text-2xl font-bold">Log in to Taskify</h1>
            <p className="text-muted-foreground mt-2">Welcome back! Please enter your credentials.</p>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="email">Email</label>
              <input
                id="email"
                placeholder="Enter your email"
                className="w-full p-2 border rounded-md bg-background"
                type="email"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium" htmlFor="password">Password</label>
                <Link to="/forgot-password" className="text-sm text-taskify-blue hover:underline">
                  Forgot password?
                </Link>
              </div>
              <input
                id="password"
                placeholder="Enter your password"
                className="w-full p-2 border rounded-md bg-background"
                type="password"
              />
            </div>
            <Button className="w-full bg-taskify-blue hover:bg-taskify-blue/90">Log in</Button>
          </div>
          <div className="text-center text-sm">
            <p>
              Don't have an account?{" "}
              <Link to="/signup" className="text-taskify-blue hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
