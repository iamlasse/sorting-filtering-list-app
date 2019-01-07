import { fromJS } from "immutable";
import uuid from "uuid";

export const productsReducer = (inventory, action) => {
  let index
  switch (action.type) {
    case 'undelete_product':
      index = inventory.get('items').findIndex(product => product.get('id') === action.payload.id)
      return inventory.setIn(['items', index, 'deleted'], false)
    case 'update_product':
      index = inventory.get('items').findIndex(product => product.get('id') === action.payload.id)
      const field = action.payload.field
      const value = action.payload.value
      return inventory = inventory.setIn(['items', index, field], value)
    case 'update_stock':
      index = inventory.get('items').findIndex(product => product.get('id') === action.payload.id)
      // inventory.setIn(['items', index, 'stocked'], true)
      return inventory = inventory.setIn(['items', index, 'stocked'], action.payload.stocked)
    case 'add_product':
      return inventory.set('items', inventory.get('items').push(fromJS({ ...action.payload.product, id: uuid() })))
    case 'remove_product':
      index = inventory.get('items').findIndex(product => product.get('id') === action.payload.id)
      return inventory.setIn(['items', index, 'deleted'], true)
    default:
      return inventory
  }
}

export const getFilteredProducts = (products, filterQuery, inStock, showDeleted, column, direction) => {

  let items = products.filter(item => {
    if (filterQuery !== '') return item.get('name').match(new RegExp(filterQuery, 'ig'))
    return item

  }).filter(item => {
    if (inStock) return item.get('stocked') === true
    return item
  }).filter(item => {
    if (showDeleted) return item
    return !item.get('deleted')
  })

  if (column || direction) {
    const sortColumn = column || null
    const sortDirection = direction || 'ascending'
    items = sortColumn ? items.sortBy((f) => f.get(sortColumn)) : items.sortBy((f) => f.get('categoryId'))
    if (sortColumn === 'name') {
      items = items.sort((a, b) => a.get('name').toLowerCase().localeCompare(b.get('name').toLowerCase()))
    }

    return sortDirection === 'descending' ? items : items.reverse()
  }

  return items
}

// Calculate total from products
export const getTotalPrice = inventory => {
  let totalPrice = 0
  totalPrice = inventory.reduce((acc, product) => {
    // Don't include products that are deleted (soft)
    if (product.get('deleted')) return acc
    return acc += product.get('price')
  }, 0)

  return totalPrice
}
