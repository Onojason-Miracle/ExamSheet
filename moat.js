
if(scores < 40){
    grades = "f";
}
function resultSheet(score){  
    document.body.style.backgroundColor ="red";
    const scores = document.querySelectorAll(".scores").value;
    const grades = document.querySelectorAll(".grades").value;
    const button = document.querySelector(".btn");
    const total = document.querySelector(".tot");
    const average = document.querySelector(".avg");
    const remarks = document.querySelector(".remarks");
    
if(scores < 40){
   alert("no"); 
}






// 	var quantity = document.getElementById(qt).value;
// 	var amount =  document.getElementById(amt).value;
// 	var total = quantity * amount ;
// 	document.getElementById(output).innerHTML = total ;
}
for (const score of scores) {
    button.addEventListener('change', resultSheet);
  }
