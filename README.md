Using this package, you can easily create dropdowns.

When creating one or more new dropdowns, go by the following guide:


In your JS, do this: 

import * as Dropdown from '@nearmint/dropdown-menu/src/dropdown';

Dropdown.loadDropdown();
window.openDropdown = Dropdown.openDropdown;


In your html, use this (for every dropdown just replace menu1 with your desired unique id): 

<div class="dropdown">

      <button class="menubutton" onclick="openDropdown('menu1')">Menu</button><br/><div id="menu1" class="dropdown-content slideup">
      <a href="#">My Account</a>
      <a href="#">FAQ</a>
      <a href="#">Login</a>
  </div>
      </div>
    