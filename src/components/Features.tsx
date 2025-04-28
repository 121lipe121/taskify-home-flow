
import { Activity, LayoutGrid, Workflow } from "lucide-react";

export default function Features() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Key Features</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="feature-card">
            <div className="feature-icon">
              <Activity className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">AI-Powered Automation</h3>
            <p className="text-muted-foreground">
              Use artificial intelligence to build and optimize your automation workflows.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <LayoutGrid className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">Visual Workflow Editor</h3>
            <p className="text-muted-foreground">
              Create complex automation workflows using our intuitive drag-and-drop interface.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <Workflow className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">RPA & Web Scraping</h3>
            <p className="text-muted-foreground">
              Automate repetitive tasks and extract data from websites with ease.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
