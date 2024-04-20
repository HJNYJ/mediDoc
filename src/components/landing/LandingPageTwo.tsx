import Image from "next/image";
import { TwoPage } from "../layout/CheckIcons";
import Page2 from "@/assets/landing/Page2.png";
const LandingPageOne = () => {
  return (
    <div className="mt-20">
      <div className="mb-4">
        <p className="semibold-24">당장 병원에 갈 수 없을때</p>
        <p className="text-orange semibold-24 mb-3">의사에게 실시간 상담</p>
        <p className="w-[65%] regular-14 text-gray-700">
          병원에 가기 애매하거나, 가기 힘들 때 의사에게 실시간으로 상담할 수
          있어요
        </p>
      </div>
      <TwoPage />
      <div className="p-10">
        <Image src={Page2} alt="Page 2" />
      </div>
    </div>
  );
};

export default LandingPageOne;
