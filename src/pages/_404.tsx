import { Component, onMount } from 'solid-js';
import TextButton from '../components/TextButton';

const _404: Component = () => {
    onMount(() => {
        document.title = 'DeSynkro | 404';
    });

    return (
        <div class="mt-[5.625rem] flex w-full flex-col text-xl text-neutral-100">
            <div class="z-10 flex h-[80vh] w-full flex-col items-center justify-center bg-gradient-to-b from-[#002b39] to-[#021c23] p-24 text-center text-3xl shadow-desynkro">
                404 | Page Not Found.
                <TextButton href="/" text="Return Home" />
            </div>
        </div>
    );
};

export default _404;
