require 'rack/test'
require_relative '../server'

describe 'App' do
  include Rack::Test::Methods

  def app
    App.new
  end
end
