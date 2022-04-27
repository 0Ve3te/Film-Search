class Film {
    constructor(image, title, id) {
        this.image = image;
        this.title = title;
        this.id = id;
        this.createElement(this);
    }

    createElement(item) {
        const el = document.createElement('div');
        el.classList.add('result');
        const cover = document.createElement('div');
        cover.classList.add('cover');
        const title = document.createElement('div');
        title.classList.add('title');
        const titleP = document.createElement('p');
        const link = document.createElement('a');

        cover.style.backgroundImage = `url(${item.image})`;
        titleP.textContent = item.title;
        link.href = `https://www.imdb.com/title/${item.id}`;
        link.target = '_blank';

        link.appendChild(titleP);
        title.appendChild(link);
        el.appendChild(cover);
        el.appendChild(title);
        wraper.appendChild(el);


    }
}