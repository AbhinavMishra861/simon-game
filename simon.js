let gameSeq=[];
let userSeq=[];
// let btn=document.querySelector(".btn");
let h=document.querySelector("h2");
let btn=["yellow","red","purple","green"];
let started=false;
let level=0;
function levelUP(){
        userSeq=[];  // this is used to create empty userSeq array
        level++;
        h.innerText=`Level ${level}`;
        let num=Math.floor(Math.random()*3);
        let randbtn=btn[num];
        let Randbtn=document.querySelector(`.${randbtn}`);
        gameSeq.push(randbtn);
        flashBtn(Randbtn);
}
function checkAns(idx){
    if(gameSeq[idx]===userSeq[idx]){
        if(gameSeq.length==userSeq.length){
            setTimeout(levelUP(),1000);
        }
    }
    else{
        h.innerHTML=`Game Over! Your score was <b>${level}</b> <br> Press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}
function flashBtn(btn){
    btn.classList.add("flash");// btn.classList is basically object of all classes that btn contains...
     setTimeout(function(){
        btn.classList.remove("flash");
     },290);
}
function userflashBtn(btn){
    btn.classList.add("userflash");
     setTimeout(function(){
        btn.classList.remove("userflash");
     },290);
}
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
        started=true;
        levelUP();
    }
});
function btnPress(){
    let btn=this;
    userflashBtn(btn);
    usercolor=btn.getAttribute("id");  // get attribute is used to get property assigned to id
    userSeq.push(usercolor);
    checkAns(userSeq.length-1);
}
let Allbtns=document.querySelectorAll(".btn");
for(let btns of Allbtns){
    btns.addEventListener("click",btnPress);
}
function reset(){
    started=false;
    level=0;
    userSeq=[];
    gameSeq=[];
}
