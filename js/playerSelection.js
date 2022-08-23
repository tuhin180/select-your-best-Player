const player1 = SelectById("player-1");
const player2 = SelectById("player-2");
const player3 = SelectById("player-3");
const player4 = SelectById("player-4");
const player5 = SelectById("player-5");
const player6 = SelectById("player-6");

const player1Name = player1.querySelector("h3");
const player2Name = player2.querySelector("h3");
const player3Name = player3.querySelector("h3");
const player4Name = player4.querySelector("h3");
const player5Name = player5.querySelector("h3");
const player6Name = player6.querySelector("h3");

const selectedPlayers = SelectById("selected-players");

const player1Btn = player1.querySelector("button");
const player2Btn = player2.querySelector("button");
const player3Btn = player3.querySelector("button");
const player4Btn = player4.querySelector("button");
const player5Btn = player5.querySelector("button");
const player6Btn = player6.querySelector("button");

player1Btn.addEventListener("click", function (event) {
  onClick(event, player1Name);
});
player2Btn.addEventListener("click", function (event) {
  onClick(event, player2Name);
});
player3Btn.addEventListener("click", function (event) {
  onClick(event, player3Name);
});
player4Btn.addEventListener("click", function (event) {
  onClick(event, player4Name);
});
player5Btn.addEventListener("click", function (event) {
  onClick(event, player5Name);
});
player6Btn.addEventListener("click", function (event) {
  onClick(event, player6Name);
});
