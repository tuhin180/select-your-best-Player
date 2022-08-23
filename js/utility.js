function SelectById(id) {
  return document.getElementById(id);
}
let selectCount = 0;

function onClick(event, element) {
  if (selectCount >= 5) {
    return;
  }
  if (selectCount === 0) {
    selectedPlayers.innerHTML = "<li>" + element.innerText + "</li>";
  } else {
    selectedPlayers.innerHTML += "<li>" + element.innerText + "</li>";
  }
  event.target.disabled = true;
  selectCount++;
}
