const ids = ["h", "f", "t", "b", "s", "a"];
const buttonids = ["hb", "fb", "tb", "bb", "sb", "ab"];

function displayNavbar(name, buttonid) {
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

function setClothingItem(clothing_type, clothing_name) {
    console.log(clothing_type);
    console.log(clothing_name);

    var img = document.getElementById(clothing_type);
    img.src = "images/customization/".concat(clothing_name);
    
}

// Display all clothing of clothing_type
function displayOptions(clothing_type, names) {
    var div = document.getElementById(clothing_type);

    var length = names.length;
    var cur_element;
    for (i = 0; i < length; i++) {
        if (i % 3 == 0) {
            cur_element = document.createElement("div");
            cur_element.classList.add("clothes_row");
            div.appendChild(cur_element);
        }
        var img = document.createElement("img");
        img.src = "images/customization/icons/".concat(names[i]);
        img.className = "icon";
        img.addEventListener('click', setClothingItem.bind(null, clothing_type.concat("d"), names[i]));
        cur_element.appendChild(img);
    }
}

function download() {
    
    let canvas = document.getElementById("mycanvas");
    let ctx = canvas.getContext("2d");

    var length = ids.length;
    for (i = 0; i < length; i++) {
        var img = document.getElementById(ids[i].concat("d"));
        if (img != null) {
            console.log("hi");
            ctx.drawImage(img, 0, 0);
        }
    }

    let link = document.getElementById("download");
    console.log("ugh");
    link.download = 'doll.png';
    link.href = document.getElementById('mycanvas').toDataURL();
    link.click();
}