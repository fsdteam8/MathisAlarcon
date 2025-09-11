import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"]
})

export const metadata: Metadata = {
	title: "Eye's Prod - Boutique de lunettes à Saint-Germain-en-Laye",
	description: "Découvrez Eye's Prod, votre boutique de lunettes à Saint-Germain-en-Laye. Des modèles uniques, une expertise passionnée et un accueil chaleureux vous attendent.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="fr">
			<body className={`${poppins.className} antialiased`}>
				{children}
			</body>
		</html>
	);
}
