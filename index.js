var readlineSync = require("readline-sync");
var username = readlineSync.question("What is your name ?")

console.log("Hey " + username + " ! " + " hey fellow weeb let's start our very own weeb quiz game .")

var score = 0
var highScore = ["Nilesh:7","Rushi : 3, Harsh : 5"]

function play(question, answer) {
  var userAnswer = readlineSync.question(question)

  if (userAnswer.toUpperCase() == answer.toUpperCase()
  ) {
    console.log("Right")
    score = score + 1
  }
  else { console.log("Wrong answer") }
  console.log("Current score : ", score)
  console.log("---------------")

}

var quiz = [{question:"What is name of Naruto's father? " ,answer:"Minato" }, {question:"Whose body gained the properties of rubber after unintentionally eating a Devil Fruit? " ,answer:" Monkey D. Luffy" }, {question:"Which anime series revolves around the Elric brothers? " ,answer:" Fullmetal Alchemist " }, {question:" Which is the first song used as an opening for ‘Naruto’?" ,answer:" ‘Rocks’ by Hound Dog" }, {question:"Who is known as the ‘One Punch Man’? " ,answer:" Saitama" }, {question:"What is the greatest taboo for the alchemists in ‘Fullmetal Alchemist’? ",answer:"Human transmutation" }, {question:"Goku belongs to which race in the anime Dragon Ball? " ,answer:"Saiyan" } 
]

for (i = 0; i < quiz.length; i++)
{
  play(quiz[i].question, quiz[i].answer)
  
}

console.log("Your score is  ", score + "Thanks for playing this game ")

console.log ("Checkout the highscores")
for (var x = 0; x < highScore.length; x++ ){console.log(highScore[x])}

if (score <= 10) { console.log("you failed to beat highscore") }

else { console.log("Congrats You have beaten highscore , send me a screenshot ") }


console.log("------THE END-------")





