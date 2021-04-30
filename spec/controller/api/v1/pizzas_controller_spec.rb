require "rails_helper"

RSpec.describe Api::V1::PizzasController, type: :controller do
  let!(:brand1) { Brand.create(name: "Newman's Own") }

  let!(:pizza1) { Pizza.create!(brand: brand1, product_name: "Crispy Supreme", cost: 15.00) }

  describe "Get#show" do
    it "should display all of the pizzas attributes/facts for that pizza" do
      get :show, params: { id: pizza1.id, brand_id: brand1.id }
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq('application/json')

      expect(returned_json['pizza']['product_name']).to eq(pizza1.product_name)
      expect(returned_json['pizza']['cost']).to eq(pizza1.cost)

      expect(returned_json['pizza']['brand']['name']).to eq(pizza1.brand.name)
      expect(returned_json['pizza']['brand']['id']).to eq(brand1.id)
    end
  end

  # describe "POST#create" do
  #   it "creates a new pizza for that brand" do 
  #     post_json ={ 
  #       pizza: {
  #         product_name: "Sausage and Herb",
  #         cost: 3.58,
  #         brand_id: brand1.id
  #       },
  #       brand_id: brand1.id
  #     }

  #     prev_count = Pizza.count
  #     post(:create, params: post_json, format: :json)
  #     returned_json = JSON.parse(response.body)

  #     expect(Pizza.count).to eq(prev_count + 1)

  #     expect(response.status).to eq 200
  #     expect(response.content_type).to eq("application/json")

  #     expect(returned_json).to be_kind_of(Hash)
  #     expect(returned_json['pizzas']).to be_kind_of(Array)
  #     expect(returned_json['pizzas'][1]['product_name']).to eq('Sausage and Herb')
  #     expect(returned_json['pizzas'][1]['cost']).to eq 3.58
  #   end

  #   it "does not create a new pizza for an incomplete form" do
  #     post_json={
  #       pizza: {
  #         product_name: "",
  #         cost: 3.58,
  #         brand_id: brand1.id
  #       },
  #       brand_id: brand1.id
  #     }

  #     prev_count = Pizza.count
  #     post(:create, params: post_json, format: :json)
  #     returned_json = JSON.parse(response.body)

  #     expect(Pizza.count).to eq(prev_count)

  #     expect(response.status).to eq 200
  #     expect(response.content_type).to eq("application/json")

  #     expect(returned_json).to be_kind_of(Hash)
  #     expect(returned_json['errors']).to be_kind_of(Array)
  #     expect(returned_json['errors'][0]).to eq("Product name can't be blank")
  #   end
  # end
end