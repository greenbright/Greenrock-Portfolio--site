'use strict'
console.log('NEW PROJECT');

const popHide = document.querySelector('.pop-hide');
const emailContact = document.querySelector('.mail');
const card = document.querySelector('.card');
const contactMe = document.querySelector('.contact-me');
const reviewBtn = document.querySelector('.review');
const profileBtn = document.querySelector('.profile');
const portfolioBtn = document.querySelector('.portfolio');
const displayText = document.querySelector('.display-text');
const displayReview = document.querySelector('.display-review');
const profileSection = document.querySelector('#profile');
const portfolioSection = document.querySelector('#portfolio-grid');
const clickMe = document.querySelector('.click');



  class navbar {
      numbering = 9;
      clicks = "";
      hover = "";
      digit = document.querySelector('#digit');
    constructor(home, aboutus, profile, portfolio){
        this.home = home;
        this.aboutus = aboutus;
        this.profile = profile;
        this.portfolio = portfolio;

    }
    increase(){
        clickMe.addEventListener('click', function(){
            digit.textContent = `${this.numbering + 1}`;
            console.log(this.numbering)
        })

    }

    review(){
   console.log('this page is  not available');
    displayReview.classList.remove('hidden');
    displayReview.classList.add('nav_display_text');

    }
    modal(){
        const lightbox = document.createElement('div');
        lightbox.id = 'lightbox';
        document.body.appendChild(lightbox)
        const popProfile = document.querySelector('#pop-profile');
        popProfile.addEventListener('click', function(e){
          e.preventDefault();
          lightbox.classList.add('active');
          const text = document.createElement('p');
          text.p = text.p;
          lightbox.appendChild(text)
        })

        lightbox.addEventListener('click', function(e){
            e.preventDefault();
           lightbox.classList.remove('active')
        })
    }
  
    scrollprofile(){
        profileSection.scrollIntoView({ behavior: 'smooth'});
      
        
    }
    scrollportofolio(){
        portfolioSection.scrollIntoView({ behavior: 'smooth'});
    }
}

const Navigator = new navbar();

reviewBtn.addEventListener('click',function(e){
    e.preventDefault();
    Navigator.review();


})

profileBtn.addEventListener('click', function(e){
    e.preventDefault();
   Navigator.scrollprofile();
  
  });

  portfolioBtn.addEventListener('click', function(e){
    e.preventDefault();
   Navigator.scrollportofolio();
  });

  Navigator.modal()
  
class Storage {
    time = 0;
    #score = 10;
    #name = "";

    constructor(myProfile,contactme){
       this.myProfile = myProfile;
       this.contactme = contactme;
    }
    
    showmore(){
        if(card.className == "open"){
            //shrink the box
            card.className = "";
            myProfile.innerHTML = "SHOW MORE";
            console.log('logging')
        }else{
            //expand the box
            card.className ="open";
            myProfile.innerHTML = "Check footer to contact me";
            
        }

    }
    contact(){
        alert('This will be in my database or localstorage');
    }
    profile(){
        alert('This will be a profile modal');
    }
   
    _setLocalStorage(){
        
       localStorage.setItem('contact',JSON.stringify(emailContact.value))
    
    }
  _getLocalStorage(){
    const data = JSON.parse(localStorage.getItem('workouts'));
    console.log(data);
  }
  localStorage(){
    this._setLocalStorage();
    this._getLocalStorage();
}
    clear(){
        emailContact.value = '';
    }
}



const storage = new Storage(); 
console.log(storage);
contactMe.addEventListener('click', function(){
    storage.localStorage();
    storage.clear();
});



 /*SHOW SLIDER SECTION  */
window.addEventListener("load",()=>{
    autoSlide();
});

function autoSlide() {
 setInterval(()=>{
      slide(getItemActiveIndex() + 1 ) ;
 },3000);  // slide speed is 1s
}

function slide(toIndex){
    //console.log(toIndex);  return 1
    const itemsArray = Array.from(document.querySelectorAll('.carousel_item'));
    const itemActive = document.querySelector('.carousel_item__active');
    // Check if toIndex exceeds the  number of carousel
    if(toIndex >= itemsArray.length){
     toIndex = 0;
    }
   
    const newItemActive = itemsArray[toIndex];
    console.log(newItemActive);// return second div image
    // start transition
    newItemActive.classList.add("carousel_item__pos_next");
    setTimeout(()=>{
        newItemActive.classList.add("carousel_item__next");
        itemActive.classList.add("carousel_item__next");
    },20);

    // Remove all transition and switch to active
    newItemActive.addEventListener("transitionend",()=>{
        itemActive.className ="carousel_item";
        newItemActive.className ="carousel_item carousel_item__active";
    }, {
        once : true,
    });

};

function getItemActiveIndex(){
 const itemsArray = Array.from(document.querySelectorAll('.carousel_item'));
 const itemActive = document.querySelector('.carousel_item__active');
 const itemActiveIndex = itemsArray.indexOf(itemActive);
 console.log(itemActiveIndex)
 return itemActiveIndex;
 // return 0
}
/* END OF SLIDER SECTION */
