import { geistSans, geistMono } from "./ui/font";
import './ui/globals.css'
import "./ui/animations.css";

export const metadata = {
  title: "Athon Networks | Network Services",
  description: "Computação em nuvem, serviços de rede, soluções que ajudam sua empresa a fazer parte do futuro.",
  icons: "./iconathon.png"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
