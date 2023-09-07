const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  if(strokes==1){
    return names[0]
  }else if(strokes==2){
    return names[1]
  }else if(strokes<=par-2){
    return names[1]
  }else if(strokes<=par-1){
    return names[2]
  }else if(strokes==par){
    return names[3]
  }else if(strokes==par){
    return names[3]
  }else if(strokes==par+1){
    return names[4]
  }else if(strokes==par+2){
    return names[5]
  }

  return "Go Home!";
  
}
                    
console.log(golfScore(5,9));
 

/*
Waiting:golfScore(4, 1) should return the string Hole-in-one!
Waiting:golfScore(4, 2) should return the string Eagle
Waiting:golfScore(5, 2) should return the string Eagle
Waiting:golfScore(4, 3) should return the string Birdie
Waiting:golfScore(4, 4) should return the string Par
Waiting:golfScore(1, 1) should return the string Hole-in-one!
Waiting:golfScore(5, 5) should return the string Par
Waiting:golfScore(4, 5) should return the string Bogey
Waiting:golfScore(4, 6) should return the string Double Bogey
Waiting:golfScore(4, 7) should return the string Go Home!
Waiting:golfScore(5, 9) should return the string Go Home!
*/