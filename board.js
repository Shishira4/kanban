function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementsByClassName(data));
}
function add(ev)
{
  var card = '<div class="card mb-3 cursor-grab" draggable="true" ondragstart="drag(event)" ondrop="drop(event)" ondragover="allowDrop(event)"> <div class="card-body"><p class="mb-0">You can move these elements between the containers</p></div></div></div>';
  ev.target.appendChild(card);
}