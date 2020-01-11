const correctAnswers=['B','B','B','B'];
const form = document.querySelector('.quiz-form');
const result=document.querySelector('.result');
const persent=result.querySelector('.text-primary');

form.addEventListener('submit', e=> {
    e.preventDefault();
    let score=0;
    const useranswers=[form.q1.value, form.q2.value, form.q3.value, form.q4.value];
    //check answers
    useranswers.forEach((answer, index)=> {
        if(answer===correctAnswers[index]){
            score+=25;
        }
    });
    scrollTo(0,0);
    console.log(score);
    
    result.classList.remove('d-none');
    let output=0;
    const timer = setInterval(()=>{
        persent.textContent=`${output}%`;
        if(output==score){
            clearInterval(timer);
        } else {
            output++;
        }
    },10);
});

