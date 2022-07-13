
//hypotenuse
let hypInput=document.querySelectorAll('.hyp-input');
let checkHyp=document.querySelector('#check-hyp');
let outputHyp=document.querySelector('#output-hyp');

checkHyp.addEventListener('click',checkHypotenuse)

function checkHypotenuse() {
 const hyp= calculateLength(hypInput[0].value,hypInput[1].value);
 outputHyp.textContent=`The length of the hypotenuse is ${hyp}`
}


function calculateLength(val1,val2) {
   let lengthofHyp=Math.pow(val1,2) + Math.pow(val2,2);
   lengthofHyp=Math.sqrt(lengthofHyp)
   return lengthofHyp;
}