import type { Component } from 'solid-js';
import { A } from '@solidjs/router';

type Props = {
    href: string;
    text: string;
};

const YellowButton: Component<Props> = ({ href, text }) => {
    return (
        <A
            href={href}
            class="text-white underline hover:text-[#FFBF00] active:text-amber-500"
        >
            {text}
        </A>
    );
};

export default YellowButton;
