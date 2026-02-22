'use client';

import { useState } from 'react';

export default function InstagramLink() {
    const [isHovered, setIsHovered] = useState(false);
    const displayInstagram = "@mlaw.photo";
    const instagramUrl = 'https://instagram.com/mlaw.photo/';

    return (
        <div
            className="cursor-pointer transition-all w-fit"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => window.open(instagramUrl, '_blank')}
        >
            {isHovered ? displayInstagram : '-> Instagram'}
        </div>
    );
}
