 
 
import type { ReactNode } from 'react';
import "./globals.css";
import '@mantine/core/styles.css';
import { mantineHtmlProps } from '@mantine/core'
 import   Header   from "./Components/Header/Header";
 import   Footer   from "./Components/Footer/Footer";
 import { MantineProvider } from '@mantine/core';
 

export default function RootLayout({
  children,
}: { children: ReactNode }) {
  return (
    <html lang="en">
    <head lang="en" {...mantineHtmlProps}></head>
      <body
      
      className={"   antialiased"}
      style={{overflowX:"hidden"}}
                           cz-shortcut-listen="true"
      >
      <MantineProvider>
          < Header/> 
    
          <main> {children}</main>
           <Footer/>
      
        </MantineProvider>
      </body>
    </html>
  );
}
