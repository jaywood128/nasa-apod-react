class RakeController < ApplicationController
  def run
    Rake::Task[params[:last_thirty_days]].reenable # in case you're going to invoke the same task second time.
    Rake::Task[params[:last_thirty_days]].invoke
  end

end
