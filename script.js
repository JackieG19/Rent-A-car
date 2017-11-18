
var myCar = { 
    Economy: {price: 100, carAvail: 150},
    Standard: {price: 150, carAvail: 150},
};

var rental = {
    Economy: [],
    Standard: [],
};


function myDisplay(value) {
    var selecter = document.getElementById("select").value;
   if(selecter == "Economy") {
        document.getElementById("display").innerHTML = "Car Price" + myCar.Economy.price + "<br>" + "Cars Available" + myCar.Economy.carAvail;}
   else if(selecter == "Standard"){
       document.getElementById("display2").innerHTML = "Car Price" + myCar.Standard.price + "<br>" + "Cars Available" + myCar.Standard.carAvail;}
   console.log(myDisplay()); 
}


function myFunction() {
    alert("Thank you for renting with us!");
}

	     
