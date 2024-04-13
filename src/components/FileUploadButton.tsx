import React, { ChangeEvent, useRef, useState } from 'react';

import Button from './Button';

const FileUploadButton: React.FC = () => {
  // State to store the selected file (optional, could be useful for displaying file info)
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef();
  // Handler for file input changes
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log('daiiiiiiii');
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      setSelectedFile(file);
      // Here you can call your upload function or do something with the file
      console.log('File selected:', file.name);
      // For example, uploadFile(file);
    }
  };

  return (
    <div>
      <input accept="image/*" id="contained-button-file" multiple type="file" />
      <label htmlFor="contained-button-file">
        <Button onClick={() => {}}>Upload</Button>
      </label>
    </div>
  );
};

export default FileUploadButton;
