const axios = require("axios");

const http = axios.create({
  baseURL: "http://localhost:8000",
});

module.exports.home = (req, res, next) => {
  res.render("home");
};

module.exports.firstgeneration = (req, res, next) => {
  http
    .get("/pokemonsFirstGen")
    .then((response) => {
      console.log(response.data);

      res.render("pokemons", { pokemons: response.data });
    })
    .catch((e) => next(e));
};

module.exports.secondgeneration = (req, res, next) => {
  http
    .get("/pokemonsSecondGen")
    .then((response) => {
      console.log(response.data);

      res.render("pokemons", { pokemons: response.data });
    })
    .catch((e) => next(e));
};

module.exports.thirdgeneration = (req, res, next) => {
  http
    .get("/pokemonsThirdGen")
    .then((response) => {
      console.log(response.data);

      res.render("pokemons", { pokemons: response.data });
    })
    .catch((e) => next(e));
};

module.exports.fourthgeneration = (req, res, next) => {
  http
    .get("/pokemonsFourthGen")
    .then((response) => {
      console.log(response.data);

      res.render("pokemons", { pokemons: response.data });
    })
    .catch((e) => next(e));
};

module.exports.fifthgeneration = (req, res, next) => {
  http
    .get("/pokemonsFifthGen")
    .then((response) => {
      console.log(response.data);

      res.render("pokemons", { pokemons: response.data });
    })
    .catch((e) => next(e));
};

// module.exports.getPokemon = (req, res, next) => {
//   const id = req.params.id;

//   http
//     .get(`/pokemons/${id}`)
//     .then((response) => {
//       console.log(response.data);

//       res.render("detail", { pokemon: response.data });
//     })
//     .catch((error) => next(error));
// };
