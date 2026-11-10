const languageSelect = document.querySelector("#language-select");

languageSelect.addEventListener("change", async () => {
  const language = document.querySelector("#language-select").value;
  const repoDetails = document.querySelector("#repo-details");
  const errorMessage = document.querySelector("#error-message");
  const url = `https://api.github.com/search/repositories?q=language:${language}&sort=stars`;

  repoDetails.classList.add("hidden");
  errorMessage.classList.add("hidden");

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Error fetching repositories");

    const data = await response.json();
    console.log(data);
    const randomRepo =
      data.items[Math.floor(Math.random() * data.items.length)];

    if (randomRepo) {
      document.querySelector("#repo-name").textContent = randomRepo.name;
      document.querySelector("#repo-description").textContent =
        randomRepo.description || "No description available";
      document.querySelector("#repo-stars").textContent =
        randomRepo.stargazers_count;
      document.querySelector("#repo-forks").textContent =
        randomRepo.forks_count;
      document.querySelector("#repo-issues").textContent =
        randomRepo.open_issues;
      document.querySelector("#repo-link").href = randomRepo.html_url;

      repoDetails.classList.remove("hidden");
    } else {
      errorMessage.textContent = "No repositories found";
      errorMessage.classList.remove("hidden");
    }
  } catch (error) {
    errorMessage.textContent = error.message;
    errorMessage.classList.remove("hidden");
  }
});
