class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :image
end
