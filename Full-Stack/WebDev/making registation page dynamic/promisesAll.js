let posts = [];
let date = new Date();

function updateLastUserActivityTime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      date = new Date();
      resolve(date);
    }, 1000);
  });
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const currentDate = new Date();
      posts.push(post + " >>> " + currentDate);
      resolve(currentDate);
    }, 1000);
  });
}

function deletePost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (posts.length === 0) {
        reject("No posts to delete");
      } else {
        resolve(posts.pop());
      }
    }, 1000);
  });
}

function displayPost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.forEach((element) => {
        console.log(element);
      });
      resolve(posts);
    }, 1000);
  });
}

Promise.all([
  createPost("First Post"),
  updateLastUserActivityTime(),
  createPost("Second Post"),
  updateLastUserActivityTime(),
  createPost("Third Post"),
])
  .then(() => {
    return displayPost();
  })
  .then(() => deletePost())
  .then((deletedPost) => {
    console.log("Deleted Post ", deletedPost);
    return displayPost();
  })
  .catch((error) => console.log(error));
