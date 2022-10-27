class UserItemSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :item_id, :quantity, :price

  belongs_to :item
end
