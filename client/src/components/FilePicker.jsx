import React from 'react';
import CustomButton from './CustomButton';
import "./FilePicker.css";

const FilePicker = ({ file, setFile, readFile }) => {
  
    return (
    <div className='filepicker-container absolute w-72 h-72 left-40 rounded-lg border'>
      <div className='flex-1 flex flex-col mb-40'>
        <input    
           id="file-upload"
           type="file"
           accept='image/*'
           className='hidden-input'
           onChange={(e) => setFile(e.target.files[0])}
         />
         <label htmlFor='file-upload' className="filepicker-label">
           Upload File
         </label>

         <p className='mt-2 text-gray-600 text-md truncate'>
            {file === "" ? "No file selected" : file.name}
         </p>
      </div>

      <div className='mt-4 flex flex-wrap gap-3 '>
         <CustomButton   
          type="outline"
          title="Logo"
          handleClick={() => readFile('logo')}
          customStyles="text-sm"
          />
          <CustomButton    
            className="btnclear"
            type="filled"
            title="full"
            handleClick={() => readFile('full')}
            customStyles="text-sm"
            />
      </div> 
    </div>
  )
}

export default FilePicker;
