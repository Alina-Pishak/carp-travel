import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function BgContainer({ children }: Props) {
  return (
    <div className={`basic-container py-14 h-full md:py-16`}>{children}</div>
  );
}
