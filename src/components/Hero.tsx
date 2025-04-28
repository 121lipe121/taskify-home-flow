
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="wave-container pt-16 pb-24 md:pt-24 md:pb-32">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Automate Your <span className="text-taskify-blue">Workflows</span> with AI
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Taskify helps you create powerful RPA and scraping workflows using AI, without writing a single line of code.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-taskify-blue hover:bg-taskify-blue/90 text-white px-8 py-6 h-auto rounded-md text-lg"
                asChild
              >
                <Link to="/create">
                  Create Your First Workflow
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                className="px-8 py-6 h-auto rounded-md text-lg"
                asChild
              >
                <Link to="/demo">Watch Demo</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -z-10 inset-0 rounded-full bg-gradient-flow animate-flow blur-3xl opacity-20"></div>
            <div className="relative bg-card p-4 rounded-xl shadow-lg border">
              <img 
                src="/lovable-uploads/20154487-9948-44f4-ad58-a40220b82903.png"
                alt="Taskify Interface" 
                className="rounded-lg w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
