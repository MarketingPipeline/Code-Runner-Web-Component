
window.addEventListener('load', (event) => {
/// Handle all button clicks for WC

const web_compontents = document.querySelectorAll('[code-runner-component]');

web_compontents.forEach((web_compontent) => web_compontent.querySelector('[ code-runner-button]').addEventListener('click', (e) => handleClick(web_compontent)));

function handleClick(button) {
renderMarkdown(button)
}





function renderMarkdown(html_element){
 
 
  	const result_section = html_element.querySelector("#output_section")
	result_section.style.display = "block";

  // remove loading text
  //html_element.querySelector("#result").innerText = ""
  ////
   let php = uniter.createEngine('PHP');
php.getStdout().on('data', function (text) { html_element.querySelector("#output_section").innerHTML = text });
  
  
  php.getStderr().on('data', function(text) {
  html_element.querySelector("#output_section").innerHTML = text 
});
php.execute(`<?php ` + html_element.querySelector("#codetorun").innerText + `?>`);

  //<?php echo 'hello world!
  
}



document.querySelectorAll("code-runner").forEach((el) => {
  if (el.hasAttribute("custom-compiler")) {
 // load uniter 
    loadJavaScriptFile('https://unpkg.com/uniter@2.12.1/dist/uniter.js')
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

  
});
