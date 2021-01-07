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

function naviBar() {
  const content = document.getElementById('content');
  const nav = document.createElement('div');
  nav.innerHTML = `<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  </div>
</nav>`;
  content.appendChild(nav);
}
export { naviBar };
