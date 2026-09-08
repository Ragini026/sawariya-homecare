import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'Sawariya Home Care | Trusted Care, Right at Home',
  description: 'Compassionate and reliable home-care support for senior citizens, newborns, babies and families — delivered with care, dignity and trust.',
  openGraph: {
    title: 'Sawariya Home Care | Trusted Care, Right at Home',
    description: 'Compassionate and reliable home-care support for senior citizens, newborns, babies and families — delivered with care, dignity and trust.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sawariya Home Care | Trusted Care, Right at Home',
    description: 'Compassionate and reliable home-care support for senior citizens, newborns, babies and families — delivered with care, dignity and trust.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning className="antialiased">{children}</body>
    </html>
  );
}
