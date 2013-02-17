class Character < ActiveRecord::Base
  attr_accessible :alignment, :antiregistration, :codename, :gender, :haspicture, :num_appearances, :realname, :status, :team, :type_of

  # used scope to filter 
  scope :featured, {:conditions => [ "num_appearances > ?", 0]}
end
