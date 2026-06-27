import { useEffect, useState } from 'react';

interface CharacterPortraitProps {
    src: string;
    fallback: string;
    alt: string;
    className?: string;
    loading?: 'eager' | 'lazy';
}

const CharacterPortrait = ({
    src,
    fallback,
    alt,
    className,
    loading = 'lazy',
}: CharacterPortraitProps) => {
    const [currentSrc, setCurrentSrc] = useState(src);

    useEffect(() => {
        setCurrentSrc(src);
    }, [src]);

    return (
        <img
            className={className}
            src={currentSrc}
            alt={alt}
            loading={loading}
            referrerPolicy='no-referrer'
            onError={() => {
                if (currentSrc !== fallback) {
                    setCurrentSrc(fallback);
                }
            }}
        />
    );
};

export default CharacterPortrait;
