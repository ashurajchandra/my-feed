//Import NPM Packages
import React from "react";

//Import Images
import IMAGES from "../../assets/images";

//Import Constants
import { POST_ACTION_BUTTONS } from "./constants";

interface PostProps {
  userName: string;
  timestamp: string;
  content: string;
  emoji: string;
  profilePicture?: string;
}

const Post: React.FC<PostProps> = ({
  userName,
  timestamp,
  content,
  emoji,
  profilePicture,
}) => {
  const handleButtonClick = (button: any) => {
    switch (button.onClick) {
      case "alert":
        alert("function not implemented");
        break;
      default:
        break;
    }
  };
  return (
    <div className='w-[568px] h-[209px] pt-[9px] pr-[9px] pl-[9px] pb-[39px] rounded-[21px] bg-[#00000008] mb-[18px]'>
      <div className=' max-h-[163px] h-[163px] rounded-[18px] border border-[#0000001A] bg-white shadow-[0px_4px_9px_0px_#0000001A] pt-[13px] pr-[13px] pl-[13px] pb-[22px] overflow-y-auto'>
        {/* Header Section */}
        <div className='flex items-start gap-[10px] mb-[9px]'>
          {/* Profile Picture */}
          <div className='flex-shrink-0 '>
            <img
              src={profilePicture || IMAGES.PROFILE_ICON?.src}
              alt={`${userName}'s profile`}
              className='w-[37px] h-[37px] rounded-[7px] object-cover'
            />
          </div>

          {/* User Info */}
          <div className='flex-1 min-w-0'>
            <h3 className='text-[13px] font-inter font-semibold text-[#000000] truncate'>
              {userName}
            </h3>
            <p className='text-[12px] text-[#0000005E] font-inter font-medium'>
              {timestamp}
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div>
          <div className='flex items-start gap-[13px]'>
            {/* Emoji */}
            <div className='flex-shrink-0 h-[30px] w-[30px] bg-[#F2F2F2] rounded-[18px] flex items-center justify-center'>
              <span>{emoji}</span>
            </div>

            {/* Text Content */}
            <div className='flex-1 min-w-0'>
              <p className='text-sm text-gray-900 leading-relaxed'>{content}</p>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Section */}
      <div className='ml-[22px] mt-[9px] mb-[12px] w-[105px]'>
        <div className='flex items-center justify-between '>
          {POST_ACTION_BUTTONS.map((button) => (
            <button
              key={button.id}
              onClick={() => handleButtonClick(button)}
              className='cursor-pointer'
              title={button.title}>
              <img
                src={IMAGES[button.icon as keyof typeof IMAGES].src}
                alt={IMAGES[button.icon as keyof typeof IMAGES].alt}
                className='w-5 h-5'
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Post;
