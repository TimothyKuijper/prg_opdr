class App
{
    runApplication()
    {
        console.log("hello world");
        let appname = "gaat het goed?";
        let version = 1.6;
        let versiondate = "24/11/2022";
        let author = "Timothy Kuijper";
        let copyright = "DEXXION trademark '2022'";
        let distribution = "DEXXION inc.";
        let darkmode = true;
        console.log(appname);
        console.log(version);
        console.log(versiondate);
        console.log(author);
        console.log(copyright);
        console.log(distribution);
        console.log(darkmode);
        let title = document.getElementsByClassName("background");
        let RG = Math.random();
        
        if (RG == 0)
        {
            title.style.backgroundColor ="#410ddb";
        }

        if (RG < 0.2)
        {
            title.style.backgroundColor ="#b817d1";
        }

        if (RG >= 0.2 && RG <= 0.6 )
        {
            title.style.backgroundColor ="#f50707";
        }

        if (RG > 0.6)
        {
            title.style.backgroundColor ="#07f5c9";
        }

    
        //.gamenews headline{

        //}
        //.gamenews{

        //}
    }
}

let app = new App();
app.runApplication();


