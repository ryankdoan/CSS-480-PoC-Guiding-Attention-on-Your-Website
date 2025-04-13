
function sortList() {    /* sort the list with id pastCourses */
    const list = document.getElementById('pastCourses');
    const items = Array.from(list.children);

    /* shuffle the list items randomly */
    items.sort(() => Math.random() - 0.5);

     /* Update list with shuffled items */
     list.innerHTML = '';
     items.forEach(item => list.appendChild(item));
}
