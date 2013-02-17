require "csv"

namespace :db do
	desc "Importing CSV data into database"
	task :csvimport => :environment do
		file = "db/cwo_characterData.csv"

		CSV.foreach(file, :headers => true) do |row|
			person = row[0]
			Character.create({
				:codename => row[0],
	      		:realname => row[1],
				:gender => row[2],
				:status => row[3],
				:alignment => row[4],
				:type_of => row[5],
				:team => row[6],
				:antiregistration => row[7],
				:num_appearances => row[8],
				:haspicture => row[9]
			})

			puts "Saved #{person} to database!"
		end
	end
	
end