export const menuPage = (function () {
  let menuDiv = document.createElement('div');
  menuDiv.innerHTML = `
        <div id="menu" class='col-md-12'>
            <p class='main-heading'> Menu <i class="fas fa-hamburger"></i></p>
            <div class="menu-cont col-md-12">
                <div class="col-md-6 cont">
                  <div>    
                    <img src="../dist/images/ham.jpeg" class="menu-img" >
                  </div>
                  <div>
                    <p class='menu-content'>Ham Burger     -Rs 250<p>
                  </div>
                </div>
                <div class="col-md-6 cont">
                  <div>    
                    <img src="../dist/images/cheese_1.jpg" class="menu-img" >
                  </div>
                  <div>
                    <p class='menu-content'>Cheese Burger     -Rs 200<p>
                  </div>
                </div>
                <div class="col-md-6 cont">
                  <div>    
                    <img src="../dist/images/ham.jpeg" class="menu-img" >
                  </div>
                  <div>
                    <p class='menu-content' style="margin-left:20%;">Double Cheese Burger     -Rs 300<p>
                  </div>
                </div>
                <div class="col-md-6 cont">
                  <div>    
                    <img src="../dist/images/steak.jpg" class="menu-img" >
                  </div>
                  <div>
                    <p class='menu-content'>Steak     -Rs 400<p>
                  </div>
                </div>
                <div class="col-md-6 cont">
                  <div>    
                    <img src="../dist/images/fries.jpg" class="menu-img" >
                  </div>
                  <div>
                    <p class='menu-content'>Frech-Fries     -Rs 100<p>
                  </div>
                </div>
                <div class="col-md-6 cont">
                  <div>    
                    <img src="../dist/images/coke.jpg" class="menu-img" >
                  </div>
                  <div>
                    <p class='menu-content'>Coke     -Rs 80<p>
                  </div>
                </div>
            </div>
        </div>
    `;
  let content = document.getElementById('content');
  content.appendChild(menuDiv);
})();
