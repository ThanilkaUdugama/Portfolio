import React from "react";
import ShuffleWholeText from "../../animations/shufflewholeText";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function SocialMedia(){

    const styles = {
        offscreen: {
          opacity: 0,
          y: 20
        },
        onscreen: {
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
          }
        }
      }

    return (
        <div className="bg-[#232533]">
            <motion.div
                initial= {styles['offscreen']}    
                whileInView = {styles['onscreen']}  
                className="duration-0"            
                  >
                <div className="flex justify-center items-center pb-10">
                    <a href="https://github.com/ThanilkaUdugama" target="_blank"><svg className="mobile-s:h-10 mobile-s:w-10 mobile-s:mx-2 mobile-s:mb-4 h-14 w-14 mx-4 mb-7 text-gray-500 hover:text-[#FEAD20] cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 20 20"><path fill="currentColor" d="M20 10.25c0 2.234-.636 4.243-1.908 6.027c-1.271 1.784-2.914 3.018-4.928 3.703c-.234.045-.406.014-.514-.093a.539.539 0 0 1-.163-.4V16.67c0-.863-.226-1.495-.677-1.895a8.72 8.72 0 0 0 1.335-.24c.394-.107.802-.28 1.223-.52a3.66 3.66 0 0 0 1.055-.888c.282-.352.512-.819.69-1.402c.178-.583.267-1.252.267-2.008c0-1.077-.343-1.994-1.028-2.75c.32-.81.286-1.717-.105-2.723c-.243-.08-.594-.03-1.054.147a6.94 6.94 0 0 0-1.198.587l-.495.32a9.03 9.03 0 0 0-2.5-.346a9.03 9.03 0 0 0-2.5.347a11.52 11.52 0 0 0-.553-.36c-.23-.143-.593-.314-1.088-.514c-.494-.2-.868-.26-1.12-.18c-.381 1.005-.412 1.912-.09 2.722c-.686.756-1.03 1.673-1.03 2.75c0 .756.09 1.423.268 2.002c.178.578.406 1.045.683 1.401a3.53 3.53 0 0 0 1.048.894c.421.24.83.414 1.224.52c.395.108.84.188 1.335.241c-.347.32-.56.779-.638 1.375a2.539 2.539 0 0 1-.586.2a3.597 3.597 0 0 1-.742.067c-.287 0-.57-.096-.853-.287c-.282-.192-.523-.47-.723-.834a2.133 2.133 0 0 0-.631-.694c-.256-.178-.471-.285-.645-.32l-.26-.04c-.182 0-.308.02-.378.06c-.07.04-.09.09-.065.153a.738.738 0 0 0 .117.187a.961.961 0 0 0 .17.16l.09.066c.192.09.38.259.567.508c.187.249.324.476.41.68l.13.307c.113.338.304.612.574.821c.269.21.56.343.872.4c.312.058.614.09.905.094c.29.004.532-.011.723-.047l.299-.053c0 .338.002.734.007 1.188l.006.72c0 .16-.056.294-.17.4c-.112.108-.286.139-.52.094c-2.014-.685-3.657-1.92-4.928-3.703C.636 14.493 0 12.484 0 10.25c0-1.86.447-3.574 1.341-5.145a10.083 10.083 0 0 1 3.64-3.73A9.6 9.6 0 0 1 10 0a9.6 9.6 0 0 1 5.02 1.375a10.083 10.083 0 0 1 3.639 3.73C19.553 6.675 20 8.391 20 10.25Z"/></svg></a>
                    <a href="https://www.linkedin.com/in/thanilka-udugama/" target="_blank"><svg className="mobile-s:h-10 mobile-s:w-10 mobile-s:mx-2 mobile-s:mb-4 h-14 w-14 mx-4 mb-7 text-gray-500 hover:text-[#FEAD20] cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 20 20"><path fill="currentColor" d="M17.04 17.043h-2.962v-4.64c0-1.107-.023-2.531-1.544-2.531c-1.544 0-1.78 1.204-1.78 2.449v4.722H7.793V7.5h2.844v1.3h.039c.397-.75 1.364-1.54 2.808-1.54c3.001 0 3.556 1.974 3.556 4.545v5.238ZM4.447 6.194c-.954 0-1.72-.771-1.72-1.72s.767-1.72 1.72-1.72a1.72 1.72 0 0 1 0 3.44Zm1.484 10.85h-2.97V7.5h2.97v9.543ZM18.522 0H1.476C.66 0 0 .645 0 1.44v17.12C0 19.355.66 20 1.476 20h17.042c.815 0 1.482-.644 1.482-1.44V1.44C20 .646 19.333 0 18.518 0h.003Z"/></svg></a>
                    <a><svg className="mobile-s:h-10 mobile-s:w-10 mobile-s:mx-2 mobile-s:mb-4 h-14 w-14 mx-4 mb-7 text-gray-500 hover:text-[#FEAD20] cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 20 20"><path fill="currentColor" fill-rule="evenodd" d="M20 3.894a8.299 8.299 0 0 1-2.357.636a4.062 4.062 0 0 0 1.804-2.234a8.298 8.298 0 0 1-2.605.98A4.13 4.13 0 0 0 13.847 2c-2.266 0-4.103 1.808-4.103 4.04c0 .316.036.624.106.92a11.71 11.71 0 0 1-8.457-4.22a3.974 3.974 0 0 0-.556 2.03a4.02 4.02 0 0 0 1.826 3.362a4.143 4.143 0 0 1-1.859-.505v.05c0 1.957 1.414 3.59 3.29 3.961a4.189 4.189 0 0 1-1.852.07c.522 1.604 2.037 2.772 3.833 2.805a8.317 8.317 0 0 1-5.096 1.73A8.42 8.42 0 0 1 0 16.185A11.747 11.747 0 0 0 6.29 18c7.547 0 11.674-6.155 11.674-11.492c0-.175-.004-.35-.012-.523A8.249 8.249 0 0 0 20 3.895Z"/></svg></a>
                </div>
            </motion.div>
        </div>
    )

}