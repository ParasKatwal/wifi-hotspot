// Ad timer
const landingPage = document.querySelector('.landing_page_ad');
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
            landingPage.style.display = "none";
        }
    }, 1000);
}
window.onload = function () {
    var eight = 5,
        display = document.querySelector('#timer');
    startTimer(eight, display);
};

const next = document.querySelector('.next');
const alreadyBtn = document.querySelector('.already_code_btn');
const firstForm = document.querySelector('.first_form');
const prev = document.querySelector('.previous_btn');
const secondForm = document.querySelector('.second_form');
const formSubmitBtn = document.querySelector('.submit_btn');
const TnC = document.querySelector('.TnC');
const termsCondition = document.querySelector('.terms_condition');
const termsClose = document.querySelector('.terms_condition_close');

if (next) {
    next.addEventListener('click', function () {
        // userDataSubmit();
        firstForm.style.display = "none";
        secondForm.style.display = "block";
    });
}
if (alreadyBtn) {
    alreadyBtn.addEventListener('click', function () {
        firstForm.style.display = "none";
        secondForm.style.display = "block";
    });
}
if (prev) {
    prev.addEventListener('click', function () {
        firstForm.style.display = "block";
        secondForm.style.display = "none";
    });
}
if (TnC) {
    TnC.addEventListener('click', function () {
        termsCondition.style.display = "block";
    });
}
if (termsClose) {
    termsClose.addEventListener('click', function () {
        termsCondition.style.display = "none";
    });
}

function showCodeView() {

}

function userDataSubmit() {

    var userForm = $("#customerData");

    var serializedData = userForm.serialize();

    $.ajax({
        type: "POST",
        url: 'http://10.10.99.176:8080/data',
        data: serializedData,
        success: function (response) {
            console.log(response);
            firstForm.style.display = "none";
            secondForm.style.display = "block";
        }
    });

    //   showCodeView();


    // jQuery.ajax({
    //     url: '',
    //     data: {
    //         name: document.getElementById('fullName').value,
    //     }
    // }).then(function(resp){


    // },function(err){

    // });

}

function codeSubmit() {
    var code = document.querySelector('.wifi_code').value;
    // console.log(code)
    // console.log(chapId)
    // console.log(chapChallenge)
    // document.sendin.username.value = document.login.username.value;
    // document.sendin.password.value = hexMD5('$(chap-id)' + document.login.username.value + '$(chap-challenge)');
    // document.sendin.submit();
    // alert('submitted');

    document.sendin.username.value = code;
    document.sendin.password.value = hexMD5(chapId + code + chapChallenge);
    document.sendin.submit();
}

formSubmitBtn.addEventListener('click', codeSubmit);

// Slider of ads
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}   
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 5000); 
}