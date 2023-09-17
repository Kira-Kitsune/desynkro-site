import type { Component } from 'solid-js';

type Props = {
    src: string;
    alt: string;
    sample?: boolean;
    focused?: boolean;
    landscape?: boolean;
};

const AlbumItem: Component<Props> = ({ src, alt, sample, focused }) => {
    return (
        <div
            class={`${
                !focused &&
                'transition-transform duration-[400ms] lg:cursor-pointer hover:lg:scale-[1.15]'
            }`}
        >
            <img
                class={`w-64 ${
                    sample && 'lg:last:hidden xl:last:block'
                } pointer-events-none aspect-albumItem object-cover`}
                src={src}
                alt={alt}
                loading="lazy"
            />
        </div>
    );
};

export default AlbumItem;
