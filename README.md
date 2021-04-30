# README

[![Codeship Status for Kuhlman-g/project-kachow](https://app.codeship.com/projects/d6fad0f0-0ea7-4ed3-ad04-78e0713ff997/status?branch=master)](https://app.codeship.com/projects/442453)


Overview: 
PizzaMind is a pizza-review application that enables authenticated users to review frozen pizza brands that they have purchased or owned. "If time won't suffice grab a slice on ice."

Website: https://fathomless-sierra-63806.herokuapp.com/


Setup:
Ruby Version: 2.7.3
Rails Version: 5.2.5
Bundler Version: 2.2.15

Getting Started:

After you fork, clone, or download the repo, execute the following commands to run the application locally:

$ bundle install
$ yarn install

To build the PostgreSQL database:

$ bundle exec rake db:create
$ bundle exec rake db:migrate
$ bundle exec rake db:seed

To view the app in development locally at https://localhost:3000/ Run the following commands in separate terminal windows:

$ rails s
$ yarn start

In Progress Features:

-Pizza photo gallery
-Update error handeling for forms 
-Update error handeling for user sign up
