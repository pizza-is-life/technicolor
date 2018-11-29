document.addEventListener("DOMContentLoaded", function(){

// Mouse event listeners
const box = document.querySelector(".box");
const boxWrapper = document.querySelector("#box-wrapper");

boxWrapper.addEventListener("mouseover", function(e){

	let x = Math.floor(Math.random() * 255);
	let y = Math.floor(Math.random() * 255);
	let z = Math.floor(Math.random() * 255);
	let rgbCode = "rgb(" +x+ ", " +y+ ", " +z+ ")";

	e.target.style.background = rgbCode;
	e.target.style.boxShadow = "0 0 8px white";
	e.target.zIndex = "100000";

	// reset the color after a short delay
    setTimeout(function() {
      e.target.style.background = "black";
      e.target.style.boxShadow = "none";
      e.target.zIndex = "1";
    }, 750);
  }, false);

}); // DOM content loaded end