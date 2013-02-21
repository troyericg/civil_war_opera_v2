require "rubygems"
require "csv"
require "json"


namespace :json do
	desc "Restructures the json data for my next d3 viz"
	task :modify => :environment do
		base_json = Character.all.to_json
		mod_json = JSON.parse(base_json)

		new_json = [{
				"side" => "anti-registration",
				"children" => [{
					"alignment" => "hero",
					"children" => [{
						"team" => "TK",
						"children" => [{
							"type_of" => "human",
							"children" => [{
								"codename" => "TK",
								}],
							"type_of" => "mutant",
							"children" => [{
								"codename" => "TK",
								}],
							"type_of" => "mystic",
							"children" => [{
								"codename" => "TK",
								}],
							"type_of" => "other",
							"children" => [{
								"codename" => "TK",
								}],
							"type_of" => "superhuman",
							"children" => [{
								"codename" => "TK",
								}]
							}],
						}]
				}],
					"alignment" => "villain",
					"children" => [{
					"alignment" => "hero",
					"children" => [{
						"team" => "TK",
						"children" => [{
							"type_of" => "human",
							"children" => [{
								"codename" => "TK",
								}],
							"type_of" => "mutant",
							"children" => [{
								"codename" => "TK",
								}],
							"type_of" => "mystic",
							"children" => [{
								"codename" => "TK",
								}],
							"type_of" => "other",
							"children" => [{
								"codename" => "TK",
								}],
							"type_of" => "superhuman",
							"children" => [{
								"codename" => "TK",
								}]
							}],
						}]
				}],
			},
			{
				"side" => "anti-registration",
				"children" => [{
					"alignment" => "hero",
					"children" => [{
						"team" => "TK",
						"children" => [{
							"type_of" => "human",
							"children" => [{
								"codename" => "TK",
								}],
							"type_of" => "mutant",
							"children" => [{
								"codename" => "TK",
								}],
							"type_of" => "mystic",
							"children" => [{
								"codename" => "TK",
								}],
							"type_of" => "other",
							"children" => [{
								"codename" => "TK",
								}],
							"type_of" => "superhuman",
							"children" => [{
								"codename" => "TK",
								}]
							}],
						}]
				}],
					"alignment" => "villain",
					"children" => [{
					"alignment" => "hero",
					"children" => [{
						"team" => "TK",
						"children" => [{
							"type_of" => "human",
							"children" => [{
								"codename" => "TK",
								}],
							"type_of" => "mutant",
							"children" => [{
								"codename" => "TK",
								}],
							"type_of" => "mystic",
							"children" => [{
								"codename" => "TK",
								}],
							"type_of" => "other",
							"children" => [{
								"codename" => "TK",
								}],
							"type_of" => "superhuman",
							"children" => [{
								"codename" => "TK",
								}]
							}],
						}]
				}],

			}]

			# gets anti- or pro- as 0 or 1
			puts new_json[0]["side"]

			# get the alignment of the 
			puts new_json[0]["children"][0]["alignment"]

		# mod_json.each do |chars|
		# 	chars.each_pair do |k,v|
		# 		puts k
		# 		puts v
		# 		puts "--------------"
		# 	end	
		# end

		# for adding key/value pairs to a hash
		# @diff_attr = {}
 	# 		params[place_type].each_pair do |k, v|
 	# 		@diff_attr[k.to_sym] = v
		# end



	end
	
end