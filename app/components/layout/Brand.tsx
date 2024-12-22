import Image from "next/image";
import Link from "next/link";
import React from "react";

const Brand = () => {
  return (
    <Link
      href="/"
      className="flex items-center justify-center lg:justify-start gap-2"
    >
      <Image src="/logo.png" alt="logo" width={32} height={32} />
      <span className="hidden lg:block"> College</span>
    </Link>
  );
};

export default Brand;
