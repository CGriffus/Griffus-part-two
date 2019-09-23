let eventType = prompt("What type of event are you attending?");
let tempFahr = prompt("What is the temperature?");

function tempClothes(tempFahr) {
  if (tempFahr < 54) {
    return "a coat";
  } else if (tempFahr <= 70) {
    return "a jacket";
  } else {
    return "no jacket";
  }
}

function eventClothes(eventType) {
  if (eventType === "casual") {
    return "something comfy";
  } else if (eventType === "semi-formal") {
    return "a polo";
  } else {
    return "a suit";
  }
}

console.log(
  `Since it is ${tempFahr} degrees and you are going to a ${eventType} event, you should wear ${eventClothes(
    eventType
  )} and ${tempClothes(tempFahr)}`
);
