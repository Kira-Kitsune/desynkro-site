import { Component, For } from 'solid-js';
import TextButton from './TextButton';
import PFP from '../assets/images/logo_01.png';
import IconButton from './IconButton';
import YellowButton from './YellowButton';
import { Supports, Socials } from '../utils/consts';

const Footer: Component = () => {
    return (
        <footer class="flex w-full flex-col items-center bg-neutral-800 py-8 font-sans text-white">
            <div class="flex h-full w-1/2 justify-start  max-md:flex-col">
                <div class="flex h-full flex-col p-2 max-md:items-center md:flex-[2]">
                    <img src={PFP} class="mb-6 w-24" />
                    <div class="flex flex-row gap-4">
                        <For each={Socials}>
                            {({ Icon, href }) => (
                                <IconButton Icon={Icon} href={href} />
                            )}
                        </For>
                    </div>
                </div>
                <div class="m-2 flex h-full flex-col max-md:items-center md:flex-1">
                    <span class="mb-2 text-xl font-bold">Support Me</span>
                    <For each={Supports}>
                        {({ text, href }) => (
                            <TextButton text={text} href={href} />
                        )}
                    </For>
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
