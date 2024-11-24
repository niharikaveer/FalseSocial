// Toggle Follow Button
document.getElementById('follow').addEventListener('click', function () {
    if (this.innerText === 'Follow') {
        this.innerText = 'Following';
        this.style.backgroundColor = '#4CAF50'; // Green color for "Following"
    } else {
        this.innerText = 'Follow';
        this.style.backgroundColor = '#0531F7'; // Default blue color
    }
});

//follow number increase
let follownumber = document.querySelector('.follownumber');
let fn = follownumber.innerText;
let followbutton = document.querySelector('.followbutton');
followbutton.addEventListener("click",()=>{
    follownumber.innerText = fn++;
})

//unfollow number decrease
let unfollownumber = document.querySelector('.unfollownumber');
let ufn = unfollownumber.innerText;
let unfollowbutton = document.querySelector('.unfollowbutton');
unfollowbutton.addEventListener("click",()=>{
    unfollownumber.innerText = ufn--;
})

// Toggle unFollow Button
document.getElementById('unfollow').addEventListener('click', function () {
    if (this.innerText === 'unfollow') {
        this.innerText = 'unfollowed';
        this.style.backgroundColor = '#fa1b1b'; // red color for "unFollowing"
    } else {
        this.innerText = 'unfollow';
        this.style.backgroundColor = '#0531F7'; // Default blue color
    }
});


// Like/Dislike 

document.querySelectorAll(".like").forEach((likeButton) => {
    likeButton.addEventListener("click", function () {
        if (!this.classList.contains("liked")) {
            this.classList.add("liked");
            this.textContent = " Liked";
        } else {
            this.classList.remove("liked");
            this.textContent = " Like";
        }
    });
});


document.querySelectorAll(".dislike").forEach((dislikeButton) => {
    dislikeButton.addEventListener("click", function () {
        if (!this.classList.contains("disliked")) {
            this.classList.add("disliked");
            this.textContent = " Disliked";
        } else {
            this.classList.remove("disliked");
            this.textContent = " Dislike";
        }
    });
});

// Scroll Stories
const wrapper = document.querySelector('.wrapper');
let isScrolling = false;

wrapper.addEventListener('mouseenter', () => {
    isScrolling = true;
});

wrapper.addEventListener('mouseleave', () => {
    isScrolling = false;
});

let scrollLeft = 0;
setInterval(() => {
    if (isScrolling) {
        scrollLeft -= 2; // Adjust speed
        wrapper.scrollTo({ left: scrollLeft });
    }
}, 50);


// Log story clicks
document.querySelectorAll(".story").forEach((story) => {
    story.addEventListener("click", function () {
        console.log("Story clicked:", this.id);
        alert(`You clicked on ${this.nextElementSibling.textContent}'s story.`);
    });
});

document.querySelectorAll(".fa-comment").forEach((commentButton) => {
    commentButton.addEventListener("click", function () {
        const comment = prompt("Enter your comment:");
        if (comment) {
            console.log("New Comment:", comment);
            alert("Comment added: " + comment);
        }
    });
});