import styles from "@/styles/Paragraph.module.css";

type SectionProps = {
    title: string;
    children: string;
};

export default function Paragraph({ title, children }: SectionProps) {
    return (
        <div className={styles.paragraph}>
            <h2>{title}</h2>
            <p>{children}</p>
        </div>
    );
}
