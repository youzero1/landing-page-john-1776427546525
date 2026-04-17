import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Lumina — Build Faster, Ship Smarter',
  description: 'The all-in-one platform that helps teams design, build, and ship products at lightning speed.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
