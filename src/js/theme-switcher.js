export function switchTheme(checkbox, app) {
  if (checkbox.checked)
  {
    app.classList.remove('dark');
    app.classList.add('light');
  } else {
    app.classList.remove('light');
    app.classList.add('dark');
  }
}
