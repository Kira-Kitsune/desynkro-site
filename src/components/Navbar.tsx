import { AiOutlineClose } from 'solid-icons/ai';
import { IoMenu } from 'solid-icons/io';
import { Component, For, Show, createSignal } from 'solid-js';
import Logo from '../assets/images/logo_01.png';
import { NavItems, Socials } from '../utils/consts';
import IconButton from './IconButton';
import TextButton from './TextButton';
import NavButtton from './navbar/NavButton';
import NavDropdown from './navbar/NavDropdown';

const Navbar: Component = () => {
    const [isMenuOpen, setMenuOpen] = createSignal(false);

    function menuToggleHandler() {
        setMenuOpen((state) => !state);
    }

    return (
        <>
            <header class="fixed bottom-0 top-0 z-50 flex h-[5.625rem] w-full items-center bg-nav px-10 shadow-desynkro">
                <img
                    src={Logo}
                    height={76}
                    width={76}
                    alt="logo"
                    loading="lazy"
                />
                <nav class="m-auto flex content-center items-center pr-20 max-md:hidden">
                    <For each={NavItems}>
                        {({ text, href }) => (
                            <NavButtton text={text} href={href} />
                        )}
                    </For>
                    <NavDropdown socials={Socials} />
                </nav>
                <nav class="absolute right-0 z-50 mr-10 md:hidden">
                    <Show
                        fallback={
                            <AiOutlineClose
                                size={48}
                                class={`cursor-pointer fill-neutral-100`}
                                onClick={menuToggleHandler}
                            />
                        }
                        when={!isMenuOpen()}
                    >
                        <IoMenu
                            size={48}
                            class="cursor-pointer text-neutral-100"
                            onClick={menuToggleHandler}
                        />
                    </Show>
                </nav>
            </header>
            <Show when={isMenuOpen()}>
                <div class="flex fixed z-40 h-full w-full flex-col items-center gap-6 bg-neutral-800 bg-opacity-80 pt-36 text-lg md:hidden">
                    <For each={NavItems}>
                        {({ text, href }) => (
                            <div onClick={menuToggleHandler}>
                                <TextButton
                                    text={text.toUpperCase()}
                                    href={href}
                                />
                            </div>
                        )}
                    </For>
                    <div class="mt-4 flex gap-8 text-white">
                        <For each={Socials}>
                            {({ Icon, href }) => (
                                <div onClick={menuToggleHandler}>
                                    <IconButton
                                        Icon={Icon}
                                        href={href}
                                        size={40}
                                    />
                                </div>
                            )}
                        </For>
                    </div>
                </div>
            </Show>
        </>
    );
};

export default Navbar;
