export function renderBaby(baby) {
    const container = document.createElement('div');
    const img = document.createElement('img');
    const p = document.createElement('p');
    const a = document.createElement('a');

    container.classList.add('baby');
    a.href = `./detail/?id=${baby.id}`;

    p.textContent = baby.name;
    img.src = `./assets/${baby.name.toLowerCase()}.jpeg`;

    container.append(p, img);

    a.append(container);

    return a;
}

export function renderBabyDetail(baby) {
    const container = document.createElement('div');
    const nameEl = document.createElement('p');
    const animalEl = document.createElement('p');
    const heightEl = document.createElement('p');
    const imgEl = document.createElement('img');

    container.classList.add('detail-container');

    nameEl.textContent = baby.name;
    animalEl.textContent = baby.animal;
    heightEl.textContent = `${baby.height} ${baby.unit}`;
    imgEl.src = `../assets/${baby.name.toLowerCase()}.jpeg`;

    container.append(nameEl, animalEl, heightEl, imgEl);

    return container;
}