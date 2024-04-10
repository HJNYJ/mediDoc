import { createBrowserClient } from "@supabase/ssr";
import type { Database } from "@/types/supabase";

// 필요한 부분은 언제든 꺼내 쓸 수 있게
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

export const supabase = createBrowserClient<Database>(
  supabaseUrl,
  supabaseAnonKey
);

// consult page
export const consultAddForm = async (
  newTitle: string,
  newContents: string,
  newBodyParts: string,
  newHashTags: string[]

  // uploadedFileUrl: string[]
) => {
  try {
    const { data } = await supabase.from("consult_info").insert([
      {
        consult_title: newTitle,
        consult_content: newContents,
        bodyparts: newBodyParts,
        hashtags: newHashTags

        // consult_photos: newConsultPhotos
      }
    ]);
    return data;
    // await uploadPhotosUrl();
  } catch (error) {
    if (error) {
      console.error("consultAddForm error", error);
      return;
    }
  }

  // await uploadPhotosUrl();

  // await handleAddImages(uploadedFileUrl);
};
//constId 복사해오기 , 모든 아이디 가져옴
export const getConsultId = async () => {
  // consult_info 테이블에서 consult_id 값을 조회
  const { data, error } = await supabase
    .from("consult_info")
    .select(`*, consult_photos(consult_id)`); //필터링.........

  if (error) {
    console.log("getConsultId error => ", error);
  } else {
    console.log("consult_id 가져오기 성공 ===> ", data);
    return data;
  }

  console.log("이거 외래키 가져올 수 있나,,, => ", data); // 모든 배열을 가져오네
};

export const getInfoId = async () => {
  // consult_info 테이블에서 consult_id 값을 조회
  const { data, error } = await supabase
    .from("consult_info")
    .select(`*, consult_answer(consult_id)`); //필터링.........

  if (error) {
    console.log("getConsultId error => ", error);
  } else {
    console.log("consult_id 가져오기 성공 ===> ", data);
    return data;
  }

  console.log("이거 외래키 가져올 수 있나,,, => ", data); // 모든 배열을 가져오네
};

// url string 업로드하기
// export const uploadPhotosUrl = async (url: string) => {
//   try {
//     const consultId = await getConsultId();
//     console.log("consultId ===>", consultId); //모든 consultId를 가져옴

//     const consultIdString = consultId?.map((item) => item.consult_id);

//     console.log("consultIdString", consultIdString?.[0]);
//     // url 문자열과 consult_id 값을 consult_photos 테이블에 넣기
//     const { data } = await supabase
//       .from("consult_photos")
//       .insert([{ photos: url, consult_id: consultIdString?.[0] }])
//       .single();

//     console.log("uploadPhotosUrl data up => ", data);
//     return data;
//   } catch (error) {
//     console.log("url 업로드 error.... => ", error);
//     return error;
//   }
// };

export const getHospitalId = async () => {
  try {
    const { data, error } = await supabase
      .from("hospital_info")
      .select("hospital_id");

    if (error) {
      throw error;
    }

    console.log("병원 ID 가져오기 성공 ===> ", data);
    return data;
  } catch (error) {
    console.error("병원 ID 가져오기 오류:", error);
    return null;
  }
};

// export const insertAnswer = async (department: string, answer: string) => {
//   try {
//     const { data: consultIdData } = await supabase
//       .from("consult_answer")
//       .select("consult_id")
//       .single();
//     const consultId = consultIdData?.consult_id;
//     // 병원 ID 가져오기
//     const hospitalIdData = await getHospitalId();
//     if (!hospitalIdData) {
//       console.error("병원 ID를 가져올 수 없습니다.");
//     }

//     const hospitalId = hospitalIdData?.[0].hospital_id;
//     console.log("병원 ID ===> ", hospitalId);

//     // 답변 삽입
//     const { data: insertedData, error: insertError } = await supabase
//       .from("consult_answer")
//       .insert([
//         {
//           department: department,
//           answer: answer,
//           consult_id: consultId,
//           hospital_id: hospitalId
//         }
//       ]);

//     if (insertError) {
//       throw insertError;
//     }

//     console.log("답변이 성공적으로 삽입되었습니다.");
//     return insertedData;
//   } catch (error) {
//     console.error("답변 삽입 오류:", error);
//     return null;
//   }
// };

export const fetchImages = async () => {
  const { data, error } = await supabase.from("consult_photos").select("*");
  if (error) {
    console.error("error", error);
    return;
  }

  return data;
};

export const fetchConsults = async () => {
  const { data, error } = await supabase
    .from("consult_info")
    .select(
      "consult_id, user_name, consult_title, consult_content, bodyparts, hashtags"
    );
  if (error) console.error("error", error);
  return data;
};

export const getConsultDetail = async (consultId: string) => {
  try {
    const { data, error } = await supabase
      .from("consult_info")
      .select("*")
      .eq("consult_id", consultId)
      .single();

    if (error) {
      console.error("상담 내역 상세 정보 가져오기 실패..", error);
      throw error;
    }

    console.log(data);
    return data; // 데이터 반환해!
  } catch (error) {
    console.error("상담 내역 상세 정보 가져오기 실패ㅠㅡㅠ", error);
    return null;
  }
};

// consult detail page - 병원 답변 폼 외래키 연결
export const getAnswerDetail = async (consultId: string) => {
  try {
    const { data: answerId, error } = await supabase
      .from("consult_answer")
      .select("*")
      .eq("consult_id", consultId)
      .single();

    if (error) {
      console.error("답변 가져오기 실패..", error);
      throw error;
    }
    console.log("답변 가져오기 성공 ===> ", answerId);
    return answerId;
  } catch (error) {
    console.error("답변 가져오기 실패...", error);
    return null;
  }
};

// 유저 정보 가져오기
export const getUserInform = async () => {
  const { data } = await supabase.auth.getUser();
  return data;
};

// 유저 정보 업데이트
export const updateUserInform = async (name: string, images: string) => {
  const { data, error } = await supabase.auth.updateUser({
    data: { name, images }
  });
  if (error) {
    console.error("업데이트 에러 => ", error);
    return alert("업데이트를 다시 시도해주세요!");
  }
  return data;
};
