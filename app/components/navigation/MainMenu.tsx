"use client";

import {
  Box,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";
import {
  MdArrowForward,
  MdArrowRight,
  MdArticle,
  MdBusiness,
  MdContactPage,
  MdMenu,
} from "react-icons/md";

import { BoxMotion } from "../motion";

export default function MainMenu() {
  return (
    <Box
      as="nav"
      background="blackAlpha.50"
      pos="sticky"
      right={0}
      top={0}
      zIndex="dropdown"
    >
      <Menu>
        {({ isOpen }) => (
          <Box pos="fixed" right={4} top={4}>
            <BoxMotion
              animate={{ rotate: isOpen ? 90 : 0 }}
              borderRadius="full"
            >
              <MenuButton
                _expanded={{ bg: "white", color: "black" }}
                as={IconButton}
                background="blackAlpha.600"
                borderRadius="full"
                icon={isOpen ? <MdArrowForward /> : <MdMenu />}
                size="lg"
                variant="outline"
                //isLoading - adds loading animation
              />
            </BoxMotion>
            <MenuList
              motionProps={{
                animate: isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 },
              }}
            >
              <MenuGroup title="Digital CV">
                <MenuItem as={NextLink} href="/digitalCV">
                  #Home
                </MenuItem>
                <MenuItem as={NextLink} href="/digitalCV#skills">
                  #Skills
                </MenuItem>
                <MenuItem as={NextLink} href="/digitalCV#experience">
                  #Experience
                </MenuItem>
                <MenuItem as={NextLink} href="/digitalCV/id">
                  <Icon as={MdArrowRight} />
                  Frontend Developer
                </MenuItem>
                <MenuItem as={NextLink} href="/digitalCV#hero">
                  <Icon as={MdArrowRight} />
                  Freelance
                </MenuItem>
                <MenuItem as={NextLink} href="/digitalCV#hero">
                  <Icon as={MdArrowRight} />
                  Projects
                </MenuItem>
                <MenuItem as={NextLink} href="/digitalCV#hero">
                  <Icon as={MdArrowRight} />
                  Education
                </MenuItem>
                <MenuItem as={NextLink} href="/digitalCV#about">
                  #About
                </MenuItem>
              </MenuGroup>
              <MenuDivider />
              <MenuItem as={NextLink} href="/portfolio">
                <Icon as={MdBusiness} />
                &nbsp; Portfolio
              </MenuItem>
              <MenuItem as={NextLink} href="/blog">
                <Icon as={MdArticle} />
                &nbsp; Blog
              </MenuItem>
              <MenuItem as={NextLink} href="digitalCV/#contact">
                <Icon as={MdContactPage} />
                &nbsp; Contact
              </MenuItem>
            </MenuList>
          </Box>
        )}
      </Menu>
    </Box>
  );
}
