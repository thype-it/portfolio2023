"use client";

import {
  AbsoluteCenter,
  Box,
  Card,
  CardBody,
  Container,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  Tag,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { isBrowser } from "react-device-detect";
import { MdAdsClick } from "react-icons/md";

import { ChakraNextImage } from "@/app/components/media";
import { BoxMotion } from "@/app/components/motion";
import { projectsEndpoint } from "@/utils/endpoints";

type Props = {
  data?: Project[];
};

export default function ProjectList({ data }: Props) {
  return (
    <Container
      maxW="container.xl"
      p={0}
      pb={{ base: 0, md: 20 }}
      pt={{ base: 8, md: 12 }}
    >
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        gap={6}
        px={4}
        py={{ base: 8, md: 4 }}
      >
        {data?.map((project) => (
          <ProjectCard key={project.id} item={project} />
        ))}
      </SimpleGrid>
    </Container>
  );
}

function ProjectCard({ item }: { item: Project }) {
  const borderRadius = { base: "lg", md: "2xl" };
  const isSmallScreen = useBreakpointValue({ base: true, md: false });
  const titleImgSrc = `${projectsEndpoint}/${item.id}/title.jpg`;

  return (
    <Link href={`/portfolio/${item.id}`} style={{ perspective: "400px" }}>
      <BoxMotion
        h="full"
        transformOrigin="left"
        transition={{ type: "spring" }}
        whileHover={isBrowser && { rotateY: -5, scale: 0.95 }}
        whileTap={{ rotateY: 0, scale: 1 }}
      >
        <Card
          borderRadius={borderRadius}
          boxShadow="0 0 6px 2px rgba(255,255,255,0.4)"
          h="full"
        >
          <CardBody background="black" borderRadius={borderRadius}>
            <Box pos="relative">
              <ChakraNextImage
                alt={`Featured project named ${item.title} title image`}
                borderRadius="lg"
                height={250}
                mx="auto"
                objectFit="cover"
                opacity={0.4}
                src={titleImgSrc}
                width={350}
              />
              <AbsoluteCenter h="full" w="full">
                <Heading
                  bottom={4}
                  color="white"
                  pos="absolute"
                  px={6}
                  size="md"
                  textAlign="center"
                  w="full"
                >
                  {item.title}
                </Heading>
              </AbsoluteCenter>
              {isSmallScreen && (
                <Icon
                  as={MdAdsClick}
                  bottom={4}
                  color="white"
                  pos="absolute"
                  right={4}
                />
              )}
            </Box>
            <Stack mt="6" spacing="3">
              <Text color="white">{item.description}</Text>
              <Box>
                {item.techStack.map((tech) => (
                  <Tag key={tech} mr="1" mt="1">
                    {tech}
                  </Tag>
                ))}
              </Box>
            </Stack>
          </CardBody>
        </Card>
      </BoxMotion>
    </Link>
  );
}
