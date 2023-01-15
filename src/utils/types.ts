import type { Component } from 'solid-js';
import type { IconProps } from 'solid-icons';

export type Photo = {
    src: string;
    alt?: string;
};

export type Social = NavItem & {
    Icon?: Component<IconProps>;
};

export type NavItem = {
    text: string;
    href: string;
};
