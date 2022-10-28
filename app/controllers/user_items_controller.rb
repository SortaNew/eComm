class UserItemsController < ApplicationController

    def index
        user_items = UserItem.all
        render json: user_items, status: :ok    
    end

    def show
        user_item = UserItem.find_by(id: params[:id])
        if user_item
            render json: user_item, status: :ok
        else
            render json: { error: "User item Not Found!" }, status: :not_found
        end
    end

    def create
        user_item = UserItem.create(user_item_params)
        if user_item.valid?
            render json: user_item, status: :created
        else
            render json: { errors: user_item.errors }, status: :unprocessable_entity
        end 
    end

    def update
        user_item = UserItem.find_by(id: params[:id])
        if user_item
            user_item.update(params.permit(:quantity, :price))
            if user_item.valid?
                render json: user_item, status: :accepted
            else
                render json: { errors: user_item.errors }, status: :unprocessable_entity
            end
        else
            render json: { error: "User Item Not Found!" }, status: :not_found
        end 
    end

    def destroy
        user_item = UserItem.find_by(id: params[:id])
        if user_item
            user_item.destroy
            render json: {}, status: :no_content
        else
            render json: { error: "User Item Not Found!" }, status: :not_found
        end 
    end

    private

    def user_item_params
        params.permit(:user_id, :item_id, :quantity, :price)
    end

end
