import type { Component } from 'solid-js';
import {
    FaBrandsDiscord,
    FaBrandsTwitter,
    FaSolidGlobe,
    FaBrandsPaypal,
    FaBrandsTwitch,
    FaBrandsYoutube,
    FaSolidShirt,
} from 'solid-icons/fa';
import { SiKofi } from 'solid-icons/si';
import TextButton from './TextButton';
import PFP from '../assets/images/logo_01.png';
import IconButton from './IconButton';
import YellowButton from './YellowButton';

const Footer: Component = () => {
    return (
        <footer class="flex w-full flex-col items-center bg-neutral-800 py-8 font-sans text-white">
            <div class="flex h-full w-1/2 justify-start  max-md:flex-col">
                <div class="flex h-full flex-col p-2 max-md:items-center md:flex-[2]">
                    <img src={PFP} class="mb-6 w-24" />
                    <div class="flex flex-row gap-4">
                        <IconButton
                            Icon={FaBrandsYoutube}
                            href="https://youtube.com/DeSynkro"
                        />
                        <IconButton
                            Icon={FaBrandsTwitch}
                            href="https://twitch.com/DeSynkro"
                        />
                        <IconButton
                            Icon={FaBrandsTwitter}
                            href="https://twitter.com/DeSynkro"
                        />
                        <IconButton
                            Icon={FaBrandsDiscord}
                            href="https://discord.gg/invite/qptZkCj"
                        />
                    </div>
                </div>
                <div class="m-2 flex h-full flex-col max-md:items-center md:flex-1">
                    <span class="mb-2 text-xl font-bold">Support Me</span>
                    <TextButton
                        text="PayPal"
                        href="https://paypal.me/iagorosa"
                    />
                    <TextButton
                        text="Ko-fi"
                        href="https://ko-fi.com/desynkro"
                    />
                    <TextButton
                        text="Merch"
                        href="https://store.streamelements.com/desynkro"
                    />
                </div>
                <div class="m-2 flex h-full flex-col max-md:items-center md:flex-1">
                    <span class="mb-2 text-xl font-bold">Projects</span>
                    <TextButton
                        text="DigiSonica"
                        href="https://digisonica.desynkro.com"
                    />
                    <TextButton
                        text="Photography Portfolio"
                        href="/portfolio"
                    />
                </div>
            </div>
            <div class="mt-8 flex w-1/2 items-center justify-between text-center max-md:flex-col">
                <span class="max-md:mb-4">
                    Copyright &copy; 2022-{new Date().getFullYear()} DeSynkro.
                    All rights reserved.
                </span>
                <span>
                    Website made by{' '}
                    <YellowButton href="https://kir.au" text="Kira Kitsune" />
                </span>
            </div>
        </footer>
    );
};

{
    /* <SocialTitle text="Socials" />
                <div class="mb-8 grid grid-cols-2 gap-x-8 gap-y-0 md:mb-16  md:grid-cols-4 md:gap-32">
                    <SocialIcon
                        href="https://youtube.com/DeSynkro"
                        Icon={FaBrandsYoutube}
                        text="YouTube"
                    />
                    <SocialIcon
                        href="https://twitch.tv/DeSynkro"
                        Icon={FaBrandsTwitch}
                        text="Twitch"
                    />
                    <SocialIcon
                        href="https://twitter.com/DeSynkro"
                        Icon={FaBrandsTwitter}
                        text="Twitter"
                    />
                    <SocialIcon
                        href="https://discord.gg/invite/qptZkCj"
                        Icon={FaBrandsDiscord}
                        text="Discord"
                    />
                </div>
                <SocialTitle text="Support Me" />
                <div class="grid grid-cols-2 gap-x-8 gap-y-0 md:mb-8 md:grid-cols-3 md:gap-32">
                    <SocialIcon
                        href="https://store.streamelements.com/desynkro"
                        Icon={FaSolidShirt}
                        text="Merch"
                    />
                    <SocialIcon
                        href="https://paypal.me/iagorosa"
                        Icon={FaBrandsPaypal}
                        text="PayPal"
                    />
                    <SocialIcon
                        href="https://ko-fi.com/desynkro"
                        Icon={SiKofi}
                        text="Ko-fi"
                    />
                </div> */
}

export default Footer;
