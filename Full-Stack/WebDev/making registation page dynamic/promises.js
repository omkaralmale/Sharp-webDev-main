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

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject("Error: Something wnt wrong");
      }
    }, 3000);
  });
}

// getPost();

createPost({ title: "Title-5", body: "This is body 5" }).then(getPost);
