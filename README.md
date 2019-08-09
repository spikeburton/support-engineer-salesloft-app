# SalesLoft Support Engineer App
Here it is! ✨ I created a small server with Sinatra to proxy the request to the SalesLoft API and avoid CORS issues. I set up a testing framework with `RSpec` to test that the request processes with a 200 status. The route itself will return a status of 400 if something goes awry. If you peek in the `client` folder, you'll find the code for the React front-end. Considering the small scale of the app, I chose not to use a styling framework which I thought would be overkill and instead just wrote a small amount of custom CSS. You can find this styling inside of the `src/styles` directory. I created a function separate from any of the view logic to count the character frequencies of emails in `src/services/countFrequencies.js`. I created components for both the people table and the frequency count table, which you can find inside `src/components`. I wrote a couple of tests for the frequency counter function, which can be found inside `src/tests`. Finally, I am using Travis for CI/CD with deployment to Heroku and all tests run within the pipeline before deploy. I hope you enjoy checking out the code! 🚀

## 🛠 Tech Stack
1.  [Sinatra](http://sinatrarb.com/) - server
1.  [React](https://reactjs.org/) - responsive front end
1.  [RSpec](https://rspec.info/) - Ruby testing framework
1.  [Jest](https://jestjs.io/) - JavaScript testing framework, bundled with React
1.  [Travis CI](https://travis-ci.org/) - CI/CD
1.  [Heroku](https://www.heroku.com/) - Hosting
