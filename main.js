let obj = [];
const search = document.getElementById('filmName');
const wraper = document.querySelector('.wraper');
const loading = document.querySelector('img');
search.addEventListener('keydown', check);

function check(e) {
    if (e.key == 'Enter') {
        clearChild();
        loading.style.display = 'block';
        const searchText = search.value;
        fetch(`https://imdb-api.com/pl/API/Search/k_lhrm67gq/${searchText}`)
        .then(response => response.json())
        .then(data => dataRedy(data))
    }
}

function dataRedy(data) {
   const results = [...data.results];
   loading.style.display = 'none';

   results.forEach( (item, id) => {
        obj[id] = new Film(item.image, item.title, item.id);
   });
}

function clearChild() {
    while (wraper.firstChild) {
        wraper.removeChild(wraper.firstChild);
    }
}

