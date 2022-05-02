/*SHOW SLIDER SECTION  */
window.addEventListener("load",()=>{
    maticSlide();
});

function maticSlide() {
 setInterval(()=>{
      slider(getItemActiveIndexTwo() + 1 ) ;
 },3000);  // slide speed is 1s
}

function slider(toIndexto){
    //console.log(toIndex);  return 1
    const itemsArrayOne = Array.from(document.querySelectorAll('.slider_item'));
    const itemActiveOne = document.querySelector('.slider_item__active');
    // Check if toIndex exceeds the  number of carousel
    if(toIndexto >= itemsArrayOne.length){
     toIndexto = 0;
    }
   
    const newItemActiveOne = itemsArrayOne[toIndexto];
    console.log(newItemActiveOne);// return second div image
    // start transition
    newItemActiveOne.classList.add("slider_item__pos_next");
    setTimeout(()=>{
        newItemActiveOne.classList.add("slider_item__next");
        itemActiveOne.classList.add("slider_item__next");
    },20);

    // Remove all transition and switch to active
    newItemActiveOne.addEventListener("transitionend",()=>{
        itemActiveOne.className ="slider_item";
        newItemActiveOne.className ="slider_item slider_item__active";
    }, {
        once : true,
    });

};

function getItemActiveIndexTwo(){
 const itemsArrayOne = Array.from(document.querySelectorAll('.slider_item'));
 const itemActiveOne = document.querySelector('.slider_item__active');
 const itemActiveIndexOne = itemsArrayOne.indexOf(itemActiveOne);
 console.log(itemActiveIndexOne)
 return itemActiveIndexOne
 ;
 // return 0
}

/*SCROLING PROPERTIES
btnScrollTo.addEventListener('click', function(e){
    e.preventDefault();
  section1.scrollIntoView({ behavior: 'smooth'});
  });*/
  