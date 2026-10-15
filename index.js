   // Find the button and the menu
    var button = document.querySelector('.menu-btn');
    var menu = document.getElementById('navBar');

    // When the button is clicked, open or close the menu
    button.onclick = function () {
      menu.classList.toggle('open');
    };

    // When anything on the page is clicked
    document.onclick = function (event) {
      // if the click was not on the button and not on the menu, close the menu
      if (!button.contains(event.target) && !menu.contains(event.target)) {
        menu.classList.remove('open');
      }
    };
