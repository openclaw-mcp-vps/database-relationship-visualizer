import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DB Schema Visualizer — Auto-generate database diagrams",
  description: "Connect to any database and instantly generate interactive relationship diagrams with foreign key mapping. Built for backend developers and DBAs."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="e6b8e58b-37f0-45cb-b5e1-fe183daab6db"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
