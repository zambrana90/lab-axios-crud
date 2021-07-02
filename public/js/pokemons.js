const http = axios.create({
  baseURL: "http://localhost:8000",
});

//Like

const whiteHeart = "\u2661";
const blackHeart = "\u2764";
const buttonHeart = document.querySelectorAll(".heart");
buttonHeart.forEach((button) => {
  button.onclick = () => {
    const like = button.textContent;
    if (like == whiteHeart) {
      button.textContent = blackHeart;
    } else {
      button.textContent = whiteHeart;
    }
  };
});

function getPath(newPath) {
  if (newPath == "/firstgeneration") {
    path = "pokemonsFirstGen";
    return path;
  } else if (newPath == "/secondgeneration") {
    path = "pokemonsSecondGen";
    return path;
  } else if (newPath == "/thirdgeneration") {
    path = "pokemonsThirdGen";
    return path;
  } else if (newPath == "/fourthgeneration") {
    path = "pokemonsFourthGen";
    return path;
  } else if (newPath == "/fifthgeneration") {
    path = "pokemonsFifthGen";
    return path;
  } else {
    console.log("error")
  }
}

//Delete

const buttons = document.querySelectorAll(".btn-delete-pokemon");

buttons.forEach((button) => {
  button.onclick = () => {
    
    let actualPath = window.location.pathname;
    getPath(actualPath);

    http
      .delete(`/${path}/${button.value}`)
      .then(() => {
        button.parentElement.parentElement.parentElement.remove();
      })
      .catch((e) => console.error(e));
  };
});

//GIF

const gifActivate = document.querySelectorAll(".btn-activate-pokemon");

gifActivate.forEach((button) => {
  button.onclick = () => {
    const activate = button.value === "activate";

    let actualPath = window.location.pathname;
    getPath(actualPath);

    http
      .patch(`/${path}/${button.id}`, {
        active: activate,
      })
      .then(() => {
        ["btn-secondary", "btn-warning"];

        button.classList.toggle("btn-secondary");
        button.classList.toggle("btn-warning");

        button.value = activate ? "disable" : "activate";

        window.location.reload(true);
      })
      .catch((e) => console.error(e));
  };
});
