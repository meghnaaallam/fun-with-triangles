//area
let areaInput=document.querySelectorAll('.area-input');
let checkArea=document.querySelector('#check-area');
let outputArea=document.querySelector('#output-area');

checkArea.addEventListener('click',areaofTriangle);

function areaofTriangle() 
{
    let area1= (Number(areaInput[0].value) * Number(areaInput[1].value))
    area1= 0.5* area1;
    console.log(area1)
}