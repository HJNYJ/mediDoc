import { createBrowserClient } from "@supabase/ssr";
import { getUserInfo } from "@/utils/getUserInfo";
import { v4 as uuidv4 } from "uuid";
import { ConsultType } from "@/types";

import type { Database } from "@/types/supabase";

// 필요한 부분은 언제든 꺼내 쓸 수 있게
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

export const supabase = createBrowserClient<Database>(
  supabaseUrl,
  supabaseAnonKey
);

export const consultAddForm = async (
  newTitle: string,
  newContents: string,
  newBodyParts: string | null,
  newHashTags: string[] | null,
  userName: string | null,
  userEmail: string | null
) => {
  try {
    const consultId = uuidv4();
    const userData = await getUserInfo();
    const userId = userData?.userId;
    await supabase.from("consult_info").insert({
      consult_id: consultId,
      consult_title: newTitle,
      consult_content: newContents,
      bodyparts: newBodyParts,
      hashtags: newHashTags,
      user_name: userName,
      user_email: userEmail
    });
    return { consultId, userId, userEmail };
  } catch (error) {
    if (error) {
      console.error("consultAddForm error", error);
      return;
    }
  }
};

// url string 업로드하기
export const uploadPhotosUrl = async (url: string, consult_id: string) => {
  try {
    const { data, error } = await supabase
      .from("consult_photos")
      .insert([{ photos: url, consult_id: consult_id }])
      .single();

    if (error) {
      console.error("uploadPhotosUrl error => ", error);
    }
    return data;
  } catch (error) {
    console.log("url 업로드 error.... => ", error);
    return error;
  }
};

// OOO
export const uploadReviewPhotosUrl = async (
  url: string,
  review_id: string,
  hospital_id: string
) => {
  try {
    // url 문자열과 consult_id 값을 consult_photos 테이블에 넣기
    const { data, error } = await supabase
      .from("review_photos")
      .insert([{ photos: url, review_id, hospital_id }]);

    if (error) {
      console.log("url 업로드 error.... => ", error);
      return { error };
    }
    return { data };
  } catch (error) {
    console.log("url 업로드 error.... => ", error);
  }
};

export const fetchImages = async () => {
  const { data, error } = await supabase.from("consult_photos").select("*");
  if (error) {
    console.error("error", error);
    return;
  }
  return data;
};

//OOO fetchImages가 fetchReviewImages로 바뀜
export const fetchReviewImages = async () => {
  const { data, error } = await supabase.from("review_photos").select("*");
  if (error) {
    console.error("error", error);
    return;
  }
  return data;
};

export const fetchHospitalReviewImages = async (hospitalId: string) => {
  const { data, error } = await supabase
    .from("review_photos")
    .select("*")
    .eq("hospital_id", hospitalId);

  if (error) {
    throw new Error(error.message);
    return;
  }
  return data;
};

export const fetchConsults = async (): Promise<ConsultType[] | null> => {
  const { data, error } = await supabase
    .from("consult_info")
    .select(
      `consult_id, 
      user_name, 
      consult_title, 
      consult_content,
      bodyparts, 
      hashtags,
      consult_answer(*),
      consult_photos(*)
      `
    )
    .order("created_at", { ascending: true });
  if (error) console.error("error", error);
  return data as ConsultType[] | null;
};

export const getConsultDetail = async (consultId: string) => {
  try {
    const { data, error } = await supabase
      .from("consult_info")
      .select(
        `consult_id, 
      user_name, 
      consult_title, 
      consult_content,
      bodyparts, 
      hashtags,
      consult_answer(*),
      consult_photos(*)
      `
      )
      .eq("consult_id", consultId)
      .single();

    if (error) {
      console.error("상담 내역 상세 정보 가져오기 실패..", error);
      throw error;
    }

    return data; // 데이터 반환해!
  } catch (error) {
    console.error("상담 내역 상세 정보 가져오기 실패ㅠㅡㅠ", error);
    return null;
  }
};

export const getAnswerDetail = async (consultId: string) => {
  try {
    const { data, error } = await supabase
      .from("consult_answer")
      .select("*")
      .eq("consult_id", consultId);

    if (error) {
      console.error("답변 가져오기 실패..", error);
      throw error;
    }
    return data;
  } catch (error) {
    console.error("답변 가져오기 실패...", error);
    return null;
  }
};

export const getReviewDetail = async (hospitalId: string) => {
  try {
    const { data, error } = await supabase
      .from("review_info")
      .select("*")
      .eq("hospital_id", hospitalId);

    if (error) {
      console.error("error", error);
    }
    return data;
  } catch (error) {
    console.error("error", error);
    return null;
  }
};

export const getHospitalInfo = async (hospitalId: string) => {
  try {
    const { data, error } = await supabase
      .from("hospital_info")
      .select("*")
      .eq("hospital_id", hospitalId)
      .single();

    if (error) {
      console.error("error", error);
    }
    return data;
  } catch (error) {
    console.error("error", error);
    return null;
  }
};

export const getHospitalImages = async (hospitalId: string) => {
  try {
    const { data, error } = await supabase
      .from("hospital_info")
      .select("hospital_image")
      .eq("hospital_id", hospitalId);

    if (error) {
      console.error("error", error);
    }
    return data;
  } catch (error) {
    console.error("error", error);
    return null;
  }
};

export const courseNameSelect = async () => {
  const response = await supabase
    .from("course_info")
    .select("*")
    .order("course_price", { ascending: true });
  const { data } = response;
  return data;
};

export const getHospitalId = async () => {
  try {
    const { data } = await supabase.from("hospital_info").select("hospital_id");
    return data;
  } catch (error) {
    console.error("hospital_id를 가져오는 중 오류 발생:", error);
    return null;
  }
};

export const hospitalName = async (hospitalId: string) => {
  const response = await supabase
    .from("hospital_info")
    .select("hospital_name")
    .eq("hospital_id", hospitalId);

  const { data } = response;
  return data;
};

export const hospitalReservation = async () => {
  const response = await supabase.from("reservation_info").select("*");
  const { data } = response;
  return data;
};

export const hospitalRegion = async () => {
  const response = await supabase.from("hospital_region").select("*");
  const { data } = response;
  return data;
};

export const hospitalImage = async (hospitalId: string) => {
  const response = await supabase
    .from("hospital_info")
    .select("hospital_image")
    .eq("hospital_id", hospitalId);

  const { data } = response;
  return data;
};
