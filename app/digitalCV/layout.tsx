import { Metadata } from "next";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: "Digital CV - Mike IT",
  description: "Experience and skills I've gained.",
};

export default function Layout({ children }: Props) {
  return <>{children}</>;
}
