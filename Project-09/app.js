var body = document.getElementById("bd")
var num = 2269
num = num +(365*0) 
body.style.height = num + "px"
var input = document.getElementById('input')



// alert(body.style.height)
var in_btn = document.getElementById("in-btn")
var bar = document.getElementById("bar")
var par = document.getElementById("par")

in_btn.addEventListener('click',function(e){
    e.preventDefault()
    alert(input.value)
    // var nume = 180+50+50
    // par.style.marginTop = nume+"px"
    var div = document.createElement("div")
div.className = "col-12 links"
var h3 = document.createElement('h3')

var h3_2nd =document.createElement('h3')
var copy_btn = document.createElement('button')
var h3_text = document.createTextNode('https://www.frontendmentor.io/dashboard')
var copy_text = document.createTextNode('COPY')
copy_btn.className = "copy"
h3_2nd.className = "short"
// h3_text.appendChild('hsyh')
h3_text.nodeValue = input.value
h3.appendChild(h3_text)
var h3_2nd_text = document.createTextNode('https://rel.ink/nRJwVw')
copy_btn.appendChild(copy_text)
div.appendChild(h3)
h3_2nd.appendChild(h3_2nd_text)
div.appendChild(h3_2nd)
div.appendChild(copy_btn)

bar.appendChild(div)
})






















// /* div added to bar */
// var div = document.createElement("div")
// div.className = "col-12 links"
// var h3 = document.createElement('h3')
// var h3_2nd =document.createElement('h3')
// var copy_btn = document.createElement('button')
// var h3_text = document.createTextNode('https://www.frontendmentor.io/dashboard')
// var copy_text = document.createTextNode('COPY')
// copy_btn.className = "copy"
// h3_2nd.className = "short"
// h3.appendChild(h3_text)
// var h3_2nd_text = document.createTextNode('https://rel.ink/nRJwVw')
// copy_btn.appendChild(copy_text)
// div.appendChild(h3)
// h3_2nd.appendChild(h3_2nd_text)
// div.appendChild(h3_2nd)
// div.appendChild(copy_btn)

// bar.appendChild(div)
