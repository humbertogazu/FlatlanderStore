(function(){

	var gem = {
		name: 'Azurite',
		price: '2.95',
		description: 'Lorem ipsum solor sit amet, conse',
		canPurchase: false,
		soldOut: true
	};

	var gems = [
	{
		name: 'Azurite',
		price: '2.95',
		description: 'Lorem ipsum solor sit amet, conse',
		canPurchase: false,
		soldOut: true,
		images: [
			{id:0, url:'img/gem-01.gif'},
			{id:1, url:'img/gem-02.gif'},
			{id:2, url:'img/gem-03.gif'}
		],
		reviews: [
			{stars: 5, body: 'ILove this product', author: 'beto_gazu@hotmail.com'},
			{stars: 5, body: 'ILove this product', author: 'beto_gazu@hotmail.com'}
		]

	},
	{
		name: 'Bloodstone',
		price: '5.95',
		description: 'Lorem ipsum solor sit amet, conse',
		canPurchase: false,
		soldOut: true,
		images: [
			{id:0, url:'img/gem-04.gif'},
			{id:1, url:'img/gem-05.gif'},
			{id:2, url:'img/gem-06.gif'}
		],
		reviews: [
			{stars: 5, body: 'ILove this product', author: 'beto_gazu@hotmail.com'},
			{stars: 5, body: 'ILove this product', author: 'beto_gazu@hotmail.com'}
		]
	},
	{
		name: 'Zircon',
		price: '3.95',
		description: 'Lorem ipsum solor sit amet, conse',
		canPurchase: false,
		soldOut: true,
		images: [
			{id:0, url:'img/gem-07.gif'},
			{id:1, url:'img/gem-08.gif'},
			{id:2, url:'img/gem-09.gif'}
		],
		reviews: [
			{stars: 5, body: 'ILove this product', author: 'beto_gazu@hotmail.com'},
			{stars: 5, body: 'ILove this product', author: 'beto_gazu@hotmail.com'}
		]
	}
	];

	var app = angular.module('gemStore', ['store-products']);

	app.controller('StoreController', function(){
		this.products = gems;
	});

	app.controller('PanelController', function(){
		this.tab = 1;

		this.selectTab = function(setTab){
			this.tab = setTab;
		};

		this.isSelected = function(checkTab){
			return this.tab == checkTab;
		};

	});

	app.controller('ReviewsController',function(){
		this.review = {};
		this.addReview = function(product){
			product.reviews.push(this.review);
			this.review = {};
		}
	});

	app.controller('GalleryController', function(){
		this.current = 0;

		this.setCurrent = function(imageNumber){
			this.current = imageNumber || 0;

		}
	})

	// app.directive('productTitle', function(){
	// 	return{
	// 		restric: 'E',
	// 		templateUrl: 'product-title.html'
	// 	};
	// });

	
})();

