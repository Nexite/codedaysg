import Image from "next/image";
import Logo from "@/public/logo.svg";
import HeroImage from "@/public/hero.jpeg";

import styles from "@/styles/Header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.header__left}>
                <Image
                    src={Logo}
                    alt="CodeDay Singapore"
                    width={100}
                    height={100}
                />
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
                    width={640}
                    height={425}
                />
            </div>
        </header>
    );
}
