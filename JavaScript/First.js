let boxes= document.querySelectorAll(".box");
let resetBtn= document.querySelector("#reset");
let newGameBtn= document.querySelector("#newBtn");
let msgContainer= document.querySelector(".msg-Container");
let msg=document.querySelector("#msg");
let O=document.querySelector("#O")

let turnO = true;

const winPattern=[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame= ()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        if(turnO){
            box.innerText ="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;

        checkWinner();
    });
});

const showWinner=(winner)=>{
    msg.innerText=`Congratulation, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const disableBoxes= ()=>{
    for(let box of boxes){
        box.disable=true;
    }
};

const enableBoxes= ()=>{
    for(let box of boxes){
        box.disable=false;
        box.innerText="";
    }
};

const checkWinner =() => {
    for(pattern of winPattern){
        let position1= boxes[pattern[0]].innerText;
        let position2= boxes[pattern[1]].innerText;
        let position3= boxes[pattern[2]].innerText;

        if(position1!=""&&position2!=""&&position3!=""){
            if(position1===position2&&position2==position3){
                showWinner(position1);
            }
        }
    }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);