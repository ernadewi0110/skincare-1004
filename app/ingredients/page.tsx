import { Header } from "@/components/header";

export default function IngredientsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-20">
        <h1 className="text-3xl font-light mb-4">Ingredients</h1>
        <p className="text-muted-foreground">A placeholder page describing product ingredients.</p>
      </div>
    </div>
  );
}
