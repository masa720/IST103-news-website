const redirectToHome = (event) => {
  event.preventDefault();
  window.location.href = "index.html";
};

const redirectToArticle = (event, id) => {
  event.preventDefault();
  window.location.href = `./templates/article.html?id=${id}`;
};