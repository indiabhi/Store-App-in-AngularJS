(function(){
	var app = angular.module('store', []);

	app.controller('StoreController', function(){
		this.products = gems;

	});

	app.controller("TabController", function(){
		this.tab = 1;

		this.selectTab = function(setTab){
			this.tab = setTab;
		};

		this.IsSelected = function(checkTab){
			return this.tab === checkTab;
		};
	});

	var gems = [
	{
		name: 'Doremon',
		images: [
		{
			full: 'dore.jpg',
			thumb: 'dore_small.jpg',
		}
		{
			full: 'dore1.jpg',
			thumb: 'dore1_small.jpg',
		}
		]
		price: 2.95,
		description: '....',
		canPurchase: false,
		soldout: true,
	},
	{
		name: 'Pikachu',
		images: [
		{
			full: 'gore.jpg',
			thumb: 'gore_small.jpg',
		}
		{
			full: 'gore1.jpg',
			thumb: 'gore1_small.jpg',
		}
		{
			full: 'gore2.jpg',
			thumb: 'gore2_small.jpg',
		}
		]
		price: 50,
		description: '......',
		canPurchase: true,
		soldout: false,
	}
];
	

})();