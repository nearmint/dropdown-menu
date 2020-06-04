npm install @nearmint/dropdown-menu

Using this package, you can easily create dropdown menus for computer endpoints and mobile menus for mobile devices.

When creating one or more new dropdowns, go by the following guide:


In your JS, do this: 

import * as Dropdown from '@nearmint/dropdown-menu/src/dropdown';

Dropdown.loadDropdown();
window.openDropdown = Dropdown.openDropdown;


In your html, for the dropdown menu, use this (for every dropdown just replace menu1 with your desired unique id): 

<div class="dropdown">

      <button class="menubutton" onclick="openDropdown('menu1')">Menu</button><br/><div id="menu1" class="dropdown-content slideup">
      <a href="#">My Account</a>
      <a href="#">FAQ</a>
      <a href="#">Login</a>
  </div>
      </div>
    

For a mobile menu, use this code (for every dropdown just replace menu1-mobile with your desired unique id):

  <div class="dropdown-mobile">
  
      <div class="menubutton-mobile" onclick="openDropdown('menu1-mobile')"><i class="fa fa-bars fa-2x"></i></div>
      <div id="menu1-mobile" class="dropdown-content-mobile slideup">
      <a href="#">My Account</a>
      <a href="#">FAQ</a>
      <a href="#">Login</a>
  </div>
      </div>