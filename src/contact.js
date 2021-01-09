export const contact = (function () {
  let contactDiv = document.createElement('div');
  contactDiv.innerHTML = `
    <div class='col-md-12' id='contact'>
            <p  class="main-heading">Contact US</p>
            <div class="col-md-6 contact-cont">
              <h2 class='contact-data'>Address <i class="fa fa-map-marker" aria-hidden="true"></i> - </h2>
              <p class='contact-inline'>SHOP NO.3-4, GROUND FLOOR, GT Central Mall, Plot No 4, Malviya Nagar, Jaipur, Rajasthan 302017</p>

              <h2  class='contact-data'>Phone <i class="fa fa-phone" aria-hidden="true"></i> - </h2>
              <p class='contact-inline'>403-392-3046</p>

              <h2  class='contact-data'>Email <i class="fa fa-envelope" aria-hidden="true"></i> - </h2>
              <p class='contact-inline'>burgerking@welcometofrank.com</p>
              
            </div>
            <div class="col-md-6 contact-cont">
                <h2  class='contact-data'>Hours - </h2>
                <p class='contact-inline'> Wed, Thurs, Fri, Sat: 11:30 a.m. – LATE</p>
               <p style="margin-top:30px;" class='contact-inline'> Happy Hour: 2:30 p.m. – 4:30 p.m. </p>
             </div>
    </div>  
  `;
  let content = document.getElementById('content');
  content.appendChild(contactDiv);
})();
