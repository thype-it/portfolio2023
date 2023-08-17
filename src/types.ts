import { MotionValue } from "framer-motion";

export type ScrollMotionProps = {
    scale?: MotionValue<number>;
    opacity?: MotionValue<number>;
    wrapperOpacity?: MotionValue<number>;
};