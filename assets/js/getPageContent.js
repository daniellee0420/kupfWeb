$(function() {     
      $.noConflict();
          if (localStorage.getItem('menuItems') == null) {
            //
            $.ajax({
              url: "https://kupfapi.erp53.com/api/Common/GetServicesForWebMenu",
              type: 'GET',
              contentType: 'application/json; charset=uft-8',
              dataType: 'json',
              success: function (result) {
                window.localStorage.setItem('menuItems', JSON.stringify(result));
                window.location.reload();
              }
            });
            GetData();
          }
          else {
            GetData();
          }

    });
    
    function GetData(){          
        var currentPageURL = window.location.href
        var data = JSON.parse(localStorage.getItem('menuItems') || '{}');
          for (i = 0; i < data.length; i++) {            
            // Append menu items...
            if (data[i].webEnglish != null) {           
              $('#menuOurServices').append('<a href=' + data[i].englishWebPageName + '>' + data[i].webEnglish + ' </a>')
            }
  
            // Append page content...
            if (data[i].englishWebPageName != null) {
              if (data[i].englishWebPageName == currentPageURL) {
                $('#temp').append(data[i].englishHTML);
              }
            }
            if (data[i].englishWebPageName == currentPageURL) {
              // Append attachments and URL's...
              if (data[i].electronicForm1 !== null) {
                $('#downloads').append('<li><a href=' + data[i].electronicForm1 + ' target="_blank">Download</a></li>')
              }
              if (data[i].electronicForm2 !== null) {
                $('#downloads').append('<li><a href=' + data[i].electronicForm2 + ' target="_blank">Download</a></li>')
              }
              if (data[i].electronicForm1URL !== null) {
                $('#downloads').append('<li><a href=' + data[i].electronicForm1URL + ' target="_blank">' + data[i].electronicForm1URL + '</a></li>')
              }
              if (data[i].electronicForm2URL !== null) {
                $('#downloads').append('<li><a href=' + data[i].electronicForm2URL + ' target="_blank">' + data[i].electronicForm2URL + '</a></li>')
              }
            }            
          }
      }