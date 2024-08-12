
let userSc = 0;
let compSc = 0;

const options = document.querySelectorAll(".opt");
const msg = document.querySelector("#msg");

const userPara=document.querySelector("#userSc");
const compPara=document.querySelector("#compSc");

const generator = () => {
    const option = ["stone", "paper", "scissor"];
    const randomIdx = Math.floor(Math.random() * 3);
    return option[randomIdx];
};

const drawGame = () => {
    console.log("Game was draw:)");
    msg.innerText = "Game Was Draw";
    msg.style.backgroundColor = "#fdf0d5";
};

const showWinner = (userWin, userOpt, compOpt) => {
    if (userWin) {
        userSc++;
        userPara.innerText= userSc;
        msg.innerText = `You Win Your ${userOpt} beats ${compOpt}`;
        msg.style.backgroundColor = "green";
    } else {
        compSc++;
        compPara.innerText= compSc;
        msg.innerText = `You Lost LOL ${compOpt} beats Your ${userOpt}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userOpt) => {
    console.log("user option was ", userOpt);
    let compOpt = generator();
    console.log("computer option was ", generator());

    if (userOpt === compOpt) {
        drawGame();
    }
    else {
        let userWin = true;

        if (userOpt === "stone") {
            userWin = compOpt === "paper" ? false : true;
        } else if (userOpt === "paper") {
            userWin = compOpt === "scissor" ? false : true;
        } else {
            userWin = compOpt === "stone" ? false : true;
        }
        showWinner(userWin, userOpt, compOpt);
    }
};

options.forEach((opt) => {
    opt.addEventListener("click", () => {
        const userOpt = opt.getAttribute("id");
        playGame(userOpt);
    });
});
