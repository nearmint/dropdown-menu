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

console.log(document.styleSheets)


},

loadDropdown: function() {

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

let sheet = function() {
  // Create the <style> tag
  var style = document.createElement("style");

  // Add a media (and/or media query) here if you'd like!
  // style.setAttribute("media", "screen")
  // style.setAttribute("media", "only screen and (max-width : 1024px)")

  // WebKit hack :(
  style.appendChild(document.createTextNode(""));

  // Add the <style> element to the page
  document.head.appendChild(style);

  return style.sheet;
};

sheet.insertRule("body { background-color: green; }");
sheet.insertRule(".slidedown { max-height: 600px; }");

sheet.insertRule(".menubutton { background-color: #3498DB; color: white; padding: 16px; font-size: 16px; border: none; cursor: pointer;}");


sheet.insertRule(".menubutton:hover, .menubutton:focus {background-color: #2980B9;}");


sheet.insertRule(".dropdown-content {position: absolute;  background-color: #f1f1f1; min-width: 160px; box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2); z-index: 1;}");

sheet.insertRule(".dropdown-content a {color: black; padding: 12px 16px; text-decoration: none; display: block;}");

sheet.insertRule(".dropdown-content a:hover {background-color: #ddd}");

sheet.insertRule(".dropdown {position: relative; display: inline-block;}");

sheet.insertRule(".slideup, .slidedown {max-height: 0;overflow-y: hidden; -webkit-transition: max-height 0.5s ease-in-out; -moz-transition: max-height 0.5s ease-in-out;-o-transition: max-height 0.5s ease-in-out; transition: max-height 0.5s ease-in-out;}");

}



}





