
const images = [
    {   
        image: "img/01.webp", 
        title: "Marvel's Spiderman Miles Morales", 
        text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.", 
    }, 
    
    { 
        image: "img/02.webp", 
        title: "Ratchet & Clank: Rift Apart", 
        text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.", 
    },
    
    { 
        image: "img/03.webp", 
        title: "Fortnite", 
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.", 
    }, 
    
    { 
        image: "img/04.webp", 
        title: "Stray", 
        text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city", 
    }, 
    
    { 
        image: "img/05.webp", 
        title: "Marvel's Avengers", 
        text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.", 
    } 
    ];

// seleziono div 
const element = document.getElementsByClassName("element");
const divContainer = document.querySelector(".container");


// stampo carousel nel DOM

const carousel = 
`<div class="carousel">
    <div class="element-container">
        <div class="element active">
            <img src="${images[0].image}" alt="immagine">
            <div class="title">${images[0].title}</div>
            <div class="text">${images[0].text}</div>
        </div>
        <div class="element">
            <img src="${images[1].image}" alt="immagine">
            <div class="title">${images[1].title}</div>
            <div class="text">${images[1].text}</div>
        </div>
        <div class="element">
            <img src="${images[2].image}" alt="immagine">
            <div class="title">${images[2].title}</div>
            <div class="text">${images[2].text}</div>
        </div>
        <div class="element">
            <img src="${images[3].image}" alt="immagine">
            <div class="title">${images[3].title}</div>
            <div class="text">${images[3].text}</div>
        </div>
        <div class="element">
            <img src="${images[4].image}" alt="immagine">
            <div class="title">${images[4].title}</div>
            <div class="text">${images[4].text}</div>
        </div>
        <div class="next">
        <i class="fa-solid fa-chevron-left fa-4x"></i>
        </div>
        <div class="back">
            <i class="fa-solid fa-chevron-right fa-4x"></i>
        </div>   
        </div>
    </div>
</div>`

divContainer.innerHTML += carousel;

// elemento con classe active che farà cambiare immagine nel carosello
let activeElement = 0;

// seleziono next per scorrere in avanti l'immagine
const nextButton = document.querySelector(".next");

// azioni dove il click del bottone next farà scorrere l'immagine
nextButton.addEventListener("click", function(){

    if(activeElement < element.length -1){
        // tolgo classe active
        removeClass("active");

        // incremento indice dell'elemento per andare all'elemento successivo
        activeElement++;

        // aggiungo classe active al prossimo elemento
        addClass("active");
    }// ciclo infinito
    else if(activeElement === element.length -1){
    
        // tolgo classe active
        removeClass("active");

        // torno a indice 0
        activeElement = 0;

        // aggiungo classe active al prossimo elemento
        addClass("active");
   }
   
});

// seleziono back
const backButton = document.querySelector(".back");

// azioni per far si che al click del bottone back il mio carosello possa tornare indietro
backButton.addEventListener("click", function(){

    if(activeElement > 0){
        // tolgo classe active all'elemento precedente
        removeClass("active");

        // decremento incide dell'elemento per andare all'elemento precedente 
        activeElement--;

        // aggiungo classe active all'elemento
        addClass("active");
    }   // ciclo infinito
    else if(activeElement === 0){
        
        // tolgo classe active
        removeClass("active");

        // torno indice ultimo (?)
        activeElement = 4;

        // aggiungo la classe active al prossimo elemento del carosello
        addClass("active");
    }
});


// FUNZIONI GENERALI
// aggiungo classe ad element
function addClass(classname){
    element[activeElement].classList.add(classname);
};

// rimuovo classe ad element
function removeClass(classname){
    element[activeElement].classList.remove(classname);
};