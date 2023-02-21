import {
    FaRegularCircle,
    FaRegularCircleDot,
    FaSolidCircleArrowLeft,
    FaSolidCircleArrowRight,
} from 'solid-icons/fa';
import {
    Component,
    For,
    Show,
    createSignal,
    onCleanup,
    onMount,
} from 'solid-js';
import { List, ReviewInterface, Section } from '../utils/types';
import Review from './Review';

type Props = {
    sections: Section[];
    timerSeconds: number;
};

const SlideShowText: Component<Props> = ({ sections, timerSeconds }) => {
    const [section, setSection] = createSignal(0);

    let timer;
    // Set the timer when it's loaded
    onMount(() => {
        timer = setInterval(onNext, timerSeconds * 1000);
    });
    // When unloaded stop the timer
    onCleanup(() => clearInterval(timer));

    function onNext(timer: boolean = true) {
        if (section() + 1 === sections.length) setSection(0);
        else setSection(section() + 1);
        if (!timer) resetTimer();
    }

    function onPrevious() {
        if (section() - 1 === -1) setSection(sections.length - 1);
        else setSection(section() - 1);
        resetTimer();
    }

    function clickDot(index: number) {
        setSection(index);
        resetTimer();
    }

    function resetTimer() {
        clearInterval(timer);
        timer = setInterval(onNext, timerSeconds * 1000);
    }

    const list = sections[1].textArea[1] as List;

    return (
        <div class="flex w-full items-center justify-center gap-4 lg:w-10/12 lg:gap-12">
            <FaSolidCircleArrowLeft
                class="cursor-pointer"
                onClick={onPrevious}
                size={36}
            />
            <div class="h-full w-full overflow-hidden">
                <div
                    class="whitespace-nowrap"
                    style={{
                        transform: `translate3d(${-section() * 100}%, 0, 0)`,
                        transition: 'ease 1000ms',
                    }}
                >
                    {sections.map(({ title, textArea }, index) => (
                        <div class="inline-flex h-full w-full flex-col items-center justify-center p-4 align-middle">
                            <h2 class="mb-4 h-full whitespace-normal text-center text-4xl font-bold">
                                {title}
                            </h2>
                            <Show
                                when={typeof textArea[0] === 'string'}
                                fallback={
                                    <div class="flex w-full items-start justify-evenly gap-4 max-md:flex-col">
                                        <For
                                            each={textArea as ReviewInterface[]}
                                        >
                                            {(review, idx) => (
                                                <Review review={review} />
                                            )}
                                        </For>
                                    </div>
                                }
                            >
                                <Show
                                    when={typeof textArea[1] === 'object'}
                                    fallback={
                                        <p class="flex w-full items-center justify-center whitespace-pre-wrap font-sans text-2xl max-md:text-lg">
                                            {(textArea as string[]).join('\n')}
                                        </p>
                                    }
                                >
                                    <div class="flex w-full flex-col whitespace-pre-wrap font-sans text-2xl max-md:text-lg">
                                        <For each={textArea}>
                                            {(text, idx) => (
                                                <Show
                                                    when={
                                                        typeof text === 'string'
                                                    }
                                                    fallback={
                                                        <ul class="md:columns-2 md:px-12">
                                                            <For
                                                                each={
                                                                    list.elements
                                                                }
                                                            >
                                                                {(
                                                                    elem,
                                                                    idx
                                                                ) => (
                                                                    <li class="">
                                                                        - {elem}
                                                                    </li>
                                                                )}
                                                            </For>
                                                        </ul>
                                                    }
                                                >
                                                    <p class="w-full whitespace-pre-wrap font-sans text-2xl max-md:text-lg">
                                                        {text as string}
                                                    </p>
                                                </Show>
                                            )}
                                        </For>
                                    </div>
                                </Show>
                            </Show>
                        </div>
                    ))}
                </div>
                <div class="mt-12 flex justify-center gap-8">
                    <For each={sections}>
                        {(_text, idx) => (
                            <Show
                                when={idx() === section()}
                                fallback={
                                    <FaRegularCircle
                                        class="cursor-pointer"
                                        size={24}
                                        onClick={() => clickDot(idx())}
                                    />
                                }
                            >
                                <FaRegularCircleDot
                                    class="cursor-pointer"
                                    size={24}
                                    onClick={() => clickDot(idx())}
                                />
                            </Show>
                        )}
                    </For>
                </div>
            </div>
            <FaSolidCircleArrowRight
                class="cursor-pointer"
                onClick={() => onNext(false)}
                size={36}
            />
        </div>
    );
};

export default SlideShowText;
