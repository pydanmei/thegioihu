// ==== LOAD DATA ====
document.addEventListener("DOMContentLoaded", () => {
  renderGenreChips();
  renderTagChips();
  renderComicList(COMICS);
});

// ==== SEARCH ====
function handleSearch() {
  const keyword = document.getElementById("searchInput").value.toLowerCase();
  const result = COMICS.filter(c =>
    c.title.toLowerCase().includes(keyword) ||
    c.originalTitle.toLowerCase().includes(keyword)
  );
  renderComicList(result);
}

// ==== RENDER COMICS ====
function renderComicList(list) {
  const container = document.getElementById("comicList");
  container.innerHTML = "";

  if (list.length === 0) {
    container.innerHTML = `<p style="text-align:center;opacity:.7;">Không tìm thấy truyện nào.</p>`;
    return;
  }

  list.forEach(c => {
    const card = document.createElement("div");
    card.className = "comic-card";
    card.onclick = () => (window.location.href = `truyen/${c.id}.html`);

    card.innerHTML = `
      <img src="${c.cover}" />
      <h3 style="font-size:16px;margin:6px 0;">${c.title}</h3>
      <p style="font-size:13px;opacity:.7;">${c.author}</p>
    `;

    container.appendChild(card);
  });
}

// ==== GENRE + TAG FILTER ====

// render 3 genre chính
function renderGenreChips() {
  const box = document.getElementById("genreFilter");
  GENRES.forEach(g => {
    const chip = document.createElement("span");
    chip.className = "chip";
    chip.textContent = GENRE_INFO[g].label;
    chip.title = GENRE_INFO[g].desc;

    chip.onclick = () => applyGenreFilter(g);
    box.appendChild(chip);
  });
}

// render tag phụ
function renderTagChips() {
  const box = document.getElementById("tagFilter");
  TAGS.forEach(t => {
    const chip = document.createElement("span");
    chip.className = "chip";
    chip.textContent = TAG_INFO[t].label;
    chip.title = TAG_INFO[t].desc;

    chip.onclick = () => applyTagFilter(t);
    box.appendChild(chip);
  });
}

function applyGenreFilter(selected) {
  const filtered = COMICS.filter(c => c.genre === selected);
  renderComicList(filtered);
}

function applyTagFilter(selected) {
  const filtered = COMICS.filter(c => c.tags.includes(selected));
  renderComicList(filtered);
}
