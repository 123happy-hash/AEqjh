var names = [
    "Grandpa",
    "Grandma",
    "Father",
    "Mother"
    ];
    var images = [
    "IMG_6970.jpg",
    "IMG_7159.jpg",
    "IMG_7061.jpg",
    "IMG_7137.jpg"
    ];
    var i=0;
    function nextslide() {
    document.getElementById("names").innerHTML=reasons[i];
    document.getElementById("album").src=images[i];
    i++;
    }