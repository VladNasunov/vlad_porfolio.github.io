fetch('http://api.openweathermap.org/data/2.5/weather?id=3021372&appid=1d364693afa3bb30702d144caf0c7973')
.then(function (resp) { return resp.json() })
.then(function (data) {
    console.log(data);
    document.querySelector('.header__weather-city').innerHTML = data.name;
    document.querySelector('.header__weather-deg').innerHTML = Math.round(data.main.temp - 273) + '&deg';
    document.querySelector('.header__weather-desc').innerHTML = data.weather[0]['description'];
    document.querySelector('.header__weather-features li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
})
.catch(function (){

});

document.querySelector('.menu__link-burger').addEventListener('click', function(e){
    e.preventDefault();
    console.log('hi');
    if(this.classList.contains('is-active')){
        this.classList.remove('is-active');
        document.querySelector('.menu__link').classList.remove('is-active');
    }
    else{
        this.classList.add('is-active');
        document.querySelector('.menu__link').classList.add('is-active');
    }
})


let images = document.querySelectorAll('.photo__img');
let current = 0;
function slider(){
    for (let i = 0; i < images.length; i++) {
        images[i].classList.add('opacity0');
    }
    images[current].classList.remove('opacity0');
    
}

slider();
document.querySelector('.photo__btn-left').onclick = function(){
    if (current-1 == -1){
        current = images.length -1;
    } else{
    current--;
    }
    slider();
};
document.querySelector('.photo__btn-right').onclick = function(){
    if (current+1 == images.length){
        current = 0;
    } else{
    current++;
    }
    slider();
};
































