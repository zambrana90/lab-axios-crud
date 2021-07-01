const http = axios.create({
  baseURL: "http://localhost:8000",
});

//Like

const whiteHeart = "\u2661";
const blackHeart = "\u2764";
const buttonHeart = document.querySelectorAll(".heart");
buttonHeart.forEach((button)=>{
    button.onclick = () => {
        const like = button.textContent;
        if (like == whiteHeart) {
            button.textContent = blackHeart;
        } else {
            button.textContent = whiteHeart;
        }}
    
})

//Delete 

const buttons = document.querySelectorAll(".btn-delete-pokemon");

buttons.forEach((button) => {
  button.onclick = () => {
    http
      .delete(`/pokemonsFirstGen/${button.value}`)
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

    window.location.reload(true)

    http
      .patch(`/pokemonsFirstGen/${button.id}`, {
        active: activate,
      })
      .then(() => {

        ["btn-secondary", "btn-warning"];

        button.classList.toggle("btn-secondary");
        button.classList.toggle("btn-warning");

        button.value = activate ? "disable" : "activate";
      })
      .catch((e) => console.error(e));
  };
});
