import { Component, For, createSignal } from 'solid-js';
import TextButton from '../TextButton';
import NavButtton from './NavButton';
import { Social } from '../../utils/types';

type Props = {
    socials: Social[];
};

const NavDropdown: Component<Props> = ({ socials }) => {
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
                <For each={socials}>
                    {({ text, href }) => (
                        <TextButton text={text.toUpperCase()} href={href} />
                    )}
                </For>
            </div>
        </div>
    );
};

export default NavDropdown;
