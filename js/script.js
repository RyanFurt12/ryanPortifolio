document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
  
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
  
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: 'smooth',
        });
      }
    });
  });

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (rect.top >= 0 &&
            rect.top <= document.documentElement.clientHeight/3 ||
            rect.bottom <= document.documentElement.clientHeight &&
            rect.bottom >= document.documentElement.clientHeight/3);
}


function onScrollTrigger() {
    var sobox = document.querySelector("#sobre");
    var exbox = document.querySelector("#experiencia");
    var esbox = document.querySelector("#estudos");
    var prbox = document.querySelector("#premios");
    
    var box = { sobox, exbox, esbox, prbox };
    
    var side = document.querySelectorAll(".sidebar a");
    
    for (let i = 0; i < side.length; i++) {
      if (isElementInViewport(box[Object.keys(box)[i]])) {
        side[i].classList.add('active');
      } else {
        side[i].classList.remove('active');
      }
    }
  }  
      

window.addEventListener("scroll", onScrollTrigger);      
onScrollTrigger();


// mobile
const navModal = document.querySelector('.sidebar');

function openCloseModal(botaoP){
    const botao = botaoP.querySelector("h2")
    if(botao.innerHTML == "X") botao.innerHTML = "=";
    else botao.innerHTML = "X";

    navModal.classList.toggle('on');
}