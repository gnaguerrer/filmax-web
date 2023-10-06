import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';

const handler = NextAuth({
	secret: process.env.NEXTAUTH_SECRET,
	jwt: {
		secret: process.env.NEXTAUTH_SECRET,
	},
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID!,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
		}),
	],
});

export { handler as GET, handler as POST };
