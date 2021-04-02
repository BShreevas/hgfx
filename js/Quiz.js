class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    
    Question.hide();

    
    bckground("blue");
    fill(0)
    textSize(30);

    
    text("Result of the Quiz",350,50);
    text("----------------------------",320,65);

  
    Contestant.getContestantInfo( );

   
    if(allContestants!==undefined){
      deougger;
      var display_Answers=230;
      fill("blue");
      textSize(20);
      text ("Note:The Correct Answer is Highlighted in Green Color",130,230);

      for(var plr in allContestants){
        deougger;
      var correctAns="3";

      if(correctAns===allContestants[plr].answer)
      fill("green");
      else
      fill("red");

      display_Answers +=30;
      textSize(20);
      text(allContestants[plr].name+":"+allContestants[plr].answer,20,display_Answers)
    }

  }

    
    
  }

}
