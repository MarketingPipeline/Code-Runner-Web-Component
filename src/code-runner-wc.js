// All the supported languages / aliases for language names + versions (used for auto-detecting version to use) 
let PistonAPI_Languages = [{"language":"matl","version":"22.5.0","aliases":[]},{"language":"bash","version":"5.1.0","aliases":["sh"]},{"language":"befunge93","version":"0.2.0","aliases":["b93"]},{"language":"brachylog","version":"1.0.0","aliases":[]},{"language":"brainfuck","version":"2.7.3","aliases":["bf"]},{"language":"cjam","version":"0.6.5","aliases":[]},{"language":"clojure","version":"1.10.3","aliases":["clojure","clj"]},{"language":"cobol","version":"3.1.2","aliases":["cob"]},{"language":"coffeescript","version":"2.5.1","aliases":["coffeescript","coffee"]},{"language":"cow","version":"1.0.0","aliases":["cow"]},{"language":"crystal","version":"0.36.1","aliases":["crystal","cr"]},{"language":"dart","version":"2.12.1","aliases":[]},{"language":"dash","version":"0.5.11","aliases":["dash"]},{"language":"typescript","version":"1.16.2","aliases":["deno","deno-ts"],"runtime":"deno"},{"language":"javascript","version":"1.16.2","aliases":["deno-js"],"runtime":"deno"},{"language":"basic.net","version":"5.0.201","aliases":["basic","visual-basic","visual-basic.net","vb","vb.net","vb-dotnet","dotnet-vb","basic-dotnet","dotnet-basic"],"runtime":"dotnet"},{"language":"fsharp.net","version":"5.0.201","aliases":["fsharp","fs","f#","fs.net","f#.net","fsharp-dotnet","fs-dotnet","f#-dotnet","dotnet-fsharp","dotnet-fs","dotnet-fs"],"runtime":"dotnet"},{"language":"csharp.net","version":"5.0.201","aliases":["csharp","c#","cs","c#.net","cs.net","c#-dotnet","cs-dotnet","csharp-dotnet","dotnet-c#","dotnet-cs","dotnet-csharp"],"runtime":"dotnet"},{"language":"fsi","version":"5.0.201","aliases":["fsx","fsharp-interactive","f#-interactive","dotnet-fsi","fsi-dotnet","fsi.net"],"runtime":"dotnet"},{"language":"dragon","version":"1.9.8","aliases":[]},{"language":"elixir","version":"1.11.3","aliases":["elixir","exs"]},{"language":"emacs","version":"27.1.0","aliases":["emacs","el","elisp"]},{"language":"emojicode","version":"1.0.2","aliases":["emojic"]},{"language":"erlang","version":"23.0.0","aliases":["erlang","erl","escript"]},{"language":"file","version":"0.0.1","aliases":["executable","elf","binary"]},{"language":"forte","version":"1.0.0","aliases":["forter"]},{"language":"forth","version":"0.7.3","aliases":["gforth"]},{"language":"freebasic","version":"1.8.0","aliases":["bas","fbc","basic","qbasic","quickbasic"]},{"language":"awk","version":"5.1.0","aliases":["gawk"],"runtime":"gawk"},{"language":"c","version":"10.2.0","aliases":["gcc"],"runtime":"gcc"},{"language":"c++","version":"10.2.0","aliases":["cpp","g++"],"runtime":"gcc"},{"language":"d","version":"10.2.0","aliases":["gdc"],"runtime":"gcc"},{"language":"fortran","version":"10.2.0","aliases":["fortran","f90"],"runtime":"gcc"},{"language":"go","version":"1.16.2","aliases":["go","golang"]},{"language":"golfscript","version":"1.0.0","aliases":["golfscript"]},{"language":"groovy","version":"3.0.7","aliases":["groovy","gvy"]},{"language":"haskell","version":"9.0.1","aliases":["haskell","hs"]},{"language":"husk","version":"1.0.0","aliases":[]},{"language":"iverilog","version":"11.0.0","aliases":["verilog","vvp"]},{"language":"japt","version":"2.0.0","aliases":["japt"]},{"language":"java","version":"15.0.2","aliases":[]},{"language":"jelly","version":"0.1.31","aliases":[]},{"language":"julia","version":"1.6.1","aliases":["jl"]},{"language":"kotlin","version":"1.4.31","aliases":["kt"]},{"language":"lisp","version":"2.1.2","aliases":["lisp","cl","sbcl","commonlisp"]},{"language":"llvm_ir","version":"12.0.1","aliases":["llvm","llvm-ir","ll"]},{"language":"lolcode","version":"0.11.2","aliases":["lol","lci"]},{"language":"lua","version":"5.4.2","aliases":["lua"]},{"language":"csharp","version":"6.12.0","aliases":["mono","mono-csharp","mono-c#","mono-cs","c#","cs"],"runtime":"mono"},{"language":"basic","version":"6.12.0","aliases":["vb","mono-vb","mono-basic","visual-basic","visual basic"],"runtime":"mono"},{"language":"nasm","version":"2.15.5","aliases":["asm","nasm32"],"runtime":"nasm"},{"language":"nasm64","version":"2.15.5","aliases":["asm64"],"runtime":"nasm"},{"language":"nim","version":"1.4.4","aliases":["nim"]},{"language":"javascript","version":"16.3.0","aliases":["node-javascript","node-js","javascript","js"],"runtime":"node"},{"language":"ocaml","version":"4.12.0","aliases":["ocaml","ml"]},{"language":"octave","version":"6.2.0","aliases":["matlab","m"]},{"language":"osabie","version":"1.0.1","aliases":["osabie","05AB1E","usable"]},{"language":"paradoc","version":"0.6.0","aliases":["paradoc"]},{"language":"pascal","version":"3.2.0","aliases":["pascal","freepascal","pp","pas"]},{"language":"perl","version":"5.26.1","aliases":["perl","pl"]},{"language":"php","version":"8.0.2","aliases":["php8","html"]},{"language":"ponylang","version":"0.39.0","aliases":["pony","ponyc"]},{"language":"prolog","version":"8.2.4","aliases":["prolog","plg"]},{"language":"pure","version":"0.68.0","aliases":[]},{"language":"powershell","version":"7.1.4","aliases":["ps","pwsh","ps1"],"runtime":"pwsh"},{"language":"pyth","version":"1.0.0","aliases":["pyth"]},{"language":"python2","version":"2.7.18","aliases":["py2","python2"]},{"language":"python","version":"3.10.0","aliases":["py","py3","python3","python3.10"]},{"language":"racket","version":"8.3.0","aliases":["rkt"]},{"language":"raku","version":"6.100.0","aliases":["raku","rakudo","perl6","p6","pl6"]},{"language":"retina","version":"1.2.0","aliases":["ret"]},{"language":"rockstar","version":"1.0.0","aliases":["rock","rocky"]},{"language":"rscript","version":"4.1.1","aliases":["r"]},{"language":"ruby","version":"3.0.1","aliases":["ruby3","rb"]},{"language":"rust","version":"1.56.1","aliases":["rs"]},{"language":"scala","version":"3.0.0","aliases":["sc"]},{"language":"smalltalk","version":"3.2.3","aliases":["st"]},{"language":"sqlite3","version":"3.36.0","aliases":["sqlite","sql"]},{"language":"swift","version":"5.3.3","aliases":["swift"]},{"language":"typescript","version":"4.2.3","aliases":["ts","node-ts","tsc"]},{"language":"vlang","version":"0.1.13","aliases":["v"]},{"language":"vyxal","version":"2.4.1","aliases":[]},{"language":"yeethon","version":"3.10.0","aliases":["yeethon3"]},{"language":"zig","version":"0.8.0","aliases":["zig"]}]





