


// ***Old code below, timer counted down and questions diplayed, did not track score or reset on timeout***


// $(document).ready(function () {
//     console.log(spookyTrivia);
//     $('#triviaStart').on('click', spookyTrivia.commenceGame);
//     $(document).on("click", ".choices", spookyTrivia.evaluate);
// })

// var spookyTrivia = {
//     correct: 0,
//     incorrect: 0,
//     unanswered: 0,
//     timer: 60,
//     isTimerOn: false,
//     question: "Who lurks behind the door?<br>",
//     //Selections an Array of objects with the questions and answers with their pictures.
//     selection: [{
//         s1: ['Jason Voorhees', 'Leatherface', 'Michael Myers', 'Freddy Krueger'],
//         answer: 0,
//         url: 'https://freepngimg.com/thumb/gate/31863-4-gate-transparent-background.png'
//     },
//     {
//         s1: ['Jason Voorhees', 'Leatherface', 'Michael Myers', 'Freddy Krueger'],
//         answer: 1,
//         url: 'https://freepngimg.com/thumb/gate/31863-4-gate-transparent-background.png'
//     },
//     {
//         s1: ['Jason Voorhees', 'Leatherface', 'Michael Myers', 'Freddy Krueger'],
//         answer: 2,
//         url: 'https://freepngimg.com/thumb/gate/31863-4-gate-transparent-background.png'
//     },
//     {
//         s1: ['Jason Voorhees', 'Leatherface', 'Michael Myers', 'Freddy Krueger'],
//         answer: 3,
//         url: 'https://freepngimg.com/thumb/gate/31863-4-gate-transparent-background.png'
//     }],
//     // Starts the Game and sets everthing to ZEROS and calls the timer function.
//     commenceGame: function () {
//         spookyTrivia.correct = 0;
//         spookyTrivia.incorrect = 0;
//         spookyTrivia.unanswered = 0;

//         spookyTrivia.timer = 60;

//         $('#triviaStart').hide();

//         if (!spookyTrivia.isTimerOn) {
//             spookyTrivia.questions();
//             spookyTrivia.isTimerOn = true;
//         }
//     },
//     questions: function () {

//         for (var i = 0; i < spookyTrivia.selection.length; i++) {

//             $('#questions').append(spookyTrivia.question);

//             var mysteryDoor = $('<img class="mysteryDoor">');
//             mysteryDoor.attr('src', spookyTrivia.selection[i].url);
//             $('#questions').append(mysteryDoor);

//             for (var h = 0; h < spookyTrivia.selection[i].s1.length; h++) {
//                 qDiv = $('<button>');
//                 qDiv.addClass('choices');
//                 qDiv.attr('value', spookyTrivia.selection[i].answer);
//                 qDiv.text(spookyTrivia.selection[i].s1[h]);
//                 $('#questions').append(qDiv);   
//             }
//         }
//         // starts the timer until reached 0
//         spookyTrivia.timeoutID = setInterval(function () {
//             $('#timer').html('Time Remaining: ' + spookyTrivia.timer-- + 'sec');

//             if (spookyTrivia.timer < 0) {
//                 clearInterval(spookyTrivia.timeoutID);
//                 spookyTrivia.results();
//             }
//         }, 1000);
//     },
//     // checks to see if choice is correct
//     evaluate: function () {
//         if (this === answer) {

//         }
//         console.log(this.val());

//     },
//     results: function () {

//     }
// }

// Array storing questions and the proper response
// var questions = [
//     {
//         prompt: "What year did the movie 'Halloween' come out?\na. 1976\nb. 1977\nc. 1978\nd. 1979",
//         answer: "c"
//     },
//     {
//         prompt: "What mask does Jason Voorhees wear?\na. A pig head\nb. A hockey mask\nc. A layer of mud and dirt\nd. A demon mask",
//         answer: "b"
//     },
//     {
//         prompt: "Where does Leatherface live?\na. Texas\nb. Nebraska\nc. Georgia\nd. Arkansas",
//         answer: "a"
//     }


// ];

// var score = 0;

// for (var i = 0; i < questions.length; i++) {
//     var response = window.prompt(questions[i].prompt)
//     if (response == questions[i].answer) {
//         score++;
//         alert("Correct!");
//     } else {
//         alert("Incorrect!");
//     }
// }
// alert("You scored " + score + "/" + questions.length);

// ---------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------

//***New code below, different questions, with score tracker function and timeout function***


var question001 = ["The most popular board game in the United States is scrabble.",
    "Mario Bros was the first video game ever made.",
    "A rainbow has 7 colors.",
    "The iPhone was the first phone to use a touchscreen.",
    "Bears hibernate during the summer season."
];

