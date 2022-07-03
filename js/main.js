let elList = document.querySelector(".js-list");
let elSelect = document.querySelector(".js-select");

let domgaChiqarator = (array, node) => {

  function getDate(format) {
    let date = new Date(format);
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0') }`
  }

  for (movie of array) {
    let elItem = document.createElement("li");
    let elImg = document.createElement("img");
    let elTitle = document.createElement("h2");
    let elId = document.createElement("p");
    let elContent = document.createElement("p");
    let elTime = document.createElement("span");
   
    elItem.classList = "item";
    elImg.classList = "img"
    elTitle.classList = "title"
    elId.classList = "id";
    elContent.classList = "content";
    elTime.classList = "span";

    elImg.src = `${movie.poster}`; 
    elImg.alt = "Picture of movie";
    elTitle.textContent = `${movie.title}`;
    elId.textContent = `Id: ${movie.id}`;
    elContent.textContent = `${movie.overview}`;
    elTime.textContent = `${getDate(movie.release_date)}`;

    elItem.appendChild(elImg);
    elItem.appendChild(elTitle);
    elItem.appendChild(elId);
    elItem.appendChild(elContent);
    elItem.appendChild(elTime);
    node.appendChild(elItem);
  }
}

domgaChiqarator(films, elList);

let result = [];

elSelect.addEventListener('change', function () {
  result = [];
  elList.innerHTML = "";
  let selectVal = elSelect.value;

  films.forEach((movie) => {
    if (movie.genres.includes(selectVal)) {
      result.push(movie);
    }
  })

  domgaChiqarator(result, elList);
})

const optionList = new Set();

films.forEach(movie => {
  movie.genres.forEach(properties => {
    optionList.add(properties);
  })
})

optionList.forEach(property => {
  let newOption = document.createElement('option');
  newOption.textContent = property;
  elSelect.appendChild(newOption);
})