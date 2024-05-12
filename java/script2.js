document.addEventListener('DOMContentLoaded', function() {
    const startBtn = document.querySelector('.start-btn');
    const popupInfo = document.querySelector('.popup-info');
    const exitBtn = document.querySelector('.exit-btn');
    const main = document.querySelector('.main');
    const continueBtn = document.querySelector('.continue-btn');
    const sectionQuiz = document.querySelector('.section-quiz');
    const quizbox = document.querySelector('.quiz-box');
    const resultbox = document.querySelector('.result-box');
    const reassayerBtn = document.querySelector('.reassayer-btn');
    const pageAcceuilBtn = document.querySelector('.page-acceuil-btn');
 




    startBtn.onclick = () => {
        popupInfo.classList.add('active');
        main.classList.add('active');

    }
    exitBtn.onclick = () => {
        popupInfo.classList.remove('active');
        main.classList.remove('active');

    }
    continueBtn.onclick = () => {
        sectionQuiz.classList.add('active');
        popupInfo.classList.remove('active');
        main.classList.remove('active');
        popupInfo.classList.remove('active');
        main.classList.remove('active');
        quizbox.classList.add('active');
        showQuestions(0);
        questionCounter(questionNumb);
        headerscore();

    }
    reassayerBtn.onclick = () => {
        quizbox.classList.add('active'); 
        nextBtn.classList.remove('active'); 
        resultbox.classList.remove('active');

         questionCount=0;
         questionNumb=1;
         userScore=0;
         showQuestions(questionCount);
         questionCounter(questionNumb);

         headerscore();

    }


pageAcceuilBtn.onclick = () => {
        sectionQuiz.classList.remove('active'); 
        nextBtn.classList.remove('active'); 
        resultbox.classList.remove('active');

         questionCount=0;
         questionNumb=1;
         userScore=0;
         showQuestions(questionCount);
         questionCounter(questionNumb);

        

    }

    let questionCount=0;
    let questionNumb=1;
    let userScore=0;

    const nextBtn=document.querySelector('.suivant-btn');
     nextBtn.onclick = ( ) => {
        if(questionCount < questions.length -1 )
        {
            questionCount++;
        showQuestions(questionCount);
        questionNumb++;
        questionCounter(questionNumb);

        nextBtn.classList.remove('active');
        }
        else
        {
           console.log('réponse enregistrer avec succés !') ;
           showResultBox();
        }

    }
    const choixRep= document.querySelector('.choixRep');

    function showQuestions(index)
    {
        const questionText=document.querySelector('.question');
        questionText.textContent=`${questions[index].numb}.${questions[index].question}`;
         

        let optionTag=`<div class="option"><span>${questions[index].options[0]}</span></div>
        <div class="option"><span>${questions[index].options[1]}</span></div>
        <div class="option"><span>${questions[index].options[2]}</span></div>
        <div class="option"><span>${questions[index].options[3]}</span></div>`;

        choixRep.innerHTML=optionTag;
        const option=document.querySelectorAll('.option')
        for (let i = 0; i < option.length; i++) {
            option[i].addEventListener('click', function() {
                optionSelected(this);
            });
        }

    }
    function optionSelected(answer)
    {
        let userAnswer=answer.textContent;
        let correctAnswer=questions[questionCount].answer;
        let allOptions=choixRep.children.length;

        if(userAnswer==correctAnswer)
        {
            console.log('bonneRéponse');
            answer.classList.add('bonneRéponse');
            userScore+=1;
            headerscore();
        }
        else {
            console.log('mauvaiseRéponse');
            answer.classList.add('MauvaiseRéponse');
            for(let i=0;i<allOptions;i++){

              if(choixRep.children[i].textContent==correctAnswer) {
                choixRep.children[i].setAttribute('class',' option bonneRéponse');
            }
        }
     }
      
        for(let i=0; i<allOptions;i++)
        {
          choixRep.children[i].classList.add('désactivé')  ; 
        }

        nextBtn.classList.add('active');

    }
    function questionCounter(index)
    {
        const questionTotal=document.querySelector('.total-questions');
        questionTotal.textContent=`${index} sur ${questions.length} Questions`;


    }
    function headerscore()
    {
        const headerScoreText=document.querySelector('.header-score')
       headerScoreText.textContent=`score:${userScore} / ${questions.length}`;

    }
    function showResultBox()
    {

        quizbox.classList.remove('active');
        resultbox.classList.add('active');

        const texteScore=document.querySelector('.texte-score');
        texteScore.textContent=`ton score est de : ${userScore} sur ${questions.length}`;


        const roueprogres=document.querySelector('.roue-progres');
        const donneProgres=document.querySelector('.donne-progres');
        let donneStartProgres=-1;
        let donneEndProgres=(userScore/questions.length)*100;
        let speed=20;
        let donne=setInterval(() =>{
            donneStartProgres++;
           // console.log(donneStartProgres);
           donneProgres.textContent=`${donneStartProgres}%`;
           roueprogres.style.background= `conic-gradient(red ${donneStartProgres * 3.6}deg,rgba(255,255,255,.1)0deg)`;
           
            if(donneStartProgres>=donneEndProgres)
            {
                clearInterval(donne);
            }
        },speed);

    }
});