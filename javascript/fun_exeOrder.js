const mahi = {
    name: "mahi",
    callMe: function(arg){
        calling = function(){
            console.log("nested function",this) //window
        }

        flatFn = () => {
            console.log("flat function",this) // object
        }

        calling();
        flatFn();
        console.log(`Hey ${this.name},`,this);// object
        console.log(`Guide me to your ${arg}`)
    }
}

const guru = {
    name: "guru"
}

mahi.callMe("Heart");

mahi.callMe.call(guru,"Heart");
