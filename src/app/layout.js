import { Fira_Code } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import News from "@/components/News";

const inter = Fira_Code({ subsets: ["latin"] });

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
                <div>
                    <div>
                        <Sidebar />
                    </div>
                    <div>{children}</div>

                    <div>
                        <News />
                    </div>
                </div>
            </body>
        </html>
    );
}
