const perPlayerBudget = SelectById("per-player-budget");
const budgetCalculateButton = SelectById("budget-calculate-btn");
const playerExpenses = SelectById("player-expenses");
const managerExpenses = SelectById("manager-expenses");
const coachExpenses = SelectById("coach-expenses");
const calculateTotalButton = SelectById("calculate-total-btn");
const totalExpenses = SelectById("total-expenses");

budgetCalculateButton.addEventListener("click", function () {
  const budget = Number(perPlayerBudget.value);
  playerExpenses.innerText = budget * selectCount;
});

calculateTotalButton.addEventListener("click", function () {
  const managerValue = Number(managerExpenses.value);
  const coachValue = Number(coachExpenses.value);
  totalExpenses.innerText =
    managerValue + coachValue + Number(playerExpenses.innerText);
});
