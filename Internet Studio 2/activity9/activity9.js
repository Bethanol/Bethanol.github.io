let ball=document.getElementById('ball');
//let ballSize=ball.getContext('2d');
let on_or_off= false;
let x=1;
let y=1;
let vx=2;
let vy=1;
setInterval(function(){move_ball();}, 10);
/*for (var i=10;i<=20;i++){
  ball.style.top='20rem';
  ball.style.left=i+'20rem';
  console.log('done');
}*/
function move_ball(){
  if (on_or_off){
    x=x+vx;
    y=y+vy;
    if(x>660||x<0){
      vx=vx*(-1);
    }
    if(y>450||y<0){
      vy=vy*(-1);
    }
    ball.style.top=y+'px';
    ball.style.left=x+'px';
    document.getElementById('xnum').innerHTML=ball.style.left;
    document.getElementById('ynum').innerHTML=ball.style.top;
    console.log(x+','+y); 
  }
  //ballSize.scale(size.value,size.value);
}
function power(){
  on_or_off = !on_or_off;
  if(on_or_off==false){
    document.getElementById('switch').innerHTML='On';
  } else{
    document.getElementById('switch').innerHTML="Off";
  }
}
function change_ball_size(){
  let ballSize=document.getElementById('sizeChange').value;
  ball.style.fontSize=ballSize+'px';
  console.log(ballSize);
}