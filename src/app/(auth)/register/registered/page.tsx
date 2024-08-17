"use client";
import React, { useState } from 'react';

interface ToggleButtonProps {
  initialState?: boolean;
  onToggle?: (state: boolean) => void;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ initialState = false, onToggle }) => {
  const [isChecked, setIsChecked] = useState(initialState);

  const handleToggle = () => {
    const newState = !isChecked;
    setIsChecked(newState);
    if (onToggle) {
      onToggle(newState);
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <span>{isChecked ? 'Yes' : 'No'}</span>
      <div
        className={`relative h-8 flex items-center rounded-md w-11 cursor-pointer ${
          isChecked ? 'bg-green-500' : 'bg-yellow-500'
        }`}
        onClick={handleToggle}
      >
        <span
          className={`transform transition ease-in-out duration-200 inline-block w-4 h-4 bg-white rounded-full ${
            isChecked ? 'translate-x-5' : 'translate-x-1'
          }`}
        />
      </div>
    </div>
  );
};



const RegisteredQna = () => {
    // State to hold the values of the toggles
    const [mailingList, setMailingList] = useState(false);
    const [biddingOrSelling, setBiddingOrSelling] = useState(true);
  
    // Function to handle form submission and log toggle values
    const handleSubmit = () => {
      console.log("Join Mailing List:", mailingList);
      console.log("Bidding and/or Selling:", biddingOrSelling);
    };
  
    return (
      <div className="flex items-center justify-center min-h-[80vh] bg-gray-100">
        <div className="p-8 bg-white rounded shadow-md max-w-[800px] w-full">
          <h1 className="text-2xl font-bold mb-4">WELCOME</h1>
          <p className="mb-6">Thanks for joining Dream 2 Drive.</p>
          <div className="mb-6 flex items-center justify-between">
            <span>Would you like to join our mailing list to hear about future events, news and promotions?</span>
            <ToggleButton initialState={mailingList} onToggle={setMailingList} />
          </div>
          <div className="mb-6 flex items-center justify-between">
            <span>Will you be bidding and/or selling?</span>
            <ToggleButton initialState={biddingOrSelling} onToggle={setBiddingOrSelling} />
          </div>
          <button
            className="w-full py-2 px-4 bg-green-500 text-white font-bold rounded hover:bg-green-600"
            onClick={handleSubmit}
          >
            CONTINUE
          </button>
        </div>
      </div>
    );
  };
  
  export default RegisteredQna;