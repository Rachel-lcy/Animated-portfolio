//Define DOM elements

const heroImage = document.querySelector("#hero__animation__image");

const tl = document.querySelector("#grid__tl");
const tr = document.querySelector("#grid__tr");
const bl = document.querySelector("#grid__bl");
const br = document.querySelector("#grid__br");

const tlBtn = document.querySelector("#grid__tl__btn");
const trBtn = document.querySelector("#grid__tr__btn");
const blBtn = document.querySelector("#grid__bl__btn");
const brBtn = document.querySelector("#grid__br__btn");

const tlContent = document.querySelector("#grid__tl__Content");
const trContent = document.querySelector("#grid__tr__Content");
const blContent = document.querySelector("#grid__bl__Content");
const brContent = document.querySelector("#grid__br__Content");

const projectOne = document.querySelector(".p-1");
const projectTwo = document.querySelector(".p-2");
const projectThree = document.querySelector(".p-3");

//Define colors and positions
const bgColor = "var(--bg)";
const bgColorAlt = "var(--bg-alt)";
const textColor = "var(--text)";
const textColorAlt = "var(--text-alt)";

let tlActive = "translateX(5vw) translateY(0)";
let tlHidden = "translateX(-100vw) translateY(-100vh);";

let trActive = "translateX(-5vw) translateY(0)";
let trHidden = "translateX(100vw) translateY(-100vh);";

let blActive = "translateX(10vw) translateY(7vh)";
let blHidden = "translateX(-100vw) translateY(100vh);";

let brActive = "translateX(-5vw) translateY(0)";
let brHidden = "translateX(100vw) translateY(100vh);";

//Define the corner that is open
let activeCorner = "";

//Add an event listener to the window object to listen for resize event
window.addEventListener("resize",handleWindowResize);

//Function that handles the styling when resizing window

function handleWindowResize(){

}

//Store last reverse animation, ready to played
let lastReverseAnimation = "";

//Play animation function

function playAnimation(animation, reverseAnimation){
  //Remove all the animation classes from heroImage
  heroImage.classList = "";

  if(lastReverseAnimation !== ""){
    //Click something
    //reverse code here
    heroImage.classList.add(lastReverseAnimation);
    setTimeout(function(){
      heroImage.classList.remove(lastReverseAnimation);
      heroImage.classList.add(animation);
      lastReverseAnimation = reverseAnimation;
    }, 200);
  }else{
    //play forward code here
    heroImage.classList.add(animation);
    lastReverseAnimation = reverseAnimation;
  }
}

function playClosingAnimation(reverseAnimation){

}

//Onclick corner button functions
tlBtn.onClick= function(){
  if(activeCorner  === "top-left"){
    playClosingAnimation("reverse-animate-top-left");
  }else{
    trBtn.innerHTML = "Experience";
    blBtn.innerHTML = "Projects";
    brBtn.innerHTML = "Contact";

    //Setting activeCorner
    activeCorner = "top-left";
    tlBtn.innerHTML = "&uarr;<br/>About";
    handleWindowResize();
    playAnimation("animate-top-left", "reverse-animate-top-left");
    
    //Change background color
    trBtn.style.background =bgColor;
    brBtn.style.background =bgColor;
    blBtn.style.background =bgColor;
    tlBtn.style.background =bgColorAlt;

    //Change text colors
    trBtn.style.color =textColor;
    brBtn.style.color =textColor;
    blBtn.style.color =textColor;
    tlBtn.style.color =textColorAlt;

    //Change positions of the corner content
    trContent.style.transform =trHidden;
    brContent.style.transform =brHidden;
    blContent.style.transform =blHidden;
    tlContent.style.transform =tlActive;
  }

};

trBtn.onClick= function(){
  if(activeCorner  === "top-right"){
    playClosingAnimation("reverse-animate-top-right");
  }else{
    tlBtn.innerHTML = "About";
    blBtn.innerHTML = "Projects";
    brBtn.innerHTML = "Contact";

    //Setting activeCorner
    activeCorner = "top-right";
    trBtn.innerHTML = "&uarr;<br/>Experience";
    handleWindowResize();
    playAnimation("animate-top-right", "reverse-animate-top-right");
    
    //Change background color
    trBtn.style.background =bgColorAlt;
    brBtn.style.background =bgColor;
    blBtn.style.background =bgColor;
    tlBtn.style.background =bgColor;

    //Change text colors
    trBtn.style.color =textColorAlt;
    brBtn.style.color =textColor;
    blBtn.style.color =textColor;
    tlBtn.style.color =textColor;

    //Change positions of the corner content
    trContent.style.transform =trActive;
    brContent.style.transform =brHidden;
    blContent.style.transform =blHidden;
    tlContent.style.transform =tlHidden;
  }

};

blBtn.onClick= function(){
  if(activeCorner  === "bottom-left"){
    playClosingAnimation("reverse-animate-bottom-left");
  }else{
    tlBtn.innerHTML = "About";
    trBtn.innerHTML = "Experience";
    brBtn.innerHTML = "Contact";

    //Setting activeCorner
    activeCorner = "bottom-left";
    blBtn.innerHTML = "Projects<br/>&darr;";
    handleWindowResize();
    playAnimation("animate-bottom-left", "reverse-animate-bottom-left");
    
    //Change background color
    trBtn.style.background =bgColor;
    brBtn.style.background =bgColor;
    blBtn.style.background =bgColorAlt;
    tlBtn.style.background =bgColor;

    //Change text colors
    trBtn.style.color =textColor;
    brBtn.style.color =textColor;
    blBtn.style.color =textColorAlt;
    tlBtn.style.color =textColor;

    //Change positions of the corner content
    trContent.style.transform =trHidden;
    brContent.style.transform =brHidden;
    blContent.style.transform =blActive;
    tlContent.style.transform =tlHidden;
  }

};

brBtn.onClick= function(){
  if(activeCorner  === "bottom-right"){
    playClosingAnimation("reverse-animate-bottom-right");
  }else{
    tlBtn.innerHTML = "About";
    trBtn.innerHTML = "Experience";
    blBtn.innerHTML = "Projects";

    //Setting activeCorner
    activeCorner = "bottom-right";
    brBtn.innerHTML = "Contact<br/>&darr;";
    handleWindowResize();
    playAnimation("animate-bottom-right", "reverse-animate-bottom-right");
    
    //Change background color
    trBtn.style.background =bgColor;
    brBtn.style.background =bgColorAlt;
    blBtn.style.background =bgColor;
    tlBtn.style.background =bgColor;

    //Change text colors
    trBtn.style.color =textColor;
    brBtn.style.color =textColorAlt;
    blBtn.style.color =textColor;
    tlBtn.style.color =textColor;

    //Change positions of the corner content
    trContent.style.transform =trHidden;
    brContent.style.transform =brActive;
    blContent.style.transform =blHidden;
    tlContent.style.transform =tlHidden;
  }

};