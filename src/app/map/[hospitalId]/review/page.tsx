"use client";
// 전체보기 했을 때

import ReviewForm from "@/components/map/review/ReviewForm";
import React from "react";

const ReviewPage = ({ hospitalId }: { hospitalId: string }) => {
  // const router = useRouter();

  return;
  <div className="w-[390px] h-[1176px] flex flex-col">
    <ReviewForm hospitalId={hospitalId} />
  </div>;
};

export default ReviewPage;