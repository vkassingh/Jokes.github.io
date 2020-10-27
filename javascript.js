document.getElementsByTagName("h1")[0].style.fontSize = "3vw";

var quotes= ['Well done is better than well said. ...',

'Knowing is not enough; we must apply. ...',

'Quality is not an act, it is a habit. ...',

'If you are going through hell, keep going.',

'Good, better, best. ...',

'With the new day comes new strength and new thoughts. ...',

'Optimism is the faith that leads to achievement.','Get busy living or get busy dying','You only live once, but if you do it right, once is enough','Money and success don’t change people; they merely amplify what is already there.','Not how long, but how well you have lived is the main thing','In order to write about life first you must live it.']



function newquote(){

var randomnumber= Math.floor(Math.random()* (quotes.length));

document.getElementById("quotes_area").innerHTML=quotes [randomnumber];

}
