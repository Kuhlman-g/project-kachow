require 'rails_helper'

feature "visitor sees a list of pizza brands" do
  scenario "sees a list of pizza brands" do
    pizza3 = Pizza.create!(brand: "DiGiorno", product_name: "Rising Crust", cost: 5.00)
    pizza4 = Pizza.create!(brand: "Ellio's", product_name: "Three Cheese", cost: 2.99)

    visit pizzas_path

    expect(page).to have_content "DiGiorno"
    expect(page).to have_content "Ellio's"
  end

  scenario "the root path takes user to pizza index page" do
    pizza3 = Pizza.create!(brand: "DiGiorno", product_name: "Rising Crust", cost: 5.00)

    visit root_path

    expect(page).to have_content "DiGiorno"
  end
end