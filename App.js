import React from 'react';

var bg=require('./Icons/icon/background_card1.png')
var mobile = require('./Icons/icon/background_mobile.png')
var upload = require('./Icons/icon/upload.png')

function App() {
  return (
      <div class="bg-repeat bg-left-top bg-gray-100 m-0 w-full h-full bg-gradient-to-t">
      <div class = "rounded-lg mt-10 ml-5 mr-10 mb-10 w-3/4 relative">
      
      <div class="absolute h-8 w-8 rounded-full flex display m-auto" style={{top: "18vh", left: "0vh"}}>
        <img className="w-4 h-4 display m-auto" 
                src={require("./Icons/icon/back.png")} alt="forward" />
      </div>

      <div class="absolute h-8 w-8 rounded-full flex display m-auto" style={{top: "18vh", right: "33vh"}}>
        <img className="w-4 h-4 display m-auto" 
                src={require("./Icons/icon/forward.png")} alt="forward" />
      </div>

      <div class="flex flex-col md:flex md:flex-row rounded mt-5 ml-5 border-2 w-1\/2 md:w-3/4 h-1/3 md:h-1\/3">            
        <div class="bg-repeat bg-left-top bg-teal-500 m-0 w-full md:w-1\/2 h-1\/3 md\:h-full z-10 bg-gradient-to-t" 
            style={{backgroundImage: "url("+mobile+")"}}>
          <div class="rounded-full h-40 w-40 flex items-center justify-center bg-white display m-auto">
            <img className="w-10 h-10 m-auto display" 
                src={require("./Icons/icon/icon.png")} alt="Display" />
          </div>
        </div>        
     
        <div class="text-center w-full md:w-1\/2">
          <div class="px-2 py-1 text-center">
            <h4 class="font-bold text-xl mb-2">Upload your reports</h4>
              <div class = "border-dashed border-4 border-gray-400 rounded self-center">
                <img className="w-12 h-12 block m-auto" src={upload} alt="Upload" />
                <h5 class="text-gray-700 font-bold text-base text-center">
                    Drag and drop to upload          
                </h5>
                <h6>or <span class="italic text-blue-400 font-hairline">browse</span> to choose a file</h6>
              </div>
          </div>
          <div class="px-6 pt-4 pb-2">
           <span class="inline-block bg-white text-gray-800 font-semibold py-1 px-1 mr-2 border border-gray-400 rounded">
              Pass</span>

          <span 
            class="inline-block bg-green-500 text-white font-bold py-1 px-1 rounded">
                Submit</span>
        </div>
      </div>
     </div>      
  </div>
 
 <div className = "rounded-lg mt-10 ml-5 mr-10 mb-10 w-3/4 relative">
   <div class="flex flex-col rounded mt-5 ml-5 border-2 w-3/4 h-3\/4">

      <div class="absolute h-8 w-8 rounded-full flex display m-auto" style={{top: "15vh", left: "0vh"}}>
        <img className="w-4 h-4 display m-auto" 
                src={require("./Icons/icon/back.png")} alt="forward" />
      </div>

      <div class="absolute h-8 w-8 rounded-full flex display m-auto" style={{top: "15vh", right: "33vh"}}>
        <img className="w-4 h-4 display m-auto" 
                src={require("./Icons/icon/forward.png")} alt="forward" />
      </div>

      <div class="bg-repeat bg-left-top bg-teal-500 m-0 h-1/3 z-10 bg-gradient-to-t" 
            style={{backgroundImage: "url("+bg+")"}}>
          <div class="rounded-full h-40 w-40 flex items-center justify-center bg-white display m-auto">
            <img className="w-10 h-10 m-auto display" 
                src={require("./Icons/icon/icon2.png")} alt="Display" />
          </div>
        </div>
  
        <div class="text-center">
          <div class="px-2 py-1 text-center">
            <h4 class="text-xl mb-2 font-bold">Lorem Epsom bold</h4>
              <div class = "container flex md:flex-row overflow-x-hidden overflow-y-scroll space-x-4">

                <div class="w-full md:w-1/2 p-2 space-y-4">
                
                <div class="m-2 mr-3 bg-teal-400 rounded flex justify-between">
                  <p class="text-left ml-2 small">Lorem Epsom dolor</p>
                  <svg viewBox="0 0 20 20" fill="currentColor" class="check-circle w-5 h-5 mr-5 inline-block inline-block"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                 </div>

                <div class="m-2 bg-teal-100 rounded flex justify-between">
                <p class="ml-2 mr-3 rounded">Lorem Epsom dolor</p>
                <div class="rounded-full h-5 w-5 inline-block mr-5 border-indigo-800 border-solid border-2 bg-white border-opacity-75">
                </div>
                </div>

                <div class="m-2 bg-teal-100 rounded flex justify-between">
                <p class="ml-2 mr-3 rounded">Lorem Epsom dolor</p>
                <div class="rounded-full h-5 w-5 inline-block mr-5 border-indigo-800 border-solid border-2 bg-white border-opacity-75">
                </div>
                </div>

                <div class="m-2 bg-teal-100 rounded flex justify-between">
                <p class="ml-2 mr-3 rounded">Lorem Epsom dolor</p>
                <div class="rounded-full h-5 w-5 inline-block mr-5 border-indigo-800 border-solid border-2 bg-white border-opacity-75">
                </div>
                </div>

                <div class="m-2 bg-teal-100 rounded flex justify-between">
                <p class="ml-2 mr-3 rounded">Lorem Epsom dolor</p>
                <div class="rounded-full h-5 w-5 inline-block mr-5 border-indigo-800 border-solid border-2 bg-white border-opacity-75"></div>           
                </div>
              </div>

            <div class="hidden md:w-1/2 md:block p-2 space-y-4">
              <div class="m-2 mr-3 bg-teal-100 rounded flex justify-between">
                  <p class="text-left ml-2 small">Lorem Epsom dolor</p>
                  <div class="rounded-full h-5 w-5 inline-block mr-5 border-indigo-800 border-solid border-2 bg-white border-opacity-75">
                  </div>
              </div>

              <div class="m-2 mr-3 bg-teal-100 rounded flex justify-between">
                <p class="text-left ml-2 small">Lorem Epsom dolor</p>
                <div class="rounded-full h-5 w-5 inline-block mr-5 border-indigo-800 border-solid border-2 bg-white border-opacity-75">
                </div>
              </div>

              <div class="m-2 bg-teal-100 rounded flex justify-between">
                <p class="ml-2 mr-3 rounded">Lorem Epsom dolor</p>
                <div class="rounded-full h-5 w-5 inline-block mr-5 border-indigo-800 border-solid border-2 bg-white border-opacity-75">
                </div>
              </div>

              <div class="m-2 bg-teal-100 rounded flex justify-between">
                <p class="ml-2 mr-3 rounded">Lorem Epsom dolor</p>
                <div class="rounded-full h-5 w-5 inline-block mr-5 border-indigo-800 border-solid border-2 bg-white border-opacity-75">
                </div>
              </div>

              <div class="m-2 bg-teal-100 rounded flex justify-between">
                <p class="ml-2 mr-3 rounded">Lorem Epsom dolor</p>
                <div class="rounded-full h-5 w-5 inline-block mr-5 border-indigo-800 border-solid border-2 bg-white border-opacity-75"></div>           
              </div>
            </div>
            </div>
          </div>
        
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-white text-gray-800 font-semibold py-1 px-1 mr-2 border border-gray-400 rounded">Pass</span>

          <span class="inline-block bg-green-500 text-white font-bold py-1 px-1 rounded">Submit</span>
        </div>
      </div>
    </div>
  </div>
 </div>

  );
}

export default App;
