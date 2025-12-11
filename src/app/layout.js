import "./globals.css";

export const metadata = {
  title: "User Authentication",
  description:
    "User Authentication and Authorization with node.js and mongodb ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` antialiased`}>{children}</body>
    </html>
  );
}
