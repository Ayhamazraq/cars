var name = prompt("what is your name") 
alert ("hey, wlecome to my website " + name )

while (favCar != "bmw" && favCar != "mercedes"){
 var favCar = prompt("what is you fav car?, please choose one of these ; bmw , mercedes")}
 
 var numberofpic = prompt ("how many  you wish to see it?")

 while (numberofpic >10){
   numberofpic - prompt ("please enter number less than 10")
 }

function favCarr (){



if (favCar == "mercedes"){

 
 for (var i=0; i<numberofpic; i++)
  {document.write (
    "<div>" + "<h4>" + favCar + "</h4>" + "<img src='https://www.mercedes-benz.com/en/company/_jcr_content/root/slider/sliderchilditems/slideritem/image/MQ7-0-image-20191025121730/01-mercedes-benz-ag-company-3400x1440.jpeg' width='250' height='250' />" + "</div>")}

}
else if (favCar == "bmw") {
  
 for (var i=0; i<numberofpic; i++)

  {document.write ( "<div>" + "<h4>" + favCar + "</h4>" + "<img src='http://4.bp.blogspot.com/-mE9Ev2foEHQ/T56ppThUWPI/AAAAAAAAAwE/4d9BtN-f_44/s1600/bmw+car+prices--5.jpg' width='250' height='250' />" + "</div>" )}}

else  {
  alert('we dont have this car')
} }
favCarr ();
