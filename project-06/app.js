var button = document.getElementById("btn")
var box = document.getElementById("box")
var price_1 = document.getElementById("st-price")
var price_2 = document.getElementById("nd-price")
var price_3 = document.getElementById("rd-price")

button.addEventListener('click',toggle)



function toggle(){

  
    // if (button.classList.contains("nah")) {
    //     // button.classList.remove("anime")
        
    //     button.classList.add("xanime")
    //     button.classList.remove("nah")


    //     // button.classList.add("xanime")
    //     // console.log("mj")
    //     // button.classList.remove("anime")
    //     // console.log("jm")
       
    // }
    // // if (button.classList.contains("xanime")) {
    // //     button.classList.remove("xanime")
    // //     button.classList.add("nah")
    // // }
    // if (!(button.classList.contains("nah")) || !(button.classList.contains("xanime"))) {
    //     button.classList.add("nah")
        
        
    // }
    // button.classList.add("anime")
   
if (button.classList.contains("xanime")) {
    button.classList.remove("xanime")
    // button.style.left = "3px"
    
    button.classList.add("anime")
    box.classList.remove("box")
    box.classList.add("xbox")
    price_1.innerHTML = "19.99"
    price_2.innerHTML = "24.99"
    price_3.innerHTML = "39.99"
    
    
    // box.style.backgroundColor = "#cccccc"
}
else{
    button.classList.add("xanime")
    box.classList.remove("xbox")
    box.classList.add("box")
    price_1.innerHTML = "199.99"
    price_2.innerHTML = "249.99"
    price_3.innerHTML = "399.99"
}

    
    // button.classList.remove("anime")
}
