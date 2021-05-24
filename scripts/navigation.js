const items = document.querySelectorAll(".nav-items");
const nav = document.querySelector('.main-header');
const returnTop = document.querySelector('.return-to-top');

(window.onload = function(){
    items.forEach((item) =>{
        if(item.classList.contains("active")){
            item.children[0].style.color = 'rgb(236,236,236)';            
        }
    })
})

function checkIfActive(){
    for(let i=0; i<items.length; ++i){
        items[i].addEventListener('click',function(){
            for(i=0;i<items.length;++i){
                items[i].classList.remove('active');
                items[i].children[0].style.color = '#000';
            }
            this.classList.add("active");
            this.children[0].style.color = 'rgb(236,236,236)';
        })
    }
}

checkIfActive();

window.onscroll = function(){
    resetActive();
    if(window.pageYOffset > 0){
        returnTop.style.display = "flex";        
    }else{
        returnTop.style.display = "none";
    }    
}

returnTop.addEventListener('click',resetActive);
function resetActive(){
    for(let i=0; i<items.length; ++i){
        if(items[i].classList.contains('active')){
            items[i].classList.remove('active');
            items[i].children[0].style.color = "#000";
        }
        items[0].classList.add('active');
        items[0].children[0].style.color = 'rgb(236,236,236)';
    }
}



