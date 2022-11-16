


/// wait till all Code-Runner Web-Components are loaded on page... 

window.addEventListener('load', (event) => {

  
  // function to render Markdown
function renderMarkdown(html_element){
 if(CR_ShowDown_Loaded != false){
  let converter = new showdown.Converter({
    tables: true,
    simpleLineBreaks: true
  })
     // console.log(html_element.querySelector("#codetorun").innerHTML)
  	const result_section = html_element.querySelector("#output_section")
	result_section.style.display = "block";
  //ace_text-input

html_element.querySelector("#output_section").innerHTML = converter.makeHtml(html_element.querySelector(".ace_content").innerText)
 }else{
   // show error to user markdown parser was not loaded.. 
   html_element.querySelector("#output_section").style.display = "block";
 }
}


  // to stop parser from being loaded more than once... 
let CR_ShowDown_Loaded = false;  
  

  // Plugin functions handled nicely here! 
document.querySelectorAll("code-runner").forEach((el) => {
  
    if (el.getAttribute("language").toLowerCase() === "md" || el.getAttribute("language").toLowerCase() ===  "markdown") {
    
     // render ace editor(s) for custom plugin
       ///  set Ace Editor to Markdown Mode
      CreateAceEditorForPlugin(el, "markdown")
  
 // handle all clicks for custom plugin 
  el.querySelector('[ code-runner-button]').addEventListener('click', (e) => renderMarkdown(el))
      
      // load resources needed! 
 if(CR_ShowDown_Loaded == false){
loadCR_Compiler_Showdown('https://cdnjs.cloudflare.com/ajax/libs/showdown/1.8.7/showdown.min.js')
                   }
                   
  }
    

})


  // function to load resources needed for plugin.. 

function loadCR_Compiler_Showdown(url){
  
    /// Add Markdown Parser To Document
var script = document.createElement('script');
script.src = url;

document.head.appendChild(script); 
  
  
  
  
  // On Error Loading Markdown Parser
script.onerror = function () {
 
  console.error("Markdown Tag: Error while performing function LoadMarkdownParser - There was an error loading the Markdown Parser")
  
  // handle error loading - md parser.. 
  document.querySelectorAll("code-runner").forEach((el) => {
  
    if (el.getAttribute("language").toLowerCase() === "md" || el.getAttribute("language").toLowerCase() ===  "markdown") {
      
       	const result_section = el.querySelector("#output_section")
        
      	
  //ace_text-input

el.querySelector("#result").innerText = "Error: Could not load resources to run Markdown. :( "
    }
 })
  
}

  
  /// Markdown Parser Load Successful 
script.onload = function () {
 CR_ShowDown_Loaded = true
 
  
};
}
  
});
