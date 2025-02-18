let cijfer = 5;
if (cijfer >= 6) {
    console.log("Je bent geslaagd!");
} else {
    console.log("Probeer het opnieuw :(");
}





let naam = "noah"; 
if (naam != null) {
    console.log(`welkom ${naam}`);
}
else {
    console.log ("welkom");
}


let doel = "programmeren";
if (doel == "leren") {
    console.log("goed doorzetten")
}

else if (doel == "programmeren") {
    console.log("lekker knallen")
};


let seizoen = "winter"
switch (seizoen) {
        case "lente":
            console.log("Bloemen beginnen te bloeien!")
            break;
        case "zomer":
            console.log("Het is lekker warm!")
            break;
        case "herfst":
            console.log("Bladeren vallen van de bomen.")
            break;
        case "winter":
            console.log("Het sneeuwt!")
            break;
        default:
            console.log("Ongeldig seizoen!")
            break;
};

let isStudent = true;
let heeftErvaring = true;

if (isStudent == true){
    console.log("Welkom, student!")
};
if (isStudent == false){
    console.log("Welkom, als student heb je veel te leren.")
};
if (heeftErvaring == true){
    console.log("Je hebt al wat ervaring. Fantastisch!")
};
if (heeftErvaring == false){
    console.log("Je bent nieuw hier. Geen zorgen, we helpen je op weg!")
};
