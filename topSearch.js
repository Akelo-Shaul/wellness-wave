const topSearch = document.querySelector(".topsearch");
const top_search_bar = document.querySelector(".top-search");

topSearch.addEventListener("click", () => {
  top_search_bar.classList.toggle("hidden");
  console.log(top_search_bar.classList);
});
