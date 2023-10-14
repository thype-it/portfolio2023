"use client";

import {
  Flex,
  HStack,
  Heading,
  Highlight,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import Image from "next/image";
import type { ReactNode } from "react";

import { LinkWithIcon } from "..";
import { SmallText } from "../text";

type Props = {
  data: Story;
  children?: ReactNode;
  specialContent?: ReactNode;
};

export default function Story({ data, children, specialContent }: Props) {
  const isSmallScreen = useBreakpointValue({ base: true, md: false });
  const maxStoryItemWidth = isSmallScreen ? 300 : 600; //px

  return (
    <>
      <VStack pointerEvents="auto">
        <Heading
          as="h1"
          color="white"
          lineHeight={1.1}
          maxW={maxStoryItemWidth}
          size="4xl"
        >
          {data.title}
        </Heading>
        {data.link && (
          <HStack mt={8} w="full">
            <LinkWithIcon href={data.link.href}>{data.link.text}</LinkWithIcon>
          </HStack>
        )}
        {children}
      </VStack>
      {specialContent}
      {data.content.map((item) => (
        <StoryItem
          key={item.id}
          isImageItem={"image" in item}
          item={item}
          maxW={maxStoryItemWidth}
          storyId={data.id}
        />
      ))}
    </>
  );
}

type ItemProps = {
  isImageItem: boolean;
  item: StoryContentItem;
  maxW: number;
  storyId: string;
};

function StoryItem({ isImageItem, item, maxW }: ItemProps) {
  return (
    <Flex align="center" h="full" maxW={maxW} mx={4} pointerEvents="auto">
      {isImageItem ? (
        <StoryItemImage item={item as StoryContentItemImg} />
      ) : (
        <StoryItemText item={item as StoryContentItemText} />
      )}
    </Flex>
  );
}

type ImageProps = {
  item: StoryContentItemImg;
};

function StoryItemImage({ item }: ImageProps) {
  return (
    <VStack gap={4} maxH="85%" overflow="hidden" textAlign="center">
      <Flex flexDir={item.isTextBottom ? "column" : "column-reverse"}>
        {item.title && <SmallText>{item.title}</SmallText>}
        <Image
          alt={item.image.alt}
          blurDataURL={item.image.base64}
          height={500}
          placeholder={item.image.base64 ? "blur" : "empty"}
          src={item.image.imgSrc}
          width={550}
        />
      </Flex>
      {item.text && (
        <Text
          color="gray.300"
          fontSize={{ base: "sm", md: "large" }}
          textAlign="left"
        >
          {item.text}
        </Text>
      )}
    </VStack>
  );
}

type TextProps = {
  item: StoryContentItemText;
};

function StoryItemText({ item }: TextProps) {
  return (
    <VStack color="white">
      {item.title && (
        <SmallText>
          <Highlight
            query={item.highlightTitle || ""}
            styles={{ color: "highlight.green.500" }}
          >
            {item.title}
          </Highlight>
        </SmallText>
      )}
      {item.text && (
        <Text color="gray.300" fontSize={{ base: "sm", md: "large" }}>
          <Highlight
            query={item.highlightText || ""}
            styles={{ color: "white" }}
          >
            {item.text}
          </Highlight>
        </Text>
      )}
      {item.textArray &&
        item.textArray.map((text) => (
          <Text
            key={text}
            color="gray.300"
            fontSize={{ base: "sm", md: "large" }}
          >
            <Highlight
              query={item.highlightText || ""}
              styles={{ color: "white" }}
            >
              {text}
            </Highlight>
          </Text>
        ))}
    </VStack>
  );
}
