require "rails_helper"

RSpec.describe Api::V1:: PizzasController, type: :controller do
  let!(:brand1) { Brand.create(name: "Newman's Own") }

  let!(:pizza1) { Pizza.create!(brand: brand1, product_name: "Crispy Supreme", cost: 15.00) }

  describe "Get#show" do
    it "should display all of the pizzas attributes/facts for that pizza" do
      get :show, params: {id: pizza1.id }
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq('application/json')

      expect(returned_json['pizza']['product_name']).to eq(pizza1.product_name)
      expect(returned_json['pizza']['cost']).to eq(pizza1.cost)

      expect(returned_json['pizza']['brand']['name']).to eq(pizza1.brand.name)
      expect(returned_json['pizza']['brand']['id']).to eq(brand1.id)
    end
  end
end