function theBeatlesPlay(musicians, instruments){
  var array = []
  for (i=0; i < musicians.length+1; i++){
    array.push(musician[i] + "plays" + instruments[i])
  }
  return array
}

function johnLennonFacts(facts){
  var array = [];
  var i=0;
  while(i < facts.length+1){
    array.push(facts[i] + "!!!")
    i++
  }
  return array
}

function iLoveTheBeatles(number){
  var array = []
  do {
    array.push("I love the Beatles!")
    number++
  } while ( number < 15)

  return array
}
