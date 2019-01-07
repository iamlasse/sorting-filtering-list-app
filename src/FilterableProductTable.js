import React, { useState, useEffect, useReducer, useRef, useMemo } from 'react';
import { Table, Container, Modal, Button, Icon } from "semantic-ui-react";
import { SearchBar } from './SearchBar';
import ProductTable from './ProductTable';
import { inventory } from './data'
import AddProductForm from './AddProductForm';
import { getFilteredProducts, getTotalPrice, productsReducer } from './helpers';

const FilterableProductTable = () => {
  // State, Reducer and Ref hooks
  const inputElement = useRef(null);
  const [filterQuery, setFilter] = useState('')
  const [orderBy, setOrderBy] = useState(null)
  const [orderDirection, setOrderDirection] = useState('ascending')
  const [showInstockOnly, setInStock] = useState(false)
  const [showDeleted, setShowDeleted] = useState(false)
  const [openModal, setModalOpen] = useState(false)
  const [inventoryState, dispatch] = useReducer(productsReducer, inventory)

  // state methods
  const onSearch = e => setFilter(e.target.value);
  const onCheck = () => setInStock(!showInstockOnly);
  const onDeleted = () => setShowDeleted(!showDeleted);
  const onSetOrderBy = (currentColumn, clickedColumn, currentDirection) => {
    const direction = currentDirection === 'ascending' ? 'descending' : 'ascending'
    if (currentColumn !== clickedColumn) {
      setOrderBy(clickedColumn)
    }
    setOrderDirection(direction)
  }
  const onAddProduct = product => {
    dispatch({
      type: 'add_product', payload: {
        category: { id: product.category },
        product: { ...product, name: product.name.replace(/\b\w/g, l => l.toUpperCase()), categoryId: product.category }
      }
    })
    setModalOpen(false)
  }

  // local Collections
  const filteredProducts = getFilteredProducts(inventoryState.get('items'), filterQuery, showInstockOnly, showDeleted, orderBy, orderDirection)
  const categories = inventoryState.get('categories')

  // Memoized components
  const memoSearch = useMemo(() =>
    <SearchBar onSearch={onSearch} onDeleted={onDeleted} showDeleted={showDeleted} onCheck={onCheck} filterText={filterQuery} inStockOnly={showInstockOnly} inputRef={inputElement} />,
    [onSearch, onCheck, onDeleted, filterQuery, showInstockOnly, showDeleted, inputElement]
  )
  const memoProducts = useMemo(() =>
    <ProductTable products={filteredProducts.toJS()} categories={categories.toJS()} dispatch={dispatch} />, [
      filteredProducts, categories, dispatch
    ])

  // Lifecycle Hook
  useEffect(() => {
    if (inputElement.current) {
      // inputElement.current.focus();
    }
  }, [])

  return (
    <Container style={{ paddingTop: 20, }}>
      <Table>
        <Table.Header>
          <Table.Row active={false}>
            <Table.HeaderCell textAlign='left' colSpan={3}>
              {memoSearch}

            </Table.HeaderCell>
            <Table.HeaderCell textAlign='right'>
              <Modal
                centered={false}
                dimmer
                size='small'
                closeIcon={<div style={{ position: 'absolute', right: 0, top: 8, textAlign: 'right', padding: 15, cursor: 'pointer' }}><Icon name='close' /></div>}
                closeOnDimmerClick
                onClose={() => setModalOpen(false)}
                open={openModal}
                trigger={<Button onClick={() => setModalOpen(true)} color='purple'>Add A Product</Button>}
              >
                <Modal.Header>Add Product</Modal.Header>
                <Modal.Content >
                  <AddProductForm onSubmit={onAddProduct} categories={categories.toJS()} />

                </Modal.Content>
              </Modal>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
      </Table>
      <Table celled padded sortable stackable structured striped size='small' singleLine>
        <Table.Header>
          <Table.Row textAlign='center'>
            <Table.HeaderCell textAlign='left' sorted={orderBy === 'name' ? orderDirection : null} onClick={() => onSetOrderBy(orderBy, 'name', orderDirection)}>Product</Table.HeaderCell>
            <Table.HeaderCell sorted={orderBy === 'price' ? orderDirection : null} onClick={() => onSetOrderBy(orderBy, 'price', orderDirection)}>Price</Table.HeaderCell>
            <Table.HeaderCell sorted={orderBy === 'stocked' ? orderDirection : null} onClick={() => onSetOrderBy(orderBy, 'stocked', orderDirection)}>In Stock</Table.HeaderCell>
            <Table.HeaderCell>Action</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {memoProducts}
        </Table.Body>
        <Table.Footer>
          <Table.Row textAlign='center'>
            <Table.HeaderCell />
            <Table.HeaderCell>
              <strong>$ {getTotalPrice(filteredProducts).toFixed(2)}</strong>
            </Table.HeaderCell>
            <Table.HeaderCell colSpan={2} >
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </Container>
  );
}

export default FilterableProductTable