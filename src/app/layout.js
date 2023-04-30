import "./globals.css";
import { Mulish } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Font Setup
const mulish = Mulish({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Netflix Website Zack",
  description: "A netflix custom clone with Next.js ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={mulish.className}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
