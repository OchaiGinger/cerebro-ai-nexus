import Navigation from "./Navigation";
import Footer from "./Footer";
import ScrollAnimations from "./ScrollAnimations";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollAnimations />
      <Navigation />
      <main className="pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;