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
        name: 'Fire and Ice Studs',
        image: 'assets/img/products/fireandice.png',
        price: 14.99,
        description: 'Gorgeous cool beige and rose gold bezel studs.',
        href: 'https://tortiedesigns.patternbyetsy.com/listing/540153557/',
      },
      {
        name: 'Glitter Bomb Necklace',
        image: 'assets/img/products/glitter-bomb.png',
        price: 32,
        href: 'https://tortiedesigns.patternbyetsy.com/listing/515569114/',
      },
      {
        name: 'Sunshine Necklace',
        image: 'assets/img/products/sunshine.png',
        price: 32,
        href: 'https://tortiedesigns.patternbyetsy.com/listing/530858333/',
      }
    ];
  },
  templateUrl: 'views/home.html'
});

tortieApp.component('about', {
  controller: function() {

  },
  templateUrl: 'views/about.html'
});

tortieApp.component('contact',
  {
    controller: function() {

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
        name: 'Fire and Ice Studs',
        image: 'assets/img/products/fireandice.png',
        price: 14.99,
        description: 'Gorgeous cool beige and rose gold bezel studs.',
        href: 'https://tortiedesigns.patternbyetsy.com/listing/540153557/',
      },
      {
        name: 'Glitter Bomb Necklace',
        image: 'assets/img/products/glitter-bomb.png',
        price: 32,
        description: 'Exactly what it sounds like - bright, shiny and of course, glittery.',
        href: 'https://tortiedesigns.patternbyetsy.com/listing/515569114/',
      },
      {
        name: 'Sunshine Necklace',
        image: 'assets/img/products/sunshine.png',
        price: 32,
        description: "Saffron & Periwinkle with a choice of metal chain or cotton cord.",
        href: 'https://tortiedesigns.patternbyetsy.com/listing/530858333/',
      },
      {
        name: 'Daydream Necklace',
        image: 'assets/img/products/daydream.jpg',
        price: 30,
        description: 'Sweet pastel goodness. With a tassel.',
        href: 'https://tortiedesigns.patternbyetsy.com/listing/521152712/',
      },
      {
        name: 'Sweetie Necklace',
        image: 'assets/img/products/sweetie.png',
        price: 30,
        description: "Compliments pretty much any outfit with a pop of pastel and neutral wooden beads.",
        href: 'https://tortiedesigns.patternbyetsy.com/listing/513066904/',
      },
      {
        name: 'Stormy Days Necklace',
        image: 'assets/img/products/stormy-days.png',
        price: 28,
        description: "Inspired by the all-over-the-place weather of Melbourne, Australia.",
        href: 'https://tortiedesigns.patternbyetsy.com/listing/526920977/',
      },
      {
        name: 'Colour Bomb Necklace',
        image: 'assets/img/products/colour-bomb.png',
        price: 32,
        description: "Rainbow colours and silver glitter? Yes please.",
        href: 'https://tortiedesigns.patternbyetsy.com/listing/516784020/',
      },
      {
        name: 'Kitten Necklace',
        image: 'assets/img/products/kitten.png',
        price: 30,
        description: "Directly inspired by the colouring of Tortiseshell cats.",
        href: 'https://tortiedesigns.patternbyetsy.com/listing/516782596/',
      },
      {
        name: 'Glam Earrings',
        image: 'assets/img/products/glam-dangles.png',
        price: 25,
        description: "Gold Foil, black, white and purple combine to create a super glam look.",
        href: 'https://tortiedesigns.patternbyetsy.com/listing/529375573/',
      },
      {
        name: 'Glam Studs',
        image: 'assets/img/products/glam-studs.png',
        price: 12,
        description: "A smaller version of our Glam Earrings.",
        href: 'https://tortiedesigns.patternbyetsy.com/listing/515570060/',
      },
      {
        name: 'Love Studs',
        image: 'assets/img/products/love-studs.png',
        price: 12,
        description: "Love isn't just for Valentines Day.",
        href: 'https://tortiedesigns.patternbyetsy.com/listing/512868096/',
      },
      {
        name: 'Green Apple Necklace',
        image: 'assets/img/products/green-apple.png',
        price: 28,
        description: "Don't the green beads look like little apples?",
        href: 'https://tortiedesigns.patternbyetsy.com/listing/528137967/',
      },
      {
        name: 'Pink Spotted Triangle Studs',
        image: 'assets/img/products/basic-triangles-pink.png',
        price: 12,
        description: "Cute pink triangles are cute.",
        href: 'https://tortiedesigns.patternbyetsy.com/listing/529375357/',
      },
      {
        name: 'Pop Necklace',
        image: 'assets/img/products/pop.png',
        price: 28,
        description: "Reminiscent of Paddle Pops.",
        href: 'https://tortiedesigns.patternbyetsy.com/listing/514311594/',
      },
      {
        name: 'Yellow Triangle Studs',
        image: 'assets/img/products/basic-triangles-yellow.png',
        price: 12,
        description: "Bright and fun.",
        href: 'https://tortiedesigns.patternbyetsy.com/listing/529375439/',
      },
      {
        name: 'Pink Bean Studs',
        image: 'assets/img/products/bean-pink.png',
        price: 12,
        description: "Cute pink little beans. Perfect for little ones.",
        href: 'https://tortiedesigns.patternbyetsy.com/listing/515569380/',
      },
      {
        name: 'Granite Studs',
        image: 'assets/img/products/granite-studs.png',
        price: 12,
        description: "Simple yet interesting.",
        href: 'https://tortiedesigns.patternbyetsy.com/listing/515569260/',
      },
      {
        name: 'Marbled Studs',
        image: 'assets/img/products/marbled-studs.png',
        price: 12,
        description: "Pink and white cuteness!",
        href: 'https://tortiedesigns.patternbyetsy.com/listing/528107643/',
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
        href: 'https://www.instagram.com/p/BT-cfjfBnsN/?taken-by=madeit',
      },
      {
        name: 'Made It Australia Editors Pick',
        image: 'assets/img/press/madeit_2.png',
        href: 'https://madeit.com.au/',
      },
      {
        name: 'Made It Australia Editors Pick',
        image: 'assets/img/press/madeit_3.png',
        href: 'https://madeit.com.au/',
      },
      {
        name: 'Made It Australia Instagram',
        image: 'assets/img/press/madeit_4.png',
        href: 'https://www.instagram.com/madeit/',
      },
      {
        name: 'Aus Handmade Instagram',
        image: 'assets/img/press/aushandmade_1.png',
        href: 'https://www.instagram.com/p/BUqWGulFd4u/?taken-by=aushandmade',
      },
      {
        name: 'Aus Handmade Instagram',
        image: 'assets/img/press/aushandmade_2.png',
        href: 'https://www.instagram.com/aushandmade/',
      },
      {
        name: 'Glitter Haven Instagram',
        image: 'assets/img/press/glitter_1.png',
        href: 'https://www.instagram.com/p/BUbPfZJjzV2/?taken-by=glitterhaven',
      },
      {
        name: 'Love Australian Handmade Instagram',
        image: 'assets/img/press/loveaushm_1.png',
        href: 'https://www.instagram.com/p/BUjYdy4BDy-/?taken-by=loveaustralianhandmade',
      },
      {
        name: 'Made Local Melbourne Instagram',
        image: 'assets/img/press/made-local-melb.png',
        href: 'https://www.instagram.com/p/BVX_yu-FBF4/?taken-by=madelocalmelbourne',
      },
    ];
  },
  templateUrl: 'views/press.html',
});
