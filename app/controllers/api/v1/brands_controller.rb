class Api::V1::BrandsController < ApplicationController
  
  def index
    render json: Brand.all
  end

  def show
    select_brand = Brand.find(params[:id])
    render json: select_brand, serializer: BrandSerializer
  end
<<<<<<< HEAD

end
=======
end
>>>>>>> 9dd0586b181fbde63548ade3da4ece0d4ab98812
