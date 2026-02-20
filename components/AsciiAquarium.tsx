'use client';

import { useEffect, useState, useRef } from 'react';

const FISH_RIGHT = '><>';
const FISH_LEFT = '<><';
const WIDTH = 40;
const HEIGHT = 8;
const EMPTY_CHAR = ' ';

const FISH_COLORS = [
    'text-orange-500',
    'text-red-500',
    'text-yellow-500',
    'text-pink-500',
    'text-cyan-500'
];

const ROCK_COLORS = [
    'text-stone-400 dark:text-stone-500',
    'text-stone-500 dark:text-stone-400',
    'text-stone-600 dark:text-stone-300',
    'text-amber-700 dark:text-amber-600',
    'text-orange-800 dark:text-orange-700',
    'text-yellow-800 dark:text-yellow-700',
    'text-lime-800 dark:text-lime-700',
    'text-emerald-800 dark:text-emerald-700',
    'text-teal-800 dark:text-teal-700',
    'text-cyan-800 dark:text-cyan-700',
    'text-indigo-800 dark:text-indigo-700',
    'text-purple-800 dark:text-purple-700',
];


export default function AsciiAquarium() {
    const [frame, setFrame] = useState(0);
    const [fishes, setFishes] = useState<{ x: number, y: number, dx: number, direction: string, color: string }[]>([]);
    const fishesRef = useRef(fishes);
    const [bubbles, setBubbles] = useState<{ x: number; y: number }[]>([]);
    const [rocks, setRocks] = useState<{ x: number, char: string, color: string }[]>([]);
    const [seaweed, setSeaweed] = useState<{ x: number, height: number }[]>([]);

    useEffect(() => {
        const newRocks: { x: number, char: string, color: string }[] = [];
        for (let x = 1; x < WIDTH - 1; x++) {
            if (Math.random() > 0.3) {
                const type = Math.random();
                let char = '.';
                const color = ROCK_COLORS[Math.floor(Math.random() * ROCK_COLORS.length)];

                if (type > 0.8) { char = 'O'; }
                else if (type > 0.5) { char = 'o'; }
                else if (type > 0.2) { char = '•'; }
                else { char = '.'; }

                newRocks.push({ x, char, color });
            }
        }
        setRocks(newRocks);

        const newSeaweed: { x: number, height: number }[] = [];

        for (let x = 1; x < WIDTH - 1; x++) {
            if (Math.random() > 0.6) {
                const minHeight = 1;
                const maxHeight = 5;
                const height = Math.floor(Math.pow(Math.random(), 4) * (maxHeight - minHeight + 1)) + minHeight;
                newSeaweed.push({ x, height });
            }
        }

        setSeaweed(newSeaweed);

        const newFishes: { x: number, y: number, dx: number, direction: string, color: string }[] = [];
        const fishCount = Math.floor(Math.random() * 3) + 2;
        for (let i = 0; i < fishCount; i++) {
            const dx = Math.random() > 0.5 ? 1 : -1;
            newFishes.push({
                x: Math.floor(Math.random() * (WIDTH - 10)) + 2,
                y: Math.floor(Math.random() * (HEIGHT - 3)) + 1,
                dx: dx,
                direction: dx === 1 ? 'right' : 'left',
                color: FISH_COLORS[Math.floor(Math.random() * FISH_COLORS.length)]
            });
        }
        setFishes(newFishes);

    }, []);

    useEffect(() => {
        fishesRef.current = fishes;
    }, [fishes]);

    useEffect(() => {
        const interval = setInterval(() => {
            setFrame((f) => f + 1);

            setFishes((prevFishes) => {
                return prevFishes.map(fish => {
                    let newX = fish.x + fish.dx;
                    let newDx = fish.dx;
                    let newDirection = fish.direction;

                    if (newX <= 1) {
                        newX = 1;
                        newDx = 1;
                        newDirection = 'right';
                    } else if (newX >= WIDTH - 4) {
                        newX = WIDTH - 4;
                        newDx = -1;
                        newDirection = 'left';
                    }

                    let newY = fish.y;
                    if (Math.random() > 0.8) {
                        newY += Math.random() > 0.5 ? 1 : -1;
                        if (newY < 1) newY = 1;
                        if (newY > HEIGHT - 2) newY = HEIGHT - 2;
                    }

                    return { ...fish, x: newX, y: newY, dx: newDx, direction: newDirection };
                });
            });

            if (Math.random() > 0.8) {
                const currentFishes = fishesRef.current;
                if (currentFishes.length > 0) {
                    const randomFishIndex = Math.floor(Math.random() * currentFishes.length);
                    const fish = currentFishes[randomFishIndex];
                    const bubbleX = fish.direction === 'right' ? fish.x + 2 : fish.x;
                    setBubbles(prev => [...prev, { x: bubbleX, y: fish.y }]);
                }
            }


            setBubbles(prev =>
                prev.map(b => ({ ...b, y: b.y - 0.5 }))
                    .filter(b => b.y > 0)
            );

        }, 200);

        return () => clearInterval(interval);
    }, []);

    const renderGrid = () => {
        let grid = Array.from({ length: HEIGHT }, () =>
            Array.from({ length: WIDTH }, () => ({ char: EMPTY_CHAR, color: 'text-blue-500 dark:text-blue-400' }))
        );

        for (let x = 0; x < WIDTH; x++) {
            grid[0][x] = { char: '~', color: 'text-blue-500 dark:text-blue-400' };
            grid[HEIGHT - 1][x] = { char: '_', color: 'text-black dark:text-white' };
        }

        rocks.forEach(rock => {
            grid[HEIGHT - 1][rock.x] = { char: rock.char, color: rock.color };
        });

        for (let y = 0; y < HEIGHT; y++) {
            grid[y][0] = { char: '|', color: 'text-black dark:text-white' };
            grid[y][WIDTH - 1] = { char: '|', color: 'text-black dark:text-white' };
        }
        grid[HEIGHT - 1][0] = { char: '\\', color: 'text-black dark:text-white' };
        grid[HEIGHT - 1][WIDTH - 1] = { char: '/', color: 'text-black dark:text-white' };

        seaweed.forEach(plant => {
            for (let i = 0; i < plant.height; i++) {
                const y = HEIGHT - 2 - i;
                if (y > 0) {
                    const char = i % 2 === 0 ? '(' : ')';
                    const wave = Math.floor(frame / 5) % 2 === 0 ? 0 : 1;
                    const finalChar = (i + wave) % 2 === 0 ? '(' : ')';

                    grid[y][plant.x] = { char: finalChar, color: 'text-green-600 dark:text-green-500' };
                }
            }
        });

        bubbles.forEach(b => {
            const y = Math.floor(b.y);
            if (y > 0 && y < HEIGHT - 1 && b.x > 0 && b.x < WIDTH - 1) {
                grid[y][b.x] = { char: 'o', color: 'text-cyan-400' };
            }
        });

        fishes.forEach(fish => {
            const fishSprite = fish.direction === 'right' ? FISH_RIGHT : FISH_LEFT;
            if (fish.y > 0 && fish.y < HEIGHT - 1) {
                for (let i = 0; i < fishSprite.length; i++) {
                    if (fish.x + i < WIDTH - 1 && fish.x + i > 0) {
                        grid[fish.y][fish.x + i] = { char: fishSprite[i], color: fish.color };
                    }
                }
            }
        });

        return grid.map((row, rowIdx) => (
            <div key={rowIdx} className="flex whitespace-nowrap">
                {row.map((cell, colIdx) => (
                    <span key={colIdx} className={`${cell.color} w-[1ch] inline-block text-center shrink-0`}>
                        {cell.char}
                    </span>
                ))}
            </div>
        ));
    };

    return (
        <div className="font-[Geist_Mono] text-xs sm:text-sm leading-none select-none flex flex-col whitespace-nowrap overflow-hidden w-fit">
            {renderGrid()}
        </div>
    );
}
