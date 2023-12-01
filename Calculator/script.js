let input = document.getElementById('inputBox');
let btns = document.querySelectorAll('button');

let string = "";

let arr = Array.from(btns);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        let delButton = document.getElementById("del")
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target === delButton || e.target.parentNode === delButton){
            if (typeof string === 'string') {
                string = string.substring(0, string.length - 1);
                input.value = string;
            } else {
                string = string.toString().slice(0, -1);
                input.value = string;
            }
        }
        else if(e.target.innerHTML == "%"){
            string = input.value/100;
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
        ;
    })
})

