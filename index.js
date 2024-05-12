let ontop = false;
setInterval(()=>{
    let pfp = document.getElementById('pfp')
    if(!window.scrollY && !ontop) {
        ontop = true
        pfp.classList.remove('pfp-big-pers')
        pfp.classList.add('pfp-big')
        pfp.addEventListener('animationend',(e)=>{
            pfp.classList.add('pfp-big-pers')
            pfp.classList.remove('pfp-big')
        } )
        // pfp.classList.remove('pfp-small')
    }
    else if(window.scrollY && ontop) {
        pfp.classList.remove('pfp-big-pers')
        pfp.classList.add('pfp-small')
        pfp.addEventListener('animationend', (e)=>{
            pfp.classList.remove('pfp-small')
            pfp.classList.remove('pfp-big-pers')
        })
        ontop = false
        // pfp.classList.remove('pfp-big')
    }
},100)

$(document).ready(function() {
    var cards = $('.card');
    var currentIndex = 0;
  
    function showCard(index) {
      cards.removeClass('center');
      cards.eq(index).addClass('center');
    }
  
    function cycleCards() {
      showCard(currentIndex);
      currentIndex = (currentIndex + 1) % cards.length;
      setTimeout(cycleCards, 2000); // Adjust the timing here (milliseconds)
    }
  
    cycleCards();
  });  

function main() {
    let bar_els = document.getElementsByClassName('bar-el')
    for(let i = 0; i < bar_els.length; i++) {
        if(!i){
            bar_els[i].addEventListener('click', ()=>{
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  });
            })
        }
        if(i==1){
            bar_els[i].addEventListener('click', ()=>{
                window.scrollTo({
                    top: 395,
                    left: 0,
                    behavior: "smooth",
                  });
            })
        }
        if(i==2){
            bar_els[i].addEventListener('click', ()=>{
                window.scrollTo({
                    top: 1100,
                    left: 0,
                    behavior: "smooth",
                  });
            })
        }
    }
}