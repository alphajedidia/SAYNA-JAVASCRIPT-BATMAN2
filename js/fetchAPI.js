fetch("../js/api.json")
    .then(response => response.json())
    .then(data => show(data));

function show(data){
    console.table(data[0].question);
}