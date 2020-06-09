module.exports = {
    openDropdown: function(id) {
        
        let dropdownContent = document.getElementById(id);
    
        if (dropdownContent.classList.contains('slideup')) {
            dropdownContent.classList.remove('slideup');
            dropdownContent.classList.add('slidedown');
            console.log(event.target);
            // event.target.classList.add('hide');
          } else {
            dropdownContent.classList.remove('slidedown');
            dropdownContent.classList.add('slideup');
            // event.target.classList.remove('hide');
        
    }
    
    console.log(document.styleSheets)
    
    
    },
    
    loadDropdown: function() {
    
      window.onclick = function(event) {
      if (!event.target.matches('.menubutton')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        // var dropdownsMobile = document.getElementsByClassName("dropdown-content-mobile");
        // var e;
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (!openDropdown.classList.contains('slideup')) {
            openDropdown.classList.remove('slidedown');
            openDropdown.classList.add('slideup');
          }
        }

        // for (e = 0; e < dropdownsMobile.length; e++) {
        //     var openDropdown = dropdownsMobile[e];
        //     if (!openDropdown.classList.contains('slideup')) {
        //       openDropdown.classList.remove('slidedown');
        //       openDropdown.classList.add('slideup');
        //     }
        //   }



      }
    }


    window.onclick =function(event) {

        var dropdowns = document.getElementsByClassName("dropdown-content-mobile");
        var i;

        if (!event.target.classList.contains('fa-bars')) {

        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (!openDropdown.classList.contains('slideup')) {
            openDropdown.classList.remove('slidedown');
            openDropdown.classList.add('slideup');
          }
        }
    }
    }



    
    const sheet = (function() {
      // Create the <style> tag
      var style = document.createElement("style");
    
      // Add a media (and/or media query) here if you'd like!
      // style.setAttribute("media", "screen")
      // style.setAttribute("media", "only screen and (max-width : 1024px)")
    
      // WebKit hack :(

        style.setAttribute("media", "screen");
        style.setAttribute("media", "only screen and (min-width: 1024px)");

      style.appendChild(document.createTextNode(""));
    
      // Add the <style> element to the page
      document.head.appendChild(style);
    
      return style.sheet;
    })();
    
    sheet.insertRule(".dropdown-mobile { display: none; }");
    
    sheet.insertRule(".slidedown { max-height: 600px; }");
    
    sheet.insertRule(".menubutton { background-color: #3498DB; color: white; padding: 16px; font-size: 16px; border: none; cursor: pointer;}");
    
    
    sheet.insertRule(".menubutton:hover, .menubutton:focus {background-color: #2980B9;}");
    
    
    sheet.insertRule(".dropdown-content {position: absolute;  background-color: #f1f1f1; min-width: 160px; box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2); z-index: 1;}");
    
    sheet.insertRule(".dropdown-content a {color: black; padding: 12px 16px; text-decoration: none; display: block;}");
    
    sheet.insertRule(".dropdown-content a:hover {background-color: #ddd}");
    
    sheet.insertRule(".dropdown {position: relative; display: inline-block;}");
    
    sheet.insertRule(".slideup, .slidedown {max-height: 0;overflow-y: hidden; -webkit-transition: max-height 0.5s ease-in-out; -moz-transition: max-height 0.5s ease-in-out;-o-transition: max-height 0.5s ease-in-out; transition: max-height 0.5s ease-in-out;}");
    

    const sheetMobile = (function() {
        // Create the <style> tag
        var style = document.createElement("style");
      
        style.setAttribute("media", "screen");
        style.setAttribute("media", "only screen and (max-width: 1024px)");

        // Add a media (and/or media query) here if you'd like!
        // style.setAttribute("media", "screen")
        // style.setAttribute("media", "only screen and (max-width : 1024px)")
      
        // WebKit hack :(
        style.appendChild(document.createTextNode(""));
      
        // Add the <style> element to the page
        document.head.appendChild(style);
      
        return style.sheet;
      })();

      var head = document.getElementsByTagName('HEAD')[0];  
  
        // Create new link Element 
        var link = document.createElement('link'); 
  
        // set the attributes for link element  
        link.rel = 'stylesheet';  
      
        link.type = 'text/css'; 
      
        link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';  
  
        // Append link element to HTML head 
        head.appendChild(link);  



      sheetMobile.insertRule(".dropdown {display: none;}")
      sheetMobile.insertRule(".slidedown {max-width: 80vw; transform: translateX(0vw);}")
      // sheetMobile.insertRule(".slideup, .slidedown {max-width: 0; overflow-y: hidden; -webkit-transition: max-width 0.5s ease-in-out; -moz-transition: max-width 0.5s ease-in-out;-o-transition: max-width 0.5s ease-in-out; transition: max-width 0.5s ease-in-out;}");
      sheetMobile.insertRule('.slideup, .slidedown {overflow: hidden; transform: translateX(-80vw); transition: all 0.5s;}')

      sheetMobile.insertRule(".dropdown-content-mobile {display: flex; flex-direction: column; height: 200px; background-color: lightgrey; align-items: center; justify-content: space-around; position: absolute; top: 0px; width: 80vw; height: 100vh; font-size: 32px;}")
  
      sheetMobile.insertRule(".hide {display: none !important;}");

      sheetMobile.insertRule("* {margin: 0; padding: 0;}")

    //    sheetMobile.insertRule(".menubutton-mobile {padding-top: 1em;}" )

    }   
    
    
    }
    
    
    
    