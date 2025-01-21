document.addEventListener("DOMContentLoaded", () => {
    // Functionality to increment likes
    const likeIcons = document.querySelectorAll(".fa-heart");
    likeIcons.forEach((icon) => {
        icon.addEventListener("click", () => {
            // Find the sibling span containing likes
            const likesText = icon.closest(".post-footer").querySelector("span");
            let likesCount = parseInt(likesText.textContent.split(" ")[0]);
            if (icon.classList.contains("liked")) {
                // Unlike: decrement and toggle class
                likesCount--;
                icon.classList.remove("liked");
                icon.style.fill = '';  // Reset the color back to default
            } else {
                // Like: increment and toggle class
                likesCount++;
                icon.classList.add("liked");
                icon.style.fill = 'red';  // Change the heart's color inside to red
            }
            likesText.textContent = `${likesCount} likes`;
        });
    });

    // Functionality to toggle follow/following
    const followButtons = document.querySelectorAll(".follow-btn");
    followButtons.forEach((button) => {
        button.addEventListener("click", () => {
            if (button.textContent === "Follow") {
                button.textContent = "Following";
                button.style.backgroundColor = "gray"; // Optional styling
            } else {
                button.textContent = "Follow";
                button.style.backgroundColor = ""; // Reset background
            }
        });
    });
});
