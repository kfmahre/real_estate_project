(function() {

  var app = angular.module('store', ['store-products']);

  app.controller('StoreController', function(){
    this.products = houses;
  });

  /*
  app.controller('StoreController', ['$http', function($http){
    var store = this;

    store.products = [];

    $http.get('/store-products.json').success(function(data){
      store.products = data;
    });
  }]);
  */

  app.controller('ReviewController', function(){
    this.review = {};

    this.addReview = function(product) {
      this.review.createdOn = Date.now();
      product.reviews.push(this.review);
      this.review = {};
    };
  });

  var houses = [
    {
      name: 'Renovated modern',
      description: "Some gems have hidden qualities beyond their luster, beyond their shine... this house is one of those gems.",
      neighborhood: 'Townsland Hights',
      price: 120150,
      baths: 3.5,
      school: 'East Townsland High',
      rooms: 4,
      canPurchase: true,
      images: [
        "/real_estate_project/images/house1-1.jpg",
        "/real_estate_project/images/house1-2.jpg",
        "/real_estate_project/images/house1-3.jpg"
      ],
      reviews: [{
        stars: 5,
        body: "I love this gem!",
        author: "joe@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "This gem sucks.",
        author: "tim@example.org",
        createdOn: 1397490980837
      }]
    },
    {
      name: 'Bloodstone',
      description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
      neighborhood: 'Mordor',
      price: 122090,
      baths: 2.5,
      school: 'Mordor High',
      rooms: 3,
      canPurchase: true,
      images: [
        "/real_estate_project/images/house2-1.jpg",
        "/real_estate_project/images/house2-2.jpg",
      ],
      reviews: [{
        stars: 3,
        body: "I think this gem was just OK, could honestly use more shine, IMO.",
        author: "JimmyDean@example.org",
        createdOn: 1397490980837
      }, {
        stars: 4,
        body: "Any gem with 12 faces is for me!",
        author: "gemsRock@example.org",
        createdOn: 1397490980837
      }]
    },
    {
      name: 'Zircon',
      description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
      neighborhood: 'Lilly Vally',
      price: 111000,
      baths: 3,
      school: 'Lilly Valley High School',
      rooms: 4,
      canPurchase: true,
      images: [
        "/real_estate_project/images/house3-1.jpg",
        "/real_estate_project/images/house3-2.jpg",
        "/real_estate_project/images/house3-3.jpg"
      ],
      reviews: [{
        stars: 1,
        body: "This gem is WAY too expensive for its rarity value.",
        author: "turtleguyy@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "BBW: High Shine != High Quality.",
        author: "LouisW407@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "Don't waste your rubles!",
        author: "nat@example.org",
        createdOn: 1397490980837
      }]
    }
  ];

})();