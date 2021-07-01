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
      const path = "/firstgeneration";
      const data = {
        pokemons: response.data.map((pokemon) => {
          return {
            ...pokemon,
            path,
          };
        }),
      };
      res.render("pokemons", data);
    })
    .catch((e) => next(e));
};

module.exports.secondgeneration = (req, res, next) => {
  http
    .get("/pokemonsSecondGen")
    .then((response) => {
      const path = "/secondgeneration";
      const data = {
        pokemons: response.data.map((pokemon) => {
          return {
            ...pokemon,
            path,
          };
        }),
      };
      res.render("pokemons", data);
    })
    .catch((e) => next(e));
};

module.exports.thirdgeneration = (req, res, next) => {
  http
    .get("/pokemonsThirdGen")
    .then((response) => {
      const path = "/thirdgeneration";
      const data = {
        pokemons: response.data.map((pokemon) => {
          return {
            ...pokemon,
            path,
          };
        }),
      };
      res.render("pokemons", data);
    })
    .catch((e) => next(e));
};

module.exports.fourthgeneration = (req, res, next) => {
  http
    .get("/pokemonsFourthGen")
    .then((response) => {
      const path = "/fourthgeneration";
      const data = {
        pokemons: response.data.map((pokemon) => {
          return {
            ...pokemon,
            path,
          };
        }),
      };
      res.render("pokemons", data);
    })
    .catch((e) => next(e));
};

module.exports.fifthgeneration = (req, res, next) => {
  http
    .get("/pokemonsFifthGen")
    .then((response) => {
      const path = "/fifthgeneration";
      const data = {
        pokemons: response.data.map((pokemon) => {
          return {
            ...pokemon,
            path,
          };
        }),
      };
      res.render("pokemons", data);
    })
    .catch((e) => next(e));
};

module.exports.getPokemonFirstGen = (req, res, next) => {
  const id = req.params.id;
  http
    .get(`/pokemonsFirstGen/${id}`)
    .then((response) => {
      res.render("detail", { pokemon: response.data });
    })
    .catch((error) => next(error));
};

module.exports.getPokemonSecondGen = (req, res, next) => {
  const id = req.params.id;
  http
    .get(`/pokemonsSecondGen/${id}`)
    .then((response) => {
      res.render("detail", { pokemon: response.data });
    })
    .catch((error) => next(error));
};
module.exports.getPokemonThirdGen = (req, res, next) => {
  const id = req.params.id;
  http
    .get(`/pokemonsThirdGen/${id}`)
    .then((response) => {
      res.render("detail", { pokemon: response.data });
    })
    .catch((error) => next(error));
};
module.exports.getPokemonFourthGen = (req, res, next) => {
  const id = req.params.id;
  http
    .get(`/pokemonsFourthGen/${id}`)
    .then((response) => {
      res.render("detail", { pokemon: response.data });
    })
    .catch((error) => next(error));
};
module.exports.getPokemonFifthGen = (req, res, next) => {
  const id = req.params.id;
  http
    .get(`/pokemonsFifthGen/${id}`)
    .then((response) => {
      res.render("detail", { pokemon: response.data });
    })
    .catch((error) => next(error));
};
