let string = "";
let conversionFrom = ""; // Store the unit to convert from
let conversionTo = ""; // Store the unit to convert to

let buttons = document.querySelectorAll(".butn");
for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function (event) {
        if (event.target.innerHTML == "AC") {
            string = "";
            document.getElementsByTagName("input")[0].value = string;
        }
        else if (event.target.innerHTML == "DEL") {
            if (string != " ") {
                string = string.substring(0, string.length - 1)
                document.getElementsByTagName("input")[0].value = string;
            }
        }
        else if (event.target.innerHTML == "=") {
            string = eval(string);
            string = string.toString();
            document.getElementsByTagName("input")[0].value = string;
        }
        else if (event.target.innerHTML == "sin") {
            string = Math.sin(Math.PI / 180 * string);
            document.getElementsByTagName("input")[0].value = string + event.target.innerHTML;
        }
        else if (event.target.innerHTML == "cos") {
            string = Math.cos(Math.PI / 180 * string);
            document.getElementsByTagName("input")[0].value = string + event.target.innerHTML;
        }

        else if (event.target.innerHTML == "tan") {
            string = Math.tan(Math.PI / 180 * string);
            document.getElementsByTagName("input")[0].value = string + event.target.innerHTML;
        }
        else if (event.target.innerHTML == "sq"){
            string = Math.sqrt(string);
            document.getElementsByTagName("input")[0].value = string;

        }
        else if (event.target.innerHTML == "exp"){
            string = Math.exp(string);
            document.getElementsByTagName("input")[0].value = string;
        }
        else if (event.target.innerHTML == "pow"){
            string += "**";
            document.getElementsByTagName("input")[0].value = string;
        }
        else if (event.target.innerHTML == "$"){
            string = string * 277.69;
            document.getElementsByTagName("input")[0].value = string;
        }
        else if(event.target.innerHTML == "¥"){
            string= string * 1.80;
            document.getElementsByTagName("input")[0].value = string;
        }
        else if(event.target.innerHTML == "€"){
            string= string * 296.20;
            document.getElementsByTagName("input")[0].value = string;
        }
        else if (event.target.innerHTML == "meters") {
            string = parseFloat(string) * 3.28084;
            document.getElementsByTagName("input")[0].value = string;
        }
        else {
            string = string + event.target.innerHTML;
            document.getElementsByTagName("input")[0].value = string;
        }
        
    })
}