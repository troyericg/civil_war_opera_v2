module MainHelper

	def getImage(name)
  		if name.haspicture?
  			nameMod = name.codename.gsub(/\s/,"-").gsub(/(|)/,"").downcase.strip
	  		return "#{nameMod}.jpeg"
  		else
  			return "no-pic.jpeg"
  		end
  	end

end
