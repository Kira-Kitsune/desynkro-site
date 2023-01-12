import { Component, For, createSignal, onMount } from 'solid-js';
import Title from '../assets/images/title.png';
import DeSynkro from '../assets/images/photo_desynkro.gif';
import TextButton from '../components/TextButton';
import PortfolioItem from '../components/PortfolioItem';
import { SamplePortfolio } from './Portfolios';
import Gallery from '../components/Gallary';
import { AiOutlineClose } from 'solid-icons/ai';

const Home: Component = () => {
    onMount(() => {
        document.title = 'DeSynkro | Home';
    });

    const [src, setSrc] = createSignal<string | undefined>(undefined);

    return (
        <div class="mt-[5.625rem] flex w-full flex-col text-xl text-neutral-100">
            <div class="z-30 flex items-center justify-evenly gap-8 bg-title bg-bottom py-28 shadow-desynkro max-md:flex-col md:gap-0 md:p-36">
                <img src={DeSynkro} alt="DeSynkro" class="h-64 rounded-full" />
                <img src={Title} alt="Title" class="h-48 md:h-64" />
            </div>
            <div class="z-20 flex flex-col items-center bg-neutral-800 py-12 px-4 shadow-desynkro sm:p-16 sm:pt-12">
                <h2 class="mb-4 text-4xl font-bold">About Me</h2>
                <p class="w-full font-sans text-2xl md:w-5/6">
                    Hi there! My name is Iago Rosa, and I am the founder of
                    DeSynkro, I'm a Professional Photographer, Animator, Video
                    Editor and former Content Creator. As a professional
                    photographer, I have a passion for capturing the world
                    around me through the lens of a camera. With my brand
                    DeSynkro, I aim to share this passion with others and
                    provide high-quality photography services for a variety of
                    occasions. Whether you need event photography, portrait
                    sessions, weddings or even just simple photos of your furry
                    friends, I have the skills and expertise to deliver stunning
                    results. I also provide basic services in the Content
                    Creation department, such as Animation and Video Editing.
                </p>
            </div>
            {src() && (
                <div
                    class="fixed z-[200] flex h-[100vh] w-full scale-[3] items-center justify-center bg-black bg-opacity-40 pb-[2.8125rem]"
                    onClick={() => setSrc(undefined)}
                >
                    <PortfolioItem
                        src={src()}
                        alt={`Sample_Portfolio_BIG`}
                        focused={true}
                    />
                    <AiOutlineClose size={28} class="cursor-pointer" />
                </div>
            )}
            <div class="z-10 flex w-full flex-col items-center bg-gradient-to-b from-[#002b39] to-[#021c23] py-12 px-4 shadow-desynkro">
                <h2 class="mb-8 text-4xl font-bold">Sample Portfolio</h2>
                <div class="mb-12 hidden gap-y-8 gap-x-12 lg:grid lg:grid-cols-3 xl:grid-cols-5">
                    <For each={SamplePortfolio}>
                        {({ src }, index) => (
                            <div onClick={() => setSrc(src)}>
                                <PortfolioItem
                                    src={src}
                                    alt={`Sample_Portfolio_${index() + 1}`}
                                />
                            </div>
                        )}
                    </For>
                </div>
                <Gallery gallery={SamplePortfolio} />
                <span class="text-4xl">
                    See more of my work{' '}
                    <TextButton
                        href="/portfolio"
                        text="HERE"
                        underline={true}
                    />
                </span>
            </div>
        </div>
    );
};

export default Home;
