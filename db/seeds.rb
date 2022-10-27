# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
u1=User.create(username: "one", password: "two")
u2=User.create(username: "two", password: "three")
u3=User.create(username: "three", password: "four")

i1=Item.create(name: "chair", description: "no", image: "")
i2=Item.create(name: "bed", description: "...", image: "")
i3=Item.create(name: "ballon", description: "Buy me!", image: "")

UserItem.create(user_id: u2.id, item_id: i3.id, quantity: 5, price: 10)
UserItem.create(user_id: u3.id, item_id: i2.id, quantity: 7, price: 2)
UserItem.create(user_id: u1.id, item_id: i1.id, quantity: 4, price: 3)
