import './globals.css';
import localFont from 'next/font/local';
import NavBar from './navbar';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata = {
  title: {
    default: 'Home | Just Brew It! ',
    template: '%s | Just Brew It!',
  },
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <header className="header">
          <NavBar />
        </header>
        {children}
        <footer
          style={{ textAlign: 'center', padding: '20px', fontSize: '0.8rem' }}
        >
          <div>Impressum | Est. 2024 </div>
          <div>Designed by F.W.</div>
        </footer>
      </body>
    </html>
  );
}
