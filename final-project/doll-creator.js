const ids = ["h", "f", "t", "b", "s", "a"];
const buttonids = ["hb", "fb", "tb", "bb", "sb", "ab"];

function displayList(name, buttonid) {
    var element = document.getElementById(name);
    element.style.display = "block";
    element = document.getElementById(buttonid);
    element.classList.add("toggled");
    console.log("hi");
    var length = ids.length;
    for (var i = 0; i < length; i++) {
        if (name.localeCompare(ids[i]) != 0) {
            element = document.getElementById(ids[i]);
            element.style.display = "none";
            element = document.getElementById(buttonids[i]);
            element.classList.remove("toggled");
        }
    }
}