(()=>{"use strict";const n=function(){let n=document.createElement("header");n.innerHTML='<nav id="header-nav" class="navbar navbar-default">\n    \n    <div class="container">\n      <div class="navbar-header">\n        <a href="index.html" class="pull-left visible-md visible-lg">\n        <img src="../dist/images/burger.png" id="logo-img"> \n      </a>\n\n          <div class="navbar-brand">\n            <a href="index.html"><h1>Burger <span class="king">King</span></h1></a>\n          </div>    \n        </div>\n       \n<div id="collapsable-nav" class="collapse navbar-collapse">  \n           <ul id="nav-list" class="nav navbar-nav navbar-right">\n                \n             \n            <li>\n              <a href="menu-categories.html">\n                <span class="glyphicon glyphicon-cutlery"></span><br class="hidden-xs"> Menu</a>\n            </li>\n            <li>\n              <a href="#">\n                <span class="glyphicon glyphicon-info-sign"></span><br class="hidden-xs"> About</a>\n            </li>\n            <li>\n              <a href="#">\n                <span class="glyphicon glyphicon-phone-alt"></span><br class="hidden-xs"> Contact</a>\n            </li>\n          </ul>\n      \n      </div>\n     </div>\n    </nav>  ',document.getElementById("content").appendChild(n)}(),i=function(){let n=document.createElement("div");n.innerHTML='\n  <div class="col-md-12" id="about">\n        <p class="main-heading">About Us</p>\n        <div class=\'about-cont col-md-12\'>\n            <p class="about-data">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n        </div>\n  </div>\n    ',document.getElementById("content").appendChild(n)}();!function(){let n=document.createElement("div");n.innerHTML='\n        <div id="menu" class=\'col-md-12\'>\n            <p class=\'main-heading\'> Menu <i class="fas fa-hamburger"></i></p>\n            <div class="menu-cont col-md-12">\n                <div class="col-md-6 cont">\n                  <div>    \n                    <img src="../dist/images/ham.jpeg" class="menu-img" >\n                  </div>\n                  <div>\n                    <p class=\'menu-content\'>Ham Burger     -Rs 250<p>\n                  </div>\n                </div>\n                <div class="col-md-6 cont">\n                  <div>    \n                    <img src="../dist/images/cheese_1.jpg" class="menu-img" >\n                  </div>\n                  <div>\n                    <p class=\'menu-content\'>Cheese Burger     -Rs 200<p>\n                  </div>\n                </div>\n                <div class="col-md-6 cont">\n                  <div>    \n                    <img src="../dist/images/ham.jpeg" class="menu-img" >\n                  </div>\n                  <div>\n                    <p class=\'menu-content\' style="margin-left:20%;">Double Cheese Burger     -Rs 300<p>\n                  </div>\n                </div>\n                <div class="col-md-6 cont">\n                  <div>    \n                    <img src="../dist/images/steak.jpg" class="menu-img" >\n                  </div>\n                  <div>\n                    <p class=\'menu-content\'>Steak     -Rs 400<p>\n                  </div>\n                </div>\n                <div class="col-md-6 cont">\n                  <div>    \n                    <img src="../dist/images/fries.jpg" class="menu-img" >\n                  </div>\n                  <div>\n                    <p class=\'menu-content\'>Frech-Fries     -Rs 100<p>\n                  </div>\n                </div>\n                <div class="col-md-6 cont">\n                  <div>    \n                    <img src="../dist/images/coke.jpg" class="menu-img" >\n                  </div>\n                  <div>\n                    <p class=\'menu-content\'>Coke     -Rs 80<p>\n                  </div>\n                </div>\n            </div>\n        </div>\n    ',document.getElementById("content").appendChild(n)}(),window.nav=n,window.about=i,window.menu=menu})();