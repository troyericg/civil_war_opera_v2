class MainController < ApplicationController
  def index

  	@characters = Character.all
  	@characters_in = Character.featured
  	@characters_pro = Character.pro_reg
  	@characters_anti = Character.anti_reg

  	respond_to do |format|
  		format.html
  		format.json { render json: @characters }
  	end

  end
end
