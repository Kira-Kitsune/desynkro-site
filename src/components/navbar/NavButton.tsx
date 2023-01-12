import { A } from '@solidjs/router';
import type { Component } from 'solid-js';

type Props = {
    text: string;
    href: string;
};

const NavButtton: Component<Props> = ({ href, text }) => {
    return (
        <A
            href={href}
            class="mx-8 text-xl font-bold text-white hover:text-[#00AEFF] active:text-cyan-500"
        >
            {text.toUpperCase()}
        </A>
    );
};

export default NavButtton;
