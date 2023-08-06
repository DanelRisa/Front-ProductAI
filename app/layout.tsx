import './globals.css';
import NavBar from "@/components/Navbar";
import Footer  from "@/components/Footer";

export const metadata = {
  title: 'Product Hub',
  description: 'Откройте мир выгодных покупок!',
};

export default function RootLayout({ 
  children,
 }: {
   children: React.ReactNode
   }) {
return (
    <html lang="en">
    <body className="relative flex flex-col min-h-screen">
             <NavBar />
            <main className='w-full flex-growth'>{children}</main>
            <Footer />
          </body>
         </html>
       );
}
