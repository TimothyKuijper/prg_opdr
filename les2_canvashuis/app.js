class App
{
    runApplication()
    {
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");
        console.log(canvas);
        g.beginPath()
        g.fillStyle = "brown"
        g.moveTo(225,100);
        g.lineTo(300,160);
        g.lineTo(300,160);
        g.lineTo(300,300);
        g.lineTo(160,300);
        g.lineTo(160,160);
        g.closePath();
        g.stroke();
        g.fill();
        g.beginPath();
        g.moveTo(275,140);
        g.lineTo(275,100);
        g.lineTo(255,100);
        g.lineTo(255,125)
        g.closePath();
        g.fill();
        g.beginPath();
        g.fillStyle() = "black"
        g.moveTo(210,200)
        g.lineTo(210,175)
        g.lineTo(185,175)
        g.lineTo(185,200)
        g.closePath();
        g.stroke();
        g.beginPath();
        g.moveTo(197.5,175);
        g.lineTo(197.5,200);
        g.moveTo(185,187.5)
        g.lineTo(210,187.5)
        g.closePath();
        g.stroke();
        g.fill();


  
    }
}
let app = new App();
app.runApplication();


