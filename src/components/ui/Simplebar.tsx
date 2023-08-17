import React, { useState } from 'react';

const DynamicHeightContainer = () => {
  const [content, setContent] = useState('');

  const handleChange = (event:any) => {
    setContent(event.target.value);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 shadow-md">
        <textarea
          className="w-full p-2 border rounded-md resize-none"
          rows="4"
          placeholder="Enter content..."
          value={content}
          onChange={handleChange}
        ></textarea>
        <div className="mt-4">
          <strong>Content:</strong>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default DynamicHeightContainer;
