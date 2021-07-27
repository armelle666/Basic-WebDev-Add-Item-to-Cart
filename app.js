//Carousel

let slideIndex = 1;

let myTimer;

let slideshowContainer;

window.addEventListener("load",function() {
    showSlides(slideIndex);
    myTimer = setInterval(function(){plusSlides(1)}, 4000);

    slideshowContainer = document.getElementsByClassName('slideshow-inner')[0];
  
    slideshowContainer.addEventListener('mouseenter', pause)
    slideshowContainer.addEventListener('mouseleave', resume)
})

// NEXT AND PREVIOUS CONTROL
function plusSlides(n){
    clearInterval(myTimer);
    if (n < 0){
        showSlides(slideIndex -= 1);
    }
    
    else {
    showSlides(slideIndex += 1); 
    }
  
    if (n === -1){
        myTimer = setInterval(function(){plusSlides(n + 2)}, 2000);
    }
    
    else {
        myTimer = setInterval(function(){plusSlides(n + 1)}, 2000);
    }
}

//Controls the current slide and resets interval if needed
function currentSlide(n){
    clearInterval(myTimer);
    myTimer = setInterval(function(){plusSlides(n + 1)}, 2000);
    showSlides(slideIndex = n);
}

function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    if (n > slides.length) {slideIndex = 1}

    if (n < 1) {slideIndex = slides.length}

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");x  
    }

    slides[slideIndex-1].style.display = "block";
    // dots[slideIndex-1].className += " active";
}

pause = () => {
    clearInterval(myTimer);
}

resume = () =>{
    clearInterval(myTimer);
    myTimer = setInterval(function(){plusSlides(slideIndex)}, 4000);
}





//GALLERY

var galleryData = {"gallery":[
  {
      "Image": "Items/Mouse/item1.png",
      "ID": "001",
      "Name": "LUOM Mouse",
      "Brand": "LUOM",
      "Description": "USB Mouse, Red",
      "Price": 150.00
  },
  {
      "Image": "Items/Mouse/item2.png",
      "ID": "002",
      "Name": "Gaming Mouse",
      "Brand": "AUROZA",
      "Description": "Cable Mouse, Black&Blue",
      "Price": 350.00
  },
  {
      "Image": "Items/Mouse/item3.png",
      "ID": "003",
      "Name": "Customized Mouse",
      "Brand": "II",
      "Description": "Customized Cable Mouse, Orange",
      "Price": 500.00
  },
  {
      "Image": "Items/iPhone/iPhone11.png",
      "ID": "004",
      "Name": "iPhone 11",
      "Brand": "Apple",
      "Description": "iPhone 11 succeeds the iPhone XR, and it features a 6.1-inch LCD Liquid Retina HD display.",
      "Price": 38000
  }
]
};

function f1() {


  for (let i = 0; i < galleryData.gallery.length; i++) {

    var div1 = document.createElement('div');

    let div = document.getElementById('example');
    div.append(div1)

    div1.innerHTML = "Name: " + galleryData.gallery[i].Name + "<br>Brand: " + galleryData.gallery[i].Brand + "<br>Description: " + galleryData.gallery[i].Description + "<br>Price: " + galleryData.gallery[i].Price + "<br><button>Order</button>" + "<br>========================<br>";

  }


 //ORDER BUTTON

  var orderBtn = document.getElementsByTagName("button");

  var cartedItems = [];

  for (let i = 1; i < orderBtn.length; i++) {

    var addItem = orderBtn[i];
    var productGallery = galleryData.gallery;
    
    addItem.addEventListener("click", function(event) {

      var a = i-1;
      var varName = productGallery[a].Name;
      cartedItems.push(galleryData.gallery[a]);
      alert("Product has been added to cart!");
      console.log(varName);

      for (let b = 0; b < orderBtn.length; b++) {

        document.getElementById("itemCart").innerHTML = "<ul>" + cartedItems[b] + "</ul>";

      }
      
    });



    if(cartedItems.length!=0){
      document.getElementById("itemCart").innerHTML += cartedItems[cartedItems.length-1];
    }



  }

  // function updateTotalPrice() {

  //   for (let a = 0; a < orderBtn.length; a++) {
  //   // var cartItemContainer = galleryData[0];
  //   var cartRows =  galleryData.gallery[a];

  //     for (let b = 1; b < orderBtn.length; b++) {
  //       var cartRow = cartRows;
  //       var itemPrice = galleryData.gallery.Price;
      
  //     }

  //     // console.log(cartRow, itemPrice);

  //     var cartItemPrice = galleryData.gallery.Price;

  //     console.log(cartItemPrice);

  //   }

  // }

  // updateTotalPrice();

    // Modal
  var ebModal = document.getElementById('cartModal');
  var ebBtn = document.getElementById("addToCart");
  var ebSpan = document.getElementsByClassName("modal_close")[0];
 
  ebBtn.onclick = function() {
      ebModal.style.display = "block";
  }

  ebSpan.onclick = function() {
      ebModal.style.display = "none";
  }

  window.onclick = function(event) {
      if (event.target == ebModal) {
          ebModal.style.display = "none";
      }
  }


}

f1();

