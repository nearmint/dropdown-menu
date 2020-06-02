module.exports = {
openDropdown: function(id) {
    
    let dropdownContent = document.getElementById(id);

    if (dropdownContent.classList.contains('slideup')) {
        dropdownContent.classList.remove('slideup');
        dropdownContent.classList.add('slidedown');
      } else {
        dropdownContent.classList.remove('slidedown');
        dropdownContent.classList.add('slideup');
    
}


}

}


window.onclick = function(event) {
    if (!event.target.matches('.menubutton')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (!openDropdown.classList.contains('slideup')) {
          openDropdown.classList.remove('slidedown');
          openDropdown.classList.add('slideup');
        }
      }
    }
  }

