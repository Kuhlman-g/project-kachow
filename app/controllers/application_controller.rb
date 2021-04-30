class ApplicationController < ActionController::Base
<<<<<<< HEAD
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
=======
>>>>>>> f82525bb4ace90eacc1e8ddcf292978f212bac75
  protect_from_forgery with: :exception
  protect_from_forgery unless: -> { request.format.json? }

  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:first_name, :last_name, :profile_photo])
  end
end
