// 건강검진 신청 페이지
"use client";

import ApplyPageOne from "@/components/apply/ApplyPageOne";
import ApplyPageTwo from "@/components/apply/ApplyPageTwo";
import ApplyPageThree from "@/components/apply/ApplyPageThree";
import ApplyPageFour from "@/components/apply/ApplyPageFour";
import React, { useState } from "react";

const ApplyPage = ({ params }: { params: { hospitalId: string } }) => {
  const [pageCount, setPageCount] = useState<string>("one");

  // url 이동 없이 컴포넌트로 이동하는 로직
  return (
    <>
      {pageCount === "one" ? (
        <ApplyPageOne
          setPageCount={setPageCount}
          hospitalId={params.hospitalId}
        />
      ) : pageCount === "two" ? (
        <ApplyPageTwo setPageCount={setPageCount} />
      ) : pageCount === "three" ? (
        <ApplyPageThree setPageCount={setPageCount} />
      ) : pageCount === "four" ? (
        <ApplyPageFour />
      ) : (
        <div>Error</div>
      )}
    </>
  );
};

export default ApplyPage;
