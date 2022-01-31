function scuberGreetingForFeet(distance){
  // Write your code here!
  if (distance > 2500){
    return "No can do.";
  }
  else if(distance <= 400){
    return "This one is on me!";
  } else if(distance >2000){
   return "I will gladly take your thirty bucks."
  }
}

function ternaryCheckCity(check){
  // Write your code here!
const city =(check === "NYC")? "Ok, sounds good.":"No go.";
return city;
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch(tip){
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
    default:
      return "Bye.";
  }
}