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
                    <ul class="max-md:text-center">
                        <li class="mb-2">
                            <span class=" text-xl font-bold">Support Me</span>
                        </li>
                        <For each={Supports}>
                            {({ text, href }) => (
                                <li>
                                    <TextButton text={text} href={href} />
                                </li>
                            )}
                        </For>
                    </ul>
                </div>
                <div class="m-2 flex h-full flex-col max-md:items-center md:flex-1">
                    <ul class="max-md:text-center">
                        <li class="mb-2">
                            <span class="text-xl font-bold">Projects</span>
                        </li>
                        <li>
                            <TextButton
                                text="DigiSonica"
                                href="https://digisonica.desynkro.com"
                            />
                        </li>
                        <li>
                            <TextButton
                                text="Photography Portfolio"
                                href="/portfolio"
                            />
                        </li>
                    </ul>
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

export default Footer;
