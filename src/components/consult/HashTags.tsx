import React from "react";

const HashTags = ({
  hashtags,
  selectedTags,
  setSelectedTags
}: {
  hashtags: { [key: string]: string };
  selectedTags: string[];
  setSelectedTags: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
  const handleClick = (tag: string) => {
    console.log(`${tag} 클릭됨!!!!!`);
    // setSelectedTag(tag); // 선택된 해시태그 상태 업데이트하기!!
    const isSelected = selectedTags.includes(tag);

    if (isSelected) {
      // 이미 포함되어있으니 제거하는 로직
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else if (selectedTags.length < 7) {
      // 선택된 것이 7개 미만이어서 추가가 가능함 -> 추가
      setSelectedTags([...selectedTags, tag]);
    } else {
      // 7개보다 크거나 같아서 더 이상 추가가 어려워서 생기는 오류!
      alert("최대 7개의 해시태그만 선택 가능합니다.");
      // console.warn("최대 7개의 해시태그만 선택 가능합니다.");
    }
  };

  return (
    <div className="flex flex-wrap gap-2">
      {Object.entries(hashtags).map(([key, value]) => (
        <button
          key={key}
          onClick={() => handleClick(value)}
          className={`py-2 px-4 rounded-md focus:outline-none ${
            selectedTags.includes(value)
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          {value}
        </button>
      ))}
    </div>
  );
};

export default HashTags;
