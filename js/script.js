document.querySelectorAll("accordian-title").forEach(title=>{
    title.addEventListener("click",function(){
        this.parentElement.classList.toggle("active")
    })
})