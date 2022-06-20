window.addEventListener("load", solve);

function solve() {
  HTMLLIElement.prototype.createPost = function (obj) {
    const [title, category, content] = [...Object.values(obj)]
    this.className = 'rpost';
    this.innerHTML = `<article>
    <h4>${title.value}</h4>
    <p>Category: ${category.value}</p>
    <p>Content: ${content.value}</p>
    </article>
    <button class="action-btn edit">Edit</button>
    <button class="action-btn approve">Approve</button>`
    Object.values(obj).forEach(e => e.value = '')
  }
  const input = {
    title: document.getElementById('post-title'),
    category: document.getElementById('post-category'),
    content: document.getElementById('post-content')
  };
  const lists = {
    review: document.getElementById('review-list'),
    published: document.getElementById('published-list')
  };
  document.getElementById('publish-btn').addEventListener('click', publish);
  document.getElementById('clear-btn').addEventListener('click', () => { lists.published.innerHTML = '' });

  function publish(e) {
    e.preventDefault();
    const title = input.title.value;
    const category = input.category.value;
    const content = input.content.value;
    
    if (title == '' || category == '' || content == '') {
      return;
    }

    const post = document.createElement('li');
    post.createPost(input)
    lists.review.appendChild(post)

    const editBtn = post.querySelector('.edit');
    const approveBtn = post.querySelector('.approve');
    editBtn.addEventListener('click', edit);
    approveBtn.addEventListener('click', approve);

    function edit() {
      input.title.value = title;
      input.category.value = category;
      input.content.value = content;
      post.remove();
    }

    function approve() {
      lists.published.appendChild(post);
      editBtn.remove();
      approveBtn.remove();
    }
  }
}