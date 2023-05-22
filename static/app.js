const form = document.querySelector("#form");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    getColors();
});

function getColors(){
    const query = form.elements.query.value;
    fetch("/palette", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
            query: query
        })
    })
    .then(response => response.json())
    .then(data => {
        const colors = data.colors;
        const container = document.querySelector(".container");
        createColorBoxes(colors, container);
        
    });
}
function createColorBoxes(colors, parent){
    parent.innerHTML = ""
    for(const color of colors) {
        const div = document.createElement("div");
        div.classList.add("color")
        div.style.backgroundColor = color;
        div.style.width = `calc(100%/ ${colors.length})`
        div.style.position = "relative";
        
        // Create copied text element
        const copiedText = document.createElement("span");
        copiedText.innerText = "Copied!";
        copiedText.classList.add("copied-text");
        div.appendChild(copiedText);


        div.addEventListener("click", function() {
            navigator.clipboard.writeText(color);

            copiedText.style.opacity = 1;

            setTimeout(() => {
                copiedText.style.opacity = 0;
            }, 1500);
        });


        const span = document.createElement("span");
        span.innerText = color
        div.appendChild(span)
        parent.appendChild(div)
    }
}