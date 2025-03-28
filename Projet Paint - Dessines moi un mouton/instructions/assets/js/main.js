function selectColor(event)
{
    let colorBox = event.target;
    let color = colorBox.style.backgroundColor;

    sessionStorage.setItem("selectedColor", color);
}

function getSelectedColor()
{
    if(sessionStorage.getItem("selectedColor"))
    {
        return sessionStorage.getItem("selectedColor");
    }

    return null;
}

function loadPalette(palette) {
    const couleursPalette = document.querySelectorAll("header > div");
    palette.forEach((color, index) => {
        if (couleursPalette[index]) {
            couleursPalette[index].style.backgroundColor = color;
        }
    });
}

window.addEventListener("DOMContentLoaded", function(){
    loadPalette(["#22f6f3", "#3daf7e", "#ffffff", "#ec8236", "#a9a7ee", "#ecc606", "#f783f2", "#e89e80"]);

    // le code de l'étape 1 se passe ici
    this.addEventListener("click", selectColor);

    // le code de l'étape 3 se passe ici

});
