function addLike() {
    var likeCountElement = document.getElementById('like-count');
    var likeCount = parseInt(likeCountElement.textContent);
    likeCountElement.textContent = likeCount + 1;
}

