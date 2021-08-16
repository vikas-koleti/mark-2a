// list of questions

var questionOne = {
    question: "Who wrote Mahabharata?\n",
    answer: "vyasa"
  }
  var questionTwo = {
    question: "Who is the eldest among Pandavas?\n",
    answer: "dharma raju"
  }
  var questionThree = {
    question: "who is eldest among kauravas?\n",
    answer: "duryodhana"
  }
  var questionFour = {
    question: "Who is the eldest son of kunti?\n",
    answer: "karna"
  }
  var questionFive = {
    question: "Who won Mahabharata War?\n",
    answer: "pandavas"
  }
  
  var questionAnswer = [questionOne, questionTwo, questionThree, questionFour, questionFive];
  
  function period(){
    console.log(chalk.blue("----------------------"))
  }
  
  var readlineSync = require("readline-sync");
  
  var chalk = require("chalk")
  
  var score = 0;
  
  var userName = readlineSync.question("What's your name?\n");
  
  console.log("Aah, lovely! Welcome " + userName + ".");
  period()
  
  chooseToPlay();
  
  function chooseToPlay(){
  
    var wantToPlay = readlineSync.question("Here's a quiz by Vikas, It is based on Mahabharata. Do you want to play?\n");
    
    if (wantToPlay === "yes" || "Yes") {
      period()
      console.log(chalk.cyan("Yay! Let's complete the game."))
      period();
      question();
    } else if (wantToPlay != "yes" || "Yes") {
      period()
      console.log(chalk.yellow("I wish you played this game, sorry to see you go."))
    }
  };
  
  
  function playQuiz (question, answer){
    var userAnswer = readlineSync.question(question);
    if (userAnswer.toLowerCase() === answer.toLowerCase()){
      
      console.log(chalk.green("You got the answer right."))
      score = score + 1
    } else {
      
      console.log(chalk.red("You messed-up."))
      console.log(chalk.bgRed("The correct answer is " + answer + "."))
      score = score - 1
    }
    
    console.log("Your score is " + score + ".")
    period()
    period()
  }
  
  function question (){
    for (var i=0; i<questionAnswer.length; i++){
      currentTarget = questionAnswer[i];
      playQuiz(currentTarget.question, currentTarget.answer);
    }
  }
  
  console.log(chalk.blueBright.bold("Your final score is " + score + "."))
  period()
  console.log(chalk.bgYellow("Share this quiz with you friends."))
  period()

  
  