var choice001 = ["<button class=buttons001 onclick=q1i()>True</button><br /><br /><button class=buttons001 onclick=q1c()>False</button>"];
var choice002 = ["<button class=buttons001 onclick=q2c()>False</button><br /><br /><button class=buttons001 onclick=q2i()>True</button>"];
var choice003 = ["<button class=buttons001 onclick=q3c()>True</button><br /><br /><button class=buttons001 onclick=q3i()>False</button>"];
var choice004 = ["<button class=buttons001 onclick=q4i()>True</button><br /><br /><button class=buttons001 onclick=q4c()>False</button>"];
var choice005 = ["<button class=buttons001 onclick=q5c()>False</button><br /><br /><button class=buttons001 onclick=q5i()>True</button>"];

var a = 0;
a++;
var b = 0;
b++;
// Below are bite-sized functions that display a correct message if correct, and an incorrect message w/ the correct response.
function begin001() {
    c = 30;
    disappear001.innerHTML = "";
    message001.innerHTML = question001[0];
    message002.innerHTML = choice001;
    number001.innerHTML = a++;
}

function q1c() {
    message003.innerHTML = "Almost got you! Chess is actually the biggest board game in the U.S.";
    message002.innerHTML = "";
    score001.innerHTML = b++;
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
}

function q1i() {
    message003.innerHTML = "Chess reigns supreme as the most popular board game in the U.S. Better luck next time.";
    message002.innerHTML = "";
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
}

function q2c() {
    message003.innerHTML = "That's right. Pong which was released in arcades in 1972 precedes Mario Bros by 11 years.";
    message002.innerHTML = "";
    score001.innerHTML = b++;
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
}

function q2i() {
    message003.innerHTML = "That's not right. Pong first released in arcades in 1972, becoming the first video game ever made.";
    message002.innerHTML = "";
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
}

function q3c() {
    message003.innerHTML = "That's correct! A rainbow consists of red, orange, yellow, green, blue, indigo, and violet.";
    message002.innerHTML = "";
    score001.innerHTML = b++;
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
}

function q3i() {
    message003.innerHTML = "A rainbow consists of seven colors: red, orange, yellow, green, blue, indigo, and violet.";
    message002.innerHTML = "";
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
}

function q4c() {
    message003.innerHTML = "The first phone to utilize a touchscreen was the IBM Simon in 1992, more than 15 years before the iPhone debuted.";
    message002.innerHTML = "";
    score001.innerHTML = b++;
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
}

function q4i() {
    message003.innerHTML = "Seemed like it, right? The first touchscreen phone was actually the IBM Simon released in 1992, more than 15 years before the iPhone debuted.";
    message002.innerHTML = "";
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
}

function q5c() {
    message003.innerHTML = "That's right, bears actually go into hibernation in the winter for 5-7 months.";
    message002.innerHTML = "";
    score001.innerHTML = b++;
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
}

function q5i() {
    message003.innerHTML = "False, bears use the summer season to fatten up on berries and other foods to prepare for hibernation in winter.";
    message002.innerHTML = "";
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
}

function next001() {
    if (a == "2") {
        message001.innerHTML = question001[1];
        message002.innerHTML = choice002;
        message003.innerHTML = "";
        number001.innerHTML = a++;
        message004.innerHTML = "";
    }

    else if (a == "3") {
        message001.innerHTML = question001[2];
        message002.innerHTML = choice003;
        message003.innerHTML = "";
        number001.innerHTML = a++;
        message004.innerHTML = "";
    }

    else if (a == "4") {
        message001.innerHTML = question001[3];
        message002.innerHTML = choice004;
        message003.innerHTML = "";
        number001.innerHTML = a++;
        message004.innerHTML = "";
    }

    else if (a == "5") {
        message001.innerHTML = question001[4];
        message002.innerHTML = choice005;
        message003.innerHTML = "";
        number001.innerHTML = a++;
        message004.innerHTML = "";
    }


    else {
        window.clearInterval(update);
        c = "-";
        message001.innerHTML = "End of Quiz";
        message002.innerHTML = "";
        message003.innerHTML = "";
        message004.innerHTML = "<button class=buttons002 onclick=repeat001()>Repeat</button>";
    }
}

function timer001() {
    c = c - 1;
    if (c < 30) {
        time001.innerHTML = c;
    }

    if (c < 1) {
        window.clearInterval(update);
        message001.innerHTML = "Time's up";
        message002.innerHTML = "";
        message003.innerHTML = "";
        message004.innerHTML = "<button class=buttons002 onclick=repeat001()>Repeat</button>";
    }
}

update = setInterval("timer001()", 1000);

function repeat001() {
    location.reload();
}