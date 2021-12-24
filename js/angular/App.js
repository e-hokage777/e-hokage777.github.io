app = angular.module("app", []);

appctrl = app.controller("appctrl", function($scope){
	$scope.certs = ["Front End Libraries - FreeCodeCamp",
					"JavaScript Algorithms and Data Structures - FreeCodeCamp",
					"Responsive Web Design - FreeCodeCamp",
					"Programming Network Applications in Java - Udemy",
					"HTML, CSS, and JavaScript for Web Developers - Coursera",
					"Java Programming: Complete Beginner to Advanced - Udemy"
					];

	$scope.projects = [{name: "Profile page - FreeCodeCamp", link: "https://codepen.io/e-hokage777/full/xxrEMKR"},
						{name: "Technical Documentation Page - FreeCodeCamp", link:"https://codepen.io/e-hokage777/full/RwgROdy"},
						{name: "Product Landing Page - FreeCodeCamp", link: "https://codepen.io/e-hokage777/full/yLXedEr"},
						{name: "Survey Page - FreeCodeCamp", link: "https://codepen.io/e-hokage777/full/dyRYWGx"},
						{name: "Tribute Page - FreeCodeCamp", link: "https://codepen.io/e-hokage777/full/yLXyKoe"},
						{name: "Drum Machine - FreeCodeCamp", link: "https://codepen.io/e-hokage777/full/qBXVzjq"},
						{name: "Markdown Previewer - FreeCodeCamp", link: "https://codepen.io/e-hokage777/full/VwzzNNv"},
						{name: "Random Quote Machine - FreeCodeCamp", link: "https://codepen.io/e-hokage777/full/oNeeYBY"},
						{name: "JavaScript Calculator - FreeCodeCamp", link: "https://codepen.io/e-hokage777/full/eYEMJzm"},
						{name: "Bar Chart - FreeCodeCamp", link: "https://codepen.io/e-hokage777/full/LYjvWjx"},
						{name: "Scatter Plot - FreeCodeCamp", link: "https://codepen.io/e-hokage777/full/BadeLdY"},
						{name: "Heat Map - FreeCodeCamp", link: "https://codepen.io/e-hokage777/full/KKvjYoe"},
						{name: "Choropleth Map - FreeCodeCamp", link: "https://codepen.io/e-hokage777/full/zYEYqzQ"},
						]
})