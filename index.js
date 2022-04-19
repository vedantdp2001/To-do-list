let add = document.getElementById('addnote');
shownote();
add.addEventListener("click", function () {
    let text = document.getElementById('textarea');
    if (text.value == "") {
        alert("write a note");
    }
    else {

        let notes = localStorage.getItem("notes");
        if (notes == null) {
            arr = [];
        }
        else {
            console.log(notes);
            arr = JSON.parse(notes);
            console.log(arr);
        }

        arr.push(text.value);
        //console.log(arr);
        //console.log(JSON.stringify(arr));
        localStorage.setItem("notes", JSON.stringify(arr));
        text.value = "";
        //console.log(arr);
        shownote();
    }

});
function shownote() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        arr = [];
    }
    else {
        arr = JSON.parse(notes);
    }
    let html = "";
    arr.forEach(function (e, i) {
        html += `
    
      <div class="note-cart"   style="border: 1px solid black"  >
      <h3 id="note-heading">Note ${i + 1}</h3>
      <p id="note-content">${e} </p>
      <br>
      <button class="delete" id="${i}" onclick="deletenote(this.id)" >Delete Note</button> 
      `;

    });

    let notesElm = document.getElementById("notes");
    if (arr.length != 0) {
        notesElm.innerHTML = html;
    } else {
        notesElm.innerHTML = "Nothing to show here! Add note first";
    }

}
function deletenote(index) {

    let notes = localStorage.getItem("notes");
    arr.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(arr));
    shownote();
}