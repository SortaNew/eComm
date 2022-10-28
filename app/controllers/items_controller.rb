class ItemsController < ApplicationController
    
    def index
        items = Item.all
        render json: items, status: :ok    
    end

    def show
        item = Item.find_by(id: params[:id])
        if item
            render json: item, status: :ok
        else
            render json: { error: "Item Not Found!" }, status: :not_found
        end
    end

    def create
        item = Item.create(item_params)
        if item.valid?
            render json: item, status: :created
        else
            render json: { errors: item.errors }, status: :unprocessable_entity
        end 
    end
    
    

    private

    def item_params
        params.permit(:name, :description, :item)
    end
end
