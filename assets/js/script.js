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
       name: 'Daisy dangles',
       image: 'assets/img/products/daisy.jpg',
       price: 27,
       href: 'http://bit.ly/tddaisy',
      },
      {
        name: 'Glitter Bomb Necklace',
        image: 'assets/img/products/glitter-bomb.png',
        price: '32',
        href: 'https://bit.ly/tortieglitter',
      },
      {
        name: 'NEW - Rosie Necklace',
        image: 'assets/img/products/rosie.jpg',
        price: '32',
        href: 'http://bit.ly/tdrosie',
      },
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
       name: 'Daisy dangles',
       image: 'assets/img/products/daisy.jpg',
       price: 27,
       href: 'http://bit.ly/tddaisy',
      },
      {
        name: 'Glitter Bomb Necklace',
        image: 'assets/img/products/glitter-bomb.png',
        price: 32,
        href: 'http://bit.ly/tortieglitter',
      },
      {
        name: 'NEW - Rosie Necklace',
        image: 'assets/img/products/rosie.jpg',
        price: '32',
        href: 'http://bit.ly/tdrosie',
      },
      {
        name: 'NEW - Midna',
        image: 'assets/img/products/midna.jpg',
        price: '32',
        href: 'http://bit.ly/tdmidna',
      },
      {
        name: 'NEW - Floria Dangles',
        image: 'assets/img/products/floria.JPG',
        price: '23',
        href: 'http://bit.ly/tdfloria',
      },
      {
        name: 'NEW - Mipha Dangles',
        image: 'assets/img/products/mipha.JPG',
        price: '24.50',
        href: 'http://bit.ly/tdimpa',
      },
      {
        name: 'NEW - Angel Dangles',
        image: 'assets/img/products/angel.JPG',
        price: '23',
        href: 'http://bit.ly/tdangel',
      },
      {
        name: 'NEW - Fruit Salad Dangles',
        image: 'assets/img/products/fruit-salad.jpg',
        price: '23',
        href: 'http://bit.ly/tdfruit',
      },
      {
        name: 'NEW - Summer Dangles',
        image: 'assets/img/products/summer.jpg',
        price: '23',
        href: 'http://bit.ly/tdsummer',
      },
      {
        name: 'NEW - Zora Dangles',
        image: 'assets/img/products/zora.JPG',
        price: '22',
        href: 'http://bit.ly/tdzora',
      },
      {
        name: 'NEW - Party Dangles',
        image: 'assets/img/products/party-2.JPG',
        price: '27',
        href: 'http://bit.ly/tdparty',
      },
      {
        name: 'NEW - Impa Dangles',
        image: 'assets/img/products/impa.JPG',
        price: '23',
        href: 'http://bit.ly/tdimpa',
      },
      {
        name: 'NEW - Gorgeous Dangles',
        image: 'assets/img/products/gorgeous.jpg',
        price: '23',
        href: 'http://bit.ly/tdgorgeous',
      },
      {
        name: 'ON SALE - Sweetie Necklace',
        image: 'assets/img/products/sweetie.png',
        price: '22.50',
        href: 'http://bit.ly/tdsweetie',
      },
      {
        name: 'Collection II',
        image: 'assets/img/collection2csmall.jpg',
        price: '30 - $45',
        href: 'http://bit.ly/tdcollection2',
      },
      {
        name: 'Sandy Necklace',
        image: 'assets/img/products/collection-2/sandy.jpg',
        price: 45,
        href: 'https://bit.ly/tdsandy',
      },
      {
        name: 'Frenchy Necklace',
        image: 'assets/img/products/collection-2/frenchy.jpg',
        price: 40,
        href: 'https://bit.ly/tdfrenchy',
      },
      {
        name: 'Marty Necklace',
        image: 'assets/img/products/collection-2/marty.jpg',
        price: 32,
        href: 'https://bit.ly/tdmarty',
      },
      {
        name: 'Jan Necklace',
        image: 'assets/img/products/collection-2/jan.jpg',
        price: 30,
        href: 'https://bit.ly/tdjan',
      },
      {
        name: 'Rizzo Necklace',
        image: 'assets/img/products/collection-2/rizzo.jpg',
        price: 32,
        href: 'https://bit.ly/tdrizzo',
      },
      {
        name: 'Danny Necklace',
        image: 'assets/img/products/collection-2/danny.jpg',
        price: 32,
        href: 'https://bit.ly/tddanny',
      },
      {
        name: 'Kenickie Necklace',
        image: 'assets/img/products/collection-2/kenickie.jpg',
        price: 30,
        href: 'https://bit.ly/tdkenickie',
      },
      {
        name: 'Ice and Fire Studs',
        image: 'assets/img/products/iceandfire.png',
        price: 14.99,
        href: 'https://bit.ly/tdicefire',
      },
      {
        name: 'Collection I',
        image: 'assets/img/flatlay.JPEG',
        price: '12 - $32',
        href: 'http://bit.ly/tdcollection1',
      },
      {
        name: 'Sunshine Necklace',
        image: 'assets/img/products/sunshine.png',
        price: 32,
        href: 'http://bit.ly/tdsunshine',
      },
      {
        name: 'Daydream Necklace',
        image: 'assets/img/products/daydream.jpg',
        price: 30,
        href: 'http://bit.ly/tortiedaydream',
      },
      {
        name: 'ON SALE - Stormy Days Necklace',
        image: 'assets/img/products/stormy-days.png',
        price: 22,
        href: 'http://bit.ly/tdstormy',
      },
      {
        name: 'Colour Bomb Necklace',
        image: 'assets/img/products/colour-bomb.png',
        price: 32,
        href: 'http://bit.ly/tdcolourb',
      },
      {
        name: 'Kitten Necklace',
        image: 'assets/img/products/kitten.png',
        price: 30,
        href: 'http://bit.ly/tdkitten',
      },
      {
        name: 'Glam Dangle Earrings',
        image: 'assets/img/products/glam-dangles.png',
        price: 25,
        href: 'http://bit.ly/tdglamd',
      },
      {
        name: 'Glam Studs',
        image: 'assets/img/products/glam-studs.png',
        price: 12,
        href: 'http://bit.ly/tdglams',
      },
      {
        name: 'Love Studs',
        image: 'assets/img/products/love-studs.png',
        price: 12,
        href: 'http://bit.ly/tdlove',
      },
      {
        name: 'ON SALE - Green Apple Necklace',
        image: 'assets/img/products/green-apple.png',
        price: 25,
        href: 'http://bit.ly/tdgapple',
      },
      {
        name: 'Pink Spotted Triangle Studs',
        image: 'assets/img/products/basic-triangles-pink.png',
        price: 12,
        href: 'http://bit.ly/tdspottri',
      },
      {
        name: 'ON SALE - Pop Necklace',
        image: 'assets/img/products/pop.png',
        price: 25,
        href: 'http://bit.ly/tdpop',
      },
      {
        name: 'Yellow Triangle Studs',
        image: 'assets/img/products/basic-triangles-yellow.png',
        price: 12,
        href: 'http://bit.ly/tdtriangle',
      },
      {
        name: 'Pink Bean Studs',
        image: 'assets/img/products/bean-pink.png',
        price: 12,
        href: 'http://bit.ly/tdbeans',
      },
      {
        name: 'Granite Studs',
        image: 'assets/img/products/granite-studs.png',
        price: 12,
        href: 'http://bit.ly/tdgranite',
      },
      {
        name: 'Marbled Studs',
        image: 'assets/img/products/marbled-studs.png',
        price: 12,
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
