window.onload = async function () {
    const deneme = await fetch("data.json")
    const content = await deneme.json()
    console.log("gelen veriler:", content)

    const parentDiv = document.querySelector(".models");
    const hoodies = document.querySelector(".hoodies");
    const outfits = document.querySelector(".outfits");
    const ball = document.querySelector(".ball");

    

    const res = Object.values(
        content.reduce((acc, curr) => (
            (acc[curr.category] = acc[curr.category] || []).push(curr), acc), {}
        ))


    //SHOES
    console.log(res[0]);
    res[0].map(deneme => {
       

        const div = document.createElement("div");
        const h1 = document.createElement("h1");
        const h3 = document.createElement("h3");
        const img = document.createElement("img");
        const btn = document.createElement("button");
        h1.innerText = deneme.name
        h3.innerText = deneme.price + " " + "$"
        btn.innerHTML = "Buy"
        img.src = deneme.image
        img.alt = deneme.name
        div.appendChild(img)
        div.appendChild(h1)
        div.appendChild(h3)
        div.appendChild(btn)
        parentDiv.appendChild(div)
        let a = document.querySelector("#shoes");
        parentDiv.style.display = "none";
        a.addEventListener("click", () => {
            outfits.style.display = "none";
            hoodies.style.display = "none";
            ball.style.display = "none";
            parentDiv.style.display = "flex";


        })
        let main = document.querySelector("#mySidenav");
        const img2 = document.createElement("img");
        const pri = document.createElement("h3");
        const del = document.createElement("button");
        del.innerHTML = "Remote Shoes"
        pri.style.textAlign = "center"
        pri.style.color = "white"
        img2.src = deneme.image
        pri.innerText = deneme.price + " " + "$"
        btn.addEventListener("click", () => {
            alert("İtem add to 'İtem's'")
            main.appendChild(img2);
            main.appendChild(pri);
            main.appendChild(del);
        });
        del.addEventListener("click", function () {
            main.removeChild(img2);
            main.removeChild(pri);
            main.removeChild(del);
        });

    })



    //HOODİES
    console.log(res[1]);
    res[1].map(deneme => {
        const div2 = document.createElement("div");
        const h1A = document.createElement("h1");
        const h3A = document.createElement("h3");
        const imgA = document.createElement("img");
        const btnA = document.createElement("button");
        h1A.innerText = deneme.name
        h3A.innerText = deneme.price + " " + "$"
        btnA.innerHTML = "Buy"
        imgA.src = deneme.image
        imgA.alt = deneme.name
        div2.appendChild(imgA)
        div2.appendChild(h1A)
        div2.appendChild(h3A)
        div2.appendChild(btnA)
        hoodies.appendChild(div2)
        let b = document.querySelector("#hoodies");
        hoodies.style.display = "none";
        b.addEventListener("click", () => {
            outfits.style.display = "none"
            parentDiv.style.display = "none";
            ball.style.display = "none";
            hoodies.style.display = "flex";
        })

        let main = document.querySelector("#mySidenav");
        const img3 = document.createElement("img");
        const pri2 = document.createElement("h3");
        const del2 = document.createElement("button");
        del2.innerHTML = "Remote Hoodie"
        pri2.style.textAlign = "center"
        pri2.style.color = "white"
        img3.src = deneme.image
        pri2.innerText = deneme.price + " " + "$"
        btnA.addEventListener("click", () => {
            alert("İtem add to 'İtem's'")
            main.appendChild(img3);
            main.appendChild(pri2);
            main.appendChild(del2);
        });
        del2.addEventListener("click", function () {
            main.removeChild(img3);
            main.removeChild(pri2);
            main.removeChild(del2);
        });
    })
    //OUTFİTS
    res[2].map(deneme => {
        const div3 = document.createElement("div");
        const h1B = document.createElement("h1");
        const h3B = document.createElement("h3");
        const imgB = document.createElement("img");
        const btnB = document.createElement("button");
        h1B.innerText = deneme.name
        h3B.innerText = deneme.price + " " + "$"
        btnB.innerHTML = "Buy"
        imgB.src = deneme.image
        imgB.alt = deneme.name
        div3.appendChild(imgB)
        div3.appendChild(h1B)
        div3.appendChild(h3B)
        div3.appendChild(btnB)
        outfits.appendChild(div3)
        let c = document.querySelector("#outfits");
        outfits.style.display = "none";
        c.addEventListener("click", () => {
            parentDiv.style.display = "none";
            hoodies.style.display = "none";
            ball.style.display = "none";
            outfits.style.display = "flex";
        })
        let main = document.querySelector("#mySidenav");
        const img4 = document.createElement("img");
        const pri3 = document.createElement("h3");
        const del3 = document.createElement("button");
        del3.innerHTML = "Remote Jacket"
        pri3.style.textAlign = "center"
        pri3.style.color = "white"
        img4.src = deneme.image
        pri3.innerText = deneme.price + " " + "$"
        btnB.addEventListener("click", () => {
            alert("İtem add to 'İtem's'")
            main.appendChild(img4);
            main.appendChild(pri3);
            main.appendChild(del3);
        });
        del3.addEventListener("click", function () {
            main.removeChild(img4);
            main.removeChild(pri3);
            main.removeChild(del3);
        });
    })

    //BALLS
    res[3].map(deneme => {
        const div4 = document.createElement("div");
        const h1C = document.createElement("h1");
        const h3C = document.createElement("h3");
        const imgC = document.createElement("img");
        const btnC = document.createElement("button");
        h1C.innerText = deneme.name
        h3C.innerText = deneme.price + " " + "$"
        btnC.innerHTML = "Buy"
        imgC.src = deneme.image
        imgC.alt = deneme.name
        div4.appendChild(imgC)
        div4.appendChild(h1C)
        div4.appendChild(h3C)
        div4.appendChild(btnC)
        ball.appendChild(div4)
        let d = document.querySelector("#ball");
        ball.style.display = "none";
        d.addEventListener("click", () => {
            parentDiv.style.display = "none";
            hoodies.style.display = "none";
            outfits.style.display = "none";
            ball.style.display = "flex";
        })
        let main = document.querySelector("#mySidenav");
        const img5 = document.createElement("img");
        const pri4 = document.createElement("h3");
        const del4 = document.createElement("button");
        del4.innerHTML = "Remote Ball"
        pri4.style.textAlign = "center"
        pri4.style.color = "white"
        img5.src = deneme.image
        pri4.innerText = deneme.price + " " + "$"
        btnC.addEventListener("click", () => {
            alert("İtem add to 'İtem's'")
            main.appendChild(img5);
            main.appendChild(pri4);
            main.appendChild(del4);
        });
        del4.addEventListener("click", function () {
            main.removeChild(img5);
            main.removeChild(pri4);
            main.removeChild(del4);
        });
        
    })
    let paymentBTN = document.querySelector("#payment");
    let creditCard = document.querySelector("#myModal-3")
       
            paymentBTN.addEventListener("click",()=>{
                creditCard.style.display = "block"
            })

}



