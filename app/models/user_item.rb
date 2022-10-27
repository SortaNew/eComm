class UserItem < ApplicationRecord

belongs_to :user
belongs_to :item

validates :user_id, :item_id, :quantity, :price, presence: true

end
