var eventType = prompt('What type of event are you attending?');
var tempFahr = prompt('What is the temperature?');
var result = 'Since it is '+tempFahr+' degrees and you are going to a '+eventType+' event, you should wear';



if (eventType == 'casual' && tempFahr < 54) {
    console.log(result +' something comfy and a coat.');
} else if (eventType === 'casual' && tempFahr > 70) {
    console.log(result +' something comfy and no jacket.');
} else if (eventType === 'casual' && tempFahr >= 54 || tempFahr <=70) {
    console.log(result + ' something comfy and a jacket.')
} else if (eventType === 'semi-formal' && tempFahr < 54) {
    console.log(result + ' a polo and a coat.')
} else if (eventType === 'semi-formal' && tempFahr >=54 || tempFahr <= 70) {
    console.log(result + ' a polo and a jacket.')
} else if (eventType === 'semi-formal' && tempFahr > 70) {
    console.log(result + ' a polo and no jacket.')
} else if (eventType === 'formal' && tempFahr < 54) {
    console.log(result + ' a suit and a coat.')
} else if (eventType === 'formal' && tempFahr >= 54 || tempFahr <= 70) {
    console.log(result + ' a suit and a jacket.')
} else if(eventType === 'formal' && tempFahr > 70) {
    console.log(result + ' a suit and no jacket.')
}
    

