import type { Metadata } from "next";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/styles/index.css";
import "@/styles/fonts.css";
export const metadata: Metadata = {
  title: "Limeneer Website",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="./favicon_io/favicon.ico" />
      <body className="font-azonix">{children}</body>
    </html>
  );
}
