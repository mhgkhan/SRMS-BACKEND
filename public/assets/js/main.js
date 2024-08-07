console.log("main js is working on site ")
// setTimeout(() => {
//     document.querySelector("body").classList.add("dark")
// }, 5000);


let headerButton = document.querySelector(".header-button")


headerButton.addEventListener("click", e=>{

    if(headerButton.querySelector("i").classList.contains("fa-bars")){
        headerButton.querySelector("i").classList.remove("fa-bars")
        headerButton.querySelector("i").classList.add("fa-close")
        console.log("close button showed")
    }
    else{
        headerButton.querySelector("i").classList.add("fa-bars")
        headerButton.querySelector("i").classList.remove("fa-close")
        
        console.log("menu button showted")
    }
})