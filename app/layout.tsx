import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Interview Coding Question Generator",
  description: "Generate coding questions based on actual job requirements. AI-powered technical interview questions tailored to your job descriptions and tech stacks."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="1064c4aa-7fbc-4238-af7d-f57a924b9ee3"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
