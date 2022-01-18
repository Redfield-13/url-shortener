var input = document.getElementsByClassName("input")

var caution = document.getElementsByClassName("caution")
var svg = document.getElementsByClassName("svg")
var button = document.getElementById("btn")


for(var i =0 ; i<svg.length;i++){
    svg[i].style.display = "none"
}

for(var i =0 ; i<svg.length;i++){
    caution[i].style.display = "none"
}

button.addEventListener('click',function(e){
    e.preventDefault()
    for(var l =0; l<input.length;l++){
        if (input[l].value === "") {
            caution[l].style.display ="block"
            svg[l].style.display = "inline"
            input[l].style.borderColor = "rgb(231, 83, 83)";
            input[l].classList.add("lk")
            console.log(l)
        }
        else{
            caution[l].style.display ="none"
            svg[l].style.display = "none"
            input[l].style.borderColor = "#959595";
            input[l].classList.remove("lk")
            input[l].style.color = "#3a3a3a"
        }
        if (!(input[2].value.includes('@')) ||( (input[2].value.includes('#','-','!','/','?') || input[2].value.includes('-','-','!','/','?') || input[2].value.includes('!','-','!','/','?') || input[2].value.includes('/','-','!','/','?') || input[2].value.includes('?','-','!','/','?')))) {
            console.log('waaaaaaaaaaaaaaai')
            caution[2].style.display ="block"
            svg[2].style.display = "inline"
            input[2].style.borderColor = "rgb(231, 83, 83)";
            input[2].classList.add("lk")
            input[2].style.color = "rgb(231, 83, 83)"
        }
        else{
            caution[2].style.display ="none"
            svg[2].style.display = "none"
            input[2].style.borderColor = "#959595";
            input[2].classList.remove("lk")
            input[2].style.color = "#3a3a3a"
        }
    }
    
  
})