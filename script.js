const sliderItem = document.querySelectorAll('.slider-item')

const textFromSlide = document.querySelectorAll('.slider-item-text')

let func = function (){


    textFromSlide.forEach(item => {
        console.log(item.offsetHeight);
       if(item.offsetHeight >= 80){
        let ahtung = document.createElement('button')
        ahtung.innerHTML = `<img src="./dots.svg" alt="">`;
        item.appendChild(ahtung)
        ahtung.classList.add('btns')
        ahtung.addEventListener('click', function () {
              item.parentNode.classList.toggle('active-slide')
        })
       }
    })
};
func();

const swiper = new Swiper('.swiper', {
    slidesPerView: 2.5,
    spaceBetween: 40,
    
   
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });





