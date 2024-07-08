import NextAuth from "next-auth/next";

import GoogleProvider from "next-auth/providers/google";

const handdle = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
});

export { handdle as GET, handdle as POST };
