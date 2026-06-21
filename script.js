function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username && password) {
    localStorage.setItem("user", username);
    document.getElementById("login-page").classList.add("hidden");
    document.getElementById("main-page").classList.remove("hidden");
    loadHistory();
  }
}

function generateTitle() {
  const topic = document.getElementById("topic").value;
  document.getElementById("title-result").innerText =
    `${topic}에 대한 충격적인 진실`;
}

function generateHashtag() {
  const topic = document.getElementById("topic").value;
  document.getElementById("hashtag-result").innerText =
    `#${topic} #쇼츠 #viral`;
}

function generateImagePrompt() {
  const topic = document.getElementById("topic").value;
  document.getElementById("image-result").innerText =
    `A cinematic image about ${topic}`;
}

function generateVideoPrompt() {
  const topic = document.getElementById("topic").value;
  document.getElementById("video-result").innerText =
    `A short cinematic video about ${topic}`;
}

function saveHistory() {
  const topic = document.getElementById("topic").value;
  let history = JSON.parse(localStorage.getItem("history")) || [];
  history.push(topic);
  localStorage.setItem("history", JSON.stringify(history));
  loadHistory();
}

function loadHistory() {
  let history = JSON.parse(localStorage.getItem("history")) || [];
  const historyList = document.getElementById("history");
  historyList.innerHTML = "";

  history.forEach(item => {
    const li = document.createElement("li");
    li.innerText = item;
    historyList.appendChild(li);
  });
}
