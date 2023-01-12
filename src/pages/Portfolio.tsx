import { Component, onMount } from 'solid-js';

const Portfolio: Component = () => {
    onMount(() => {
        document.title = 'DeSynkro | Portfolio';
    });

    return (
        <div class="mt-[5.625rem] flex w-full flex-col text-xl text-neutral-100">
            <div class="z-10 flex h-[80vh] w-full flex-col  items-center justify-center bg-gradient-to-b from-[#002b39] to-[#021c23] px-4 pt-24 pb-12 text-center text-3xl shadow-desynkro">
                Portfolio is Currently Under Construction
            </div>
        </div>
    );
};

export default Portfolio;
