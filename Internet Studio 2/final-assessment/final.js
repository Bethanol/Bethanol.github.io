shirtTotal();
function shirtTotal(){
  let quantity=document.getElementsByClassName('quantity');
  let quantTotal=document.getElementById('quantTotal');
  let sum=0;
  for(var i=0;i<3;i++){
    sum+=quantity[i].value;
  }
  quantTotal.innerHTML=sum.toString();
}
function individualPriceTotal(size, price){
  let smallQuantity=document.getElementById(size);
}