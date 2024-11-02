import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

const ImageConverter = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [convertedImage, setConvertedImage] = useState(null);
  const [error, setError] = useState('');

  const onDrop = (acceptedFiles) => {
    setSelectedFile(acceptedFiles[0]);
    setError(''); // Pastroni mesazhin e gabimit
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/jpeg, image/png',
    onDrop,
  });

  const handleConvert = () => {
    if (!selectedFile) {
      setError('Ju lutemi ngarkoni një imazh së pari.');
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const img = new Image();
      img.src = reader.result;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        const dataUrl = canvas.toDataURL('image/png'); // Konvertimi në PNG
        setConvertedImage(dataUrl);
      };
    };
    reader.readAsDataURL(selectedFile);
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Konvertuesi i Imazheve</h1>
      <div {...getRootProps({ className: 'border-2 border-dashed p-4 rounded mb-4' })}>
        <input {...getInputProps()} />
        <p>Drag & drop një imazh JPEG këtu, ose klikoni për të ngarkuar një imazh.</p>
      </div>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <button 
        onClick={handleConvert} 
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Konverto në PNG
      </button>
      {convertedImage && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Imazhi i Konvertuar:</h2>
          <img src={convertedImage} alt="Imazhi i konvertuar" className="mt-2" />
          <a 
            href={convertedImage} 
            download="converted-image.png" 
            className="text-blue-600 underline mt-2 inline-block"
          >
            Shkarko Imazhin
          </a>
        </div>
      )}
    </div>
  );
};

export default ImageConverter;
