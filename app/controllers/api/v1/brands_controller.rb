class Api::V1::BrandsController < ApplicationController
  def index
    render json: Brand.all
  end

  def show
    select_brand = Brand.find(params[:id])
    render json: select_brand, serializer: BrandSerializer
  end
end