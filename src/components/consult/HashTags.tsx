import { HashtagButtonsProps } from "@/types";
import React, { useState } from "react";

const HashTags: React.FC<HashtagButtonsProps> = ({ hashtags }) => {
  const [selectedTag, setSelectedTag] = useState("");

  const handleClick = (tag: string) => {
    console.log(`${tag} 클릭됨!!!!!`);
    setSelectedTag(tag); // 선택된 해시태그 상태 업데이트하기!!
  };

  return (
    <div className="flex flex-wrap gap-2">
      {Object.entries(hashtags).map(([key, value]) => (
        <button
          key={key}
          onClick={() => handleClick(value)}
          className={`py-2 px-4 rounded-md focus:outline-none ${selectedTag === value ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
        >
          {value}
        </button>
      ))}
    </div>
  );
};

export default HashTags;
