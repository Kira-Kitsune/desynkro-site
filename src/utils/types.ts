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

export type ImgIconType = { text: string; href: string; src: string };

export interface ReviewInterface {
    author: string;
    stars: number;
    reviewText: string;
    localGuide: boolean;
}

export type List = {
    elements: string[];
};

export type Section = {
    title: string;
    textArea: (string | List | ReviewInterface)[];
};
