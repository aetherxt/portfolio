'use client';

import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';

interface ImageGalleryProps {
    images: string[];
    basePath: string;
}

interface ImageDimensions {
    [key: number]: 'landscape' | 'portrait' | 'square';
}

export default function ImageGallery({ images, basePath }: ImageGalleryProps) {
    const [shuffledImages, setShuffledImages] = useState<string[]>([]);
    const [visibleImages, setVisibleImages] = useState<Set<number>>(new Set());
    const [imageDimensions, setImageDimensions] = useState<ImageDimensions>({});
    const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
    const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
    const [imageRect, setImageRect] = useState<DOMRect | null>(null);
    const observerRef = useRef<IntersectionObserver | null>(null);
    const imageRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

    // Shuffle images on mount
    useEffect(() => {
        const shuffled = [...images].sort(() => Math.random() - 0.5);
        setShuffledImages(shuffled);
    }, [images]);

    // Handle ESC key to close modal
    useEffect(() => {
        if (activeImageIndex === null) {
            document.body.style.overflow = 'auto';
            return;
        }

        document.body.style.overflow = 'hidden';

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setActiveImageIndex(null);
                setImageRect(null);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'auto';
        };
    }, [activeImageIndex]);

    // Set up intersection observer for animation
    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = parseInt(entry.target.getAttribute('data-index') || '0');
                        setVisibleImages((prev) => new Set([...prev, index]));
                    }
                });
            },
            {
                rootMargin: '100px',
                threshold: 0.01,
            }
        );

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, []);

    // Observe images
    useEffect(() => {
        if (!observerRef.current) return;

        const imageElements = document.querySelectorAll('.lazy-image-container');
        imageElements.forEach((element) => {
            observerRef.current?.observe(element);
        });

        return () => {
            imageElements.forEach((element) => {
                observerRef.current?.unobserve(element);
            });
        };
    }, [shuffledImages]);

    const handleImageLoad = (index: number, img: HTMLImageElement) => {
        const { naturalWidth, naturalHeight } = img;
        const orientation = naturalWidth > naturalHeight * 1.2 ? 'landscape' :
            naturalHeight > naturalWidth * 1.2 ? 'portrait' : 'square';
        setImageDimensions((prev) => ({ ...prev, [index]: orientation }));
        setLoadedImages((prev) => new Set([...prev, index]));
    };

    const handleImageClick = (index: number) => {
        if (activeImageIndex === index) {
            setActiveImageIndex(null);
            setImageRect(null);
        } else {
            const element = imageRefs.current[index];
            if (element) {
                const rect = element.getBoundingClientRect();
                setImageRect(rect);
            }
            requestAnimationFrame(() => {
                setActiveImageIndex(index);
            });
        }
    };

    if (shuffledImages.length === 0) {
        return null;
    }

    return (
        <>
            {activeImageIndex !== null && (
                <div
                    className="fixed inset-0 z-40 transition-all duration-300"
                    style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.4)',
                        backdropFilter: 'blur(4px)',
                        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                    onClick={() => {
                        setActiveImageIndex(null);
                        setImageRect(null);
                    }}
                />
            )}

            <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 mt-8 transition-all duration-300 ${activeImageIndex !== null ? 'blur-md' : ''}`} style={{ gridAutoFlow: 'dense', transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
                {shuffledImages.map((image, index) => {
                    const orientation = imageDimensions[index];
                    const isLandscape = orientation === 'landscape';
                    const isActive = activeImageIndex === index;

                    return (
                        <div
                            key={`${image}-${index}`}
                            className={`lazy-image-container transition-all ease-out ${visibleImages.has(index)
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-8'
                                } ${isLandscape ? 'sm:col-span-2 md:col-span-4 lg:col-span-4' : 'sm:col-span-1 md:col-span-2 lg:col-span-2'} ${isActive ? 'invisible' : ''}`}
                            style={{ transitionDuration: isActive ? '0ms' : '700ms' }}
                            data-index={index}
                        >
                            <div
                                ref={(el) => { imageRefs.current[index] = el; }}
                                className="relative bg-white dark:bg-white p-3 shadow-md hover:shadow-xl cursor-pointer overflow-hidden transition-shadow duration-300 w-full flex items-center justify-center h-full"
                                style={{
                                    aspectRatio: isLandscape ? '3/2' : '3/4',
                                }}
                                onClick={() => handleImageClick(index)}
                            >
                                {!loadedImages.has(index) && (
                                    <div className="absolute inset-0 m-3 bg-gray-200 dark:bg-gray-300 animate-pulse" />
                                )}
                                <div className="relative w-full h-full flex items-center justify-center">
                                    {/* Using standard img tag for more reliable loading behavior in this specific gallery context */}
                                    <img
                                        src={`${basePath}/${image}`}
                                        alt={`Photography ${index + 1}`}
                                        className={`max-w-full max-h-full w-auto h-auto object-contain transition-opacity duration-300 ${loadedImages.has(index) ? 'opacity-100' : 'opacity-0'}`}
                                        loading="lazy"
                                        onLoad={(e) => handleImageLoad(index, e.currentTarget)}
                                        onError={(e) => {
                                            console.error(`Failed to load image: ${basePath}/${image}`);
                                            setLoadedImages((prev) => new Set([...prev, index]));
                                        }}
                                        style={{
                                            width: isLandscape ? '100%' : 'auto',
                                            height: isLandscape ? 'auto' : '100%'
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {activeImageIndex !== null && (() => {
                const image = shuffledImages[activeImageIndex];
                const orientation = imageDimensions[activeImageIndex];
                const isLandscape = orientation === 'landscape';

                // Calculate transform for smooth animation from original position
                let transform = '';
                if (imageRect) {
                    const centerX = window.innerWidth / 2;
                    const centerY = window.innerHeight / 2;
                    const originalCenterX = imageRect.left + imageRect.width / 2;
                    const originalCenterY = imageRect.top + imageRect.height / 2;

                    // Scale to fit 90vw/90vh while maintaining aspect ratio
                    const maxWidth = window.innerWidth * 0.9;
                    const maxHeight = window.innerHeight * 0.9;
                    const scaleX = maxWidth / imageRect.width;
                    const scaleY = maxHeight / imageRect.height;
                    const scale = Math.min(scaleX, scaleY, 2); // Cap at 2x

                    // Calculate translation to center the scaled image
                    // When scaling from top-left (transformOrigin: 'top left'), the element expands right and down.
                    // We need to move the top-left corner such that the center of the scaled element aligns with the screen center.

                    const targetX = (window.innerWidth - imageRect.width * scale) / 2;
                    const targetY = (window.innerHeight - imageRect.height * scale) / 2;

                    const translateX = targetX - imageRect.left;
                    const translateY = targetY - imageRect.top;

                    transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
                }

                return (
                    <div
                        className="fixed z-50 bg-white dark:bg-white shadow-2xl cursor-pointer overflow-hidden p-3"
                        style={{
                            left: imageRect?.left || 0,
                            top: imageRect?.top || 0,
                            width: imageRect?.width || 0,
                            height: imageRect?.height || 0,
                            transform: transform,
                            transformOrigin: 'top left',
                            transition: 'transform 400ms cubic-bezier(0.4, 0, 0.2, 1)',
                            aspectRatio: isLandscape ? '3/2' : '3/4',
                        }}
                        onClick={() => handleImageClick(activeImageIndex)}
                    >
                        <div className="relative w-full h-full flex items-center justify-center">
                            {/* Also using standard img for the modal to avoid Next.js Image issues with dynamic sizing/transforms */}
                            <img
                                src={`${basePath}/${image}`}
                                alt={`Photography ${activeImageIndex + 1}`}
                                className="max-w-full max-h-full w-auto h-auto object-contain"
                                style={{
                                    width: isLandscape ? '100%' : 'auto',
                                    height: isLandscape ? 'auto' : '100%'
                                }}
                            />
                        </div>
                    </div>
                );
            })()}
        </>
    );
}
