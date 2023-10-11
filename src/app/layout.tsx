import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="rtl">
      <body className="flex flex-col min-h-screen">
        <header className="bg-secondary flex items-center justify-center h-20">
          header
        </header>
        <div className="flex-1 flex">{children}</div>
        <footer className="bg-secondary flex items-center justify-center h-20">
          footer
        </footer>
      </body>
    </html>
  );
}
