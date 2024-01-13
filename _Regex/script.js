document.querySelector('form').addEventListener('submit', validate);
document.querySelector('form').addEventListener('onclick', validate);


let pattern;
function learnPattern() {
    // let patternStr = prompt("Enter a pattern:");
    // let pattern = `/${patternStr}/gi`;
 

    // pattern = /E00/gi;
    // pattern = /[abc]/gi;
    // pattern = /[^abc]/gi;
    // pattern = /[a-d]/gi;
    // pattern = /[^a-d]/gi;
    // pattern = /[a-zA-Z]/;
    // pattern = /[a-zA-Z]ism/gi;  
    
    // console.log("Pattern Expression is : ", pattern)
    return pattern;
}

function validate(event) {
    event.preventDefault();
    let e_danger = document.getElementById('lbl-danger');
    let e_success = document.getElementById('lbl-success');
    var inpVal = document.getElementById("inpTxt").value;

    // let pattern = /E00/gi;
    pattern = learnPattern();


    if (pattern.test(inpVal)) {
        // alert('Success')        
        e_success.style.visibility = "visible";
        e_danger.style.visibility = "hidden";
    } else {
        // alert('Invalid username')
        e_danger.style.visibility = "visible";
        e_success.style.visibility = "hidden";
    }
}
