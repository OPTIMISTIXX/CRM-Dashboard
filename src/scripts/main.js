'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const dashboard = document.getElementById('dashboard-el');
  const card = document.getElementById('card-el');
  const input = document.querySelector('.customers__card-input');
  const searchBlock = document.querySelector('.customers__card-search');

  card.classList.remove('customers__card--hidden');
  card.classList.add('customer__card-slide-from-bottom');
  dashboard.classList.remove('dashboard-hidden');
  dashboard.classList.add('dashboard-slide-in');

  input.addEventListener('focus', () => {
    searchBlock.classList.add('card-search--border');
  });

  input.addEventListener('blur', () => {
    searchBlock.classList.remove('card-search--border');
  });
});
