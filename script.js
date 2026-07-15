const links = document.querySelectorAll("nav a");

links.forEach(link => {

link.addEventListener("click",function(){

links.forEach(item=>item.classList.remove("ativo"));

this.classList.add("ativo");

});

});

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>50){

header.style.boxShadow="0 5px 20px rgba(0,0,0,.25)";

}else{

header.style.boxShadow="none";

}

});