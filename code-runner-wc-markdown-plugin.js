
/// Handle all button clicks for WC




window.addEventListener('load', (event) => {
///  set Ace Editor to Markdown Mode

const web_compontents = document.querySelectorAll('code-runner');

// set the code editor (Ace-Editor) mode to PHP -
	// Params (html_element, lang)
web_compontents.forEach((web_compontent) =>	 CreateAceEditorForPlugin(web_compontent, "css"))
  
});

 

const web_compontents = document.querySelectorAll('[code-runner-component]');

web_compontents.forEach((web_compontent) => web_compontent.querySelector('[ code-runner-button]').addEventListener('click', (e) => handleClick(web_compontent)));

function handleClick(button) {
if (button.getAttribute("language").toLowerCase() === "latex" || "markdown" || "md"){
      if (button.getAttribute("language") === "latex"){
        renderLatex(button)
      }
  
        if (button.getAttribute("language") === "markdown" || "md"){
       renderMarkdown(button)
      }
  
  
    }

}





function renderMarkdown(html_element){
 
  let converter = new showdown.Converter({
    tables: true,
    simpleLineBreaks: true
  })
      console.log(html_element.querySelector("#codetorun").innerHTML)
  	const result_section = html_element.querySelector("#output_section")
	result_section.style.display = "block";
html_element.querySelector("#output_section").innerHTML = converter.makeHtml(html_element.querySelector("#codetorun").innerText)
  
}



document.querySelectorAll("code-runner").forEach((el) => {
  if (el.getAttribute("language").toLowerCase() === "latex") {
  loadJavaScriptFile('https://cdn.jsdelivr.net/npm/katex@0.10.0-rc.1/dist/katex.js')
  }
  
    if (el.getAttribute("language").toLowerCase() === "md" || "markdown") {
  loadJavaScriptFile('https://cdnjs.cloudflare.com/ajax/libs/showdown/1.8.7/showdown.min.js')
  }
    

})



function loadJavaScriptFile(url){
  
    /// Add Markdown Parser To Document
var script = document.createElement('script');
script.src = url;

document.head.appendChild(script); //or something of the likes  
  
  
  
  
  // On Error Loading Markdown Parser
script.onerror = function () {
 
  console.error("Markdown Tag: Error while performing function LoadMarkdownParser - There was an error loading the Markdown Parser")
  
}

  
  /// Markdown Parser Load Successful 
script.onload = function () {
 
  // Append this CSS

// https://cdn.jsdelivr.net/npm/katex@0.10.0-rc.1/dist/katex.css 
  
};
}

