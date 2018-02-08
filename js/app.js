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
        "http://clipgoo.com/daut/as/f/h/house-interior-cost-to-paint-a-queensland-charming-futuristic-island-home-by-nigel-gee_futuristic-house-exterior_exterior_exterior-siding-design-small-house-home-ideas-landscaping-designs-paint-tool-s.jpg",
        "http://www.builderhouseplans.com/house-plans/media/catalog/product/cache/11/image/628x353/9df78eab33525d08d6e5fb8d27136e95/a/m/ama879-fr-re-co.jpg",
        "http://www.eplans.com/house-plans/media/catalog/product/a/m/ama879-fr-re-co.jpg"
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
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy8RObu6BpVxTv89TVAgwO_hDD9YD4IYU3wwfWx4V6-GjiU24EZA",
        "http://sunflaresolar.com/wp-content/uploads/2016/09/Solarshingles.jpg",
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
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRauKKX-jtPYc6L53jb11TZ0qE-FDjRpYtVCic_UZN3FKgjjcEV",
        "https://nhadepvietnam.net/wp-content/uploads/2017/11/nhung-dieu-can-tranh-khi-chon-mau-son-ngoai-that-2-320x200.jpg",
        "http://zootecnews.com/img/exterior-house-colors/_fullsize/prissy-exterior-color-schemes-along-with-painted-brick-exterior-color-schemes-also-ranch-style-homes-home-design-ideas-plus-ranch-style-homes-home-design-ideas-housecolors-as-wells-as-gallery_exterior-house-colors.jpg"
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