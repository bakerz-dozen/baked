import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import "./globals.css";
import { MainLayout } from "../components/layouts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="h-screen">
          <SignedOut>
            <header className="p-4">
              <SignInButton />
            </header>
            <main>{children}</main>
          </SignedOut>
          <SignedIn>
            <MainLayout>
              {children}
            </MainLayout>
          </SignedIn>
        </body>
      </html>
    </ClerkProvider>
  );
}
