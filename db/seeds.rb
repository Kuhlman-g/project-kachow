# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

brand1 = Brand.create(name: "Newman's Own")
brand2 = Brand.create(name: "DiGiorno")
brand3 = Brand.create(name: "Ellio's")



pizza1 = Pizza.create(brand: brand1, product_name: "Crispy Supreme", cost: 15.00)
pizza2 = Pizza.create(brand: brand1, product_name: "Uncured Pepperoni", cost: 13.74) 
pizza3 = Pizza.create(brand: brand2, product_name: "Rising Crust", cost: 5.00)
pizza4 = Pizza.create(brand: brand3, product_name: "Three Cheese", cost: 2.99)