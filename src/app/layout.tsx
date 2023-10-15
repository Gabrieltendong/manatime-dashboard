import { store } from "@/store/store";
import { Provider } from "react-redux";
import { Providers } from "./provider";

export const metadata = {
  title: "Manatime dashboard",
  description: "Manatime dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
