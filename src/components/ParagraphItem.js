import React from 'react';

const ParagraphItem = ({content}) => {
  return (
    <div
      className="paragraphItem"
      dangerouslySetInnerHTML={{
        __html: content
      }}
    />
  );
};

export default ParagraphItem;
