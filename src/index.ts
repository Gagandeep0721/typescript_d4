import Shop from './shop'
import User from './user'
import Item from './items'

//const shop = new Shop();
//shop.addItem(new Item('1', 15, "red hat"))
//shop.addItem(new Item('2', 25, "blue hat"))
//shop.addItem(new Item('3', 50, "yellow hat"))

//const items = new Item()
const item1 = new Item('Item 1', 15, 'Red hat')
const item2 = new Item('Item 2', 10, 'Blue hat')
const item3 = new Item('Item 3', 25, 'white hat')
const item4 = new Item('Item 4', 10, 'Black hat')
const item5 = new Item('Item 5', 25, 'yellow hat')

//user.addToCart(shop.items[0], 2)
//user.addToCart(shop.items[1], 3)
//user.addToCart(shop.items[2], 1)

const shop = new Shop()
shop.addItem(item1)
shop.addItem(item2)
shop.addItem(item3)
shop.addItem(item4)
shop.addItem(item5)


const user = new User('Ken wilson',31)
user.addToCart(item1)
user.addToCart(item2)
user.addToCart(item3)
user.addToCart(item4)
user.addToCart(item5)
user.addToCart(item3)

user.printCart()

user.removeFromCart(item4)

user.printCart()

user.removeQuantityFromCart(item3, 1)

user.printCart()


