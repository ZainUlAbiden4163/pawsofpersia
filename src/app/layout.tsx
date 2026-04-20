import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Paws of Persia — Premium Persian Cat Breeder, Rawalpindi",
  description:
    "Pakistan's most distinguished Persian cat cattery. Championship bloodlines, health-tested kittens, and stud services in Rawalpindi. Delivering across Pakistan.",
  keywords:
    "Persian cats Pakistan, Persian kittens Rawalpindi, cat breeder Pakistan, Persian cat for sale",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
