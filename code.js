let q=0;
let cde=document.querySelector('#clock');
let dde=document.querySelector('#date');
let bde=document.querySelector('body');

bde.addEventListener('click',()=>{
  q=1-q;
  if(q===0){
    bde.style.backgroundColor='white';
    cde.style.color='black';
    dde.style.color='black';
  }
  else{
    bde.style.backgroundColor='black';
    cde.style.color='white';
    dde.style.color='white';
  }
});

function clo(){
  let d=new Date();
  let h='';
  if((String)(d.getHours()).length===1)h+='0';
  h+=(String)(d.getHours())+':';
  if((String)(d.getMinutes()).length===1)h+='0';
  h+=(String)(d.getMinutes())+':';
  if((String)(d.getSeconds()).length===1)h+='0';
  h+=(String)(d.getSeconds());
  cde.innerHTML=h;
  h='';
  h+=(String)(d.getYear()+1900)+'. ';
  h+=(String)(d.getMonth()+1)+'. ';
  h+=(String)(d.getDate())+'.';
  dde.innerHTML=h;
}
setInterval(clo,10);
