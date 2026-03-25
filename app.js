const searchInput = document.querySelector(".seaTxt");

searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();

    document.querySelectorAll(".detailModules").forEach(mod => {
        const text = mod.textContent.toLowerCase();

        if (text.includes(query)) {
            mod.style.display = "flex";
            mod.style.animation = "fadeIn 0.4s forwards";
        } else {
            mod.style.display = "none";
        }
    });
});
