import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LOGO } from "@/lib/data";

export const metadata = {
  title: "হোম | টিবিএফ ২০২৬",
  description: "দ্যা ব্রিলিয়্যান্টস্ ফাউন্ডেশন, বগুড়া — বৃত্তি পরীক্ষা ২০২৬",
  icons: { icon: LOGO },
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&family=Noto+Serif+Bengali:wght@500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </head>
      <body>
        <Navbar />
        <main className="container-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
