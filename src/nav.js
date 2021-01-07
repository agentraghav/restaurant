function createLink(id, name) {
  const link = document.createElement('a');
  link.setAttribute('id', id);
  link.setAttribute('href', '#');
  const span = document.createElement('span');
  span.textContent = name;
  link.appendChild(span);
  return link;
}

function navBar(id) {
  const nav = document.createElement('nav');
  nav.setAttribute('id', id);
  const home = createLink('home', 'Home');
  const menu = createLink('menu', 'Menu');
  const contact = createLink('contact', 'Contact');
  nav.appendChild(home);
  nav.appendChild(menu);
  nav.appendChild(contact);
  return nav;
}

function loadPage() {
  const container = document.getElementById('content');
  const nav = navBar('nav');
  container.appendChild(nav);
}

export { loadPage };
