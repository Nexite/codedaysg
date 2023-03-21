import { useState, useCallback, useEffect, useRef } from "react";
import styles from "@/styles/RegisterForm.module.css";

const CODEDAY_ORIGIN = "https://event.codeday.org";

interface Props {
    language?: string;
    webname: string;
}

export default function CodeDayRegistrationForm({
    language = "en-US",
    webname,
}: Props) {
    const ref = useRef<HTMLIFrameElement>(null);
    const [height, setHeight] = useState<number>(400);

    // Validate that the message came from CodeDay
    const onResizeMessageHandler = useCallback(
        (e: MessageEvent) => {
            if (e.origin !== CODEDAY_ORIGIN) return;
            const { type, height } = JSON.parse(e.data);
            if (type !== "embedResize") return;
            setHeight(height);
        },
        [setHeight]
    );

    // When we receive a new size, update the state size.
    const isWindowDefined = typeof window !== "undefined";
    useEffect(() => {
        if (!isWindowDefined) return;
        window.addEventListener("message", onResizeMessageHandler);
        return () =>
            window.removeEventListener("message", onResizeMessageHandler);
    }, [isWindowDefined, onResizeMessageHandler]);

    // When this component first loads, request the size.
    const isRefDefined = !!ref.current;
    useEffect(() => {
        if (!isRefDefined || !isWindowDefined) return;
        ref.current?.contentWindow?.postMessage("poll", CODEDAY_ORIGIN);
        ref.current?.addEventListener("load", () =>
            ref.current?.contentWindow?.postMessage("poll", CODEDAY_ORIGIN)
        );
    }, [isRefDefined, isWindowDefined]);

    return (
        <div className={styles.registerForm}>
            <iframe
                width="100%"
                height={height}
                ref={ref}
                src={`${CODEDAY_ORIGIN}/${language}/${webname}/embed`}
                className={styles.registerForm__iframe}
            />
        </div>
    );
}
