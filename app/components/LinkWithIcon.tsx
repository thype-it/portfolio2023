"use client";

import { Button, Link } from "@chakra-ui/react";
import { ReactNode } from "react";
import { MdLink } from "react-icons/md";

type Props = {
  children?: ReactNode;
  href: string;
};

export default function LinkWithIcon({ href, children }: Props) {
  return (
    <Link color="white" href={href} isExternal>
      <Button color="white" leftIcon={<MdLink />} variant="outline">
        {children}
      </Button>
    </Link>
  );
}
