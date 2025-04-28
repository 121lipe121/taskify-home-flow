
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Signup() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center py-12">
        <div className="mx-auto max-w-md w-full p-6 space-y-6 bg-card rounded-lg shadow-lg border">
          <div className="text-center">
            <h1 className="text-2xl font-bold">Create an account</h1>
            <p className="text-muted-foreground mt-2">Get started with Taskify</p>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="name">Name</label>
              <input
                id="name"
                placeholder="Enter your name"
                className="w-full p-2 border rounded-md bg-background"
                type="text"
              />
            </div>
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
              <label className="text-sm font-medium" htmlFor="password">Password</label>
              <input
                id="password"
                placeholder="Create a password"
                className="w-full p-2 border rounded-md bg-background"
                type="password"
              />
            </div>
            <Button className="w-full bg-taskify-blue hover:bg-taskify-blue/90">Sign up</Button>
          </div>
          <div className="text-center text-sm">
            <p>
              Already have an account?{" "}
              <Link to="/login" className="text-taskify-blue hover:underline">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
