'use client';

import { useEffect, useState } from "react";
import figlet from "figlet";
import ansiShadow from "figlet/fonts/ANSI Shadow";

type HomeInfoProps = {
    className?: string;
}

const FIGLET_FONT_NAME = "ANSI Shadow";
let isAnsiShadowRegistered = false;

const ensureAnsiShadowFont = () => {
    if (isAnsiShadowRegistered) return;

    try {
        figlet.parseFont(FIGLET_FONT_NAME, ansiShadow);
    } catch {
        // Hot reload can re-run parseFont for the same name.
    }

    isAnsiShadowRegistered = true;
};

export const HomeInfo: React.FC<HomeInfoProps> = ({ className = "" }) => {
    const [title, setTitle] = useState("ChanQHello");

    useEffect(() => {
        ensureAnsiShadowFont();

        figlet.text("ChanQHello", { font: FIGLET_FONT_NAME }, (err, data) => {
            if (!err && data) setTitle(data);
        });
    }, []);

    return (
        <div className={["flex flex-row overflow-x-auto", className].join(" ")}>
            <pre className="inline-block whitespace-pre font-mono text-[24px] sm:text-[26px] leading-[1.08] tracking-normal text-green-400 antialiased [text-rendering:optimizeLegibility] [transform:scale(0.5)] [transform-origin:top_left] drop-shadow-[0_0_1px_rgba(74,222,128,0.42)]">
                {title}
            </pre>
        </div>
    );
};
