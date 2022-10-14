

export default function fillModal(imageSelector, titleSelector, descrSelector, yearSelector, data ) {
    try {
        const img = document.querySelector(imageSelector);
        img.style.backgroundImage = `url('${data.src}')`;
    }
    catch {};
    try {
        const title = document.querySelector(titleSelector);
        title.innerText = data.title;
    }
    catch {}
    try {
        const year = document.querySelector(yearSelector);
        year.innerText = data.year;
    }
    catch {}
    
    try {
        const descr = document.querySelector(descrSelector);
        descr.innerText = data.descr;
    }
    catch {}

    const modal = document.querySelector('.modal');
    modal.classList.remove('hide');
    modal.classList.add('show');
    document.getElementsByTagName("body")[0].style.overflowY = "hidden";
}

