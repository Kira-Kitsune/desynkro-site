import { Component, For, Show, createSignal, onMount } from 'solid-js';
import Title from '../assets/images/title.png';
import DeSynkro from '../assets/images/photo_desynkro.gif';
import TextButton from '../components/TextButton';
import PortfolioItem from '../components/PortfolioItem';
import { AiOutlineClose } from 'solid-icons/ai';
import { InfoText } from '../utils/consts';
import { SamplePortfolio } from '../utils/portfolios';
import SlideShowText from '../components/SlideShowText';
import SlideShowPhoto from '../components/SlideShowPhoto';

// TODO: WARNING! DON'T UPGRADE SOLID-ICONS PAST 1.0.4 ATM
const Home: Component = () => {
    onMount(() => {
        document.title = 'DeSynkro | Home';
    });

    const [Sample, setSample] = createSignal<string[]>();
    setSample(SamplePortfolio);
    const [src, setSrc] = createSignal<string | undefined>(undefined);

    return (
        <div class="mt-[5.625rem] flex w-full flex-col text-xl text-neutral-100">
            <div class="z-30 flex items-center justify-evenly gap-8 bg-title bg-bottom py-28 shadow-desynkro max-md:flex-col md:gap-0 md:p-36">
                <img
                    src={DeSynkro}
                    alt="DeSynkro"
                    class="h-64 rounded-full"
                    loading="lazy"
                />
                <img
                    src={Title}
                    alt="Title"
                    class="h-48 md:h-64"
                    loading="lazy"
                />
            </div>
            <div class="z-20 flex flex-col items-center bg-neutral-800 px-4 py-12 shadow-desynkro sm:p-16 sm:pt-12">
                <SlideShowText sections={InfoText} timerSeconds={15} />
            </div>
            {src() && (
                <div
                    class="fixed z-[200] flex h-[100vh] w-full scale-[2.5] items-center justify-center bg-black bg-opacity-40 pb-[2.8125rem]"
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
            <div class="z-10 flex w-full flex-col items-center bg-gradient-to-b from-[#002b39] to-[#021c23] px-4 py-12 shadow-desynkro">
                <h2 class="mb-8 text-4xl font-bold">Sample Portfolio</h2>
                <div class="mb-12 hidden gap-x-12 gap-y-8 lg:grid lg:grid-cols-3 xl:grid-cols-5">
                    <For each={Sample()}>
                        {(src, index) => (
                            <Show
                                fallback={
                                    <div onClick={() => setSrc(src)}>
                                        <PortfolioItem
                                            src={src}
                                            alt={`Sample_Portfolio_${
                                                index() + 1
                                            }`}
                                            sample={true}
                                        />
                                    </div>
                                }
                                when={index() !== SamplePortfolio.length - 1}
                            >
                                <div onClick={() => setSrc(src)}>
                                    <PortfolioItem
                                        src={src}
                                        alt={`Sample_Portfolio_${index() + 1}`}
                                    />
                                </div>
                            </Show>
                        )}
                    </For>
                </div>
                <SlideShowPhoto gallery={Sample()} />
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
