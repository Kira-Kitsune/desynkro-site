import { Component, For, Show, Suspense, createSignal } from 'solid-js';
import TextButton from '../components/TextButton';
import PortfolioItem from '../components/PortfolioItem';
import { AiOutlineClose } from 'solid-icons/ai';
import AlbumItem from '../components/AlbumItem';

type Props = {
    folder: string[];
    title: string;
};

const Album: Component<Props> = ({ folder, title }) => {
    const [src, setSrc] = createSignal<string | undefined>(undefined);

    return (
        <Show
            when={folder.length > 0}
            fallback={
                <div class="mt-[5.625rem] flex w-full flex-col text-xl text-neutral-100">
                    <div class="z-10 flex h-[80vh] w-full flex-col items-center justify-center gap-4 bg-gradient-to-b from-[#002b39] to-[#021c23] px-4 pt-24 pb-12 text-center text-3xl shadow-desynkro">
                        Nothing here yet
                        <TextButton
                            text="Go Back"
                            href="/portfolio"
                            underline={true}
                        />
                    </div>
                </div>
            }
        >
            <div class="mt-[5.625rem] flex w-full flex-col text-xl text-neutral-100">
                <Show when={src()}>
                    <div
                        class="fixed z-[200] flex h-full w-full scale-[1.25] items-center justify-center bg-black bg-opacity-40 pb-[2.8125rem] lg:scale-[2.5]"
                        onClick={() => setSrc(undefined)}
                    >
                        <PortfolioItem
                            src={src()}
                            alt={`Sample_Portfolio_BIG`}
                            focused={true}
                        />
                        <AiOutlineClose
                            size={28}
                            class="cursor-pointer fill-neutral-100"
                        />
                    </div>
                </Show>
                <div class="z-30 flex w-full flex-col items-center justify-center gap-8 bg-gradient-to-b from-[#002b39] to-[#021c23] bg-bottom p-4 text-center text-3xl shadow-desynkro max-md:flex-col md:gap-0 md:p-16">
                    <div class="flex flex-col py-8 text-5xl">
                        {title}
                        <div class="text-3xl">
                            <TextButton
                                text="Go Back"
                                href="/portfolio"
                                underline={true}
                            />
                        </div>
                    </div>
                    <div class="grid grid-cols-3 gap-2 lg:grid-cols-6 lg:gap-y-8 lg:gap-x-12 lg:p-8 xl:grid-cols-9">
                        <For each={folder}>
                            {(src) => (
                                <div onClick={() => setSrc(src)}>
                                    <Suspense fallback={<p>Loading...</p>}>
                                        <AlbumItem
                                            src={src}
                                            alt={src.split('/').at(-1)}
                                        />
                                    </Suspense>
                                </div>
                            )}
                        </For>
                    </div>
                </div>
            </div>
        </Show>
    );
};

export default Album;
