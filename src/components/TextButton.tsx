import type { Component } from 'solid-js';
import { A } from '@solidjs/router';

type Props = {
    href: string;
    text: string;
    underline?: boolean;
};

const TextButton: Component<Props> = ({ href, text, underline }) => {
    return (
        <A
            href={href}
            class={`text-white hover:text-[#00AEFF] active:text-cyan-500 ${
                underline && 'underline'
            }`}
        >
            {text}
        </A>
    );
};

export default TextButton;
