# Use Sinatra to proxy HTTP request to API
require 'sinatra'
# Grab API key from .env
require 'dotenv'
Dotenv.load

get '/' do
  puts ENV['SALESLOFT_API_KEY']
end
