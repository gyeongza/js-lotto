const LottoGame = require("./LottoGame");

class App {
  play() {
    new LottoGame().startGame();
  }
}

const app = new App();
app.play();

module.exports = App;
