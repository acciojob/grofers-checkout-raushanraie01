let Elements=document.querySelectorAll(".price");
let totalPrice=0;
for(let el of Elements){
 totalPrice+=Number(el.innerText);
}

let row= document.createElement("tr")
let cell= document.createElement("td")
cell.innetText=+totalPrice;
row.appendChild(cell)

let table= document.querySelector("table")
table.appendChild(row)