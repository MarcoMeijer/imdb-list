import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
