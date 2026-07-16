import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Abdul Rehman — Graphic Designer · UI/UX · AI Automation',
  description: 'Premium portfolio for Abdul Rehman, Graphic Designer, UI/UX Designer, and AI enthusiast.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
