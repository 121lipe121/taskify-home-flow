
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-secondary py-16 md:py-24">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">
          Ready to automate your workflows?
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join thousands of users who have already transformed their business processes with Taskify.
        </p>
        <Button 
          className="bg-taskify-blue hover:bg-taskify-blue/90 text-white px-8 py-6 h-auto rounded-md text-lg"
          asChild
        >
          <Link to="/get-started">
            Get Started Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
