import Image from "next/image";
import Logo from "@/public/logo.svg";
import HeroImage from "@/public/hero.webp";

import styles from "@/styles/Header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.header__left}>
                <div className={styles.header__left__logo}>
                    <Image
                        src={Logo}
                        alt="CodeDay Singapore"
                        width={80}
                        height={80}
                        className={styles.header__left__logo__image}
                    />
                </div>
                <div className={styles.header__left__text}>
                    <h1>CodeDay Singapore</h1>
                    <p>
                        The most beginner-friendly event for building amazing
                        games and apps is coming to Singapore yet again!
                    </p>
                    <div className={styles.header__left__buttons}>
                        <a href="https://codeday.org/singapore">
                            <button>Learn More</button>
                        </a>
                        <a href="mailto:cytronicoder@codeday.org">
                            <button>Contact Us</button>
                        </a>
                    </div>
                </div>
            </div>
            <div className={styles.header__right}>
                <Image
                    src={HeroImage}
                    alt="Zach Latta from Hack Club hosts an HTML workshop at CodeDay SF Bay Area 2017"
                    className={styles.header__right__image}
                />
            </div>
        </header>
    );
}
