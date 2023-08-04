import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from "framer-motion";
import { useSnapshot } from 'valtio';

import  config  from '../config/config';
import state from '../store';
import { download } from '../assets';
import { downloadCanvasToImage, reader } from '../config/helpers';
import { EditorTabs, FilterTabs, DecalTypes } from '../config/constants';
import { fadeAnimation, slideAnimation } from '../config/motion';
import { AIPicker, ColorPicker, CustomButton, FilePicker, Tab } from '../components';

const Customizer = () => {
   const snap = useSnapshot(state);

   const [file, setFile] = useState('');
   const [generatingImg, setGeneratingImg] = useState(false);

   const [activeEditorTab, setActiveEditorTab] = useState("");
   const [activeFilterTab, setActiveFilterTab] = useState({
    logoShirt: true,
    stylishShirt: false,
   })

  const generateTabContent = () => {
    switch(activeEditorTab) {
        case "colorpicker":
            return <ColorPicker />
        case "filepicker":
            return <FilePicker 
              file={file}
              setFile={setFile}
              readFile={readFile}
            />
        case "aipicker":
            return <AIPicker />
            
        default:
            return null;    
    }
  }

   const handleDecals = (type, result) => {
     const decalType = DecalTypes[type];

     state[decalType.stateProperty] = result;

     if(!activeFilterTab[decalType.filterTab]){
        handleActiveFilterTab(decalType.filterTab)
     }
   }  

    const handleActiveFilterTab = (tabName) => {
      switch (tabName) {
        case "logoShirt": 
        state.isLogoTexture = !activeFilterTab[tabName];
        break;
        case "stylishShirt":
            state.isFullTexture = !activeFilterTab[tabName];
        default:
            state.isLogoTexture = true;
            state.isFullTexture = false;    
      }
    }
     
    const readFile = (type) => {
        reader(file).then((result) => {
           handleDecals(type, result);
           setActiveEditorTab(""); 
        })
    }



    return (
    <AnimatePresence>
       {!snap.intro && (
         <>
         <motion.div 
         key="custom" 
         className='absolute top-0 left-0 z-50 p-5' 
         {...slideAnimation('left')}>
          <div className='flex items-center min-h-screen'>
            <div className="editortabs-container tabs flex flex-col gap-3">
               {EditorTabs.map((tab) => (
                <Tab key={tab.name} 
                 tab={tab}
                 className="border w-5"
                 handleClick={() => setActiveEditorTab(tab.name)}  
                 />
               ))}

               {generateTabContent()}
            </div>
          </div>   
         </motion.div>
         
         <motion.div className='absolute z-10 top-5 right-5' 
         {...fadeAnimation}>
           <CustomButton 
           type="filled" 
           title="Go Back" 
           handleClick={() => state.intro = true} 
           customStyles="w-fit px-4 py-2.5 font-bold text-sm" />
         </motion.div>
         
         <motion.div 
         className='filtertabs-container  w-10 h-10  gap-2 flex justify-center z-50 relative mt-80' 
         {...slideAnimation('up')}>
           {FilterTabs.map((tab) => (
             <Tab 
               key={tab.name} 
               tab={tab} 
               isFilterTab 
               isActiveTab=""
               handleClick={() => {}}
               />
           ))}
         </motion.div>
         </>
       )} 
    </AnimatePresence>
  )
}

export default Customizer;
