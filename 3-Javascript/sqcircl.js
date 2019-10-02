var start = new Date().getTime();
document.getElementById('circle').onclick = function() {

 
document.getElementById('circle').style.display = "none";

 var end = new Date().getTime();
 function timcalcu(){return(end - start) / 1000;}
 
 
setTimeout( function randWidth() {
 
 
 
 document.getElementById('Timecal').innerHTML = timcalcu()+"s";
 
   function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;}
  
  function customRandomNumberLeft() {
    var x;
    x = Math.floor(Math.random() * 8);
    return 30 * x + 15;}
 
 function customRandomNumberTop() {
    var x;
    x = Math.floor(Math.random() * 8);
    return 30 * x + 15;}
 
 
 var f;
 f = Math.round(Math.random());
  
 if (f == 1) {
 
 document.getElementById('circle').style.borderRadius = "60px";
 }
else {

document.getElementById('circle').style.borderRadius = "0px";
}
 
    var v = Math.random();
     v = (Math.random()*100)+20;
	 v = Math.floor(v);
     v += "px";
 document.getElementById('circle').style.display = "block"	 
 document.getElementById('circle').style.width = v;
 document.getElementById('circle').style.height = v;
 document.getElementById('circle').style.backgroundColor = getRandomColor();
 document.getElementById('circle').style.left = customRandomNumberLeft()+"px";
 document.getElementById('circle').style.top = customRandomNumberTop()+"px";
 start = new Date().getTime();}
 
 , 3000);

 
}
