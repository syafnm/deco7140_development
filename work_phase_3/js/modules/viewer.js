

const initGalleryViewer = () => {
    const viewer = document.getElementById("viewer");
    const viewerImg = document.getElementById("viewer-img");
    const viewerCaption = document.getElementById("viewer-caption");
    const closeBtn = document.getElementById("close-viewer");

    if (!viewer || !viewerImg || !viewerCaption || !closeBtn) {
        console.warn("Viewer elements not found in the DOM.");
        return;
    }

    document.querySelectorAll(".gallery img").forEach((img) => {
        img.addEventListener("click", () => {
            // 1. Add content to viewer
            viewerImg.src = img.src;
            viewerImg.alt = img.alt || "Gallery image";
            viewerCaption.textContent = img.alt || "";

            // 2. Show viewer
            viewer.classList.add("open");
            viewer.setAttribute("aria-hidden", "false");
            document.body.style.overflow = "hidden";
        });
    });

    // 3. Hide viewer on close
    closeBtn.addEventListener("click", () => {
        viewer.classList.remove("open");
        viewer.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "auto";

        // Optional: clear viewer content
        viewerImg.src = "";
        viewerImg.alt = "";
        viewerCaption.textContent = "";
    });
};

export { initGalleryViewer };