let img=document.querySelector(".toggle img");
let input=document.getElementById('password');
let message=document.querySelector('.msg');
let strengthBar=document.getElementById('strength-bar');
// console.log(message);
let parameters={
    count:false,
    letters:false,
    numbers:false,
    special:false
};

function toggle(){
    if(input.type==="password"){
        input.type="text";
        img.src="assets/icons8_hide.ico";
    }
    else{
        input.type="password";
        img.src="assets/icons8_eye.ico";
    }
}
function checkerPassword(){
    let passwordValue=input.value;
    parameters.count=passwordValue.length>=8?true:false;
    parameters.letters=(/[A-Za-z]+/.test(passwordValue))?true:false;
    parameters.numbers=(/[0-9]+/.test(passwordValue))?true:false;
    parameters.special=(/[!\"$%&/()=?@~`\\.\';:+=^*_-]+/.test(passwordValue))?true:false;

    let barLength=Object.values(parameters).filter(value=>value);
    // console.log(Object.values(parameters) ,barLength);

    function colorAlter(message){
        message.style.color="black";
    }
    strengthBar.innerHTML="";
    for(let i in barLength){
        let span=`<span class="strength"></span>`;
        strengthBar.innerHTML+=span;
    }

    let spanRef=document.querySelectorAll('.strength');
    // console.log(spanRef);
    spanRef.forEach((element)=>{
        switch(spanRef.length-1){
            case 0:
                element.style.background="#ff3e36";
                message.textContent=" your password is very weak";
                colorAlter(message);
                break;
            case 1:
                element.style.background="#ff691f";
                message.textContent=" your password is weak";
                colorAlter(message)
                break;
            case 2:
                element.style.background="#ffda36";
                message.textContent=" your password is good";
                colorAlter(message)
                break;
            case 3:
                element.style.background="#0be881";
                message.textContent=" your password is strong";
                message.style.color="#0be881";
                break;
        }
    })


}

input.addEventListener('input',checkerPassword);
