var app = new Vue({
    el: '#app',
    data: {
      siteInfo: {
        siteLogo: 'img/logo.svg',
        siteTitle: 'RED SPICE RESTAURANT',
      },
      mainNav: {
        isMainNav: true,
        openNav: false,
        burgerImageArray: ['img/burger.png', 'img/burger_close.png'],
        burgerImage: 'img/burger.png',
        transformPercent: 100,
        navItems: [
          {
            itemText: 'Home',
            itemUrl: '/',
          },
          {
            itemText: 'Cuisine',
            itemUrl: '/cuisine',
          },
          {
            itemText: 'Order',
            itemUrl: '/order',
          },
          {
            itemText: 'Reservation',
            itemUrl: '/reservation',
          },
          {
            itemText: 'Contact',
            itemUrl: '/contact',
          },
        ],
      },
      orderBtn: {
        text: 'Order Now',
        url: '#',
      },
      bookBtn: {
        text: 'Booking',
        url: '#',
      }
    },
    methods: {

      clickNav: function() {
        let thisNav = this.mainNav;
        if(thisNav.openNav) {
          thisNav.openNav = false;
          thisNav.transformPercent = 100;
          thisNav.burgerImage = thisNav.burgerImageArray[0];
        } else {
          thisNav.openNav = true;
          thisNav.transformPercent = 0;
          thisNav.burgerImage = thisNav.burgerImageArray[1];
        }
        console.log(thisNav.openNav);
      },

    }
});