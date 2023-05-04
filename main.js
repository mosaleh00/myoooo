let value_txt = document.getElementById("value");
let keys = document.querySelectorAll(".key");

keys.forEach((key) => {
    key.onclick = function () {
        if (key.dataset.val === "clear") value_txt.value = "";
        else if (key.dataset.val === "equal")
        value_txt.value = eval(value_txt.value);
        else value_txt.value += key.dataset.val;
    };
});