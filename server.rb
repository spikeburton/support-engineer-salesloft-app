# Grab API key from .env
require 'dotenv'
Dotenv.load

require 'sinatra/base'
require 'httparty'
# require 'pry'

class App < Sinatra::Base
  get '/api/people' do
    response = HTTParty.get(
      "https://api.salesloft.com/v2/people.json",
      headers: { "Authorization" => "Bearer #{ENV['SALESLOFT_API_KEY']}"}
    )

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
  end
end
