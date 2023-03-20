import Head from "next/head";
import styles from "@/styles/Home.module.css";

import Header from "@/sections/Header";
import About from "@/sections/About";
import Footer from "@/sections/Footer";
import Register from "@/sections/Register";

export default function Home() {
    return (
        <>
            <Head>
                <title>CodeDay Singapore</title>
                <meta
                    name="description"
                    content="CodeDay is a 24-hour hackathon for students to learn, build, and share their creations."
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/favicons/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicons/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicons/favicon-16x16.png"
                />
                <link rel="manifest" href="/favicons/site.webmanifest" />
            </Head>
            <main className={styles.main}>
                <Header />
                <About />
                <Register />
            </main>
            <Footer />
        </>
    );
}
