function addLike(id) {
    document.getElementById(id).innerText++
}

function remove(element) {
    element.remove()
}

function clicked() {
    var name = document.getElementById('search').value;
    return confirm('You are searching for '+name);
}