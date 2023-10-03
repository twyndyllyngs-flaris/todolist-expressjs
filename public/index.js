let cb = document.querySelectorAll('input[type="checkbox"]')

for(let i = 0; i < cb.length; i++){
    cb[i].addEventListener('change', async () => {
        if(cb[i].checked){
            //cb[i].nextElementSibling.firstElementChild.classList.add("line-through")
        }else{
            //cb[i].nextElementSibling.firstElementChild.classList.remove("line-through")
        }
    })
}

