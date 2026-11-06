(()=>{
const hdr=document.getElementById('hdr'),hero=document.getElementById('top');
const onS=()=>hdr.classList.toggle('solid',scrollY>hero.offsetHeight-90);
addEventListener('scroll',onS,{passive:true});onS();
const imgs=[...document.querySelectorAll('#gal img')],lb=document.getElementById('lb'),im=document.getElementById('lbImg'),n=document.getElementById('lbN'),c=document.getElementById('lbC');
let i=0;const pad=x=>String(x).padStart(2,'0');
const show=k=>{i=(k+imgs.length)%imgs.length;im.src=imgs[i].src;im.alt=imgs[i].alt;n.textContent=pad(i+1)+' / '+pad(imgs.length);c.textContent=imgs[i].alt};
const open=k=>{show(k);lb.classList.add('on');document.body.style.overflow='hidden'};
const close=()=>{lb.classList.remove('on');document.body.style.overflow=''};
imgs.forEach((g,k)=>g.parentElement.addEventListener('click',()=>open(k)));
document.querySelector('[data-open]').addEventListener('click',()=>open(0));
document.getElementById('lbX').onclick=close;
document.getElementById('lbP').onclick=()=>show(i-1);
document.getElementById('lbF').onclick=()=>show(i+1);
addEventListener('keydown',e=>{if(!lb.classList.contains('on'))return;if(e.key==='Escape')close();if(e.key==='ArrowLeft')show(i-1);if(e.key==='ArrowRight')show(i+1)});
})();
