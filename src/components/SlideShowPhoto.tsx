import {
    FaSolidCircleArrowLeft,
    FaSolidCircleArrowRight,
} from 'solid-icons/fa';
import { Component, createSignal } from 'solid-js';
import PortfolioItem from './PortfolioItem';

type Props = {
    gallery: string[];
};

const SlideShowPhoto: Component<Props> = ({ gallery }) => {
    const [index, setIndex] = createSignal(0);

    function onNext() {
        if (index() + 1 === gallery.length) setIndex(0);
        else setIndex(index() + 1);
    }

    function onPrevious() {
        if (index() - 1 === -1) setIndex(gallery.length - 1);
        else setIndex(index() - 1);
    }

    return (
        <div class="flex flex-col items-center justify-center lg:hidden">
            <div class="flex w-11/12 items-center justify-center gap-4 lg:hidden">
                <FaSolidCircleArrowLeft
                    class="cursor-pointer fill-neutral-100"
                    onClick={onPrevious}
                    size={48}
                />
                <div class="h-full w-full overflow-hidden">
                    <div
                        class="whitespace-nowrap"
                        style={{
                            transform: `translate3d(${-index() * 100}%, 0, 0)`,
                            transition: 'ease 1000ms',
                        }}
                    >
                        {gallery.map((src, idx) => (
                            <div class="inline-flex h-full w-full flex-col items-center justify-center  align-middle">
                                <PortfolioItem
                                    src={src}
                                    alt={`Sample_Portfolio_${idx + 1}`}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <FaSolidCircleArrowRight
                    class="cursor-pointer fill-neutral-100"
                    onClick={onNext}
                    size={48}
                />
            </div>
            <div class="my-8 flex justify-center gap-8 ">
                <span>
                    Image {index() + 1} out of {gallery.length}
                </span>
            </div>
        </div>
    );
};

export default SlideShowPhoto;
