import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

// ===============================
// FONT SETUP
// ===============================
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// ===============================
// META
// ===============================
export const metadata = {
  title: "IronForge Fitness",
  description: "Join IronForge Fitness — Start with a free trial",
};

// ===============================
// GA
// ===============================
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics (only if ID exists) */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
      </head>

      <body
        className={`${inter.variable} antialiased`}
        style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
