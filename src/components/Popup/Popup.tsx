import React, { useEffect, useRef } from 'react';

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  closeOnOverlayClick?: boolean;

}

const Popup: React.FC<PopupProps> = ({
  isOpen,
  onClose,
  children,
  closeOnOverlayClick = true,
 
}) => {
  const popupRef = useRef<HTMLDivElement>(null);


  // Handle outside click
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (closeOnOverlayClick && e.target === e.currentTarget) {
      onClose();
    }
  };

  // Handle popup click (prevent closing when clicking inside popup)
  const handlePopupClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  if (!isOpen) return null;


  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm"
      onClick={handleOverlayClick}
    >
      <div
        ref={popupRef}
        className={`relative `}
        onClick={handlePopupClick}
      >

        {/* Content */}
        <div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Popup;
