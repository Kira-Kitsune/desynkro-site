import {
    FaBrandsYoutube,
    FaBrandsTwitch,
    FaBrandsTwitter,
    FaBrandsDiscord,
} from 'solid-icons/fa';
import type { Social, NavItem } from '../utils/types';

export const NavItems: NavItem[] = [
    {
        text: 'Home',
        href: 'https://desynkro.com/',
    },
    {
        text: 'Portfolio',
        href: 'https://desynkro.com/portfolio',
    },
    {
        text: 'DigiSonica',
        href: 'https://digisonica.desynkro.com',
    },
    {
        text: 'Merch',
        href: 'https://store.streamelements.com/desynkro',
    },
];

export const Socials: Social[] = [
    {
        text: 'YouTube',
        href: 'https://youtube.com/DeSynkro',
        Icon: FaBrandsYoutube,
    },
    {
        text: 'Twitch',
        href: 'https://twitch.tv/DeSynkro',
        Icon: FaBrandsTwitch,
    },
    {
        text: 'Twitter',
        href: 'https://twitter.com/DeSynkro',
        Icon: FaBrandsTwitter,
    },
    {
        text: 'Discord',
        href: 'https://discord.gg/invite/qptZkCj',
        Icon: FaBrandsDiscord,
    },
];

export const Supports: Social[] = [
    {
        text: 'PayPal',
        href: 'https://paypal.me/iagorosa/',
    },
    {
        text: 'Ko-fi',
        href: 'https://ko-fi.com/desynkro',
    },
    {
        text: 'Merch',
        href: 'https://store.streamelements.com/desynkro',
    },
];
