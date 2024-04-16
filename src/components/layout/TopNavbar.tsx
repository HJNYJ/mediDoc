// 상단 내비게이션 바

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import previousIcon from "@/assets/icons/previousIcon.png";
import closeIcon from "@/assets/icons/xmark.png";

interface TopNavbarProps {
  title?: string | null;
  goToPreviousPage?: () => void | null;
}

const TopNavbar = ({ title, goToPreviousPage }: TopNavbarProps) => {
  const router = useRouter();
  const goTopHomePage = () => {
    router.push("/home");
  };

  return (
    <section className="flex flex-row w-[371px] h-[50px] mt-[44px] items-center justify-between z-50">
      <button
        onClick={goTopHomePage}
        className="flex items-center w-[24px] h-[24px]"
      >
        <Image
          src={previousIcon}
          alt="previous button"
          className="w-[24px] h-[24px]"
        />
      </button>
      <span className="flex items-center text-center w-[225px] h-[21px] semibold-18 ml-auto">
        {title}
      </span>
      {goToPreviousPage && (
        <button
          onClick={goToPreviousPage}
          className="flex items-center mr-[13px]"
        >
          <Image
            src={closeIcon}
            alt="close button"
            className="w-[24px] h-[24px]"
          />
        </button>
      )}
    </section>
  );
};

export default TopNavbar;