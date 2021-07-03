var userscore=0;
var compscore=0;
const ro=document.getElementById("rock");
const pa=document.getElementById("paper");
const sc=document.getElementById("sciccors");
const result=document.querySelector(".out");
const user=document.getElementById("userscore");
const comp=document.getElementById("compscore");
const resetbutton=document.querySelector("#reset");
function compc(){
    var no=Math.floor(Math.random()*3);
    var choices=["r","p","s"];
    return choices[no];
  }
function main()
{
     pa.addEventListener('click',function(){
        let d="p"+compc();
        game(d);
    })
     sc.addEventListener('click',function(){

        let e="s"+compc();
        game(e);
        
    })
      ro.addEventListener('click',function(){

      let c="r"+compc();
      game(c);  
    })
    resetbutton.addEventListener('click',function()
    {
        user.innerText="0";
        comp.innerText="0";
        userscore=0;
        compscore=0;
        result.innerHTML=`<p>Press to Play.!!!<p>`
    })
}
function game(val)
{
    switch(val)
    {
        case "rs":
        case "pr":
        case "sp":
            {
            const value=outputstring(val);
            win(value);
            break;
            }
        case "rp":
        case "ps":
        case "sr":
            {
            const value=outputstring(val);
            loss(value);
            break;
            }
        case "rr":
        case "pp":
        case "ss":
            {
            draw();
            break;
            }
    }
}
function win(val1)
{
    userscore=userscore+1;
    user.innerText=userscore;
    result.innerHTML=val1+`<p>You WIN.!! ,play agian<p>`
}
function loss(val1)
{
    compscore=compscore+1;
    comp.innerText=compscore;
    result.innerHTML=val1+`<p>You LOSE ,play agian<p>`
}
function draw()
{
    result.innerHTML=`<p>Its a DRAW.. ,play agian<p>`
}
function outputstring(str)
{
    if(str[0]==="r")
    {
        if(str[1]==="s")
        {
            return "Rock breaks Scissors";
        }
        else
        {
            return "Paper covers Rock"
        }
    }
    else if(str[0]==="p")
    {
        if(str[1]==="s")
        {
            return "Scissors cuts Paper";
        }
        else
        {
            return "Paper covers Rock";
        }
    }
    else
    {
        if(str[1]==="p")
        {
            return "Scissors cuts Paper";
        }
        else
        {
            return "Rock breaks Scissors";
        }
    }
}
main();
