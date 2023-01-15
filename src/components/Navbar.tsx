import { Component, For, createSignal } from 'solid-js';
import NavButtton from './navbar/NavButton';
import Logo from '../assets/images/logo_01.png';
import { IoMenu } from 'solid-icons/io';
import { AiOutlineClose } from 'solid-icons/ai';
import TextButton from './TextButton';
import NavDropdown from './navbar/NavDropdown';
import IconButton from './IconButton';
import { NavItems, Socials } from '../utils/consts';

const Navbar: Component = () => {
    const [isMenuOpen, setMenuOpen] = createSignal(false);

    function menuToggleHandler() {
        setMenuOpen((state) => !state);
    }

    return (
        <>
            <header class="fixed top-0 bottom-0 z-50 flex h-[5.625rem] w-full items-center bg-nav px-10 shadow-desynkro">
                <img src={Logo} height={76} width={76} alt="logo" />
                <nav class="m-auto flex content-center items-center pr-20 max-md:hidden">
                    <For each={NavItems}>
                        {({ text, href }) => (
                            <NavButtton text={text} href={href} />
                        )}
                    </For>
                    <NavDropdown socials={Socials} />
                </nav>
                <nav class="absolute right-0 z-50 mr-10 text-neutral-100 md:hidden">
                    <IoMenu
                        size={48}
                        class={`cursor-pointer ${isMenuOpen() && 'hidden'}`}
                        onClick={menuToggleHandler}
                    />
                    <AiOutlineClose
                        size={48}
                        class={`cursor-pointer ${!isMenuOpen() && 'hidden'}`}
                        onClick={menuToggleHandler}
                    />
                </nav>
            </header>

            <div
                class={`fixed z-40 h-full w-full flex-col items-center gap-6 bg-neutral-800 bg-opacity-80 pt-36 text-lg md:hidden ${
                    !isMenuOpen() ? 'hidden' : 'flex'
                }`}
            >
                <For each={NavItems}>
                    {({ text, href }) => (
                        <div onClick={menuToggleHandler}>
                            <TextButton text={text.toUpperCase()} href={href} />
                        </div>
                    )}
                </For>
                <div class="mt-4 flex gap-8 text-white">
                    <For each={Socials}>
                        {({ Icon, href }) => (
                            <div onClick={menuToggleHandler}>
                                <IconButton Icon={Icon} href={href} size={40} />
                            </div>
                        )}
                    </For>
                </div>
            </div>
        </>
    );
};

export default Navbar;
