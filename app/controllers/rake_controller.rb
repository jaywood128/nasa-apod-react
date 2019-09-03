
require 'rake'

Rake::Task.clear # necessary to avoid tasks being loaded several times in dev mode
Sample::Application.load_tasks 

class RakeController < ApplicationController
  def run
    Rake::Task[params[:last_thirty_days]].reenable # in case you're going to invoke the same task second time.
    Rake::Task[params[:last_thirty_days]].invoke
  end

end
