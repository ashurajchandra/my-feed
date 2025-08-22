//Import NPM Packages
import React, { useState } from 'react';

//Import Components
import IMAGES from '../../assets/images';

//Import Constants
import {OPTIONS, PLACEHOLDER, FORMATTING_OPTIONS, TOOLBAR_BUTTONS, BOTTOM_ACTION_BUTTONS, TOP_RIGHT_BUTTONS, BOTTOM_RIGHT_BUTTONS} from './constants';

interface CreatePostProps {
  onSubmit?: (postData: PostData) => void;
  placeholder?: string;
  maxLength?: number;
}

interface PostData {
  content: string;
  format: typeof FORMATTING_OPTIONS.PARAGRAPH | typeof FORMATTING_OPTIONS.HEADING_1 | typeof FORMATTING_OPTIONS.HEADING_2 | typeof FORMATTING_OPTIONS.HEADING_3;
  isBold: boolean;
  isItalic: boolean;
  isUnderline: boolean;
  listType: typeof FORMATTING_OPTIONS.NONE | typeof FORMATTING_OPTIONS.UNORDERED_LIST | typeof FORMATTING_OPTIONS.ORDERED_LIST;
}


const CreatePost: React.FC<CreatePostProps> = ({ 
  onSubmit, 
  placeholder = PLACEHOLDER.TEXT_AREA_PLACEHOLDER,
  maxLength = 500
}) => {
  const [postData, setPostData] = useState<PostData>({
    content: '',
    format: FORMATTING_OPTIONS.PARAGRAPH,
    isBold: true,
    isItalic: false,
    isUnderline: false,
    listType: FORMATTING_OPTIONS.NONE
  });
  


  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    if (value.length <= maxLength) {
      setPostData(prev => ({ ...prev, content: value }));
      
    }
  };

  const toggleFormat = (format: keyof Pick<PostData, 'isBold' | 'isItalic' | 'isUnderline'>) => {
    setPostData(prev => {
      // Reset all formatting options to false
      const resetFormatting = {
        isBold: false,
        isItalic: false,
        isUnderline: false
      };
      
      // If the clicked format is already active, deactivate it
      // If it's not active, activate only that one
      return {
        ...prev,
        ...resetFormatting,
        [format]: !prev[format]
      };
    });
  };

  const setFormat = (format: PostData['format']) => {
    setPostData(prev => ({ ...prev, format }));
  };

  const handleButtonClick = (button: any) => {
    switch (button.onClick) {
      case 'toggleFormat':
        toggleFormat(button.formatKey as keyof Pick<PostData, 'isBold' | 'isItalic' | 'isUnderline'>);
        break;
      case 'alert':
        alert('no need to implement full functionality');
        break;
      case 'clearPost':
        setPostData({
          content: '',
          format: FORMATTING_OPTIONS.PARAGRAPH,
          isBold: true,
          isItalic: false,
          isUnderline: false,
          listType: FORMATTING_OPTIONS.NONE
        });
        break;
      case 'submitPost':
        handleSubmit();
        break;
      default:
        break;
    }
  };


  const handleSubmit = () => {
    if (postData.content.trim() && onSubmit) {
        //Call the onSubmit function with the postData
      onSubmit(postData);
      // Reset form
      setPostData({
        content: '',
        format: FORMATTING_OPTIONS.PARAGRAPH,
        isBold: true,
        isItalic: false,
        isUnderline: false,
        listType: FORMATTING_OPTIONS.NONE
      });
   
    }
  };

 

  const getTextareaStyle = () => {
    let style = 'resize-none w-full min-h-[101px] h-[101px] text-gray-800 placeholder-gray-400 focus:outline-none';
    
    if (postData.isBold) style += ' font-bold';
    if (postData.isItalic) style += ' italic';
    if (postData.isUnderline) style += ' underline';
    
    return style;
  };

  return (
    <div className="w-[568px] h-[224px] rounded-[21px] bg-[#00000008]">
      <div className="w-[554px] h-[210px] m-[7px] rounded-[18px] border border-[#0000000D] bg-white shadow-[0px_4px_4px_0px_#0000000D] p-[9px]">
        
        {/* Top Toolbar */}
        <div className="h-[40px] flex items-center justify-between p-[9px]">
          <div className="flex items-center space-x-3 rounded-[10px] bg-[#00000008] p-[4px]">
            {/* Format Dropdown */}
            <select
              value={postData.format}
              onChange={(e) => setFormat(e.target.value as PostData['format'])}
              className="h-[32px] w-[94px] text-[12px] font-inter font-medium rounded-[7px] bg-[#fff] focus:outline-none text-[#000000] shadow-[0px_1px_7px_0px_#00000017]"
            >
              {OPTIONS.map((option) => (
                <option key={option.id} value={option.value}>
                  {option.name}
                </option>
              ))}
            </select>

            {/* Toolbar Buttons */}
            <div className="flex items-center gap-[20px]">
              {TOOLBAR_BUTTONS.map((button) => (
                <React.Fragment key={button.id}>
                  {button.type === 'separator' ? (
                    <div className='w-[1px] h-[32px] bg-[#0000001A]'></div>
                  ) : (
                    <button
                      onClick={() => handleButtonClick(button)}
                      className={`${
                        button.type === 'format' && postData[button.formatKey as keyof PostData]
                          ? 'flex items-center justify-center rounded-[7px] h-[32px] w-[32px] shadow-[0px_1px_7px_0px_#00000017] bg-[#fff]' 
                          : button.type === 'list' && postData.listType === button.formatKey
                          ? 'flex items-center justify-center rounded-[7px] h-[32px] w-[32px] shadow-[0px_1px_7px_0px_#00000017] bg-[#fff]'
                          : ''
                      } cursor-pointer`}
                      title={button.title}
                    >
                      <img src={IMAGES[button.icon as keyof typeof IMAGES].src} alt={IMAGES[button.icon as keyof typeof IMAGES].alt}/>
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Top Right Buttons */}
          {TOP_RIGHT_BUTTONS.map((button) => (
            <button
              key={button.id}
              onClick={() => handleButtonClick(button)}
              className='cursor-pointer'
              title={button.title}
            >
              <img src={IMAGES[button.icon as keyof typeof IMAGES].src} alt={IMAGES[button.icon as keyof typeof IMAGES].alt}/>
            </button>
          ))}
        </div>

        {/* Text Input Area */}
        <div>
          <div className="flex items-start pt-[14px] gap-[7px]">
            {/* Emoji Icon */}
            <div>😊</div>
            
            {/* Textarea */}
            <textarea     
              value={postData.content}
              onChange={handleContentChange}
              placeholder={placeholder}
              className={getTextareaStyle()}
              rows={4}
            />
          </div>
        </div>

        {/* Bottom Action Bar */}
        <div className="flex items-center justify-between h-[46px] pt-[6px] pl-[9px] pr-[9px] pb-[10px] border-t border-[#D9D9D9]">
                    <div className="flex items-center space-x-3">
            {BOTTOM_ACTION_BUTTONS.map((button) => (
              <button
                key={button.id}
                onClick={() => handleButtonClick(button)}
                className='cursor-pointer'
                title={button.title}
              >
                <img src={IMAGES[button.icon as keyof typeof IMAGES].src} alt={IMAGES[button.icon as keyof typeof IMAGES].alt}/>
              </button>
            ))}
          </div>

          {/* Bottom Right Buttons */}
          {BOTTOM_RIGHT_BUTTONS.map((button) => (
            <button
              key={button.id}
              onClick={() => handleButtonClick(button)}
              disabled={!postData.content.trim()}
              className='cursor-pointer'
              title={button.title}
            >
              <img src={IMAGES[button.icon as keyof typeof IMAGES].src} alt={IMAGES[button.icon as keyof typeof IMAGES].alt}/>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
