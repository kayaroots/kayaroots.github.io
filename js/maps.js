
// The urls for every cities.
const haifa ="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53659.51584267548!2d34.98175651357637!3d32.79968967476533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151dba4c750de845%3A0xc35d23982a81529a!2sHaifa!5e0!3m2!1sen!2sil!4v1644010955939!5m2!1sen!2sil";
const lima ="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249744.03228239645!2d-77.12786477561164!3d-12.026267589041419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c5f619ee3ec7%3A0x14206cb9cc452e4a!2sLima%2C%20Peru!5e0!3m2!1sen!2sil!4v1644010920523!5m2!1sen!2sil";
const california = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6509160.604419716!2d-123.79746185560948!3d37.19307768958545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20USA!5e0!3m2!1sen!2sil!4v1644010992605!5m2!1sen!2sil";
const bali = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1010294.3589175623!2d114.51107281872913!3d-8.454338670064937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd22f7520fca7d3%3A0x2872b62cc456cd84!2sBali!5e0!3m2!1sen!2sil!4v1644011017223!5m2!1sen!2sil";

//Array that contain all my cities.
const mapas =[lima, haifa, california, bali];
let currentlySelected = 0;

const prevBtn =document.querySelector(".prev");
const nextBtn =document.querySelector(".next");
let frame = document.getElementById("maps");

// Previous Button 
prevBtn.addEventListener('click', function(e){
  currentlySelected --; 
  frame.src = mapas[currentlySelected]; //Changing url in the iframe tag.
  nextBtn.disabled = false; 
  
  //Prevent to going back when its in the first item of the list of cities.
  if (currentlySelected === 0) {
    prevBtn.disabled = true;
  }
}); 

// Next Button
nextBtn.addEventListener('click', function(){
  currentlySelected ++; 
  frame.src = mapas[currentlySelected]; //Changing url in the iframe tag.
  prevBtn.disabled = false; //Enable Previous Button.

  //Prevent to going next when its in the last item of the list of cities.
  if (currentlySelected +1 === mapas.length) {
    nextBtn.disabled = true;
  }
});



