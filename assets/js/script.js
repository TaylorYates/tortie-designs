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
          price: '32',
          href: 'https://bit.ly/tortieglitter',
      },
      {
        name: 'Sandy Necklace',
        image: 'assets/img/products/collection-2/sandy-2.JPG',
        price: '45',
        href: 'https://bit.ly/tdsandy',
      },
      {
        name: 'Frenchy Necklace',
        image: 'assets/img/products/collection-2/frenchy-2.jpg',
        price: '40',
        href: 'https://bit.ly/tdfrenchy',
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
        name: 'ON SALE - Sweetie Necklace',
        image: 'assets/img/products/sweetie.png',
        price: '22.50',
        description: "Compliments pretty much any outfit with a pop of pastel and neutral wooden beads.",
        href: 'http://bit.ly/tdsweetie',
      },
      {
        name: 'Collection II',
        image: 'assets/img/collection2csmall.jpg',
        price: '30 - $45',
        description: 'Braided cork cord, eco cord, and Grease.',
        href: 'http://bit.ly/tdcollection2',
      },
      {
        name: 'Sandy Necklace',
        image: 'assets/img/products/collection-2/sandy.jpg',
        price: 45,
        description: 'Not your plain old Sandra Dee.',
        href: 'https://bit.ly/tdsandy',
      },
      {
        name: 'Frenchy Necklace',
        image: 'assets/img/products/collection-2/frenchy.jpg',
        price: 40,
        description: 'Pastel pink, mustard and grey perfection.',
        href: 'https://bit.ly/tdfrenchy',
      },
      {
        name: 'Marty Necklace',
        image: 'assets/img/products/collection-2/marty.jpg',
        price: 32,
        description: 'Colorful and a bit glam.',
        href: 'https://bit.ly/tdmarty',
      },
      {
        name: 'Jan Necklace',
        image: 'assets/img/products/collection-2/jan.jpg',
        price: 30,
        description: 'Goes with literally everything.',
        href: 'https://bit.ly/tdjan',
      },
      {
        name: 'Rizzo Necklace',
        image: 'assets/img/products/collection-2/rizzo.jpg',
        price: 32,
        description: 'The spunky one of the bunch.',
        href: 'https://bit.ly/tdrizzo',
      },
      {
        name: 'Danny Necklace',
        image: 'assets/img/products/collection-2/danny.jpg',
        price: 32,
        description: 'Bold and sweet.',
        href: 'https://bit.ly/tddanny',
      },
      {
        name: 'Kenickie Necklace',
        image: 'assets/img/products/collection-2/kenickie.jpg',
        price: 30,
        description: 'Like a Hallmark card.',
        href: 'https://bit.ly/tdkenickie',
      },
      {
        name: 'Ice and Fire Studs',
        image: 'assets/img/products/iceandfire.png',
        price: 14.99,
        description: 'Gorgeous cool beige and rose gold bezel studs.',
        href: 'https://bit.ly/tdicefire',
      },
      {
        name: 'Collection I',
        image: 'assets/img/flatlay.JPEG',
        price: '12 - $32',
        description: 'Bright, fun, all you need for summer.',
        href: 'http://bit.ly/tdcollection1',
      },
      {
        name: 'Glitter Bomb Necklace',
        image: 'assets/img/products/glitter-bomb.png',
        price: 32,
        description: 'Exactly what it sounds like - bright, shiny and of course, glittery.',
        href: 'http://bit.ly/tortieglitter',
      },
      {
        name: 'Sunshine Necklace',
        image: 'assets/img/products/sunshine.png',
        price: 32,
        description: "Saffron & Periwinkle with a choice of metal chain or cotton cord.",
        href: 'http://bit.ly/tdsunshine',
      },
      {
        name: 'Daydream Necklace',
        image: 'assets/img/products/daydream.jpg',
        price: 30,
        description: 'Sweet pastel goodness. With a tassel.',
        href: 'http://bit.ly/tortiedaydream',
      },
      {
        name: 'ON SALE - Stormy Days Necklace',
        image: 'assets/img/products/stormy-days.png',
        price: 22,
        description: "Inspired by the all-over-the-place weather of Melbourne, Australia.",
        href: 'http://bit.ly/tdstormy',
      },
      {
        name: 'Colour Bomb Necklace',
        image: 'assets/img/products/colour-bomb.png',
        price: 32,
        description: "Rainbow colours and silver glitter? Yes please.",
        href: 'http://bit.ly/tdcolourb',
      },
      {
        name: 'Kitten Necklace',
        image: 'assets/img/products/kitten.png',
        price: 30,
        description: "Directly inspired by the colouring of Tortiseshell cats.",
        href: 'http://bit.ly/tdkitten',
      },
      {
        name: 'Glam Dangle Earrings',
        image: 'assets/img/products/glam-dangles.png',
        price: 25,
        description: "Gold Foil, black, white and purple combine to create a super glam look.",
        href: 'http://bit.ly/tdglamd',
      },
      {
        name: 'Glam Studs',
        image: 'assets/img/products/glam-studs.png',
        price: 12,
        description: "A smaller version of our Glam Earrings.",
        href: 'http://bit.ly/tdglams',
      },
      {
        name: 'Love Studs',
        image: 'assets/img/products/love-studs.png',
        price: 12,
        description: "Love isn't just for Valentines Day.",
        href: 'http://bit.ly/tdlove',
      },
      {
        name: 'ON SALE - Green Apple Necklace',
        image: 'assets/img/products/green-apple.png',
        price: 25,
        description: "Don't the green beads look like little apples?",
        href: 'http://bit.ly/tdgapple',
      },
      {
        name: 'Pink Spotted Triangle Studs',
        image: 'assets/img/products/basic-triangles-pink.png',
        price: 12,
        description: "Cute pink triangles are cute.",
        href: 'http://bit.ly/tdspottri',
      },
      {
        name: 'ON SALE - Pop Necklace',
        image: 'assets/img/products/pop.png',
        price: 25,
        description: "Reminiscent of Paddle Pops.",
        href: 'http://bit.ly/tdpop',
      },
      {
        name: 'Yellow Triangle Studs',
        image: 'assets/img/products/basic-triangles-yellow.png',
        price: 12,
        description: "Bright and fun.",
        href: 'http://bit.ly/tdtriangle',
      },
      {
        name: 'Pink Bean Studs',
        image: 'assets/img/products/bean-pink.png',
        price: 12,
        description: "Cute pink little beans. Perfect for little ones.",
        href: 'http://bit.ly/tdbeans',
      },
      {
        name: 'Granite Studs',
        image: 'assets/img/products/granite-studs.png',
        price: 12,
        description: "Simple but interesting.",
        href: 'http://bit.ly/tdgranite',
      },
      {
        name: 'Marbled Studs',
        image: 'assets/img/products/marbled-studs.png',
        price: 12,
        description: "Pink and white cuteness!",
        href: 'http://bit.ly/tdmarble',
      },
    ];
  },
  templateUrl: 'views/shop.html',
});

tortieApp.component('press', {
  controller: function() {
    this.media = [
      {
        name: 'Miljo Magazine',
        image: 'assets/img/press/miljo.png',
        href: 'http://miljo.com.au/jewellery-designer-sustainable/',
      }
    ];
  },
  templateUrl: 'views/press.html',
});
