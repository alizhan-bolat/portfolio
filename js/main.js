// Лайтбокс: GLightbox (MIT), файлы лежат локально в ./vendor.
// Без JavaScript ссылки на изображения просто открываются напрямую.
if (typeof GLightbox === 'function') {
  GLightbox({
    selector: '.glightbox',
    touchNavigation: true,
    loop: false,
    zoomable: true,
    draggable: true,
    descPosition: 'bottom',
  });
}
