const navBar = () => {
  const contentContainer = document.querySelector('#content');
  const menu = document.createElement('div');
  menu.setAttribute('id', 'nav');
  menu.innerHTML = ` <div class="navbar-header">
<a class="navbar-brand page-scroll" href="#">Manas</a> 
</div> 
<div class="collapse navbar-collapse" id="myNav">
<ul class=" nav navbar-nav pull-right">
<li><a href="#about" class="page-scroll">About</a></li>
<li><a href="#portfolio" class="page-scroll">Portfolio</a></li>
<li><a href="#contact" class="page-scroll">Contact</a></li>
</ul>
</div>`;
};
export { navBar };
