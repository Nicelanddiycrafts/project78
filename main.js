var image = [
  "Pankaj.jpg","kiran.jpg","me.jpg","2021-08-10 (2).png","https://images-na.ssl-images-amazon.com/images/I/91zbi9M+mKL.jpg"
  ];
  var names= ["Father(Pankaj)","Mother(Kiran)","Nysa","Alysha(BFF)","Family Book"];
  
  var i= 0;
  function nextslide()
   {
     
    if (i == 5)
      {
        i=0;
      }
     document.getElementById("album").src = image[i];
     document.getElementById("familyMember").innerHTML = names[i];
  i++;
  }