let dispalybox = document.querySelector(".display");

function showdisplay(event){
    const x = event.target.innerText;
    if (dispalybox.innerHTML == 0) {
        return dispalybox.innerHTML = x;
    }
return dispalybox.innerHTML += x;

} 

function calc (){
    let result = dispalybox.innerText;
   dispalybox.innerText=(eval(result));

};

function allclear (){
    dispalybox.innerText=0;
}
function clear (){
let text = dispalybox.innerText;
if(text.length === 1 ) 
{dispalybox.innerText = 0}else{
    dispalybox.innerText = text.substring(0 , text.length - 1);
}
}

document.querySelector(".calculate").addEventListener("click" , calc)
document.querySelector(".all-clear").addEventListener("click" , allclear)
document.querySelector(".clear-last").addEventListener("click" , clear)







let list = document.querySelectorAll(".show-display");
list.forEach(item => {
item.addEventListener("click",showdisplay)

})

