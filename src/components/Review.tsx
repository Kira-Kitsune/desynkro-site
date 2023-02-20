import { Component, Show } from 'solid-js';
import type { ReviewInterface } from '../utils/types';
import { IoStar, IoStarOutline } from 'solid-icons/io';

type Props = {
    review: ReviewInterface;
};

function Stars(activeStars: number, totalStars = 5) {
    if (!Number.isInteger(activeStars)) {
        console.warn(
            `Make sure the active number of stars is an integer (got: ${activeStars}, changed: ${Math.round(
                activeStars
            )})`
        );
        activeStars = Math.round(activeStars);
    }
    if (activeStars < 0) {
        console.warn(
            `Make sure the active number of stars is positive (got: ${activeStars}, changed: ${Math.abs(
                activeStars
            )})`
        );
        activeStars = Math.abs(activeStars);
    }
    if (activeStars > totalStars) {
        console.warn(
            `Make sure the active number of stars is not above ${totalStars} (got: ${activeStars}, changed: ${totalStars})`
        );
        activeStars = totalStars;
    }

    const starsArr = [...new Array(totalStars)].map((arr, index) => {
        return index < activeStars ? (
            <IoStar size={36} />
        ) : (
            <IoStarOutline size={36} />
        );
    });

    return <div class="flex text-yellow-500">{starsArr}</div>;
}

const Review: Component<Props> = ({ review }) => {
    const { author, localGuide, reviewText, stars } = review;

    return (
        <div class="flex w-full flex-col p-4 font-sans md:w-1/3 ">
            <div class="flex flex-col items-center pb-4">{Stars(stars)}</div>
            <div class="flex flex-col gap-2 whitespace-pre-wrap text-lg">
                <q>{reviewText}</q>
                <div class="flex flex-col">
                    <span class="text-xl font-bold text-sky-500">{author}</span>
                    <Show when={localGuide}>
                        <span class="text-base text-neutral-400">
                            Google Local Guide
                        </span>
                    </Show>
                </div>
            </div>
        </div>
    );
};

export default Review;
