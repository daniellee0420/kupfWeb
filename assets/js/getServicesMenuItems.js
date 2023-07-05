$(function() {     
    $.noConflict();
    if (localStorage.getItem("menuItems") != null) {
      var data = JSON.parse(localStorage.getItem('menuItems') || '{}');
      for (i = 0; i < data.length; i++) {
        // Append menu items...
        if (data[i].webEnglish != null) {
          $('#menuOurServices').append('<a href=' + data[i].englishWebPageName + '>' + data[i].webEnglish + ' </a>')
        }
      }
    }

  });