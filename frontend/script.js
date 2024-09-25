// var moment = require('moment')
// var fomatted_date = moment(date).format('YYYY-MM-DD');

//Click sur search => la liste des trips s'affiche
document.getElementById('search').addEventListener('click', function(){
   const departure = document.querySelector('#departureInput').value;
   const arrival = document.querySelector('#arrivalInput').value;
   const date = document.querySelector('#dateInput').value;


fetch(`http://localhost:3000/trips/${departure}/${arrival}/${date}`)
	.then(response => response.json())
	.then(data => {
        console.log(data)
		if (data) {
			for (let i = 0; i < data.length; i++) {
               
				document.querySelector('#resultat').innerHTML += `
                <div class='container-trip'>
                    <p class= 'departureCity'>${data[i].departure}</p>
                    <p class ='arrivalCity'>${data[i].arrival}</p>
                    <p class ='timeDeparture'>${data[i].date}</p>
                    <p class='priceTrip'>${data[i].price}</p>
                    <button type='button' class ='buttonBook' href='card.html' id='${data[i]._id}'>Book</button>
                </div>`;
              //  console.log(data[i]._id)
                
			}

        }         
            console.log(data._id)
        
        
        
        //Quand on clique, on ajoute un trip dans notre panier

    
	})
    
    
});


for (let i = 0; i < document.querySelectorAll('.buttonBook').length; i++) {
		document.querySelectorAll('.buttonBook')[i].addEventListener('click', function () {

    window.location.assign('card.html')
           
    fetch(`http://localhost:3000/bookings/`, {

        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({id: id}),
    }).then(response => response.json())
        .then(data => {
           console.log(data)

        });
});
}
//Quand on clique, on ajoute un trip dans notre panier
// document.querySelector('#???').addEventListener('click', function () {
//     const departure = document.querySelector('#departureInput').textContent;
//     const arrival = document.querySelector('#arrivalInput').textContent;
//     const date = document.querySelector('#dateInput').texContent;
//     const price = document.querySelector('#dateInput').textContent;


// 	fetch('http://localhost:3000/bookings', {
// 		method: 'POST',
// 		headers: { 'Content-Type': 'application/json' },
// 		body: JSON.stringify({departure, arrival, date, price}),
// 	}).then(response => response.json())
// 		.then(data => {
// 			if (data.result) {
				
// 				document.querySelector('#lisCart').innerHTML += `
//                 <div class='container-trip'>
//                     <div class= 'departureCity'>${data[i].departure}</div>
//                     <div class ='arrivalCity'>${data[i].arrival}</div>
//                     <div class ='timeDeparture'>${data[i].date}</div>
//                     <div class='priceTrip'>${data[i].price}</div>
//                     <div id='${data[i].id} >X</div>
//                 </div>`;
// 			}

// 		});
// });