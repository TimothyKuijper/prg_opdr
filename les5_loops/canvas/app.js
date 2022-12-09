class App
{ 
    runApplication()
    { 
        console.log("hello world");

        this.tekenCircle()
        {
            let a = (int)(Math.random() * 301);
            let b = (int)(Math.random() * 301);
            let canvas = document.getElementById("canvas");
            let g = canvas.getContext("2d");
            console.log(canvas);
            g.beginPath();
            g.fillstyle = "yellow";
            g.arc(100,100,20,0,math.PI*2);
            g.strok();
            g.fill();
            g.closepath();

        }

        for(let i = 0; i < 200; 1++);
        {
            tekenCircle();        
        }
    }
}


let app = new App();
app.runApplication();

