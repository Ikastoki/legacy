const subredditInput = document.querySelector("#subreddit-name");
const addSubredditBtn = document.querySelector("#add-subreddit");
const subredditsContainer = document.querySelector("#subreddits-container");
let subredditList = [];

//todo get data from localstorage
document.addEventListener("DOMContentLoaded", () => {
  const storedSubreddits = JSON.parse(localStorage.getItem("subreddits")) || [];
  subredditList = storedSubreddits; // Asigna a subredditList
  storedSubreddits.forEach((subreddit) => fetchSubredditPosts(subreddit));
});

// add subreddit
addSubredditBtn.addEventListener("click", () => {
  const subreddit = subredditInput.value.trim();
  if (subreddit) {
    fetchSubredditPosts(subreddit);
    saveSubreddit(subreddit);
    subredditInput.value = "";
  }
});

// get post
async function fetchSubredditPosts(subreddit) {
  try {
    const url = `https://www.reddit.com/r/${subreddit}/.json`;
    const response = await fetch(url);
    if (!response.ok) throw new Error("Subreddit not found");
    const data = await response.json();

    console.log(data.data.children);
    displaySubredditPosts(subreddit, data.data.children);
  } catch (error) {
    console.log(`Error fetching subreddit: ${error.message}`);
  }
}

// show post
function displaySubredditPosts(subreddit, posts) {
  const subredditDiv = document.createElement("div");
  subredditDiv.classList.add("subreddit");
  subredditDiv.innerHTML = `<h2>${subreddit}</h2>`;

  posts.slice(0, 5).forEach((post) => {
    const postDiv = document.createElement("div");
    postDiv.classList.add("post");
    postDiv.innerHTML = `
    <a href="${post.data.url}" target="_blank" class="post-link">
        <p class="post-title">${post.data.title}</p>
    </a>
    <p>👍 ${post.data.ups} | 💬 ${post.data.num_comments}</p>
    <span class="delete-btn">🗑️</span> <!-- Cambiado a clase -->
    `;
    subredditDiv.appendChild(postDiv);
  });

  // delete posts
  const deleteBtn = document.createElement("span");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.textContent = "🗑️";
  subredditDiv.appendChild(deleteBtn);

  deleteBtn.addEventListener("click", () => {
    subredditDiv.remove();
    subredditList = subredditList.filter((item) => item !== subreddit);
    localStorage.setItem("subreddits", JSON.stringify(subredditList));
  });

  subredditsContainer.appendChild(subredditDiv);
}

// save data
function saveSubreddit(subreddit) {
  let storedSubreddits = JSON.parse(localStorage.getItem("subreddits")) || [];
  if (!storedSubreddits.includes(subreddit)) {
    storedSubreddits.push(subreddit);
    localStorage.setItem("subreddits", JSON.stringify(storedSubreddits));
  }
}
