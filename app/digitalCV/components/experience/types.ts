import { StaticImageData } from "next/image";

export type ScrollItem = {
    id: number;
    text: string;
    highlightedText: string | string[];
    image: {
        desktop: StaticImageData;
        mobile: StaticImageData;
    };
}