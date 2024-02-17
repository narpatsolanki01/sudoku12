
const gamebox=document.getElementById('gamebox');
//digit DOM 
const button_digit = document.getElementById('button_digit');
const tile=document.querySelectorAll('td');

const errors=document.getElementById('error');
//Start Game DOM 
const showgame=document.getElementById('showgame');
//Lost DOM AND NEW Game
const new_game= document.getElementById('new_game');
const lost_game=document.getElementById('lost_game');
const lost_popup =document.getElementById('lost_popup');
const newgame_btn=document.getElementById('newgame_btn');
//Scored DOM
const scored=document.getElementById('scored');
//timing DOM
const mintes =document.getElementById('mintes');
const second=document.getElementById('second');
// Last Erase DOM
const lastErase =document.getElementById('lastErase');
// Undo DOM
const undo=document.getElementById('undo_col');
//variables
const hints=document.getElementById('hints_1');
var lastselected=null;
let error=0;
let score=0;
let s=0,m=0,h=0;
var key=[];
 window.onload=(()=>{
    for(let i=0; i<9; i++){
       var tr_box=document.createElement('tr');
        tr_box.classList.add('rows');
         gamebox.appendChild(tr_box);
        // data[i]=[];
     for(let j=0; j<9; j++){
        var div =document.createElement('td');
            div.classList.add('tile');
            div.addEventListener('click',selected);
            div.setAttribute('row',j);
            div.setAttribute('col',i);
            if(data[j][i]!=0){
                div.innerText=data[j][i];
                div.classList.add('filed'); 
            }
            tr_box.appendChild(div);           
        }
    }   
    for(let i=1; i<=9; i++){
        var digit=document.createElement('h1');
        digit.innerText=i;
        digit.style="display:flex";
        digit.addEventListener('click',inputs)
        button_digit.append(digit);
    }
    // Add New Vaalues Column
    function inputs(){
        if(lastselected.innerText=="" || lastselected.classList.contains('danger')){
           key.push(lastselected.innerText=this.innerText); 
           // 
        }
        let row=lastselected.getAttribute('row');
        let col=lastselected.getAttribute('col');

        //scure 
        if(solution1[row][col]==this.innerText && !lastselected.classList.contains('filed')){
            score=score+Math.floor(Math.random() * 100);
            scored.innerText=score;
        }

        if(solution1[row][col]==this.innerText){
                lastselected.classList.remove('danger');
                lastselected.classList.add('filed');
        }
        else{
            if(!lastselected.classList.contains('filed')){
                lastselected.classList.add('danger');
                error++;
                errors.innerText=error;
            }
            if(error==3){
                lost_game.style="display:block";
                newgame_btn.addEventListener('click',reloadgame);
            }
        }
    }
    function selected(){
        if(lastselected!=null){
            lastselected.style="background-color:transparent";
        }     
        lastselected=this;
        lastselected.style="background-color:#A0C5E8";
    }
});
//Start Game
function clickme(){
    showgame.style="display:block";   
    new_game.style="display:none";
}
//Lost Game
function reloadgame(){
    location.reload();
    showgame.style="display:block";   
    new_game.style="display:none";

}
 //Timing Game
setInterval(function(){
    s=s+1;
    second.innerText=s;
    if(s==59){
        m=m+1;
        mintes.innerText=m;
        s=0;
    }
 },1000);

 //Erase last Seclect Colum
 lastErase.addEventListener('click',function(){
    if(lastselected!=null && !lastselected.classList.contains('filed')){
        lastselected.innerText="";
    }
 }); 
  
 //Win Game
 // for(var i=0; i<9; i++){
 //    for(var j=0; i<9 ;j++){
 //        if(solution[j][i]==arr[i][j]){
 //    alert("You Are Win");
 // }                       
 //    if(count==0){
 //        alert("winner");
 //    }
 // //    }
 // } 

 
 

