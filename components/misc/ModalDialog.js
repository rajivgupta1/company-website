import React, { useRef, useEffect } from 'react';

const ModalDialog = (props) => {
  const { isOpen, closeModal, modalBody, titleText } = props;
  
  const dialogRef = useRef(null);

  // Open the dialog when `isOpen` is true
  useEffect(() => {
    if (isOpen && dialogRef.current) {
      dialogRef.current.showModal();
      document.body.style.overflow = 'hidden';
    } else if (dialogRef.current) {
      dialogRef.current.close();
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <dialog
      ref={dialogRef}
      className="w-full max-w-2xl p-4 bg-white rounded-lg shadow-lg"
      aria-labelledby="modal-title"
      aria-hidden={!isOpen}
    >
      {/* Modal content */}
      <div className="relative">
        {/* Modal header */}
        <div className="flex items-center justify-between p-4 border-b rounded-t md:p-5 dark:border-gray-600">
          <h3
            id="modal-title"
            className="text-lg font-medium capitalize text-black-600"
          >
            {titleText}
          </h3>
          <button
            onClick={closeModal} // Trigger close modal via parent function
            type="button"
            className="inline-flex items-center justify-center w-8 h-8 text-sm bg-transparent rounded-lg text-black-600 hover:bg-gray-100 hover:text-black-600 ms-auto"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>

        {/* Modal body */}
        <div className="p-4 md:p-5">
          {modalBody}
        </div>
      </div>
    </dialog>
  );
};

export default ModalDialog;
