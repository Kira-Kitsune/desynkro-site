import { Component, createSignal } from 'solid-js';
import NavButtton from './navbar/NavButton';
import Logo from '../assets/images/logo_01.png';
import { IoMenu } from 'solid-icons/io';
import { AiOutlineClose } from 'solid-icons/ai';
import {
    FaBrandsYoutube,
    FaBrandsTwitch,
    FaBrandsTwitter,
    FaBrandsDiscord,
} from 'solid-icons/fa';
import TextButton from './TextButton';
import NavDropdown from './navbar/NavDropdown';
import IconButton from './IconButton';

const ICON_SIZE = 40;

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
                    <NavButtton text="Home" href="/" />
                    <NavButtton text="Portfolio" href="/portfolio" />
                    <NavButtton
                        text="DigiSonica"
                        href="https://digisonica.desynkro.com"
                    />
                    <NavButtton
                        text="Merch"
                        href="https://store.streamelements.com/desynkro"
                    />
                    <NavDropdown />
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
                <div onClick={menuToggleHandler}>
                    <TextButton text="HOME" href="/" />
                </div>
                <div onClick={menuToggleHandler}>
                    <TextButton text="PORTFOLIO" href="/portfolio" />
                </div>
                <div onClick={menuToggleHandler}>
                    <TextButton
                        text="DIGISONICA"
                        href="https://digisonica.desynkro.com"
                    />
                </div>
                <div onClick={menuToggleHandler}>
                    <TextButton
                        text="MERCH"
                        href="https://store.streamelements.com/desynkro"
                    />
                </div>
                <div class="mt-4 flex gap-8 text-white">
                    <div onClick={menuToggleHandler}>
                        <IconButton
                            Icon={FaBrandsYoutube}
                            href="https://youtube.com/DeSynkro"
                            size={ICON_SIZE}
                        />
                    </div>
                    <div onClick={menuToggleHandler}>
                        <IconButton
                            Icon={FaBrandsTwitch}
                            href="https://twitch.com/DeSynkro"
                            size={ICON_SIZE}
                        />
                    </div>
                    <div onClick={menuToggleHandler}>
                        <IconButton
                            Icon={FaBrandsTwitter}
                            href="https://twitter.com/DeSynkro"
                            size={ICON_SIZE}
                        />
                    </div>
                    <div onClick={menuToggleHandler}>
                        <IconButton
                            Icon={FaBrandsDiscord}
                            href="https://discord.gg/invite/qptZkCj"
                            size={ICON_SIZE}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
