
function sortList() {
    const list = document.getElementById('interests');
    const items = Array.from(list.children);

    /* shuffle the list items randomly */
    items.sort(() => Math.random() - 0.5);

     /* Update list with shuffled items */
     list.innerHTML = '';
     items.forEach(item => list.appendChild(item));
}

/* Added a keyboard shortcut where keyboard users can press the 'S' key to activate the sort list button */
document.addEventListener('keydown', function(event) {
    if (event.key.toLowerCase() === 's') {
        sortList();
    }
});
