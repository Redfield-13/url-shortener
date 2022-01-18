var body= document.getElementById("bd")
var html = document.getElementById('html')
var num = 2269
if (body.scrollWidth < 500) {
    num = 3485
}
else{
    num = 2269
}

body.style.height = num + "px"
var input = document.getElementById('input')
var in_btn = document.getElementById("in-btn")
var dropdown = document.getElementById('menu')
var bar = document.getElementById("bar")
var par = document.getElementById("par")
var sec02 = document.getElementById('sec-02')
var times = 0
in_btn.addEventListener('click',function(e){
    e.preventDefault()
    

    

    times = times + 1    
    var nume = 90 * times
    if (body.style.width < 500) {
        var numy = 1480
        sec02.style.height = nume + numy + "px"
        
    }
    par.style.marginTop = 200 + nume + "px"
    body.style.height = num + nume +"px"
    
    var div = document.createElement("div")
    var h3 = document.createElement('h3')
    var h3_2nd =document.createElement('h3')
    var copy_btn = document.createElement('button')
    var h3_text = document.createTextNode('')
    var h3_2nd_text = document.createTextNode('')
    var copy_text = document.createTextNode('COPY')
    div.className = "col-12 links"
    copy_btn.className = "copy"
    h3_2nd.className = "short"
    copy_btn.id = "copy-btn"
    h3.appendChild(h3_text)
    h3_2nd.appendChild(h3_2nd_text)
    copy_btn.appendChild(copy_text)
    h3_2nd.style.userSelect = "all"
    div.appendChild(h3)
    div.appendChild(h3_2nd)
    div.appendChild(copy_btn)
    bar.appendChild(div)

    h3.style.overflow = 'hidden'
    // h3_2nd.style.overflow = 'hidden'
    // h3_2nd_text.style.overflow = 'hidden'
    // h3_text.style.overflow = 'hidden'

    fetch(' https://api.shrtco.de/v2/shorten?url='+ input.value).then(res =>{
        return res.json()
    }).then(data=>{
        console.log(data.result.full_short_link);
        h3_2nd_text.nodeValue =  data.result.full_short_link
    })

    h3_text.nodeValue = input.value
    

//     fetch('https://api.shrtco.de/v2/',{
//   method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({
//     url:input.value
//     })
//      }).then(res => {
//       return res.json()
//      }
//          ).then(data =>  h3_2nd_text.nodeValue = 'https://rel.ink/'+data.hashid)
//     h3_text.nodeValue = input.value
    
    copy_btn.onclick = function(){
        var el = document.createElement('textarea')
        el.value = h3_2nd_text.nodeValue
        // input.value = h3_2nd_text.nodeValue
        input.select()
        input.setSelectionRange(0,99999)
        document.execCommand("copy")
        copy_text.nodeValue = 'COPIED!'
        copy_btn.style.backgroundColor = '#3a3052'

    }
    
})

// dropdown.addEventListener('click',function(e){
//     e.preventDefault()

// })



