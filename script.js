let Elements=document.querySelectorAll(".price");
let totalPrice=0;
for(let el of Elements){
 totalPrice+=Number(el.innerText);
}

let row= document.createElement("tr")
let cell1= document.createElement("td")
let cell2= document.createElement("td")
cell2.innerText=+totalPrice;
cell1.innerText="Total Price";
row.appendChild(cell1)
row.appendChild(cell2)

let table= document.querySelector("table")
table.appendChild(row)