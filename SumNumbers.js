function calc() {
   let num1 = document.getElementById(`num1`).value;
   let symbol = document.getElementById(`symbol`).value;
   let num2 = document.getElementById(`num2`).value;
   let sum = 0
   if (symbol === "+"){
   sum = Number(num1)+Number(num2)
   }else if (symbol === "*"){
    sum = Number(num1)*Number(num2)
   }else if (symbol === "/"){
    sum = Number(num1)/Number(num2)
   }else if (symbol === "%"){
    sum = Number(((num1/num2)*100))
   }
   document.getElementById(`sum`).value = sum
}
