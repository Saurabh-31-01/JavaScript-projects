let cal = " ";

function calculator(val) {
    switch (val) {
        case "1":
            cal += val;
            localStorage.setItem("cal", cal);
            console.log(cal);
            break;

        case "2":
            cal += val;
            localStorage.setItem("cal", cal);
            console.log(cal);
            break;

        case "3":
            cal += val;
            localStorage.setItem("cal", cal);
            console.log(cal);
            break;

        case " + ":
            cal += val;
            localStorage.setItem("cal", cal);
            console.log(cal);
            break;

        case "4":
            cal += val;
            localStorage.setItem("cal", cal);
            console.log(cal);
            break;

        case "5":
            cal += val;
            localStorage.setItem("cal", cal);
            console.log(cal);
            break;

        case "6":
            cal += val;
            localStorage.setItem("cal", cal);
            console.log(cal);
            break;

        case "7":
            cal += val;
            localStorage.setItem("cal", cal);
            console.log(cal);
            break;

        case "8":
            cal += val;
            localStorage.setItem("cal", cal);
            console.log(cal);
            break;

        case "9":
            cal += val;
            localStorage.setItem("cal", cal);
            console.log(cal);
            break;

        case "0":
            cal += val;
            localStorage.setItem("cal", cal);
            console.log(cal);
            break;

        case " - ":
            cal += val;
            localStorage.setItem("cal", cal);
            console.log(cal);
            break;

        case " / ":
            cal += val;
            localStorage.setItem("cal", cal);
            console.log(cal);
            break;

        case " * ":
            cal += val;
            localStorage.setItem("cal", cal);
            console.log(cal);
            break;

        case ".":
            cal += val;
            localStorage.setItem("cal", cal);
            console.log(cal);
            break;

        case " = ":
            cal = eval(cal);
            localStorage.setItem("cal", cal);
            console.log(cal);
            break;

        case "":
            cal = "";
            localStorage.setItem("cal", cal);
            console.log(cal);
            break;

        default:
            break;
    }
}

cal = localStorage.getItem("cal");

function f1() {
    document.querySelector(".display").innerHTML = `${cal}`;
}