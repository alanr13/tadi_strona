function chooseTrack()
{   
    document.getElementById('e').style.display = "none";
    document.getElementById('nazwa').style.display = "none";
    document.getElementById('nazwa2').style.display = "none";
    document.getElementById('nazwa3').style.display = "none";
    document.getElementById('baton').style.display = "inline";
}

pics = 
[
    "ver.png", 
    "per.png", 
    "alo.png", 
    "sai.png",
    "ham.png", 
    "str.png", 
    "rus.png", 
    "bot.png", 
    "gas.png", 
    "alb.png", 
    "tsu.png", 
    "sar.png", 
    "mag.png", 
    "dev.png", 
    "hul.png", 
    "zho.png", 
    "nor.png", 
    "lec.png", 
    "oco.png",
    "pia.png"
]

function showImage()
{   
    document.getElementById('e').style.display = "inline";
    document.getElementById('nazwa').style.display = "inline";
    document.getElementById('nazwa2').style.display = "inline";
    document.getElementById('nazwa3').style.display = "inline";
    document.getElementById('baton').style.display = "none";

    a = Math.floor(Math.random()*pics.length);
    e = Math.floor(Math.random()*pics.length);
    f = Math.floor(Math.random()*pics.length);  

    if(a == 0)
    {   
        kier = "Max Verstappen";
        document.getElementById('nazwa').innerHTML = "2. " + kier;
        document.getElementById('driver').src = `./drivers/${pics[a]}`
    }
    if(a == 1)
    {
        kier = "Sergio Perez";
        document.getElementById('nazwa').innerHTML = "2. " + kier;
        document.getElementById('driver').src = `./drivers/${pics[a]}`
    }
    if(a == 2)
    {
        kier = "Fernando Alonso";
        document.getElementById('nazwa').innerHTML = "2. " + kier;
        document.getElementById('driver').src = `./drivers/${pics[a]}`
    }
    if(a == 3)
    {
        kier = "Carlos Sainz";
        document.getElementById('nazwa').innerHTML = "2. " + kier;
        document.getElementById('driver').src = `./drivers/${pics[a]}`
    }
    if(a == 4)
    {
        kier = "Lewis Hamilton";
        document.getElementById('nazwa').innerHTML = "2. " + kier;
        document.getElementById('driver').src = `./drivers/${pics[a]}`
    }
    if(a == 5)
    {
        kier = "Lance Stroll";
        document.getElementById('nazwa').innerHTML = "2. " + kier;
        document.getElementById('driver').src = `./drivers/${pics[a]}`
    }
    if(a == 6)
    {
        kier = "George Russell";
        document.getElementById('nazwa').innerHTML = "2. " + kier;
        document.getElementById('driver').src = `./drivers/${pics[a]}`
    }
    if(a == 7)
    {
        kier = "Valtteri Bottas";
        document.getElementById('nazwa').innerHTML = "2. " + kier;
        document.getElementById('driver').src = `./drivers/${pics[a]}`
    }
    if(a == 8)
    {
        kier = "Pierre Gasly";
        document.getElementById('nazwa').innerHTML = "2. " + kier;
        document.getElementById('driver').src = `./drivers/${pics[a]}`
    }
    if(a == 9)
    {
        kier = "Alexander Albon";
        document.getElementById('nazwa').innerHTML = "2. " + kier;
        document.getElementById('driver').src = `./drivers/${pics[a]}`
    }
    if(a == 10)
    {
        kier = "Yuki Tsunoda";
        document.getElementById('nazwa').innerHTML = "2. " + kier;
        document.getElementById('driver').src = `./drivers/${pics[a]}`
    }
    if(a == 11)
    {
        kier = "Logan Sargeant";
        document.getElementById('nazwa').innerHTML = "2. " + kier;
        document.getElementById('driver').src = `./drivers/${pics[a]}`
    }
    if(a == 12)
    {
        kier = "Kevin Magnussen";
        document.getElementById('nazwa').innerHTML = "2. " + kier;
        document.getElementById('driver').src = `./drivers/${pics[a]}`
    }
    if(a == 13)
    {
        kier = "Nyck de Vries";
        document.getElementById('nazwa').innerHTML = "2. " + kier;
        document.getElementById('driver').src = `./drivers/${pics[a]}`
    }
    if(a == 14)
    {
        kier = "Nico Hulkenberg";
        document.getElementById('nazwa').innerHTML = "2. " + kier;
        document.getElementById('driver').src = `./drivers/${pics[a]}`
    }
    if(a == 15)
    {
        kier = "Zhou Guanyu";
        document.getElementById('nazwa').innerHTML = "2. " + kier;
        document.getElementById('driver').src = `./drivers/${pics[a]}`
    }
    if(a == 16)
    {
        kier = "Lando Norris";
        document.getElementById('nazwa').innerHTML = "2. " + kier;
        document.getElementById('driver').src = `./drivers/${pics[a]}`
    }
    if(a == 17)
    {
        kier = "Charles Leclerc";
        document.getElementById('nazwa').innerHTML = "2. " + kier;
        document.getElementById('driver').src = `./drivers/${pics[a]}`
    }
    if(a == 18)
    {
        kier = "Esteban Ocon";
        document.getElementById('nazwa').innerHTML = "2. " + kier;
        document.getElementById('driver').src = `./drivers/${pics[a]}`
    }
    if(a == 19)
    {
        kier = "Oscar Piastri";
        document.getElementById('nazwa').innerHTML = "2. " + kier;
        document.getElementById('driver').src = `./drivers/${pics[a]}`
    }

    if(e == 0)
    {   
        kier = "Max Verstappen";
        document.getElementById('nazwa2').innerHTML = "1. " + kier;
        document.getElementById('driver2').src = `./drivers/${pics[e]}`
    }
    if(e == 1)
    {
        kier = "Sergio Perez";
        document.getElementById('nazwa2').innerHTML = "1. " + kier;
        document.getElementById('driver2').src = `./drivers/${pics[e]}`
    }
    if(e == 2)
    {
        kier = "Fernando Alonso";
        document.getElementById('nazwa2').innerHTML = "1. " + kier;
        document.getElementById('driver2').src = `./drivers/${pics[e]}`
    }
    if(e == 3)
    {
        kier = "Carlos Sainz";
        document.getElementById('nazwa2').innerHTML = "1. " + kier;
        document.getElementById('driver2').src = `./drivers/${pics[e]}`
    }
    if(e == 4)
    {
        kier = "Lewis Hamilton";
        document.getElementById('nazwa2').innerHTML = "1. " + kier;
        document.getElementById('driver2').src = `./drivers/${pics[e]}`
    }
    if(e == 5)
    {
        kier = "Lance Stroll";
        document.getElementById('nazwa2').innerHTML = "1. " + kier;
        document.getElementById('driver2').src = `./drivers/${pics[e]}`
    }
    if(e == 6)
    {
        kier = "George Russell";
        document.getElementById('nazwa2').innerHTML = "1. " + kier;
        document.getElementById('driver2').src = `./drivers/${pics[e]}`
    }
    if(e == 7)
    {
        kier = "Valtteri Bottas";
        document.getElementById('nazwa2').innerHTML = "1. " + kier;
        document.getElementById('driver2').src = `./drivers/${pics[e]}`
    }
    if(e == 8)
    {
        kier = "Pierre Gasly";
        document.getElementById('nazwa2').innerHTML = "1. " + kier;
        document.getElementById('driver2').src = `./drivers/${pics[e]}`
    }
    if(e == 9)
    {
        kier = "Alexander Albon";
        document.getElementById('nazwa2').innerHTML = "1. " + kier;
        document.getElementById('driver2').src = `./drivers/${pics[e]}`
    }
    if(e == 10)
    {
        kier = "Yuki Tsunoda";
        document.getElementById('nazwa2').innerHTML = "1. " + kier;
        document.getElementById('driver2').src = `./drivers/${pics[e]}`
    }
    if(e == 11)
    {
        kier = "Logan Sargeant";
        document.getElementById('nazwa2').innerHTML = "1. " + kier;
        document.getElementById('driver2').src = `./drivers/${pics[e]}`
    }
    if(e == 12)
    {
        kier = "Kevin Magnussen";
        document.getElementById('nazwa2').innerHTML = "1. " + kier;
        document.getElementById('driver2').src = `./drivers/${pics[e]}`
    }
    if(e == 13)
    {
        kier = "Nyck de Vries";
        document.getElementById('nazwa2').innerHTML = "1. " + kier;
        document.getElementById('driver2').src = `./drivers/${pics[e]}`
    }
    if(e == 14)
    {
        kier = "Nico Hulkenberg";
        document.getElementById('nazwa2').innerHTML = "1. " + kier;
        document.getElementById('driver2').src = `./drivers/${pics[e]}`
    }
    if(e == 15)
    {
        kier = "Zhou Guanyu";
        document.getElementById('nazwa2').innerHTML = "1. " + kier;
        document.getElementById('driver2').src = `./drivers/${pics[e]}`
    }
    if(e == 16)
    {
        kier = "Lando Norris";
        document.getElementById('nazwa2').innerHTML = "1. " + kier;
        document.getElementById('driver2').src = `./drivers/${pics[e]}`
    }
    if(e == 17)
    {
        kier = "Charles Leclerc";
        document.getElementById('nazwa2').innerHTML = "1. " + kier;
        document.getElementById('driver2').src = `./drivers/${pics[e]}`
    }
    if(e == 18)
    {
        kier = "Esteban Ocon";
        document.getElementById('nazwa2').innerHTML = "1. " + kier;
        document.getElementById('driver2').src = `./drivers/${pics[e]}`
    }
    if(e == 19)
    {
        kier = "Oscar Piastri";
        document.getElementById('nazwa2').innerHTML = "1. " + kier;
        document.getElementById('driver2').src = `./drivers/${pics[e]}`
    }

    if(f == 0)
    {   
        kier = "Max Verstappen";
        document.getElementById('nazwa3').innerHTML = "3. " + kier;
        document.getElementById('driver3').src = `./drivers/${pics[f]}`
    }
    if(f == 1)
    {
        kier = "Sergio Perez";
        document.getElementById('nazwa3').innerHTML = "3. " + kier;
        document.getElementById('driver3').src = `./drivers/${pics[f]}`
    }
    if(f == 2)
    {
        kier = "Fernando Alonso";
        document.getElementById('nazwa3').innerHTML = "3. " + kier;
        document.getElementById('driver3').src = `./drivers/${pics[f]}`
    }
    if(f == 3)
    {
        kier = "Carlos Sainz";
        document.getElementById('nazwa3').innerHTML = "3. " + kier;
        document.getElementById('driver3').src = `./drivers/${pics[f]}`
    }
    if(f == 4)
    {
        kier = "Lewis Hamilton";
        document.getElementById('nazwa3').innerHTML = "3. " + kier;
        document.getElementById('driver3').src = `./drivers/${pics[f]}`
    }
    if(f == 5)
    {
        kier = "Lance Stroll";
        document.getElementById('nazwa3').innerHTML = "3. " + kier;
        document.getElementById('driver3').src = `./drivers/${pics[f]}`
    }
    if(f == 6)
    {
        kier = "George Russell";
        document.getElementById('nazwa3').innerHTML = "3. " + kier;
        document.getElementById('driver3').src = `./drivers/${pics[f]}`
    }
    if(f == 7)
    {
        kier = "Valtteri Bottas";
        document.getElementById('nazwa3').innerHTML = "3. " + kier;
        document.getElementById('driver3').src = `./drivers/${pics[f]}`
    }
    if(f == 8)
    {
        kier = "Pierre Gasly";
        document.getElementById('nazwa3').innerHTML = "3. " + kier;
        document.getElementById('driver3').src = `./drivers/${pics[f]}`
    }
    if(f == 9)
    {
        kier = "Alexander Albon";
        document.getElementById('nazwa3').innerHTML = "3. " + kier;
        document.getElementById('driver3').src = `./drivers/${pics[f]}`
    }
    if(f == 10)
    {
        kier = "Yuki Tsunoda";
        document.getElementById('nazwa3').innerHTML = "3. " + kier;
        document.getElementById('driver3').src = `./drivers/${pics[f]}`
    }
    if(f == 11)
    {
        kier = "Logan Sargeant";
        document.getElementById('nazwa3').innerHTML = "3. " + kier;
        document.getElementById('driver3').src = `./drivers/${pics[f]}`
    }
    if(f == 12)
    {
        kier = "Kevin Magnussen";
        document.getElementById('nazwa3').innerHTML = "3. " + kier;
        document.getElementById('driver3').src = `./drivers/${pics[f]}`
    }
    if(f == 13)
    {
        kier = "Nyck de Vries";
        document.getElementById('nazwa3').innerHTML = "3. " + kier;
        document.getElementById('driver3').src = `./drivers/${pics[f]}`
    }
    if(f == 14)
    {
        kier = "Nico Hulkenberg";
        document.getElementById('nazwa3').innerHTML = "3. " + kier;
        document.getElementById('driver3').src = `./drivers/${pics[f]}`
    }
    if(f == 15)
    {
        kier = "Zhou Guanyu";
        document.getElementById('nazwa3').innerHTML = "3. " + kier;
        document.getElementById('driver3').src = `./drivers/${pics[f]}`
    }
    if(f == 16)
    {
        kier = "Lando Norris";
        document.getElementById('nazwa3').innerHTML = "3. " + kier;
        document.getElementById('driver3').src = `./drivers/${pics[f]}`
    }
    if(f == 17)
    {
        kier = "Charles Leclerc";
        document.getElementById('nazwa3').innerHTML = "3. " + kier;
        document.getElementById('driver3').src = `./drivers/${pics[f]}`
    }
    if(f == 18)
    {
        kier = "Esteban Ocon";
        document.getElementById('nazwa3').innerHTML = "3. " + kier;
        document.getElementById('driver3').src = `./drivers/${pics[f]}`
    }
    if(f == 19)
    {
        kier = "Oscar Piastri";
        document.getElementById('nazwa3').innerHTML = "3. " + kier;
        document.getElementById('driver3').src = `./drivers/${pics[f]}`
    }


}


