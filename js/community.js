document.getElementById('submit-comment').addEventListener('click', function() {
    const userName = document.getElementById('user-name').value;
    const userComment = document.getElementById('user-comment').value;

    if (userName && userComment) {
        const commentList = document.querySelector('.comment-list');
        const newComment = document.createElement('div');
        newComment.classList.add('comment-item');

        const commentHeader = document.createElement('div');
        commentHeader.classList.add('comment-header');

        const userNameSpan = document.createElement('span');
        userNameSpan.classList.add('user-name');
        userNameSpan.textContent = userName;

        const commentTimeSpan = document.createElement('span');
        commentTimeSpan.classList.add('comment-time');
        const now = new Date();
        const formattedTime = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
        commentTimeSpan.textContent = formattedTime;

        commentHeader.appendChild(userNameSpan);
        commentHeader.appendChild(commentTimeSpan);

        const commentContent = document.createElement('p');
        commentContent.classList.add('comment-content');
        commentContent.textContent = userComment;

        newComment.appendChild(commentHeader);
        newComment.appendChild(commentContent);

        commentList.appendChild(newComment);

        document.getElementById('user-name').value = '';
        document.getElementById('user-comment').value = '';
    }
});