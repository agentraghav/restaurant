import { home_page } from './home.js';

const template = `<ul style="list-style-type:none; margin:0; padding:0; overflow: hidden; background-color: chocolate; position: fixed; top:0; width: 100%;">
<li style="float:right;" ><button onclick="manage_page.contact_page_function()" style="padding:15px 50px; font-size:18px;font-family: fantasy; cursor: pointer; background-color: chocolate; border: none;">Contact</button></li>
<li style="float:right;" ><button onclick="manage_page.menu_page_function()" style="padding:15px 50px; font-size:18px;font-family: fantasy; cursor: pointer; background-color: chocolate; border: none;">Menu</button></li>
<li style="float:right;" ><button onclick="manage_page.home_page_function()" style="padding:15px 50px; font-size:18px;font-family: fantasy; cursor: pointer; background-color: chocolate; border: none;">Home</button></li>
</ul>`;

document.getElementById('content').innerHTML = template + home_page();
export const manage_page = (function () {
  const home_page_function = function () {
    document.getElementById('content').innerHTML = template + home_page();
  };

  return { home_page_function };
})();
