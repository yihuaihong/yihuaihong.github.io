// Research map: clicking a published item scrolls to its paper card and briefly highlights it.
// Runs in the capture phase so the theme's own smooth-scroll handler does not also fire.
document.addEventListener('click', function (e) {
  var link = e.target.closest && e.target.closest('a.rm-item[href^="#"]');
  if (!link) return;
  var id = decodeURIComponent(link.getAttribute('href').slice(1));
  var target = document.getElementById(id);
  if (!target) return;
  e.preventDefault();
  e.stopPropagation();
  var card = target.closest('.paper-box') || target;
  card.scrollIntoView({ behavior: 'smooth', block: 'center' });
  if (history.replaceState) history.replaceState(null, '', '#' + id);
  card.classList.remove('is-flash');
  void card.offsetWidth; // restart the animation on repeated clicks
  card.classList.add('is-flash');
  setTimeout(function () { card.classList.remove('is-flash'); }, 2200);
}, true);
