export const nav = (function () {
  let navi = document.createElement('header');
  navi.innerHTML = `<!--use nav to set yellow background color which will stretch with browser. use container to hold content, which stay in the middle-->
  <nav id="header-nav" class="navbar navbar-default">
    <!--bootstrap's "container": constrain to the middle-->
    <!--bootstrap's "container-fluid": stretch to the edges of browser, you will see difference when browser is big-->
    <div class="container">
      <div class="navbar-header">
        <!--logo image: responsive design. disappear for small screen-->
        <!--bootstrap's "pull-left": float left-->
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
          <!--create a nav button for mobile (top right)(bootstrap)-->   
          <!--"collapse" is in bootstrap.js.-->  
          <!--data-target, and aria-expanded are for screen readers-->               <!--"#collapsable-nav": lower down, will include navigation menus-->    

          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#collapsable-nav" aria-expanded="false">
            <!--screen reader only-->  
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        </div>
<!--menus / navigation buttons-->       
<div id="collapsable-nav" class="collapse navbar-collapse">
           <!--nav navbar-nav: turn ul to nicely done menu-->  
           <!--navbar-right: float navigation to the right-->  
           <ul id="nav-list" class="nav navbar-nav navbar-right">
           <!--add "Home" to teh navbar-->    
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
          </ul><!-- #nav-list -->
           
      
      </div><!-- .collapse .navbar-collapse -->
     </div><!-- .container -->
    </nav><!-- #header-nav -->`;

  let content = document.getElementById('content');
  content.appendChild(navi);
})();
