# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#

brand1 = Brand.create(name: "Newman's Own")
brand2 = Brand.create(name: "DiGiorno")
brand3 = Brand.create(name: "Ellio's")
brand4 = Brand.create(name: "Amy's")



pizza1 = Pizza.create(brand: brand1, product_name: "Crispy Supreme", cost: 15.00)
pizza2 = Pizza.create(brand: brand1, product_name: "Uncured Pepperoni", cost: 13.74) 
pizza3 = Pizza.create(brand: brand2, product_name: "Rising Crust", cost: 5.00)
pizza4 = Pizza.create(brand: brand3, product_name: "Three Cheese", cost: 2.99)
pizza5 = Pizza.create(brand: brand2, product_name: "Veggie Supreme", cost: 3.99)
pizza6 = Pizza.create(brand: brand4, product_name: "Thin crust", cost: 4.20)

review1 = Review.create(pizza: pizza1, name: "Amazing Slices", rating: 89, body: "This is a dope pizza. You should try it!")
review2 = Review.create(pizza: pizza3, name: "Three Cheese", rating: 50, body: "The toppings will literally fall off and the crust is kind of bland like... It isn't terrible but there are better options. At least there's no high fructose corn syrup and it's cheap!")
review3 = Review.create(pizza: pizza6, name: "Thin crust", rating: 85, body: "Awesome flavor and nice crispy crust while also having good taste. Sauce is delicious.")

#review4 = Review.create(pizza: pizza3, name: "Uncured Pepperoni", rating: 95, body: "Best peppersoni on a frozen pizza ever! Crust and other toppings are epic!")
