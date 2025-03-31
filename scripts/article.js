const redirectToHome = (event) => {
  event.preventDefault();
  window.location.href = "../index.html";
};

const fetchArticle = async (id) => {
  fetch("../data/articles.json")
    .then((response) => response.json())
    .then((data) => {
      const article = data.find((article) => article.id == id);
      if (article) {
        document.querySelector("#article-title").innerText = article.title;
        renderContent(article.content);
        setImage(article.image, article.imageAlt);
        document.querySelector("#published-date").innerText = formatDate(article.publishedAt);
        document.querySelector("#author-name").innerText = article.author;
      } else {
        console.error("Article not found");
        document.body.innerHTML = '<h1 class="not-found">404 Not Found</h1>';
      }
    })
    .catch((error) => {
      console.error("Error fetching article:", error);
    });
};

const renderContent = (data) => {
  const articleContent = document.getElementById("article-content");

  data.forEach(item => {
    const subtitle = document.createElement("h2");
    subtitle.textContent = item.subtitle;
    const text = document.createElement("p");
    text.textContent = item.text;

    articleContent.appendChild(subtitle);
    articleContent.appendChild(text);
  });
}

const formatDate = (dateString) =>{
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const date = new Date(dateString);
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  return `${month} ${day}, ${year}`;
}

const setImage = (url, altText) => {
  const imageElement = document.getElementById("article-image");
  imageElement.src = url;
  imageElement.alt = altText;
};

const getId = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");
  return id;
}


window.onload = ()=> {
  fetchArticle(getId());
};