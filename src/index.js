import "./styles.css";

const url = new URL(" https://api.tvmaze.com/search/shows?q=");
const button = document.getElementById("submit-data");
const q = document.getElementById("input-show");
const info = document.getElementById("info-id");
button.addEventListener("click", async function () {
  url.searchParams.set("q", q.value);
  const promise = await fetch(url);
  const userJSON = await promise.json();

  userJSON.forEach((i) => {
    let h1 = document.createElement("h1");
    let p = document.createElement("p");
    let img = document.createElement("img");
    if (i.show.image) {
      img.setAttribute("src", i.show.image.medium);
    }
    let replaced = i.show.summary.replace(/<p>/g, "");
    replaced = replaced.replace(/<\/p>/g, "");
    h1.innerText = i.show.name;
    p.innerText = replaced;
    info.appendChild(img);
    info.appendChild(h1);
    info.appendChild(p);
  });
});
