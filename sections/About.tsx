import styles from "@/styles/About.module.css";

import Paragraph from "@/components/Paragraph";

export default function About() {
    return (
        <div className={styles.about}>
            <div className={styles.text_left}>
                <Paragraph title="What is CodeDay?">
                    CodeDay is a worldwide event where student artists,
                    programmers, musicians, actors, and writers get together to
                    build apps and games. No coding experience is necessary to
                    attend!
                </Paragraph>
            </div>

            <div className={styles.text_right}>
                <Paragraph title="What is a hackathon?">
                    A hackathon is a 24-hour event where students come together
                    to build apps and games. It&apos;s a great way to learn new
                    skills, meet new people, and have fun!
                </Paragraph>
            </div>
        </div>
    );
}
