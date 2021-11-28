//jshint esversion: 9

let questions = [
    
    {
        ques: "Find the correctly spelt word.",
        option1: "Adulation",
        option2: "Adlation",
        option3: "Aduelation",
        option4: "Adulation",
        ans: "Adulation",
    },
    {
        ques: "Find the correctly spelt word.",
        option1: "Adventitous",
        option2: "Adventitious",
        option3: "Adventitous",
        option4: "Adventituous",
        ans: "Adventitious",
    },
    {
        ques: "Find the Wrongly spelt word.",
        option1: "Embarrass",
        option2: "Embrace",
        option3: "Embody",
        option4: "Embelish",
        ans: "Embelish",
    },
    {
        ques: "Find the correctly spelt word. ",
        option1: "Manoeuvre",
        option2: "Maneuever",
        option3: "Manevuar",
        option4: "Manuever",
        ans: "Manoeuvre",
    },
    {
        ques: "Find the Wrongly spelt word.",
        option1: "Accomodate",
        option2: "Bizarre",
        option3: "Calendar",
        option4: "Concious",
        ans: "Concious"
    },
    {
        ques: "Find the Wrongly spelt word.",
        option1: "Foreseeable",
        option2: "Possession",
        option3: "Receive",
        option4: "Ecstacy",
        ans: "Ecstacy"
    },
    {
        ques: "Find the correctly spelt word",
        option1: "Acquaentence",
        option2: "Acquantance",
        option3: "Acquaintance",
        option4: "Acquaintance",
        ans: "Acquaintance"
    },
    {
        ques: "I would like to buy ______ sugar, please.",
        option1: "any",
        option2: "much",
        option3: "some",
        option4: "many",
        ans: "some"
    },
    {
        ques: "There were ______ snow on the car.",
        option1: "two feet of",
        option2: "two feet",
        option3: "a two-feet",
        option4: "a foot",
        ans: "two feet of"
    },
    {
        ques: "That's too ______ for swimming.",
        option1: " a shallow",
        option2: "a lake shallow",
        option3: "shallow a lake",
        option4: "lake shallow",
        ans: "shallow a lake"
    }
];

let score = 0;

let selectedQuestion = Math.floor(Math.random() * questions.length);
setQuestion();
function setQuestion() {
    document.getElementById("question").innerHTML = questions[selectedQuestion].ques;
    document.querySelector("#option1").innerHTML = questions[selectedQuestion].option1;
    document.querySelector("#option2").innerHTML = questions[selectedQuestion].option2;
    document.querySelector("#option3").innerHTML = questions[selectedQuestion].option3;
    document.querySelector("#option4").innerHTML = questions[selectedQuestion].option4;
}

function selectNextQuestion() {
    questions = questions.filter((q, index) => index !== selectedQuestion);
    // if (questions.length === 1) {
    //     document.querySelector(".submit").innerHTML = "Submit";
    // } else
    if (questions.length <= 0) {
        document.querySelector(".container").classList.add("display");
        document.querySelector(".restart").classList.remove("display");
        document.querySelector(".score > h4").innerHTML = `Score: ${score}/10`;
        if(score>5){
        let music = new Audio("sound/win.wav");
        music.play();
    }
    else{
        let music = new Audio("sound/lose2.wav");
        music.play();
    }
    return;
    }
    selectedQuestion = Math.floor(Math.random() * questions.length);
    setQuestion();
}

function addEvent(i) {
    let ele = document.querySelector(`#A${i + 1}`);
    // let comp = document.querySelector(`#option${i + 1}`).innerHTML;
    
    ele.addEventListener("click", (e) => {
       
        // res = e.target.innerHTML;
        let res = document.querySelector(`#option${i+1}`).innerHTML;
        console.log(res);
        let sound;
        if (res === questions[selectedQuestion].ans) {
            score++;
            sound = new Audio("sound/correct.wav");
            sound.play();
            document.querySelector(`#A${i+1}`).classList.add("correct");
                setTimeout(function(){
                document.querySelector(`#A${i+1}`).classList.remove("correct");

                },500)

            // document.querySelector(`#O${i + 1}`).classList.add("correct");
            console.log(score);
        }
        else{
            sound = new Audio("sound/Wrong.wav");
            sound.play();
            document.querySelector(`#A${i+1}`).classList.add("wrong");
                setTimeout(function(){
                document.querySelector(`#A${i+1}`).classList.remove("wrong");

                },500)

        }
        setTimeout(function(){
            selectNextQuestion();
            
        },1000)
    });
}

// let ele = document.querySelectorAll(".white");
// console.log(ele.length);
for (let i = 0; i < 4; i++) {
    // console.log("calling");
    // console.log(ele);
    addEvent(i);
}

function start() {
    music = new Audio("sound/start.wav");
    music.play();
    document.getElementById("start").classList.add("display");
    document.querySelector(".container").classList.remove("display");
    // document.querySelector(".container").classList.remove("display");
}

function restart() {
    location.reload();
}
