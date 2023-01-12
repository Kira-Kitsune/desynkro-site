import { Component, createSignal } from 'solid-js';
import TextButton from '../TextButton';
import NavButtton from './NavButton';

type Props = {};

const NavDropdown: Component<Props> = () => {
    const [isDropdownOpen, setDropdownOpen] = createSignal(false);

    function dropdownToggleHandler() {
        setDropdownOpen((state) => !state);
    }

    return (
        <div class="group relative inline-block h-full font-bold group-hover:flex">
            <div class="" onClick={dropdownToggleHandler}>
                <NavButtton href="#" text="Socials" />
            </div>
            <div
                class={`absolute z-40 hidden w-full flex-col items-center justify-center gap-6 bg-nav py-8 px-[1.875rem] shadow-2xl group-hover:flex ${
                    isDropdownOpen() ? 'touch-screen' : 'hidden'
                }`}
            >
                <TextButton
                    href="https://youtube.com/DeSynkro"
                    text="YOUTUBE"
                />
                <TextButton href="https://twitch.com/DeSynkro" text="TWITCH" />
                <TextButton
                    href="https://twitter.com/DeSynkro"
                    text="TWITTER"
                />
                <TextButton
                    href="https://discord.gg/invite/qptZkCj"
                    text="DISOCRD"
                />
            </div>
        </div>
    );
};

export default NavDropdown;
