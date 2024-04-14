"use client";
import { supabase } from "@/api/supabase";
// 방문자 리뷰 section

import useDetailTabStore from "@/shared/zustand/detailTabStore";
import { useRouter } from "next/navigation";
import ReviewItem from "../review/ReviewItem";
import ReviewRecent from "../review/ReviewRecent";

const getHospitalDetail = async (hospitalId: string) => {
  const { data } = await supabase
    .from("review_info")
    .select("*")
    .eq("hospital_id", hospitalId)
    .single();

  return data;
};

// 병원 상세 페이지에 밑에 있는 방문자 리뷰 리스트들( 3-4개만 보여짐 ) -> 전체보기로 넘어갈 수 있음
const ReviewList = ({ params }: { params: { hospitalId: string } }) => {
  const { selectTab } = useDetailTabStore();
  const router = useRouter();

  const goToReviewForm = () => {
    router.push(`/hospital/review`);
  };

  return (
    <section>
      {/* <ReviewItem /> */}

      <h3>방문자 리뷰</h3>
      <button onClick={goToReviewForm}>리뷰 쓰기</button>
      <ReviewRecent />

      <button
        onClick={(e) => {
          e.preventDefault();
          selectTab("review");
        }}
      >
        전체보기
      </button>
    </section>
  );
};

export default ReviewList;
