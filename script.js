const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	let data=document.querySelectorAll(".price");
	let table=document.querySelector("table")
	let row=document.createElement("tr");
let totalPrice=	data.reduce((acc,curr)=>acc+curr,0)
	row.innerText(totalPrice);
	table.append(row)
  
};

getSumBtn.addEventListener("click", getSum);

