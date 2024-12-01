import React from 'react';

interface TextSectionProps {
  heading: string;
  paragraph: string;
}

const TextSection: React.FC<TextSectionProps> = ({ heading, paragraph }) => {
  return (
    <div className="w-full text-center default-x-padding pt-5">
      <h2 className="text-heading">{heading}</h2>
      <p className="text-paragraph-primary">{paragraph}</p>
    </div>
  );
};

export default TextSection;
