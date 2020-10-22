//Функция переключения темы
let head = document.querySelector('.header'),
 head_btn = document.querySelector('.header__text-btn'),
 head_about = document.querySelector('.header__about'),
 head_text = document.querySelector('.header__text-js'),
 body = document.querySelector('.body'),
 footer = document.querySelector('.footer');

function switcher(){
    if (this.classList.contains('is-active')){
        this.classList.remove('is-active');
        head.classList.remove('is-active');
        head_about.classList.remove('is-active');
        head_btn.classList.remove('is-active');
        head_text.classList.remove('is-active');
        body.classList.remove('is-active');
        footer.classList.remove('is-active');
    }
    else{
        this.classList.add('is-active');
        head.classList.add('is-active');
        head_about.classList.add('is-active');
        head_btn.classList.add('is-active');
        head_text.classList.add('is-active');
        body.classList.add('is-active');
        footer.classList.add('is-active');
    }
}
document.querySelector('.header__nav-switcher').onclick = switcher;

//Функция отложенного запуска кнопки неоновой подсветки
function neon(){
    setTimeout(function(){
        document.querySelector('.header__text-btn').classList.add('neon');
    },4350)
}
neon();
//функция отложенного запуска конпки about me 
function white(){
    setTimeout(function(){
        document.querySelector('.header__about').classList.add('header__about-white');
    },4700)
}
white();
//Функция печати текста
const t = [
    "Hello world i am",
];
function typeText(){
    let line = 0;
    let count = 0;
    let out = '';
    let htmlOut = document.querySelector('.header__text-js');

    function typeLine(){
        //рисуем строку 
        let interval = setTimeout(function() {
            out += t[line][count];
            htmlOut.innerHTML = out + '|';
            count++;
            if(count >= t[line].length){
                count = 0;
                line++;
                if (line == t.length){
                    clearTimeout(interval); //остановили таймаут
                    htmlOut.innerHTML = out; //убираем вертикальную черту
                    return true;
                }
            }
            typeLine();
        }, 250);
    }
    typeLine();
}
typeText();


const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}