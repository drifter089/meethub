import React from 'react';

interface TextSectionProps {
  heading: string;
  paragraph: string;
}

const TextSection: React.FC<TextSectionProps> = ({ heading, paragraph }) => {
  return (
    <div className="w-full text-center default-x-padding pt-5">     
      <p className="text-paragraph-primary">{paragraph}</p>
      <h2 className="text-subheading">{heading}</h2>
    </div>
  );
};

export default TextSection;
