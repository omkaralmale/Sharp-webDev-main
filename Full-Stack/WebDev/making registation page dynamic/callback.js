//Callback
const posts = [
  { title: "Title-1", body: "This is body 1" },
  { title: "Title-2", body: "This is body 2" },
  { title: "Title-3", body: "This is body 3" },
  { title: "Title-4", body: "This is body 4" },
];

function getPost() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post, callGetPost) {
  setTimeout(() => {
    posts.push(post);
    callGetPost();
  }, 2000);
}

// getPost();

createPost({ title: "Title-5", body: "This is body 5" }, getPost);
