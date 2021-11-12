const posts = [
  { title: "Post one", body: "This is the first post" },
  { title: "Post two", body: "This is the second post" },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.getElementById("root").innerHTML = output;
  }, 500);
}

function createPost(post) {
    
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject("Error message 1!");
      }
    }, 1000);
  });
}

function createAnotherPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;

      if (!error) {

        resolve();

      } else {

        reject("Error message 2!");
      }
    }, 2000);
  });
}

// createPost({title: "Post Three", body:"This is the third post"})
// .then(getPosts)
// .catch(err => console.log(err));

async function init() {
  try {

    await createAnotherPost({title: "Inbetween Post",body: "This is the two and a half post"});
    await createPost({ title: "Post three", body: "This is the third post"});
    getPosts();

  } catch (err) {
    console.error(err);
  }
}

init();
