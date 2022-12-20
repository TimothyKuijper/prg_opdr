class Dino
{
    constructor(naam, vleeseter, leeftijd)
    {
        this.naam = naam;
        this.vleeseter = vleeseter;
        this.leeftijd = leeftijd; 
        this.leeft = true;
        this.honger = true; 
    }

}

class plant
{
    constructor(soort, eetbaar,)
    {
        this.soort = soort;
    }
}


class App
{
    runApplication()
    {
        let trex = new Dino("Peter", true, 104);
        console.log(trex)

        let trex2 = new Dino("Lois", false, 36);
        console.log(trex2)

        let trex3 = new Dino("Meg", true, 16);
        console.log(trex3)
    }
}




let app = new App();
app.runApplication();





