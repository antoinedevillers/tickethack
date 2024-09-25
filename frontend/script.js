// affichage de tous les trajets choisis

fetch('http://localhost:3000/tickethack/bookings/')
 .then(response => response.json())
 .then(data => {
    if (data === null) {
        let vide = 'No tickets in your cart. Why not plan a trip?';
        return vide;
    };
    for (let i = 0; i < data.length; i++){
        document.querySelector('.container-trip').innerHTML +=
                `<div id='trip'> ${data[i].departure}  ${data[i].arrival} </div>
                <div id='departureTime'>${data[i].departureTime}</div>
                <div id='priceTrip'>${data[i].priceTrip}€</div>
                <button id='deleteTrip'>X</button>
                `
        console.log(data);}
    });

//affichage du prix total
document.querySelector('#price');       

// veille sur le/les boutons delete

for(let i = 0; i < document.querySelectorAll('#deleteTrip').length; i++) {
    document.querySelectorAll('#deleteTrip')[i].addEventListener('click', function(){
        this.parentNode.remove();
      }
    );
};

// veille sur le bouton purchase

document.querySelector('#purchase').addEventListener('click', function (){
    isBooked = true;
    window.location.href = 'bookings.html'
    this.parentNode.remove();
})
