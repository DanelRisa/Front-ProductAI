import './globals.css';
import NavBar from "@/components/Navbar";
import Footer  from "@/components/Footer";

export const metadata = {
  title: 'Product Hub',
  description: 'Откройте мир выгодных покупок!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const isCategoryPage = typeof window !== 'undefined' && window.location.pathname.includes('category');

  return (
    <html lang="en">
      <body className="relative flex flex-col min-h-screen">
        <NavBar />
        
        <main className="flex-grow">{children}</main>
        {isCategoryPage && <Footer />} {/* Render the footer only on CategoryPage */}
      </body>
    </html>
  );
}
