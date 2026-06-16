const btn =document.querySelector(".btn");
const iconBtn =document.querySelector(".icon-btn");
const fixed = document.querySelector(".section-fix")
const inp1 =document.querySelector(".inp1");
const inp2 =document.querySelector(".inp2");
function clearInput(){
    inp1.value=""
    inp2.value=""
}
btn.addEventListener('click',clearInput)
 
iconBtn.addEventListener('click',()=>{
    fixed.classList.toggle("open")
})