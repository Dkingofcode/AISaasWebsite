import React from 'react';
import CustomButton from "./CustomButton";
import "./AIPicker.css"; 

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  return (
    <div className='aipicker-container border rounded-lg absolute left-32 top1 w-72 h-66'>
      <textarea 
         placeholder='Ask AI...' 
         rows={9} 
         value={prompt} 
         onChange={(e) => setPrompt(e.target.value)}
         className='aipicker-textarea w-60 h-52 mb-7 ml-3 rounded-md' 
         />

         <div className='flex flex-wrap gap-3 bg-transparent'>
            {generatingImg ? ( 
            <CustomButton 
            type="outline" 
            title="Asking AI..."
            customStyles="text-xs"
            />
            ) : (
               <>
                <CustomButton   
                   type="outline"
                   title="AI Logo"
                   handleClick={() => handleSubmit('logo')}
                   customStyles="text-xs"
                />

                <CustomButton    
                  type="filled"
                  title="AI Full"
                  handleClick={() => handleSubmit('full')}
                  customStyles="text-xs"  
                />
               </> 
            )}
         </div>
    </div>
  )
}

export default AIPicker;
