import {  Box, Center, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

const HStackMotion = motion(HStack);
const VstackMotion = motion(VStack);
const FlexMotion = motion(VStack);
const BoxMotion = motion(Box);
const CenterMotion = motion(Center);
const TextMotion = motion(Text);
const HeadingMotion = motion(Heading);

export { HStackMotion, VstackMotion,FlexMotion, BoxMotion, CenterMotion, TextMotion, HeadingMotion };