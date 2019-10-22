namespace :db do
  desc 'heroku pg:reset, migrate, seed'
  task hdcms: :environment do
    exec('heroku pg:reset --app jwoodnasa --confirm jwoodnasa
      heroku run rake db:migrate --app jwoodnasa
      heroku run rake db:seed --app jwoodnasa')
  end
end
