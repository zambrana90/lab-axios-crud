const router = require("express").Router();
const pokemonController = require("../controllers/pokemon.controller");

// Home
router.get("/", pokemonController.home);

router.get("/firstgeneration", pokemonController.firstgeneration);
router.get("/secondgeneration", pokemonController.secondgeneration);
router.get("/thirdgeneration", pokemonController.thirdgeneration);
router.get("/fourthgeneration", pokemonController.fourthgeneration);
router.get("/fifthgeneration", pokemonController.fifthgeneration);

router.get("/firstgeneration/:id", pokemonController.getPokemonFirstGen);
router.get("/secondgeneration/:id", pokemonController.getPokemonSecondGen);
router.get("/thirdgeneration/:id", pokemonController.getPokemonThirdGen);
router.get("/fourthgeneration/:id", pokemonController.getPokemonFourthGen);
router.get("/fifthgeneration/:id", pokemonController.getPokemonFifthGen);

module.exports = router;
