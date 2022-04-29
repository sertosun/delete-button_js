// funktion zum öffnen des Containers
// sucht den ersten Tag mit der Klasse Container und fügt die aktice Klasse hinzu
// der delete button wird in den Hintergrund gesetzt
function openContainer() {
  document.querySelector(".container").classList.add("active"),
    (document.getElementById("delete_btn").style.zIndex = "-1");
}
// funktion zum schließen des Containers
// sucht den ersten Tag mit der Klasse Container und entfernt die aktice Klasse
// der delete button wird in den Vordergrund gesetzt
function closeContainer() {
  document.querySelector(".container").classList.remove("active"),
    (document.getElementById("delete_btn").style.zIndex = "1");
}
// verändert beim löschen der Elemente die Ausgabetexte und löscht die button
function deleteElements() {
  var title = document.getElementById("title");
  var subTitle = document.getElementById("sub_title");
  var warningMessage = document.getElementById("warning_message");
  var cancel = document.getElementById("cancel");
  var yesDelete = document.getElementById("yes_delete");
  var deleteButton = document.getElementById("delete_btn");

  title.innerHTML = "Daten wurde gelöscht";
  subTitle.innerHTML = "Ihre Daten wurden unwiderruflich gelöscht!";
  warningMessage.innerHTML =
    "Sie haben keinen Zugriff mehr auf die Daten. Sie sind aus dem Server entfernt worden";
  deleteButton.innerHTML = "Already deleted";
  yesDelete.style.display = "none";
  cancel.style.display = "none";
}
