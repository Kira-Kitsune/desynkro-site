import { Component, createSignal } from 'solid-js';
import { Photo } from '../utils/types';
import {
    FaSolidCircleArrowLeft,
    FaSolidCircleArrowRight,
} from 'solid-icons/fa';
import PortfolioItem from './PortfolioItem';

type Props = {
    gallery: Photo[];
};

const Gallery: Component<Props> = ({ gallery }) => {
    const [index, setIndex] = createSignal(0);

    function onNext() {
        if (index() + 1 === gallery.length) setIndex(0);
        else setIndex(index() + 1);
    }

    function onPrevious() {
        if (index() - 1 === -1) setIndex(gallery.length - 1);
        else setIndex(index() - 1);
    }

    const GALLERY_IMAGES = gallery.map((value, index) => {
        return (
            <PortfolioItem
                src={value.src}
                alt={`Sample_Portfolio_${index + 1}`}
            />
        );
    });

    return (
        <div class="mb-6 flex flex-col  items-center lg:hidden">
            <div class="mb-8 flex items-center justify-center gap-4">
                <FaSolidCircleArrowLeft
                    class="cursor-pointer"
                    onClick={onPrevious}
                    size={48}
                />
                {GALLERY_IMAGES[index()]}
                <FaSolidCircleArrowRight
                    class="cursor-pointer"
                    onClick={onNext}
                    size={48}
                />
            </div>
            <span>
                Image {index() + 1} out of {gallery.length}
            </span>
        </div>
    );
};

export default Gallery;
