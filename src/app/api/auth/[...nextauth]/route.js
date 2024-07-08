import NextAuth from "next-auth/next";

import GoogleProvider from "next-auth/providers/google";

const handdle = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],

    callbacks: {
        async session({ session, token }) {
            session.user.username = session.user.name
                .split(" ")
                .join("")
                .toLocaleLowerCase();
            session.user.uiu = token.sub;

            return session;
        },
    },
});

export { handdle as GET, handdle as POST };
