export const nav = (function () {
  let navi = document.createElement('header');
  navi.innerHTML = `<nav id="header-nav" class="navbar navbar-default">
    
    <div class="container">
      <div class="navbar-header">
        <a href="index.html" class="pull-left visible-md visible-lg">
          <div id="logo-img" alt="Logo image"></div>
      </a>

          <div class="navbar-brand">
            <a href="index.html"><h1>David Chu's China Bistro</h1></a>
            <p>
              <img src="https://usmile581.github.io/Bistro_Restaurant/images/star-k-logo.png" alt="Kosher certification">
              <span>Kosher Certified</span>
            </p>
          </div>    

          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#collapsable-nav" aria-expanded="false">  
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        </div>
       
<div id="collapsable-nav" class="collapse navbar-collapse">  
           <ul id="nav-list" class="nav navbar-nav navbar-right">
               
             <li class="visible-xs active">
              <a href="index.html">
                <span class="glyphicon glyphicon-home"></span> Home</a>
            </li> 
             
            <li>
              <a href="menu-categories.html">
                <span class="glyphicon glyphicon-cutlery"></span><br class="hidden-xs"> Menu</a>
            </li>
            <li>
              <a href="#">
                <span class="glyphicon glyphicon-info-sign"></span><br class="hidden-xs"> About</a>
            </li>
            <li>
              <a href="#">
                <span class="glyphicon glyphicon-certificate"></span><br class="hidden-xs"> Awards</a>
            </li>
            <li id="phone" class="hidden-xs">
              <a href="tel:410-602-5008">
                <span>410-602-5008</span></a><div>* We Deliver</div>
            </li>
          </ul>
      
      </div>
     </div>
    </nav>  `;

  let content = document.getElementById('content');
  content.appendChild(navi);
})();
