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
    }
    else if(window.scrollY && ontop) {
        pfp.classList.remove('pfp-big-pers')
        pfp.classList.add('pfp-small')
        pfp.addEventListener('animationend', (e)=>{
            pfp.classList.remove('pfp-small')
            pfp.classList.remove('pfp-big-pers')
        })
        ontop = false
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
                    let h = document.getElementsByClassName('headings')
                    h[1].classList.add('headings-anim')
                    h[1].addEventListener('animationend', (e)=>{
                        h[1].classList.remove('headings-anim')
                    })        
            })
        }
        if(i==2){
            bar_els[i].addEventListener('click', ()=>{
                window.scrollTo({
                    top: 1100,
                    left: 0,
                    behavior: "smooth",
                  });
                  let h = document.getElementsByClassName('headings')
                    h[2].classList.add('headings-anim')
                    h[2].addEventListener('animationend', (e)=>{
                        h[2].classList.remove('headings-anim')
                    }) 
            })
        }
    }
}