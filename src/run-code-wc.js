const code_to_execute = document.querySelector("#codetorun");


const fetchDataBtn = document.querySelector("#fetchdata");


const result_section = document.querySelector("#output_section");
const result = document.querySelector("#result");

// gets data from API and sets the content of #result div
async function getData() {
  result.innerText = "Loading....";
  result_section.style.display = "block";
  try {
    const res = await fetch("https://emkc.org/api/v2/piston/execute", {
  method: 'POST',
  body:  JSON.stringify({
            "language": "python",
            "version": "3",
            "files": [
                {
                    "content": code_to_execute.innerText
                }
            ]
        }
    ),

});
    const jsonResult = await res.json();
    result.innerText = JSON.stringify(jsonResult.run.output)
  } catch (error) {
    console.log(error)
    result.innerText= error.message;
  }
}

// add event listener for #fetchdata button
fetchDataBtn.addEventListener("click", getData);

