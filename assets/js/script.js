let minBet = 1;
let maxBet = 100;
let result = Math.round(Math.random() * (maxBet - minBet) + minBet);
let tries = 0;

document.getElementById("labelfront").innerHTML = `Pick a number from ${minBet} ~ ${maxBet}`;

document.getElementById("submitBtn").onclick = function(){

    let userinput = document.getElementById("userinput").value;
    userinput = Number(userinput);
    
    if(isNaN(userinput)){
        document.getElementById("result").innerHTML = `Please type a number!`;
    }else if(userinput < minBet || userinput > maxBet){
        document.getElementById("result").innerHTML = `Please type between ${minBet} ~ ${maxBet}`;
    }else{
        tries++;
        document.getElementById("labeltries").innerHTML = `Tries: ${tries}`;
        if(result < userinput){
            document.getElementById("result").innerHTML = "Too High!";
        }else if(result > userinput){
            document.getElementById("result").innerHTML = "Too low";
        }else{
            document.getElementById("result").innerHTML = `You Won! (Tries: ${tries})`;
        }

    }
}
