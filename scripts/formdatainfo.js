

function storedata() { 

// Storing data:
const myObj = {};
const myJSON = JSON.stringify(myObj);
localStorage.setItem("testJSON", myJSON);
}


function exportdata() {
// Retrieving data:
  
let text = localStorage.getItem("testJSON");
let obj = JSON.parse(text);
document.getElementById("demo").innerHTML = obj;

}

storedata()

exportdata()
