function scuberGreetingForFeet(distanceInFeet){
  // Write your code here!
  if (distanceInFeet <= 400) {
    return 'This one is on me!';
  } else if ((distanceInFeet > 2000) && (distanceInFeet < 2500)) {
    return 'I will gladly take your thirty bucks.';
  } else if (distanceInFeet > 2500) {
    return 'No can do.';
  };
}

function ternaryCheckCity(city){
  // Write your code here!
  return (city === 'NYC' ? 'Ok, sounds good.' : 'No go.');
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let charm;
  switch (tip) {
    case 'generous':
      charm = 'Thank you so much.';
      break;
    case 'not as generous':
      charm = 'Thank you.';
      break;
    default:
      charm = 'Bye.';
      break;
  }
  return charm;



}