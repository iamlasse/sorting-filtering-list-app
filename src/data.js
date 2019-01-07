import uuid from 'uuid'
import { fromJS } from 'immutable'

// Create Immutable Map
export const inventory = fromJS({
  categories: [
    { id: 1, name: "Sporting Goods" },
    { id: 2, name: "Electronics" },
    { id: 3, name: "Clothes" },
    { id: 4, name: "Accessories" }
  ],
  items: [
    { id: uuid(), categoryId: 1, price: 49.99, stocked: true, name: "Football" },
    { id: uuid(), categoryId: 2, price: 199.99, stocked: true, name: "iPad Pro" },
    { id: uuid(), categoryId: 1, price: 49.99, stocked: true, name: "Football 2" },
    { id: uuid(), categoryId: 4, price: 199.99, stocked: true, name: "Bag" },
    { id: uuid(), categoryId: 1, price: 49.99, stocked: false, name: "Football 3" },
    { id: uuid(), categoryId: 2, price: 199.99, stocked: true, name: "iPhone 7" },
    { id: uuid(), categoryId: 4, price: 199.99, stocked: false, name: "Belt" },
    { id: uuid(), categoryId: 2, price: 199.99, stocked: false, name: "iPod" },
    { id: uuid(), categoryId: 3, price: 199.99, stocked: true, name: "Thong" },
    { id: uuid(), categoryId: 3, price: 199.99, stocked: true, name: "Thong" },
    { id: uuid(), categoryId: 3, price: 199.99, stocked: false, name: "Thong" },
    { id: uuid(), categoryId: 4, price: 199.99, stocked: true, name: "Shoe" },
  ]
});