function selectColor(event)
{
    let colorBox = event.target;
    let color = colorBox.style.backgroundColor;

    sessionStorage.setItem("selectedColor", color);

    console.log("Couleur sélectionnée :", color);
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
    // le code de l'étape 1 se passe ici
    const couleursPalette = document.querySelectorAll("header > div");
    palette.forEach((color, index) => {
        if (couleursPalette[index]) {
            couleursPalette[index].style.backgroundColor = color;
        }
    });
}

window.addEventListener("DOMContentLoaded", function(){
    loadPalette([
        "#22f6f3", "#3daf7e", "#ffffff", "#ec8236", "#a9a7ee", "#ecc606", 
        "#f783f2", "#e89e80", "#ff5733", "#33ff57", "#5733ff", "#ff33ff", 
        "#ff9833", "#33b5ff", "#ff33b5", "#b5ff33"
    ]);

    // le code de l'étape 2 se passe ici
    const couleursPalette = document.querySelectorAll("header input[type='color']");
    couleursPalette.forEach(input => {
        input.addEventListener("input", function(event) {
            let color = event.target.value;
            sessionStorage.setItem("selectedColor", color);
            console.log("Couleur sélectionnée via input", color);
        });
    });

    // le code de l'étape 3 se passe ici
    const allDivsInMain = document.querySelectorAll("main div div");
    allDivsInMain.forEach(div => {
        div.addEventListener("click", function() {
            let color = getSelectedColor();
            if (color) {
                if (div.style.backgroundColor === color) {
                    div.style.backgroundColor = "";
                } else {
                    div.style.backgroundColor = color;
                }
            }
        });
    });
});
