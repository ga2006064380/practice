const LayWikipreloader = document.querySelector(".lay-wiki-preloader");

window.addEventListener("load", function () {
    this.window.setTimeout(Wiki_load, 1000)
});

function Wiki_load() {
    LayWikipreloader.classList.add("wiki-hide-preloader");
}