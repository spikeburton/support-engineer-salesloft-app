if ENV["RACK_ENV"] == "development" || ENV["RACK_ENV"] == "test"
  # Grab API key from .env
  require 'dotenv'
  Dotenv.load

  require 'pry'
end

require 'sinatra/base'
require 'httparty'

class App < Sinatra::Base
  get '/' do
    if ENV["RACK_ENV"] == "production"
      send_file File.expand_path('index.html', settings.public_folder)
    end
  end

  get '/api/people' do
    response = HTTParty.get(
      "https://api.salesloft.com/v2/people.json",
      headers: { "Authorization" => "Bearer #{ENV['SALESLOFT_API_KEY']}"}
    )

    if response.success?
      payload = response["data"].collect do |user|
        {
          name: "#{user["first_name"]} #{user["last_name"]}",
          email: user["email_address"],
          title: user["title"]
        }
      end

      # binding.pry
      content_type :json
      payload.to_json
    else
      halt 400, "Request failed"
    end
  end
end
