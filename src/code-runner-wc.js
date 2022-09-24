class CodeRunner extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {

		// will be used to set language type to use and names of languages 
		const language = this.getAttribute('language');

		const version = this.getAttribute('version');

		const styling = `<style>
    
    /*compress*/
    .code-knack-playground {
	 position: relative;
	 background-color: #3a3636;
	 background-color: var(--bg, #3a3636);
	 border-radius: 10px;
	 border: 1px solid var(--border, rgba(0, 0, 0, 0.1));
}
 .code-knack-playground.line-number .CodeMirror {
	 padding-left: 0px;
}
 .code-knack-playground img {
	 max-width: 90% !important;
	 display: inline-block !important;
	 border-radius: 0 !important;
	 box-shadow: none !important;
}
 .code-knack-playground .code-knack-pane {
	 height: 40px;
	 display: flex;
	 border-radius: 3px;
}
 .code-knack-playground .code-knack-pane .code-knack-title {
	 flex: 1;
	 padding-left: 20px;
	 color: var(--title, #fff);
	 display: flex;
	 font-size: 14px;
	 font-family: 'Metropolis-Medium', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, 'Helvetica Neue', sans-serif;
	 align-items: center;
	 opacity: 0.5;
	 text-transform: uppercase;
}
 .code-knack-playground .code-knack-pane .code-knack-ctrl {
	 flex: 1;
	 display: flex;
	 justify-content: flex-end;
}
 .code-knack-playground .code-knack-pane button.ck-button {
	 height: 40px;
	 padding: 0 16px;
	 font-size: 14px;
	 background: transparent;
	 border: none;
	 border-radius: 0;
	 color: var(--button-text, wheat);
	 opacity: 0.8;
	 outline: none;
	 display: flex;
	 align-items: center;
	 box-shadow: -1px 0 0 0 var(--button-border, rgba(0, 0, 0, 0.5));
}
 .code-knack-playground .code-knack-pane button.ck-button img {
	 height: 14px;
	 margin-right: 3px;
}
 .code-knack-playground .code-knack-pane button.ck-button:hover {
	 opacity: 1;
}
 .code-knack-playground .code-knack-pane button.ck-button:active {
	 opacity: 0.6;
}
 .code-knack-playground pre {
	 background: transparent;
	 color: var(--code, white);
	 border-bottom-left-radius: 3px;
	 border-bottom-right-radius: 3px;
}
 .code-knack-playground .CodeMirror {
	 padding-left: 16px;
}
 .code-knack-playground .CodeMirror, .code-knack-playground .code-knack-text {
	 font-size: 14px;
	 line-height: 18px;
	 height: auto;
}
 .code-knack-playground .CodeMirror pre, .code-knack-playground .code-knack-text pre {
	 padding: 0 4px;
	 font-family: 'Menlo', 'Roboto Mono', 'Courier New', Courier, monospace !important;
}
 .code-knack-playground .code-knack-text {
	 color: var(--code, white);
	 border: none;
	 width: 100%;
	 height: 100%;
	 background: var(--code-bg, rgba(39, 40, 35, 1));
	 font-family: 'Menlo', 'Roboto Mono', 'Courier New', Courier, monospace !important;
}
 .code-knack-playground .code-knack-output {
	 display: none;
	 background: var(--bg, #3a3636);
	 font-family: 'Menlo', 'Roboto Mono', 'Courier New', Courier, monospace !important;
	 border-top: 1px solid var(--border, rgba(0, 0, 0, 0.1));
}
 .code-knack-playground .code-knack-output .code-knack-output-title {
	 color: var(--text, white);
	 opacity: 0.6;
	 font-size: 12px;
	 margin: 0 10px 0 20px;
	 padding: 4px 0;
	 font-family: "Metropolis-Medium" -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, 'Helvetica Neue', sans-serif;
	 border-bottom-width: 1px;
	 border-bottom-style: solid;
	 border-bottom-color: rgba(255, 255, 255, 0.06);
}
 .code-knack-playground .code-knack-output .code-knack-output-content {
	 color: var(--text, white);
	 white-space: pre-line;
	 padding: 8px 12px 8px 20px;
	 font-size: 14px;
	 overflow: auto;
	 white-space: pre-wrap;
}
 .code-knack-playground .code-knack-output.html-output .code-knack-output-content {
	 max-width: 100% !important;
	 background: rgba(252, 253, 255, 1);
	 margin: 0 10px;
	 color: #000;
	 border-radius: 3px;
	 border: 1px solid var(--border, rgba(0, 0, 0, 0.1));
}
 .code-knack-playground .code-knack-output.html-output .code-knack-output-content .katex .base {
	 margin: 10px 0;
}
 .code-knack-playground .code-knack-footer {
	 background-color: #3a3636;
	 background-color: var(--bg, #3a3636);
	 height: 10px;
	 border-bottom-left-radius: 10px;
	 border-bottom-right-radius: 10px;
}
 .code-knack-playground .code-knack-mask {
	 display: none;
	 position: absolute;
	 top: 0;
	 left: 0;
	 right: 0;
	 bottom: 0;
	 color: white;
	 z-index: 10;
	 align-items: center;
	 justify-content: center;
	 background: rgba(0, 0, 0, 0.4);
}
/*endcompress*/
 </style>
 `

		if (!language || !version) {
			return this.innerHTML = `${styling}   <!--compress-->  <div>
  
<pre style="padding: 0px; --bg:rgb(58, 54, 54); --text:rgb(255, 255, 255); --border:rgba(0,0,0,0.3); --code:rgb(255, 255, 255); --code-bg:rgba(39, 40, 35, 1); --title:rgb(255, 255, 255); --button-text:wheat; --button-border:rgba(0,0,0,0.18);"><div class="code-knack-playground "><div class="code-knack-pane"><div class="code-knack-title">Error!</div>
  
</div><div id="codetorun" class="code-knack-text" style="/* display: none; */">Error: Required HTML Attributes Missing For Web Component ...
        </div>
        
      </div>
      </div>
      <!--endcompress-->
      `
		}
		
		// disable spellcheck
	  this.spellcheck = false;

		this.innerHTML = ` ${styling}
    
    <!--compress-->
    
    <div code-runner-component language=${language} version=${version}>
  
<pre style="padding: 0px; --bg:rgb(58, 54, 54); --text:rgb(255, 255, 255); --border:rgba(0,0,0,0.3); --code:rgb(255, 255, 255); --code-bg:rgba(39, 40, 35, 1); --title:rgb(255, 255, 255); --button-text:wheat; --button-border:rgba(0,0,0,0.18);"><div class="code-knack-playground " data-lang="cpp" data-options=""><div class="code-knack-pane"><div class="code-knack-title">${language}</div>
  <div class="code-knack-mask">Copied to the clipboard.</div>
<div class="code-knack-ctrl">
<button class="ck-button run-button" code-runner-button><img src="https://lyricat.github.io/code-knack/demo/lib/code-knack/images/icon-play-dark.svg"><span >run</span></button>
<button class="ck-button copy-button" code-runner-copy-button><img src="https://lyricat.github.io/code-knack/demo/lib/code-knack/images/icon-copy-dark.svg"><span>copy</span></button></div>
  
</div><div id="codetorun" class="code-knack-text" contenteditable style="/* display: none; */">${this.innerHTML}</div><div id="output_section" class="code-knack-output text-output"><div class="code-knack-output-title">Output</div><pre class="code-knack-output-content" id="result">Loading..<br></pre></div></div></pre>
      </div>
      </div>
      
      <!--endcompress-->
    `;
	}
}

