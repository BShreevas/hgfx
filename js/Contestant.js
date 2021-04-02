class Contestant {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
  }

  getCount(){
    var ContestantCountRef = database.ref('ContestantCount');
    ContestantCountRef.on("value",(data)=>{
      ContestantCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      ContestantCount: count
    });
  }

  update(){
    var ContestantIndex = "Contestant/Contestant" + this.index;
    database.ref(ContestantIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  static getContestantInfo(){
    var ContestantInfoRef = database.ref('Contestant');
    ContestantInfoRef.on("value",(data)=>{
      allContestant = data.val();
    })
  }
}
