export const nav = (function () {
  let navi = document.createElement('header');
  navi.innerHTML = `<nav id="header-nav" class="navbar navbar-default">
    
    <div class="container">
      <div class="navbar-header">
        <a href="index.html" class="pull-left visible-md visible-lg">
        <img src="../dist/images/burger.png" id="logo-img"> 
      </a>

          <div class="navbar-brand">
            <a href="index.html"><h1>Burger <span class="king">King</span></h1></a>
          </div>    
        </div>
       
<div id="collapsable-nav" class="collapse navbar-collapse">  
           <ul id="nav-list" class="nav navbar-nav navbar-right">
                
             
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
                <span class="glyphicon glyphicon-phone-alt"></span><br class="hidden-xs"> Contact</a>
            </li>
          </ul>
      
      </div>
     </div>
    </nav>  `;

  let content = document.getElementById('content');
  content.appendChild(navi);
})();
