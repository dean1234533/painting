function initSlider(wrapId, imgAId, imgInnerId, dividerId) {
  const wrap     = document.getElementById(wrapId);
  const imgA     = document.getElementById(imgAId);
  const imgInner = document.getElementById(imgInnerId);
  const divider  = document.getElementById(dividerId);
  let dragging   = false;

  function setPos(clientX) {
    const rect = wrap.getBoundingClientRect();
    let pct = (clientX - rect.left) / rect.width;
    pct = Math.max(0.02, Math.min(0.98, pct));
    const px = pct * rect.width;
    imgA.style.width     = px + 'px';
    imgInner.style.width = rect.width + 'px';
    divider.style.left   = px + 'px';
  }

  // Mouse
  wrap.addEventListener('mousedown',   e => { dragging = true;  setPos(e.clientX); });
  window.addEventListener('mousemove', e => { if (dragging) setPos(e.clientX); });
  window.addEventListener('mouseup',   ()  => { dragging = false; });

  // Touch
  wrap.addEventListener('touchstart',  e => { dragging = true;  setPos(e.touches[0].clientX); }, { passive: true });
  window.addEventListener('touchmove', e => { if (dragging) setPos(e.touches[0].clientX); },     { passive: true });
  window.addEventListener('touchend',  ()  => { dragging = false; });

  // Initialise correct widths once layout is ready
  return () => {
    const rect = wrap.getBoundingClientRect();
    imgInner.style.width = rect.width + 'px';
  };
}

// Initialise all sliders on load
window.addEventListener('load', () => {
  [
    initSlider('slider-wrap1', 'img-a1', 'img-a-inner1', 'divider1'),
    initSlider('slider-wrap2', 'img-a2', 'img-a-inner2', 'divider2'),
    initSlider('slider-wrap3', 'img-a3', 'img-a-inner3', 'divider3'),
  ].forEach(init => init());
});




  