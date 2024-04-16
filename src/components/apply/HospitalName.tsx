"use client";

import { hospitalName } from "@/api/supabase";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const HospitalName = ({ hospitalId }: { hospitalId: string }) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["reservation", hospitalId],
    queryFn: () => hospitalName(hospitalId)
  });

  const hospitalData = data?.[0].hospital_name;
  // 데이터를 꺼내 쓰는 용도 (배열)

  if (isLoading) {
    <div>로딩 중 입니다...</div>;
  }

  if (isError) {
    <div>에러 입니다...</div>;
  }
  return <span>{hospitalData}</span>;
};

export default HospitalName;
