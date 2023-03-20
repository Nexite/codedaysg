import styles from "@/styles/Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>
                Made with love by{" "}
                <a href="https://github.com/codedaysg">the CodeDay Singapore team!</a>
            </p>
        </footer>
    );
}