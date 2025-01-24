const league = {
    name : "Gal",
    sayHi : function(){
        console.log(this.name); //Gal leagueobject
        const iAmInner = () => {
            console.log(this.name); //Gal leagueobject
        }
        iAmInner();
    }
}
league.sayHi();

const ind = {
    name : "MS",
    sayHi : function(){
        console.log(this.name); //MS
        function iAmInner () {
            console.log(this.name); //undefined window
        }
        iAmInner();
    }
}
 
ind.sayHi();

let microsoft = {
    name : "MS",
    ms : () => {
        console.log("microsoft obj", this); //MS Window
    }
}

microsoft.ms();
