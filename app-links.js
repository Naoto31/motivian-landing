// Sign-up and log-in links for every page. Fill these in once the app is public.
const APP_LINKS = { signup: '', login: '' };
document.querySelectorAll('[data-app]').forEach((el) => { const url = APP_LINKS[el.dataset.app]; if (url) el.href = url; });
