document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".timeline-item");

    function showItemsOnScroll() {
        items.forEach((item) => {
            const rect = item.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.8) {
                item.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", showItemsOnScroll);
    showItemsOnScroll();
});
