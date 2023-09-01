
const txtEl = document.getElementById("txt")
const copyEl = document.getElementById("copy")
const btn = document.getElementById("btn")

btn.addEventListener("click", ()=> {
     
   let password = ""
   let length = 12
   let upperCase = "ABCDEFGHIJKLMNOPQRSTUVXYZ"
   let lowerCase = "abcdefghijklmnopqrstuvwxyz"
   let number = "0123456789"
   let symbols = "~`@#$%^&*()_+<>?/;:[]"
   let allChar = upperCase + lowerCase + number + symbols 

   password += upperCase[ Math.floor(Math.random() * upperCase.length)]
   password += lowerCase[ Math.floor(Math.random() * lowerCase.length)]
   password += number[ Math.floor(Math.random() * number.length)]
   password += symbols[ Math.floor(Math.random() * symbols.length)]

   while (length > password.length) {
       password += allChar[ Math.floor(Math.random() * allChar.length)]
   }
   txtEl.value = password;
})

copyEl.addEventListener("click", ()=> {
   txtEl.select();
   document.execCommand("copy")
   alert("text copy to clipboard")
})