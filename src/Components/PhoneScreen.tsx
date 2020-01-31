import React from "react";

interface PhoneDisplayProps {
  filename: string
}

export const PhoneDisplay: React.FC<PhoneDisplayProps> = (props) => {
  return (
    <div className="phonescreen">
      <img className="phonescreen-image" src={props.filename} alt="phone-screen"/>
    </div>
  );
};