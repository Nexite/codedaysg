import Head from "next/head";
import styles from "@/styles/Home.module.css";

import Header from "@/components/Header";

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
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>
            <main className={styles.main}>
                <div className={styles.center}>
                    <Header />
                </div>
            </main>
        </>
    );
}
