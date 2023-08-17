import { ReactElement, ReactNode } from "react";

export type SeeNextContent = {
    portfolio: string;
    blog: string;
    caseStudy: string;
}

export type SeeNextBlockVariant = keyof SeeNextContent;

export type SeeNextBlockProps = {
    children: string | ReactNode;
    variant?: SeeNextBlockVariant;
};

export type ButtonContent = {
    icon: ReactElement;
    text: string;
};

export type AboutChildProps = {
    content: SeeNextContent;
    children: ReactNode;
}