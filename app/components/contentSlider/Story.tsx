"use client";

import {
  Box,
  Flex,
  Heading,
  Highlight,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import Image from "next/image";
import type { ReactNode } from "react";

import { SmallText } from "../text";

type Props = {
  data: Story;
  children?: ReactNode;
};

export default function Story({ data, children }: Props) {
  const isSmallScreen = useBreakpointValue({ base: true, md: false });
  const maxStoryItemWidth = isSmallScreen ? 300 : 600; //px

  return (
    <>
      <Heading
        as="h1"
        color="white"
        lineHeight={1.1}
        maxW={maxStoryItemWidth}
        size="4xl"
      >
        {data.title}
      </Heading>
      {children}
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

function StoryItem({ isImageItem, item, maxW, storyId }: ItemProps) {
  return (
    <Box maxW={maxW}>
      {isImageItem ? (
        <StoryItemImage item={item as StoryContentItemImg} storyId={storyId} />
      ) : (
        <StoryItemText item={item as StoryContentItemText} />
      )}
    </Box>
  );
}

type ImageProps = {
  item: StoryContentItemImg;
  storyId: string;
};

function StoryItemImage({ item, storyId }: ImageProps) {
  const imgSrc = `/media/stories/${storyId}/${item.image.name}.${item.image.extension}`;

  return (
    <Flex
      flexDir={item.isTextBottom ? "column" : "column-reverse"}
      textAlign="center"
    >
      <Image alt={item.image.alt} height={500} src={imgSrc} width={500} />
      {item.title && <SmallText>{item.title}</SmallText>}
      {item.text && (
        <Text
          color="gray.300"
          fontSize={{ base: "sm", md: "large" }}
          textAlign="left"
        >
          {item.text}
        </Text>
      )}
    </Flex>
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
          ;
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
          ;
        </Text>
      )}
    </VStack>
  );
}
