import styles from "@/styles/Register.module.css";

import Paragraph from "@/components/Paragraph";

export default function Register() {
    return (
        <div className={styles.register}>
            <Paragraph title="Register">
                Registration is now open! You can register for CodeDay Singapore
                2023 here.
            </Paragraph>

            <div className={styles.buttons}>
                <a href="https://event.codeday.org/en-US/singapore#register">
                    <button>Register Now</button>
                </a>
            </div>
        </div>
    );
}
