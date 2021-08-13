
const addCoin = document.getElementById("add"); //html button represented by a variable named addCoin
var myTable = document.getElementById("hodl"); //table variable with user input data
var tBody = document.getElementById("content"); //data on table

function coin(name, price, amount, current) {
	function checkStorage() {

	}

	//initialize arrays to put user data into, so they can be easily inserted into the table
	let dps = [];
	let lbls = [];

	var Pie = document.getElementById("assetChart").getContext('2d'); //outlines the charts properties
	assetChart = new Chart(Pie, {
		type: 'doughnut', 
		data: { 
			labels: lbls,
			datasets: [{
				label: 'Asset amounts',
				data: dps,
				backgroundColor: [
					
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(153, 102, 255, 0.2)',
					'rgba(255, 159, 64, 0.2)'
				],
				borderColor: [
					'rgba(255, 99, 132, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
					'rgba(255, 159, 64, 1)'
				],
				borderWidth: 1
			}]
		},
		options: {}
	
	});

	addCoin.addEventListener('click', function() {
		//puts user input into the table elements named at the top
		name = document.getElementById("getName").value;
		price = document.getElementById("getPrice").value;
		amount = document.getElementById("getAmount").value;
		current = 0;

		tBody.innerHTML += `
		<tr>
			<th>${name}</th>
			<th>${amount}</th>
			<th>${"$" + price}</th>
			<th>${"$" + current}</th>
		</tr>
		`; //creates a new table row each time the button is clicked

	dps.push(price * amount); //pushes the user input data into the array
	lbls.push(name);

	for (let i = 0; i == lbls.length; i++)  //pushes the array contents into the table to show on screen
		assetChart.labels.push(lbls[i]);
		assetChart.update();
	
	Window.sessionStorage = function populateStorage(item) {
		localStorage.setItem(item);

	};

	populateStorage(assetChart.onchange);
	populateStorage(tBody.onchange);
	populateStorage(dps.onchange);
	populateStorage(lbls.onchange);
	});
}

coin();
