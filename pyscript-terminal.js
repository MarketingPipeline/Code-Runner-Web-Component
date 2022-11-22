/*

py-repl{
  display:none;
}

py-loader{
  display:none;
}


<html>
  <head>
    <script defer src="https://pyscript.net/alpha/pyscript.js"></script>
  </head>
  <body>
    <py-repl loading-repl/>prinat("dasvidktw sayssdd: hello wodcrld")</py-repl>
  </body>
</html>

*/

var console = window.console;

//for node.js use global instead of window
//var console = global.console;
console.log = function(val) {
  if(val === "------ loader closed ------"){
document.querySelector("py-repl").style.display = "block"
    
 document.querySelector("py-repl #btnRun").innerHTML = "Run"
     document.querySelector(".output").style.display = "none"
  }
};     

let PyScript_REPL_Messages = 0;
window.addEventListener('load', (event) => {

document.querySelector("py-repl #btnRun").addEventListener("click", (event) => {
  document.querySelector(".output").style.display = "none"
  console.info(document.querySelectorAll(".output")[0].textContent)
  
 document.querySelectorAll(".output div")[0].innerHTML = ""
  
});


  
  });


/// on run click - get the last INNERHTML value and append it
