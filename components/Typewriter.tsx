'use client';

import { useState, useEffect } from 'react';

interface TypewriterProps {
    text: string;
    speed?: number;
    startDelay?: number;
}

export default function Typewriter({ text, speed = 100, startDelay = 0 }: TypewriterProps) {
    const [displayText, setDisplayText] = useState('');
    const [showCursor, setShowCursor] = useState(true);
    const [started, setStarted] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setStarted(true);
        }, startDelay);
        return () => clearTimeout(timeout);
    }, [startDelay]);

    useEffect(() => {
        if (!started) return;

        let i = 0;
        const intervalId = setInterval(() => {
            const current = text.slice(0, i + 1);
            setDisplayText(current);
            i++;
            if (i >= text.length) {
                clearInterval(intervalId);
            }
        }, speed);

        return () => clearInterval(intervalId);
    }, [text, speed, started]);

    return (
        <span className="inline-block relative whitespace-pre-line text-center">
            {displayText}
            <span className="animate-blink ml-1 inline-block bg-current w-[3px] h-[1em] align-middle translate-y-[-2px]"></span>
        </span>
    );
}
