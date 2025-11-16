let currentPage = 0;
let pages = [];

document.addEventListener("DOMContentLoaded", () => {
  loadReader();
});

function loadReader() {
  const id = document.body.dataset.comicId;
  const comic = COMICS.find(c => c.id === id);

  pages = comic.pages;
  document.getElementById("title").textContent = comic.title;

  showPage(0);
}

function showPage(i) {
  currentPage = i;
  document.getElementById("pageImg").src = pages[i];
  document.getElementById("pageNumber").textContent = `${i + 1} / ${pages.length}`;
}

function nextPage() {
  if (currentPage < pages.length - 1) showPage(currentPage + 1);
}
function prevPage() {
  if (currentPage > 0) showPage(currentPage - 1);
}
