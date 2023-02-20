import type { Component } from 'solid-js';

type Props = {
    src: string;
    alt: string;
    sample?: boolean;
    focused?: boolean;
};

const PortfolioItem: Component<Props> = ({ src, alt, sample, focused }) => {
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
                } pointer-events-none aspect-photo object-contain`}
                src={src}
                alt={alt}
            />
        </div>
    );
};

export default PortfolioItem;
