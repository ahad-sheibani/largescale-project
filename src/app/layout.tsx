import "./globals.css";
import { Figtree } from "next/font/google";
import localFont from "next/font/local";
import { Header } from "./_components/header/header";
import { Footer } from "./_components/footer/footer";

const IranYekan = localFont({
  src: [
    {
      path: "../../public/fonts/IRANYekanX-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/IRANYekanX-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/IRANYekanX-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/IRANYekanX-Demibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/IRANYekanX-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/IRANYekanX-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],

  variable: "--font-iranYekan",
});

const figtree = Figtree({
  display: "swap",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-figtree",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      dir="rtl"
      className={`dark ${figtree.variable} ${IranYekan.variable}`}
    >
      <body className=" grid grid-rows-[80px_1fr_auto] min-h-screen dark:bg-base-100 dark:text-base-content">
        <Header />

        <div className="flex-1 flex">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
