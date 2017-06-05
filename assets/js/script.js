var tortieApp = angular.module('tortieApp', ['ngRoute']);

tortieApp.run(function($rootScope, $location) {
  $rootScope.$location = $location;
});

tortieApp.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    template: '<home></home>'
  })

  .when('/about', {
    template: '<about></about>'
  })

  .when('/contact', {
    template: '<contact></contact>'
  })

  .when('/wholesale', {
    template: '<wholesale></wholesale>'
  })

  .when('/shop', {
    template: '<shop></shop>'
  })

  .when('/press', {
    template: '<press></press>'
  });
});


tortieApp.component('home', {
  controller: function() {
    this.topProducts = [
        {
          name: 'Glitter Bomb Necklace',
          image: 'assets/img/products/glitter-bomb.png',
          price: 30,
          href: 'https://bit.ly/tortieglitter',
        },
        {
          name: 'Sunshine Necklace',
          image: 'assets/img/products/sunshine.png',
          price: '30 to $35',
          href: 'https://bit.ly/tortiesunshine',
        },
        {
          name: 'Daydream Necklace',
          image: 'assets/img/products/daydream.JPG',
          price: 27,
          href: 'http://bit.ly/tortiedaydream',
        }
    ];
  },
  templateUrl: 'views/home.html'
});

tortieApp.component('about', {
  controller: function() {
    this.message = 'Contact us! JK. This is just a demo.';
  },
  templateUrl: 'views/about.html'
});

tortieApp.component('contact',
  {
    controller: function() {
      this.message = 'Contact us! JK. This is just a demo.';
    },
    templateUrl: 'views/contact.html',
  }
);

tortieApp.component('wholesale', {
  controller: function() {

  },
  templateUrl: 'views/wholesale.html',
});

tortieApp.component('shop', {
  controller: function() {
    this.products = [
      {
        name: 'Daydream Necklace',
        image: 'assets/img/products/daydream.JPG',
        price: 27,
        description: 'Sweet pastel goodness. With a tassel.',
        href: 'http://bit.ly/tortiedaydream',
      },
      {
        name: 'Glitter Bomb Necklace',
        image: 'assets/img/products/glitter-bomb.png',
        price: 30,
        description: 'Exactly what it sounds like - bright, shiny and of course, glittery.',
        href: 'https://bit.ly/tortieglitter',
      },
      {
        name: 'Sunshine Necklace',
        image: 'assets/img/products/sunshine.png',
        price: '30 - $35',
        description: "Saffron & Periwinkle with a choice of metal chain or cotton cord.",
        href: 'https://bit.ly/tortiesunshine',
      },
      {
        name: 'Sweetie Necklace',
        image: 'assets/img/products/sweetie.png',
        price: 30,
        description: "Compliments pretty much any outfit with a pop of pastel and neutral wooden beads.",
        href: 'https://bit.ly/tortiesweetie',
      },
      {
        name: 'Stormy Days Necklace',
        image: 'assets/img/products/stormy-days.png',
        price: 28,
        description: "Inspired by the all-over-the-place weather of Melbourne, Australia.",
        href: 'https://www.etsy.com/au/listing/526920977/',
      },
      {
        name: 'Colour Bomb Necklace',
        image: 'assets/img/products/colour-bomb.png',
        price: 30,
        description: "Rainbow colours and silver glitter? Yes please.",
        href: 'https://www.etsy.com/au/listing/516784020/',
      },
      {
        name: 'Kitten Necklace',
        image: 'assets/img/products/kitten.png',
        price: 30,
        description: "Directly inspired by the colouring of Tortiseshell cats.",
        href: 'https://www.etsy.com/au/listing/516782596/',
      },
      {
        name: 'Glam Earrings',
        image: 'assets/img/products/glam-dangles.png',
        price: 25,
        description: "Gold Foil, black, white and purple combine to create a super glam look.",
        href: 'https://www.etsy.com/au/listing/529375573/',
      },
      {
        name: 'Glam Studs',
        image: 'assets/img/products/glam-studs.png',
        price: 15,
        description: "A smaller version of our Glam Earrings.",
        href: 'https://www.etsy.com/au/listing/515570060/',
      },
      {
        name: 'Love Studs',
        image: 'assets/img/products/love-studs.png',
        price: 15,
        description: "Love isn't just for Valentines Day.",
        href: 'https://www.etsy.com/au/listing/515570060/',
      },
      {
        name: 'Green Apple Necklace',
        image: 'assets/img/products/green-apple.png',
        price: 28,
        description: "Don't the green beads look like little apples?",
        href: 'https://www.etsy.com/au/listing/528137967/',
      },
      {
        name: 'Pink Spotted Triangle Studs',
        image: 'assets/img/products/basic-triangles-pink.png',
        price: 10,
        description: "Cute triangles are cute.",
        href: 'https://www.etsy.com/au/listing/529375357/',
      },
      {
        name: 'Pop Necklace',
        image: 'assets/img/products/pop.png',
        price: 28,
        description: "Reminiscent of Paddle Pops.",
        href: 'https://www.etsy.com/au/listing/514311594/',
      },
      {
        name: 'Yellow Triangle Studs',
        image: 'assets/img/products/basic-triangles-yellow.png',
        price: 10,
        description: "Bright and fun.",
        href: 'https://www.etsy.com/au/listing/529375439/',
      },
      {
        name: 'Pink Bean Studs',
        image: 'assets/img/products/bean-pink.png',
        price: 10,
        description: "Cute pink little beans. Perfect for little ones.",
        href: 'https://www.etsy.com/au/listing/515569380/',
      },
      {
        name: 'Granite Studs',
        image: 'assets/img/products/granite-studs.png',
        price: 10,
        description: "Simple yet interesting.",
        href: 'https://www.etsy.com/au/listing/515569260/',
      },
      {
        name: 'Marbled Studs',
        image: 'assets/img/products/marbled-studs.png',
        price: 10,
        description: "Pink and white cuteness!",
        href: 'https://www.etsy.com/au/listing/528107643/',
      },
    ];
  },
  templateUrl: 'views/shop.html',
});

tortieApp.component('press', {
  controller: function() {
    this.media = [
      {
        name: 'Made It Australia Instagram',
        image: 'assets/img/press/madeit_5.png',
      },
      {
        name: 'Made It Australia Editors Pick',
        image: 'assets/img/press/madeit_2.png',
      },
      {
        name: 'Made It Australia Editors Pick',
        image: 'assets/img/press/madeit_3.png',
      },
      {
        name: 'Made It Australia Instagram',
        image: 'assets/img/press/madeit_4.png',
      },
    ];
  },
  templateUrl: 'views/press.html',
});
