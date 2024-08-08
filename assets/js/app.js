const quoteModal = document.querySelector('.quote-modal');
const quoteBtn = document.querySelector('#quote-btn');
const purchaseBtn = document.querySelectorAll('.purchase-btn');
const quoteClose = document.querySelector('#close');
const quoteSubmit = document.querySelector('.submit');
const inputFields = document.querySelectorAll('input');

quoteBtn.addEventListener('click', (e) => {
    e.preventDefault();
    quoteModal.classList.remove('hidden');
});

purchaseBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        quoteModal.classList.remove('hidden');
    });
});

quoteClose.addEventListener('click', (e) => {
    e.preventDefault();
    quoteModal.classList.add('hidden');
});

quoteSubmit.addEventListener('click', (e) => {
    e.preventDefault();

    inputFields.forEach((input) => {
        input.value = '';
    });

    quoteModal.classList.add('hidden');
});
