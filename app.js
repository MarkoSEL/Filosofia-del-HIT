function toggleInfo(id) {
    let section = document.getElementById(id);

    if (section.style.display === "none" || section.style.display === "") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}

// profundiza en el hit
function openTab(tabId) {
    let tabs = document.querySelectorAll(".tab-content");
    tabs.forEach(tab => {
        tab.style.display = "none";
        tab.classList.remove("active");
    });

    let selectedTab = document.getElementById(tabId);
    selectedTab.style.display = "block";
    setTimeout(() => selectedTab.classList.add("active"), 10);
}

// sub botones
function toggleSubButtons(id) {
    let container = document.getElementById(id);
    let subContents = container.parentElement.querySelectorAll(".sub-content");
    
    container.classList.toggle("active");
    
    // Si se ocultan los sub-botones, también ocultamos cualquier contenido desplegado
    if (!container.classList.contains("active")) {
        subContents.forEach(content => {
            content.classList.remove("active");
            setTimeout(() => {
                content.style.display = "none";
            }, 300);
        });
    }
}

function toggleSubInfo(id) {
    let content = document.getElementById(id);

    if (content.classList.contains("active")) {
        content.classList.remove("active");
        setTimeout(() => {
            content.style.display = "none";
        }, 300);
    } else {    
        content.style.display = "block";
        setTimeout(() => content.classList.add("active"), 10);
    }
}

// Ocultar todas las secciones al cargar la página
window.onload = function() {
    let tabs = document.querySelectorAll(".tab-content");
    tabs.forEach(tab => {
        tab.style.display = "none";
    });
};









