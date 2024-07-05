import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import News from "@/components/News";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Socialize NextJS",
    description: "Socialize NextJS-Social media app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/Socialize.png" />
            </head>
            <body className={inter.className}>
                <div className="max-w-6xl flex justify-between mx-auto">
                    <div className="hidden sm:inline border-r h-screen">
                        <Sidebar />
                    </div>
                    <div>{children}</div>
                    {/* TODO : lg:flex lg:flex-col */}
                    <div className="hidden lg:inline w-[24rem] p-3 h-screen border-l">
                        <div className="sticky top-0 bg-white">
                            <input
                                type="text"
                                placeholder="Search"
                                className="bg-gray-100 border border-gray-200 w-full rounded-3xl px-4 py-2 text-sm"
                            />
                        </div>
                        <News />
                    </div>
                </div>
            </body>
        </html>
    );
}
