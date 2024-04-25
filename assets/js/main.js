var app = new Vue({
	el: '#app',
	data: {
		page_title: 'Peppers',
		title_image: 'ss_peppers_1.jpg',
		products: [
			{
				id: 1,
				title: 'Bell Peppers',
				short_text: 'Red Bell Peppers',
				image: 'red_bell_pepper.jpg',
				desc: {
					characteristics:
						'The most recognizable of the sweet pepper varieties are bell peppers, which are also the most commonly available. Bell peppers are easy to grow in the garden, and abundantly available in the produce section of your grocery store, generally in either green, red, yellow, or orange. But there is so much more variety than those four colors among bell peppers!',
					plant: [
						'Bell peppers grow best in warm, well-drained soil.',
						'They require full sun to thrive.',
						'Regular watering is essential, especially during dry periods.',
					],
					fruit: [
						'Bell peppers are typically harvested when they are firm, shiny, and deep in color.',
						'Avoid peppers with soft spots or blemishes.',
						'Store them in the refrigerator for up to one week.',
					],
					cycle: ['Spring', 'Summer', 'Fall'],
					color: ['Red'],
				},
			},
			{
				id: 2,
				title: 'California Wonder',
				short_text: 'Red California Wonder',
				image: 'california_wonder.jpg',
				desc: {
					characteristics:
						'The California Wonder pepper is a sweet pepper variety that produces large, blocky fruits. It is one of the most popular bell peppers grown in home gardens and is known for its sweet flavor and crisp texture. California Wonder peppers start out green and ripen to a deep red color. They are excellent for fresh eating, stuffing, grilling, and cooking.',
					plant: [
						'California Wonder peppers are easy to grow and require full sun and well-drained soil.',
						'They benefit from regular watering, especially during dry periods.',
						'They can be grown in containers or in the ground.',
					],
					fruit: [
						'The peppers are typically ready to harvest 60-75 days after transplanting.',
						'Harvest them when they are firm, glossy, and fully red.',
						'Store them in a cool, dry place or in the refrigerator for up to two weeks.',
					],
					cycle: ['Spring', 'Summer', 'Fall'],
					color: ['Red'],
				},
			},
			{
				id: 3,
				title: 'Orange Sun',
				short_text: 'Premium Orange Sun',
				image: 'orange_sun.jpg',
				desc: {
					characteristics:
						'Orange Sun peppers are a premium variety of sweet bell pepper. They are known for their large size, sweet flavor, and vibrant orange color. These peppers are rich in beta-carotene, which is a powerful antioxidant that gives them their orange hue. Orange Sun peppers are delicious raw in salads, sandwiches, and salsas, or cooked in stir-fries, soups, and casseroles.',
					plant: [
						'Orange Sun peppers thrive in warm, sunny conditions and well-drained soil.',
						'They require regular watering, especially during hot weather.',
						'Provide support for the plants as they grow, especially if they become heavy with fruit.',
					],
					fruit: [
						'The peppers are ready to harvest when they reach full size and have a bright orange color.',
						'Harvest them carefully to avoid damaging the plant.',
						'Store them in the refrigerator for up to two weeks.',
					],
					cycle: ['Spring', 'Summer', 'Fall'],
					color: ['Orange'],
				},
			},
			{
				id: 4,
				title: 'Purple Beauty',
				short_text: 'Purple Bell Peppers',
				image: 'purple_beauty.jpg',
				desc: {
					characteristics:
						'These compact and sturdy plants produce purple bell peppers with a lime green interior. Purple colors do not hold up to cooking, so they are most stunning when eaten fresh! Their color can range from slight purple to a purple so dark it is almost black. These are some of my favorites!',
					plant: [
						'Purple Beauty peppers prefer warm, sunny conditions and well-drained soil.',
						'They require regular watering to keep the soil evenly moist.',
						'Use mulch to help retain soil moisture and control weeds.',
					],
					fruit: [
						'The peppers are ready to harvest when they reach full size and have a deep purple color.',
						'Handle them carefully to avoid bruising or damaging the delicate skin.',
						'Store them in the refrigerator for up to two weeks.',
					],
					cycle: ['Spring', 'Summer', 'Fall'],
					color: ['Purple'],
				},
			},
			{
				id: 5,
				title: 'Jungle Parrot',
				short_text: 'Red Jungle Parrot',
				image: 'jungle_parrot.jpg',
				desc: {
					characteristics:
						'This variety gets its name from the beak-like point at the blossom end of the red bell pepper. Plants are small and compact and perfect for growing in containers on a deck or patio. These are sweet and delicious peppers when eaten fresh, but cooking them unlocks even more sweetness.',
					plant: [
						'Jungle Parrot peppers grow well in containers or in the ground in warm, sunny conditions.',
						'They require regular watering, especially during hot weather.',
						'Provide support for the plants as they grow to prevent them from toppling over.',
					],
					fruit: [
						'The peppers are ready to harvest when they reach full size and have a bright red color.',
						'Harvest them carefully to avoid damaging the delicate skin.',
						'Store them in the refrigerator for up to two weeks.',
					],
					cycle: ['Spring', 'Summer', 'Fall'],
					color: ['Red'],
				},
			},
		],
		product: null,
		btnVisible: 0,
		cart: '',
		contactFields: {
			name: '',
			companyName: '',
			position: '',
			city: '',
			country: '',
			tel: '',
			email: '',
			whoAreYou: 0,
			specify: '',
			interestedIn: ''
		},
		orderSubmitted: false,
	},
	mounted: function () {
		// console.log(window.localStorage.getItem('prod'));
		this.getProduct();
    this.checkInCart();
    this.getCart();
	},
	methods: {
		addItem: function (id) {
			window.localStorage.setItem('products', id);
		},
		getProduct: function () {
			if (window.location.hash) {
				var prod_id = window.location.hash.replace('#', '');
				if (this.products && this.products.length > 0) {
					for (i in this.products) {
						if (
							this.products[i] &&
							this.products[i].id &&
							prod_id == this.products[i].id
						) {
							this.product = this.products[i];
							return;
						}
					}
				}
			}
			this.product = null;
		},
		addToCart: function (id) {
			var cart = [];
			if (window.localStorage.getItem('cart')) {
				cart = window.localStorage.getItem('cart').split(',');
			}
			if (cart.indexOf(String(id) == -1)) {
				cart.push(id);
				window.localStorage.setItem('cart', cart.join());
				this.btnVisible = 1;
			}
		},
		checkInCart: function () {
			if (
				this.product &&
				this.product.id &&
				window.localStorage
					.getItem('cart')
					.split(',')
					.indexOf(String(this.product.id)) != -1
			) {
				this.btnVisible = 1;
			}
		},
    getCart: function() {
			// debugger;
      // Отримуємо дані з локального сховища
      var cartIds = localStorage.getItem('cart');
      if (cartIds) {
        // Розділяємо рядок на масив id товарів
        cartIds = cartIds.split(',');
        // Фільтруємо масив продуктів за id
        this.cart = this.products.filter(product => cartIds.includes(String(product.id)));
      } else {
        this.cart = [];
      }
    },
    removeFromCart: function(productId) {
      // Видаляємо товар з масиву cart
      this.cart = this.cart.filter(item => item.id !== productId);
      // Оновлюємо localStorage
      var cartIds = this.cart.map(item => item.id).join(',');
      localStorage.setItem('cart', cartIds);
    },
    makeOrder: function() {
			// Отримати дані форми
			const formData = this.contactFields;
			// Додати інформацію про товари у корзині
			formData.cartItems = this.cart;
			// Конвертувати у JSON
			const orderData = JSON.stringify(formData);
			console.log(orderData); // Дані замовлення у форматі JSON у консоль
			// Очистити корзину
			this.cart = [];
			window.localStorage.removeItem('cart');
			this.orderSubmitted = true;
		},
	},
});