class Quiz {
  constructor(){
    this.title2 = createElement('h1')
  }

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
    //write code here to hide question elements
     question.hide();


     background("Yellow")
    Contestant.getPlayerInfo();

    if(allContestants!==undefined){
      
  
      fill("Maroon");
      stroke("Maroon")
      textSize(23);
      text("Note: Contestant who answered correct are highlighted in green color", 110, 235);      
      

      var displayPosition=240;
      
      for(var plr in allContestants){
        var correctAns = "2";
  
    
        if(correctAns === allContestants[plr].answer){
          fill("Green");
          textSize(20)
          
        }else{
          fill("red")
          textSize(20);
        }
        displayPosition+=30;
        text(allContestants[plr].name+ ":"+allContestants[plr].answer, 250, displayPosition);
        

      }

      
      this.title2.html("Results of Harry Potter Quiz Game");
      this.title2.position(200, 0);
    
    }   
  }

}
