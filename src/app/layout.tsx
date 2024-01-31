import type { Metadata } from "next";
import Link from '@mui/material/Link';
import { Inter } from "next/font/google";
import "./globals.css";
import MuiDrawer from '@mui/material/Drawer';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import SignIn from "./page"
const inter = Inter({ subsets: ["latin"] });
const drawerWidth: number = 240;
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">

      <body className={inter.className}>




        {children}





      </body>
    </html>
  );
}
