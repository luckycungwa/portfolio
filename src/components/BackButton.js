import React from 'react';
import { MdArrowBack } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="">
    <button className="floating-btn"  onClick={goBack}>
                    <MdArrowBack /> back
                  </button>
    </div>
  );
};

export default BackButton;