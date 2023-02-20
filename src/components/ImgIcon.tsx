import { A } from '@solidjs/router';
import type { Component } from 'solid-js';

type Props = {
    src: string;
    href: string;
    text: string;
};

const ImgIcon: Component<Props> = ({ src, href, text }) => {
    return (
        <A href={href} class="flex flex-col items-center justify-center gap-2">
            <img class="w-[36rem] cursor-pointer" src={src} alt="img-icon" />
            <span>{text}</span>
        </A>
    );
};

export default ImgIcon;
