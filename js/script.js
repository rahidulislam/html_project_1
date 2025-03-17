const faqs = document.querySelectorAll(".faq-item")

faqs.forEach((faq)=>{
    faq.addEventListener("click",()=>{
        const icon = faq.querySelector("svg")
        faq.classList.toggle("active")
        if (icon.classList.contains("fa-plus")){
            icon.classList.replace("fa-plus","fa-xmark")
        }else{
            icon.classList.replace("fa-xmark","fa-plus")
        }
    })
})
