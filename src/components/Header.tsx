
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full border-b">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="font-bold text-xl flex items-center">
            <img src="/lovable-uploads/20154487-9948-44f4-ad58-a40220b82903.png" alt="Taskify Logo" className="h-8 w-auto mr-2" />
            Taskify
          </div>
        </Link>
        <nav className="flex items-center gap-4 md:gap-6">
          <ThemeToggle />
          <Button variant="ghost" asChild>
            <Link to="/login">Log in</Link>
          </Button>
          <Button className="bg-taskify-blue hover:bg-taskify-blue/90" asChild>
            <Link to="/signup">Sign up</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
