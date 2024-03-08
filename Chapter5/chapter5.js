//document.getElementById("myName")
//.innerHTML += " Mahlakametsa";

let item1;
let item2;
let item3;
let item4;

document.getElementById("changeList").onclick = newList;

function newList() {
    item1 = (prompt("Enter a new first thing: "));
    item2 = (prompt("Enter a new second thing: "));
    item3 = (prompt("enter a new third thing: "));
    item4 = (prompt("Enter fourth new thing: "));
    updateList();
}

function updateList () {
    document.getElementById("firstThing").innerHTML = item1;
    document.getElementById("secondThing").innerHTML = item2;
    document.getElementById("thirdThing").innerHTML = item3;
    document.getElementById("fourthThing").innerHTML = item4;
}