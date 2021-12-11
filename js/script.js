document.getElementById("burger").onclick = function() {
    open()
  };
  
  function open() {
    document.getElementById("menu").classList.toggle("trigger");
}
document.getElementById("close").onclick = function(){
      document.getElementById("menu").classList.add("trigger");
      
  }






let NewSlider = new Swiper('.news-slider ', {

    loop: true,
    effect: 'coverflow',
    // grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 78,
    coverflowEffect: {
    CSSSelector: 'contain',
    rotate: 0,
    stretch: 0,
    depth: 0,
    modifier: 200,
    slideShadows : false,
    
    },
    slideToClickedSlide: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },



});




google.maps.event.addDomListener(window, 'load', init);

function init() {

    let mapOptions = {

        zoom: 11,


        center: new google.maps.LatLng(47.5274998,-122.0298996,14.13), 


        styles: [{"featureType":"all","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"all","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"administrative.country","elementType":"geometry","stylers":[{"color":"#868686"},{"visibility":"off"}]},{"featureType":"administrative.country","elementType":"geometry.stroke","stylers":[{"visibility":"on"}]},{"featureType":"administrative.country","elementType":"labels.text.fill","stylers":[{"color":"#d2d2d2"}]},{"featureType":"administrative.province","elementType":"geometry","stylers":[{"color":"#676767"},{"visibility":"on"}]},{"featureType":"administrative.locality","elementType":"labels.text.fill","stylers":[{"color":"#848484"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#0F1114"},{"visibility":"on"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#0F1114"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#0F1114"}]},{"featureType":"landscape.natural.landcover","elementType":"geometry.fill","stylers":[{"color":"#0F1114"},{"visibility":"on"}]},{"featureType":"landscape.natural.terrain","elementType":"geometry.fill","stylers":[{"color":"#0F1114"},{"visibility":"on"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"lightness":21},{"color":"#0F1114"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#131E1E"}]},{"featureType":"road","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"visibility":"simplified"},{"color":"#3c3c3c"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"lightness":29},{"weight":0.2}]},{"featureType":"road.highway.controlled_access","elementType":"geometry","stylers":[{"color":"#4e4e4e"},{"visibility":"simplified"},{"lightness":"-20"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"visibility":"simplified"},{"color":"#373737"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"visibility":"on"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"lightness":16},{"color":"#313131"},{"visibility":"simplified"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#0F1114"},{"lightness":19},{"visibility":"off"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"visibility":"on"}]}]
    };


    let mapElement = document.querySelector('.maaaap');

    let map = new google.maps.Map(mapElement, mapOptions);


    const iconBase = "../img/"

    let marker = new google.maps.Marker({
        position: new google.maps.LatLng(47.5279228,-122.0323272,15.13),
        map: map,
        icon: `${iconBase}cardpoint.png`,

    });
}

document.getElementById("activiesBg").controls = false;

const observer = lozad();
observer.observe();


let london = document.querySelector('._active-title1');
let moscow = document.querySelector('._active-title2');
let rusAdress = document.querySelector('.rus_p');



    london.onclick = function(){

        moscow.classList.remove('title-nav_active');

        if (moscow.classList !== 'title-nav_active'){
            london.classList.add('title-nav_active');
            rusAdress.innerHTML = `Suite 12 2nd Floor, Queens House, 180 Tottenham Court Road, London W1T 7PD`;
            rusAdress.style.cssText = ``;
        }
        
            
    };

    
    moscow.onclick = function(){

        london.classList.remove('title-nav_active');

        if (london.classList !== 'title-nav_active'){
            moscow.classList.add('title-nav_active');
            rusAdress.style.cssText = `font-family: 'Gothic A1', sans-serif; display: block; font-weight: 600;`;
            rusAdress.innerHTML = `БЦ «Галерея 76», ул. Профсоюзная, д. 76, 117393, Москва, Россия`;
        }
        

    };

    document.getElementById("vid1").controls = false;
    document.getElementById("activiesBg").controls = false;
    document.getElementById('vid1').play();
    document.getElementById('activiesBg').play();

    let usrAgent = window.navigator.userAgent;
    if (usrAgent.match(/iPad|iPhone/i)) {
        document.querySelector('.infobg1').style.cssText = 'background-attachment: scroll;';
        document.querySelector('.infobg2').style.cssText = 'background-attachment: scroll;';
        document.querySelector('.infobg3').style.cssText = 'background-attachment: scroll;';
        document.querySelector('.infobg4').style.cssText = 'background-attachment: scroll;';
        
    }