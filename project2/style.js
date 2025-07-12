//addition in javascript
console.log(56 + 23 + 108)
//addition in javascript desnt work if its a string
console.log("56 + 23 +108")

let viktor_age = 18
viktor_age = 30
const my_eyes = 2
console.log(my_eyes)


function add_two_numbers(num1, num2,) {
    let result = num1 + num2
    return result
}
console.log(add_two_numbers(5, 6))

function numbers(num1) {
    let result = Math.sqrt(num1) * 2
    return result
}
console.log(numbers(64) * 2)

function alpha(num1, num2, num3, num4, num5) {
    let result = (num1 + num2 + num3 + num4 + num5) / 5
    return result
}
var answer = alpha(1, 2, 3, 4, 5)
console.log(answer)


let example5 = ["infinix", "iphone", "amazon", "tecno", "oppo", "vivo", "samsung", "itel", "google"]
example5.push("nothing")

console.log(example5[3].length == 5)







let example = 5

if (example == 7) {
    console.log("money is sweet")
}
else {
    console.log("money is not sweet")
}





document.getElementById("subject").style.color = "pink"
document.getElementById("subject").style.fontFamily = "italics"
document.getElementById("subject").style.fontWeight = "500" 
console.log("testing");


for (let i = 0; i <= 10; i++) {

    console.log(i)
}
const frog = document.querySelector("#frogjump")
let i = 0

while (i < 20) {
    frog.innerHTML += "<br>the number is" + 1;
    i++
}

function test(){
    frog.innerHTML = "something is working"
}

function changeText(id) {
    id.innerHTML = "i am chosen";
  }

  function mOver(obj) {
    obj.innerHTML = "Thank You"
  }

  function mOut(obj) {
    obj.innerHTML = "Mouse Over Me"
  }

  function mDown(obj) {
    obj.style.backgroundColor = "#1ec5e5";
    obj.innerHTML = "Release Me";
  }

  function mUp(obj) {
    obj.style.backgroundColor="#D94A38";
    obj.innerHTML="Thank You";
  }


$(document).ready(function () {

  console.log("the document is loaded")

});

$(document).ready(function () {
  console.log("The page is loaded")
})

$(document).ready(function () {
  $('#vote').click(function () {
    console.log("A student has voted")
  })
})
// $(document).ready( function(){
//   $('#hide').click(function (){
//     $(".me").hide()
//   })
// })
// $(document).ready(function () {
//   $('#show').click(function () {
//     $(".me").show()
//   })
// })

$(document).ready(function () {
  $('#shock').click(function () {
    $(".me").animateToggle()
  })
})