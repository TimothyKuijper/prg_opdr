class App
{
    runApplication()
    {
        console.log("hello world");
        this.rollstat();

    }

    rollDice(){
        let random = Math.floor(Math.random()*6 +1);
        return random;
    }

    rollstat()
    {
        let d1 = this.rollDice();
        let d2 = this.rollDice();
        let d3 = this.rollDice();
        let d4 = this.rollDice();

        let diceArray = [d1, d2, d3, d4];
        console.log(diceArray);
        diceArray.sort();
        console.log(diceArray);
        let som = diceArray[1] + diceArray[2] + diceArray[3];
        console.log(som); 
    }


}



let app = new App();
app.runApplication();
