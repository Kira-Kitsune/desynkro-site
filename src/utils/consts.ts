import {
    FaBrandsYoutube,
    FaBrandsTwitch,
    FaBrandsTwitter,
    FaBrandsDiscord,
} from 'solid-icons/fa';
import type { Social, NavItem, ImgIconType, Section } from '../utils/types';

import IconPlaceholder from '../assets/images/Placeholder.png';

import IconCars from '../assets/images/iconsCategories/Cars.png';
import IconCosplay from '../assets/images/iconsCategories/Cosplay.png';
import IconModels from '../assets/images/iconsCategories/Models.png';
import IconPets from '../assets/images/iconsCategories/Pets.png';
import IconStreet from '../assets/images/iconsCategories/Street_Photography.png';

export const NavItems: NavItem[] = [
    {
        text: 'Home',
        href: '/',
    },
    {
        text: 'Portfolio',
        href: '/portfolio',
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

export const InfoText: Section[] = [
    {
        title: 'About Me',
        textArea: [
            "Hi there! My name is Iago Rosa, and I am the founder of DeSynkro, I'm a Professional Photographer, Animator, Video Editor and former Content Creator. As a professional photographer, I have a passion for capturing the world around me through the lens of a camera. With my brand DeSynkro, I aim to share this passion with others and provide high-quality photography services for a variety of occasions. Whether you need event photography, portrait sessions, weddings or even just simple photos of your furry friends, I have the skills and expertise to deliver stunning results. I also provide basic services in the Content Creation department, such as Animation and Video Editing.",
        ],
    },
    {
        title: 'Services',
        textArea: [
            'My services include but not limited to:\n\n',
            {
                elements: [
                    'Portraits',
                    'Family and Kids',
                    'Weddings',
                    'Pet, Animal and Wildlife Photography',
                    'Events and Moments',
                    'Passport Photos',
                    'Modelling and Model Photography',
                    'Automotive (Vehicles)',
                ],
            },
            '\nAt our disposal, we also have the resources and technology to print your photos in custom sizes, so you can easily frame them, turn them into stickers, or even use them as wallpapers for your home. Our goal is to provide you with the flexibility to display your memories in the way that suits you best.',
        ],
    },
    {
        title: 'Contact Me',
        textArea: [
            'Thank you for your interest in reaching out to me! Please use the information below to get in touch, and I will get back to you as soon as possible.',
            '\nEmail:',
            'You can email me at business@desynkro.com. Please allow up to 48 hours for a response.',
            '\nSocial Media:',
            'You can also connect with me on social media. Follow me on Twitter (@DeSynkro) or Discord (https://desynkro.com/discord) for updates and news.',
            'I look forward to hearing from you!',
        ],
    },
    {
        title: 'Reviews',
        textArea: [
            {
                author: 'Joshua Walter',
                stars: 5,
                reviewText:
                    'Excellent work, Always willing to go out of the way to improve his skills and always puts in the time and effort to get things done right.',
                localGuide: true,
            },
            {
                author: 'Harry Matthews',
                stars: 5,
                reviewText:
                    'Absolute top bloke and so easy to get along with and communicate with to get the perfect shot!! Such high-quality work and such friendly service, absolutely reccomend him to anyone who needs to get some photos done!',
                localGuide: false,
            },
            {
                author: 'Walter Lucio Rosa',
                stars: 5,
                reviewText:
                    'This guy can read your thoughts when you are trying to tell him your production ideas.',
                localGuide: true,
            },
        ],
    },
];

export const ImgIconsCategories: ImgIconType[] = [
    {
        src: IconModels,
        href: '/portfolio/models',
        text: 'Models',
    },
    {
        src: IconCosplay,
        href: '/portfolio/cosplays',
        text: 'Cosplays',
    },
    {
        src: IconPets,
        href: '/portfolio/animals',
        text: 'Pets/Animals',
    },
    {
        src: IconCars,
        href: '/portfolio/vehicles',
        text: 'Vehicles',
    },
    {
        src: IconStreet,
        href: '/portfolio/street',
        text: 'Street Photography',
    },
    // {
    //     src: IconPlaceholder,
    //     href: '/portfolio/other',
    //     text: 'Other Photos',
    // },
];

import PixelExpo2023 from '../assets/images/iconsAlbums/Pixel_Expo_2023.png';

export const ImgIconsAlbums: ImgIconType[] = [
    {
        src: PixelExpo2023,
        href: '/portfolio/album/pixel_expo_2023',
        text: 'Pixel Expo 2023',
    },
    // {
    //     src: IconPlaceholder,
    //     href: '/portfolio/album/placeholder',
    //     text: 'Placeholder',
    // },
    // {
    //     src: IconPlaceholder,
    //     href: '/portfolio/album/placeholder',
    //     text: 'Placeholder',
    // },
    // {
    //     src: IconPlaceholder,
    //     href: '/portfolio/album/placeholder',
    //     text: 'Placeholder',
    // },
    // {
    //     src: IconPlaceholder,
    //     href: '/portfolio/album/placeholder',
    //     text: 'Placeholder',
    // },
];
