class MainController < ApplicationController
  def index

  	@characters = Character.all
  	@characters_in = Character.featured

  end
end
