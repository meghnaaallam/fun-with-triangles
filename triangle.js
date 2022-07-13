

//isTriangle?
let input=document.querySelectorAll('.user-input');
let submitBtn =document.querySelector('#submit-btn');
let outputTxt=document.querySelector('#output-text');


submitBtn.addEventListener('click',isTriangle);


function calculateSumofTriangles(angle1,angle2,angle3){
    const sumOfTriangles=angle1+angle2+angle3;
    return sumOfTriangles;
}

function isTriangle() {
    const sumofAngles=calculateSumofTriangles(Number(input[0].value),Number(input[1].value),Number(input[2].value));

    if(sumofAngles===180) {
        outputTxt.textContent= `the angles form a triangle`;
    }
    else {
        outputTxt.textContent= `oops! the angles do not form a triangle`;
    }
}

