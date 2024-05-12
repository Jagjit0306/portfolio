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