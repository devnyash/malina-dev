const legalPageProgress = document.querySelector('.page-progress');

function updateLegalPageProgress() {
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollableHeight > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollableHeight)) : 0;
  document.documentElement.style.setProperty('--page-progress', String(progress));
  legalPageProgress?.setAttribute('aria-valuenow', String(Math.round(progress * 100)));
}

window.addEventListener('scroll', updateLegalPageProgress, { passive: true });
window.addEventListener('resize', updateLegalPageProgress);
updateLegalPageProgress();
