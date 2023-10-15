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
import { VideoPlayer } from "../media";
import { SmallText } from "../text";

type Props = {
  data: Story;
  children?: ReactNode;
};

const STORY_ITEM_WIDTH = {
  large: 600, //px
  small: 300, //px
};

export default function Story({ data, children }: Props) {
  const isSmallScreen = useBreakpointValue({ base: true, md: false });
  const maxStoryItemWidth = isSmallScreen
    ? STORY_ITEM_WIDTH.small
    : STORY_ITEM_WIDTH.large;

  return (
    <>
      <VStack pointerEvents="auto">
        <Heading
          as="h1"
          color="white"
          lineHeight={1.1}
          maxW={maxStoryItemWidth}
          size={isSmallScreen ? "2xl" : "4xl"}
        >
          {data.title}
        </Heading>
        {data.link && (
          <HStack mt={8} w="full">
            <LinkWithIcon href={data.link.href}>{data.link.text}</LinkWithIcon>
          </HStack>
        )}
      </VStack>
      {children}
      {data.content.map((item) => (
        <StoryItem
          key={item.id}
          isMediaItem={"image" in item}
          item={item}
          maxW={maxStoryItemWidth}
          storyId={data.id}
        />
      ))}
    </>
  );
}

type ItemProps = {
  isMediaItem: boolean;
  item: StoryContentItem;
  maxW: number;
  storyId: string;
};

function StoryItem({ isMediaItem, item, maxW }: ItemProps) {
  return (
    <Flex
      align="center"
      height="83%"
      maxW={maxW}
      mx={4}
      overflow="hidden"
      pointerEvents="auto"
      pos="relative"
      width={STORY_ITEM_WIDTH.large}
    >
      {isMediaItem ? (
        <StoryItemMedia item={item as StoryContentItemMedia} />
      ) : (
        <StoryItemText item={item as StoryContentItemText} />
      )}
    </Flex>
  );
}

type MediaProps = {
  item: StoryContentItemMedia;
};

function StoryItemMedia({ item }: MediaProps) {
  const image = (
    <Image
      alt={item.image.alt}
      blurDataURL={item.image.base64}
      objectFit="contain"
      placeholder={item.image.base64 ? "blur" : "empty"}
      {...(item.image.cover
        ? {
            fill: true,
          }
        : {
            height: STORY_ITEM_WIDTH.large,
            width: STORY_ITEM_WIDTH.large,
            style: { width: "fit-content" },
          })}
      src={item.image.imgSrc}
    />
  );

  return (
    <VStack gap={4} textAlign="center" w="full">
      <Flex flexDir={item.isTextBottom ? "column" : "column-reverse"} w="full">
        {item.title && <SmallText>{item.title}</SmallText>}
        {item.videoSrc ? (
          <VideoPlayer fallback={image} src={item.videoSrc} />
        ) : (
          image
        )}
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
