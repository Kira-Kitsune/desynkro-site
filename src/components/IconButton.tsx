import type { Component } from 'solid-js';
import { IconProps } from 'solid-icons';
import { A } from '@solidjs/router';

type Props = {
    Icon: Component<IconProps>;
    href: string;
    size?: number;
};

const SocialIcon: Component<Props> = ({ Icon, href, size = 28 }) => {
    return (
        <A
            href={href}
            class="text-xl fill-white hover:fill-[#00AEFF] active:text-cyan-500"
        >
            <Icon size={size} />
        </A>
    );
};

export default SocialIcon;
