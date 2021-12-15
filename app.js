// import functions and grab DOM elements
import { getBabies } from './fetch-utils.js';
import { renderBaby } from './render-utils.js';

const bodyEl = document.querySelector('body');

window.addEventListener('load', async() => {
    const babies = await getBabies();
    for (let baby of babies) {
        let babyEl = renderBaby(baby);
        bodyEl.append(babyEl);
    }
});

// let state

// set event listeners
  // get user input
  // use user input to update state
  // update DOM to reflect the new state
