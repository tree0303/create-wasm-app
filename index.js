
import init, * as wasm from "wasm-game-of-life";

async function pl_vs_pl() {
    wasm.pl_vs_pl();
}

// URLからクエリパラメータを取得する関数
function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    let receivedData = urlParams.get(name);
    if (receivedData) {
        return receivedData;
    } else{
        return "0";
    }
}

var receivedData = getQueryParam('data');
board_set();
create_radio_button();
if (receivedData=="0") {
    pl_vs_pl();
}

function board_set() {
    let board = [];

for (let i = 0; i < 49; i++) {
    const wall_num = [0, 1, 4, 5, 6, 7, 12, 13, 20, 28, 35, 36, 41, 42, 43, 44, 47, 48]
    if (wall_num.includes(i)) {
        board[i] = 7;
    }else {
        board[i] = 0;
    }
}
    let field = document.getElementById("field");
    for (let i = 0; i < board.length; i++) {
        if (board[i] == 7) {
            let elm = document.createElement("div");
            elm.className = "wall";
            elm.id = i;
            elm.index = i;
            field.appendChild(elm);
        }else {
            let elm = document.createElement("div");
            elm.className = "piece";
            // elm.innerHTML = board[i];
            elm.id = i;
            elm.index = i;
            field.appendChild(elm);

            let dice = document.createElement("div");
            let up = document.createElement("div");
            let center_box = document.createElement("div");
            let down = document.createElement("div");
            let left = document.createElement("div");
            let center = document.createElement("div");
            let right = document.createElement("div");
            
            dice.className = "dice";
            up.className = "up";
            center_box.className = "center_box";
            down.className = "down";
            left.className = "left";
            center.className = "center";
            right.className = "right";
            elm.appendChild(dice);
            dice.appendChild(up);
            dice.appendChild(center_box);
            dice.appendChild(down);
            center_box.appendChild(left);
            center_box.appendChild(center);
            center_box.appendChild(right);
            
            


        }
    }

}

function create_radio_button() {
    let main = document.getElementById("main_container");
    let p = document.createElement("p");
    main.appendChild(p);

    for (let i = 0; i < 20; i++){
        let radio_box = document.createElement("div");
        radio_box.id = "radio_box"+i;
        p.appendChild(radio_box);
        let radio = document.createElement("input");
        radio.setAttribute("type", "radio");
        radio.setAttribute("name", "actions");
        radio.style.display = "none";
        // radio.style.display = "inline";
        // radio.setAttribute("hidden", "true");
        radio.id = "radio"+i;
        let label = document.createElement("label");
        label.setAttribute("for", "radio"+i);
        label.id = "dadio_label"+i;

        // label.innerHTML = "test";

        radio_box.appendChild(radio);
        radio_box.appendChild(label);
    }
}
