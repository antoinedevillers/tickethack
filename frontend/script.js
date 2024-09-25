// affichage de tous les trajets choisis

fetch('http://localhost:3000/bookings/')
 .then(response => response.json())
 .then(data => {console.log(data);
    /*if (data === null) {
        let vide = 'No tickets in your cart. Why not plan a trip?';
        console.log(vide);
        return vide;
    };*/
    let totalP = 0;
    for (let i = 0; i < data.length; i++){
        document.querySelector('.container-trip').innerHTML +=
                `<div id='trip'> ${data[i].departure} -> ${data[i].arrival} </div>
                <div id='departureTime'>${data[i].date}</div>
                <div id='priceTrip'>${data[i].price}€</div>
                <button id='deleteTrip'>X</button>
                `
            totalP += data[i].price;
        console.log(data[i]);}
        document.querySelector('#price').innerHTML = totalP;
    });

//affichage du prix total
      

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
