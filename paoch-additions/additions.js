(() => {
  'use strict';
  const guide = document.getElementById('paoch-pao-guide');
  if (!guide) return;
  const buttons = Array.from(guide.querySelectorAll('[data-paoch-months]'));
  const number = guide.querySelector('#paoch-jar-value');
  const jar = guide.querySelector('#paoch-jar');
  const output = guide.querySelector('#paoch-pao-output');
  if (!number || !jar || !output) return;
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const months = button.dataset.paochMonths;
      if (!['6', '12', '24'].includes(months)) return;
      buttons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
      number.textContent = months + 'M';
      jar.setAttribute('aria-label', 'Open jar symbol: ' + months + ' months after opening');
      output.textContent = months + 'M = ' + months + ' months after opening';
    });
  });
})();