class CodeRunner extends HTMLElement {
	constructor() {
		super();

	}

	connectedCallback() {


		// will be used to set language type to use and names of languages 
		const language = this.getAttribute('language');

	

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

		if (!language) {
			return this.innerHTML = `${styling}   <!--compress-->  <div>
  
<pre style="padding: 0px; --bg:rgb(58, 54, 54); --text:rgb(255, 255, 255); --border:rgba(0,0,0,0.3); --code:rgb(255, 255, 255); --code-bg:rgba(39, 40, 35, 1); --title:rgb(255, 255, 255); --button-text:wheat; --button-border:rgba(0,0,0,0.18);"><div class="code-knack-playground "><div class="code-knack-pane"><div class="code-knack-title">Error!</div>
  
</div><div id="codetorun" class="code-knack-text" style="/* display: none; */">Error: Language Attribute Is Missing For Web Component ...
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
    
    <div code-runner-component language=${language}>
  
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
    

  // handle Run Button clicks -   
 this.querySelector('[ code-runner-button]').addEventListener('click', (e) => handleclick(this));
    
        
 // Handle Copy Button Clicks   
this.querySelector('[code-runner-copy-button]').addEventListener('click', (e) => handleCopyBtnClick(this));

function handleCopyBtnClick(html_element) {
  
   navigator.clipboard.writeText(html_element.querySelector("#codetorun").innerText)
  /// Set Copied To Clipboard Visible
  html_element.querySelector(".code-knack-mask").style.display = "flex"
   // then hide it after X seconds.. 
  setTimeout(() => {
   html_element.querySelector(".code-knack-mask").style.display = "none";
}, "3000")

}
    

	}
}





// Function To Call API to run code inside the web-component

// gets data from API and sets the content of #result div
async function getData(html_element) {
	// display the output / results block
	const result_section = html_element.querySelector("#output_section")
	result_section.style.display = "block";

// make sure user is connected to internet  -
 if (navigator.onLine) {

	try {

		const res = await fetch("https://emkc.org/api/v2/piston/execute", {
			method: 'POST',
			body: JSON.stringify({
				"language": html_element.getAttribute("language").toLowerCase(),
				"version": GetVersionForPistonAPI(html_element.getAttribute("language").toLowerCase()),
				"files": [{
					"content": html_element.querySelector("#codetorun").innerText
				}]
			}),

		});
		const jsonResult = await res.json();
		// if message - code error
		if (jsonResult.message) {
			html_element.querySelector("#result").innerText = JSON.stringify(`Error ${jsonResult.message}`)
		} else {
			html_element.querySelector("#result").innerText = jsonResult.run.output
		}

	}
	// there was a network error or API is down etc... 
	catch (error) {
		html_element.querySelector("#result").innerText = error.message;
	}
 
 }else{
	 // user is not connected to internet to fetch API... 
   	html_element.querySelector("#result").innerText = "Error: You must be connected to the internet to use this!"
 }  
   
}


/// Provides the version to use for Piston API automatically! 
function GetVersionForPistonAPI(string){
data = PistonAPI_Languages  
for (const key in data){
  if (!string == data[key].language){
    console.log(`Error: Code-Runner could not auto-detect version to use for ${string}`)
    return "undefined"
  
  }
  
 if (string == data[key].language){
     // console.log(`found ${data[key].version} for ${string}` )
    return data[key].version
 } else {
   for (const aliasName in data[key].aliases){
    if (string == data[key].aliases[aliasName]){
      // console.log(`found ${data[key].version} for ${string}` )
         return data[key].version
      
    }
      // Need to fix this and throw error
     //  else{
     // console.log(`Error: Code-Runner could not auto-detect version to use for ${string}`)
   // return "undefined"
   // }
     
  
   }
     
 }
  
}
}

function handleclick(codeRunner){
  // allow plugins / extensions to be wrote for this.
  if (!codeRunner.hasAttribute("custom-compiler")){
    getData(codeRunner)
  }
}

window.customElements.define('code-runner', CodeRunner);