window.customElements.define('code-runner', CodeRunner);



// Function To Call API to run code inside the web-component

// gets data from API and sets the content of #result div
async function getData(html_element) {

	console.log(html_element.querySelector("#output_section"))
	// display the output / results block
	const result_section = html_element.querySelector("#output_section")
	result_section.style.display = "block";




	try {

		const res = await fetch("https://emkc.org/api/v2/piston/execute", {
			method: 'POST',
			body: JSON.stringify({
				"language": html_element.getAttribute("language").toLowerCase(),
				"version": html_element.getAttribute("version"),
				"files": [{
					"content": html_element.querySelector("#codetorun").innerText
				}]
			}),

		});
		const jsonResult = await res.json();
		console.log(jsonResult)
		// if message - code error
		if (jsonResult.message) {
			html_element.querySelector("#result").innerText = JSON.stringify(`Error ${jsonResult.message}`)
		} else {
			html_element.querySelector("#result").innerText = jsonResult.run.output
		}

	}
	// there was a network error  or etc... 
	catch (error) {
		console.log(error.message)
		html_element.querySelector("#result").innerText = error.message;
	}
}



/// Handle all button clicks for WC

const web_compontents = document.querySelectorAll('[code-runner-component]');

web_compontents.forEach((web_compontent) => web_compontent.querySelector('[ code-runner-button]').addEventListener('click', (e) => handleClick(web_compontent)));

function handleClick(button) {
	getData(button)
}



/// handle copy click

web_compontents.forEach((web_compontent) => web_compontent.querySelector('[code-runner-copy-button]').addEventListener('click', (e) => handleCopyBtnClick(web_compontent)));

function handleCopyBtnClick(html_element) {
  
   navigator.clipboard.writeText(html_element.querySelector("#codetorun").innerText)
  /// Set Copied To Clipboard Visible
  html_element.querySelector(".code-knack-mask").style.display = "flex"
   // then hide it after X seconds.. 
  setTimeout(() => {
   html_element.querySelector(".code-knack-mask").style.display = "none";
}, "3000")

}
