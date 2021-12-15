import { renderBabyDetail } from '../render-utils.js';
import { getBaby } from '../fetch-utils.js';

const babyDetailEl = document.querySelector('.baby-detail-container');
window.addEventListener('load', async() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const baby = await getBaby(id);
    const babyEl = renderBabyDetail(baby);
    babyDetailEl.append(babyEl);
});