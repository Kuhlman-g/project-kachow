require "rails_helper"

RSpec.describe Api::V1::BrandsController, type: :controller do
  let!(:first_brand) { Brand.create(name: 'Red Barron')}
  let!(:first_pizza) { Pizza.create(brand: first_brand, product_name: "Pepperoni Supreme", cost: 17.38)}

  describe "GET#index" do
    it "should return a list of all the brands" do
      get :index

      returned_json = JSON.parse(response.body)
      
      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")
      
      expect(returned_json['brands'].length).to eq 1
      expect(returned_json['brands'][0]['name']).to eq("Red Barron")
    end
  end

  describe "GET#show" do
    it "should display all of the pizzas for a brand" do
      get :show, params: {id: first_brand.id}
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json['brand'].length).to eq 3
      expect(returned_json['brand']['name']).to eq(first_brand.name)
      expect(returned_json['brand']['id']).to eq(first_brand.id)
      
      expect(returned_json['brand']['pizzas'][0]['id']).to eq(first_pizza.brand.id)
      expect(returned_json['brand']['pizzas'][0]['product_name']).to eq(first_pizza.product_name)
      expect(returned_json['brand']['pizzas'][0]['cost']).to eq(first_pizza.cost)
    end
  end
end