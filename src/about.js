export const about = (function () {
  let aboutDiv = document.createElement('div');
  aboutDiv.innerHTML = `
  <div class="col-md-12" id="about">
        <p class="main-heading">About Us</p>
        <div class='about-cont col-md-12'>
            <p class="about-data">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
  </div>
    `;
  let content = document.getElementById('content');
  content.appendChild(aboutDiv);
})();
