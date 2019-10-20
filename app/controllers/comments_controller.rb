module Api 
  module V1
class CommentsController < ApplicationController
  def show 
    if user_signed_in? 
      render json: current_user.comments 
    else 
      render json: {}, status: 401 
    end 
  end 
  def create 
    if user_signed_in? 
      if comment = current_user.comments.create(comment_params)
        render json: comment, status: :created 
      else 
        render json: comment.errors, status: 400
      end
    else 
      render json: {}, status: 401
    end 
      
  end 

  private 

  def comment_params 
    params.require(:comment).permit(:content)
  end
end 
end
end
