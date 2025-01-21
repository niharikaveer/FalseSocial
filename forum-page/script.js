document.getElementById('new-post-btn').onclick = function() {
    document.getElementById('new-post-modal').style.display = 'block';
  };
  
  document.querySelector('.close-btn').onclick = function() {
    document.getElementById('new-post-modal').style.display = 'none';
  };
  
  window.onclick = function(event) {
    if (event.target == document.getElementById('new-post-modal')) {
      document.getElementById('new-post-modal').style.display = 'none';
    }
  };
  
  document.getElementById('new-post-form').onsubmit = function(e) {
    e.preventDefault();
  
    const title = document.getElementById('post-title').value.trim();
    const content = document.getElementById('post-content').value.trim();
  
    if (title === '' && content === '') {
      alert('Please enter a title and content for your post.');
      return;
    }
  
    const newPost = document.createElement('div');
    newPost.className = 'post';
  
    newPost.innerHTML = `
      <div class='post-header'>
        <img src='user-placeholder.jpg' alt='User Avatar' class='avatar'>
        <h3>Your Name</h3>
        <span class='post-date'>Just now</span>
      </div>
      <div class='post-content'>
        ${title ? `<h4>${title}</h4>` : ''}
        <p>${content}</p>
      </div>
      <div class='post-actions'>
        <button class='like-btn'>👍 0</button>
        <button>💬 Comment</button>
        <button>🔗 Share</button>
      </div>`;
  
    const likeButton = newPost.querySelector('.like-btn');
    let likeCount = 0;
  
    likeButton.addEventListener('click', function() {
      likeCount++;
      this.textContent = `👍 ${likeCount}`;
    });
  
    document.getElementById('forum-posts').prepend(newPost);
  
    document.getElementById('new-post-modal').style.display = 'none';
  
    document.getElementById('new-post-form').reset();
  };