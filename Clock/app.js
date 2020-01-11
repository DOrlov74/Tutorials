const clock=document.querySelector('.clock');
const now=new Date();

const tick=()=>{
    const now=new Date();
    const h=now.getHours();
    const m=now.getMinutes();
    const s=now.getSeconds();
    const html=`
    <span>${h}</span> : 
    <span>${m}</span> : 
    <span>${s}</span>
    `;
    clock.innerHTML=html;
};

setInterval(tick, 1000);

//console.log(dateFns.isToday(now));
console.log(dateFns.format(now, 'YYYY'));
console.log(dateFns.format(now, 'MMMM'));
console.log(dateFns.format(now, 'dddd'));
console.log(dateFns.format(now, 'Do'));
console.log(dateFns.format(now, 'dddd Do MMMM YYYY'));

const before=new Date('February 1 2019 12:00:00');
console.log(dateFns.distanceInWords(now, before, {addSuffix: true}));