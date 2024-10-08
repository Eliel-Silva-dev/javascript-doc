import type { Metadata } from 'next';

import { Lato } from 'next/font/google';

import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

import { Suspense } from 'react';

import './globals.css';

const lato = Lato({ subsets: ['latin'], weight: ['400', '700', '900'] });

export const metadata: Metadata = {
  title: 'Documentação JavaScript | Hydrah tec',
  description: 'Página de documentação javascript',
  keywords: 'documentação javascript, funções javascript',
  icons: '',
  robots: 'index, follow',
  authors: [{ name: 'Eliel Silva', url: 'https://github.com/Eliel-Silva-dev' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={lato.className}>
        <NavBar />
        <Suspense fallback={<div>Carregando dados da pagina...</div>}>
          {children}
        </Suspense>
        <Footer />
      </body>
    </html>
  );
}
