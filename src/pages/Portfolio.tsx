import { Component, For, onMount, lazy, Suspense } from 'solid-js';
const ImgIcon = lazy(() => import('../components/ImgIcon'));
import { ImgIcons } from '../utils/consts';

const Portfolio: Component = () => {
    onMount(() => {
        document.title = 'DeSynkro | Portfolio';
    });

    return (
        <div class="mt-[5.625rem] flex w-full flex-col text-xl text-neutral-100">
            <div class="z-10 flex w-full flex-col items-center justify-center bg-gradient-to-b from-[#002b39] to-[#021c23] p-24 text-center text-3xl shadow-desynkro">
                <div class="grid grid-cols-1 gap-y-8 gap-x-12 md:grid-cols-2 lg:grid-cols-3">
                    <For each={ImgIcons}>
                        {({ src, href, text }) => (
                            <Suspense fallback={<p>Loading...</p>}>
                                <ImgIcon src={src} href={href} text={text} />
                            </Suspense>
                        )}
                    </For>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