function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

//PAY-CREDİT-CARD
let creditCard = document.querySelector("#myModal-3");
let span3 = document.getElementsByClassName("close-3")[0];
$('.input-cart-number').on('keyup change', function(){
    $t = $(this);
  
    if ($t.val().length > 3) {
      $t.next().focus();
    }
  
    var card_number = '';
    $('.input-cart-number').each(function(){
      card_number += $(this).val() + ' ';
      if ($(this).val().length == 4) {
        $(this).next().focus();
      }
    })
  
    $('.credit-card-box .number').html(card_number);
  });
  
  $('#card-holder').on('keyup change', function(){
    $t = $(this);
    $('.credit-card-box .card-holder div').html($t.val());
  });
  
  $('#card-holder').on('keyup change', function(){
    $t = $(this);
    $('.credit-card-box .card-holder div').html($t.val());
  });
  
  $('#card-expiration-month, #card-expiration-year').change(function(){
    m = $('#card-expiration-month option').index($('#card-expiration-month option:selected'));
    m = (m < 10) ? '0' + m : m;
    y = $('#card-expiration-year').val().substr(2,2);
    $('.card-expiration-date div').html(m + '/' + y);
  })
  
  $('#card-ccv').on('focus', function(){
    $('.credit-card-box').addClass('hover');
  }).on('blur', function(){
    $('.credit-card-box').removeClass('hover');
  }).on('keyup change', function(){
    $('.ccv div').html($(this).val());
  });
  
  setTimeout(function(){
    $('#card-ccv').focus().delay(1000).queue(function(){
      $(this).blur().dequeue();
    });
  }, 500);
  

  span3.onclick = function() {
    creditCard.style.display = "none";
  }
  $('.btn').click(function(){ 
    alert("Payment Succesfull");
    window.location.reload()
  });

 
//SLİDE-SHOW
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
         

let container2 = document.querySelector("#container2");
let model = document.querySelector(".models")
let hoodies = document.querySelector(".hoodies")
let outfits = document.querySelector(".outfits")
let ball = document.querySelector(".ball")
function ori(){             
    container2.style.display = "none"              
}
function home(){
container2.style.display = "block"
model.style.display = "none"
hoodies.style.display = "none"
outfits.style.display = "none"
ball.style.display = "none"
}

//KEYFRAME-CATEGORİES
function categories() {
  const orientation = document.querySelector('.orientation');
  orientation.classList.add('animate-heartbeat');
  setTimeout(() => {
    orientation.classList.remove('animate-heartbeat');
  }, 1000);
}

//CONTACT-ROLL&KEYFRAME
function contact(){
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth'
  });
  const orientation = document.querySelector('footer');
  orientation.classList.add('animate-heartbeat');
  setTimeout(() => {
    orientation.classList.remove('animate-heartbeat');
  }, 1000);
  
}






