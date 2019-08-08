require_relative '../server/server'

RSpec.describe 'App' do
  include Rack::Test::Methods

  def app
    App.new
  end

  it 'fetches people from SalesLoft API' do
    get '/api/people'

    # expect(last_response.body).to include("Hello World!")
    expect(last_response).to be_ok
  end
end
