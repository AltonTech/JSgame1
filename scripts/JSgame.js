// Testing basic game design with JS via codecademy and The Odin Project
var age = prompt("What's your age");
if(age < 13)
{
    console.log("Please get permission before playing ths game");
}
else
{
    console.log("Enjoy your adventure");
}
confirm ("I am ready to play");
//home screen
console.log("You have had enough. Political and corporate greed have ravaged your family. You decide to take matters into your own hands...");
console.log("Suddenly, your phone rings. And your computer screen flashes. This is supposed to be a secured network. Oh well...");
var userAnswer = prompt("Do you want to answer the phone?");
if (userAnswer === "yes" )
{
    console.log("You answer it, and its your Mother. You chat all night, and live a long happy life");
}
else {
    console.log("You spend the rest of your life wondering who called that night. You become the most legendary hacker ever. Like figuratively ever. ");
}
//feedback below
var feedback = prompt("1-10 how much did you enjoy this Game?");
if (feedback >= 8)
{
    console.log ("Thank you! I love you snootchies!");
}
else {
    console.log("I'll keep practicing coding and hopefully one day, you'll give me a better rating.");
}
