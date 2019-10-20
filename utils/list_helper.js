const dummy = (blogs) => {
    return 1;
  }
  
const totalLikes=(input)=>{
    var temp=0

    for(var i in input){
      temp= temp+ parseInt(input[i].likes);
    }

    return temp;

}

  module.exports = {
    dummy,
    totalLikes
  }