const justiceLeague = {
    cheif : "Batman",
    team: "Justice League",
    league: function(name,curr_team){
        console.log(
            `Hey ${this.cheif}, I wanna be your teammate. I can be a valuable addition to ${this.team}.`
        );
        console.log(`I'm ${name}, I am working for ${curr_team}.`)
    }
}

justiceLeague.league("Joker","Myself");

const resume = {
    cheif: "Jeff",
    team: "Amazon"
}

const aboutMe = {
    cheif: "Zuckerberg",
    team: "FB"
}

justiceLeague.league.call(resume,"Guru","Service based Company");
justiceLeague.league.apply(aboutMe,["Guru","Service based Company"]);

const info = justiceLeague.league.bind(resume);
info("Guru","Service based Company");


