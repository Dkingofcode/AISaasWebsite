import React from 'react'

import CustomButton from "./CustomButton";
import { Title } from '../../../../Netmovie-clone/src/components/jumbotron/styles/jumbotron';

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  return (
    <div>
      <textarea 
         placeholder='Ask AI...' 
         rows={5} 
         value={prompt} 
         onChange={(e) => setPrompt(e.target.value)}
         className='aipicker-textarea' />

         <div>
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
