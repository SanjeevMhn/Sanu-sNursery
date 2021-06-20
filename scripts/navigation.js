const items = document.querySelectorAll(".nav-items");
const nav = document.querySelector('.main-header');
const returnTop = document.querySelector('.return-to-top');
const hamburger = document.querySelector('.hamburger');
const dropDownNav = document.querySelector('.drop-menu-list');
const dropItems = document.querySelectorAll('.drop-menu-items');
let screenWidth;

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

window.addEventListener('touchmove', function(e){
    let y = e.touches[0].clientY;
    console.log(y);
    if(y>0){
        checkScroll();
        returnToTop();
    }
});

window.addEventListener('scroll', function(){
    //checkScroll();
    returnToTop();
});

window.onscroll = function(){
    //resetActive();
    checkScroll();
    returnToTop();
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

hamburger.addEventListener("click", function(){
    let height = parseInt(window.getComputedStyle(dropDownNav).getPropertyValue('height'));
    if(height == 0){
        dropDownNav.style.height = "30rem";
        dropItems.forEach(function(drop){
            drop.style.height = "20%";
        });
    }else{
        dropDownNav.style.height = "0";
    }

});

dropItems.forEach(function(drop){
    drop.addEventListener('click', function(){
        drop.parentElement.style.height = "0";
    })
})
function checkScroll(){
    if(parseInt(window.innerWidth) == 414){
        if(window.pageYOffset > 0){
            nav.classList.add('sticky');
        }else{
            nav.classList.remove('sticky');
        }
    }
}

function returnToTop(){
    if(window.pageYOffset > 0){
        returnTop.style.display = "flex";
    }else{
        returnTop.style.display = "none";
    }
}
