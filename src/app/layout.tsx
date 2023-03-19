import "./globals.css";
import Header from "./header";

export const metadata = {
  title: "imdb movie list",
  description: "List of the top 250 imdb movies",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
