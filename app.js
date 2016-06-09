(function(){
	var app = angular.module('store', []);

	app.controller('StoreController', function(){
		this.products = gems;

	});

	var gems = [
	{
		name: 'Doremon',
		price: 2.95,
		description: '....',
		canPurchase: false,
		soldout: true,
	},
	{
		name: 'Pikachu',
		price: 50,
		description: '......',
		canPurchase: true,
		soldout: false,
	}
];

})();