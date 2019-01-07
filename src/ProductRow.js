import React, { Fragment } from 'react';
import { Table, Button, Icon, Popup } from "semantic-ui-react";
import UpdateProductForm from './UpdateProductForm';

export const ProductRow = ({ product, dispatch }) => {
  return (
    <Table.Row textAlign='center' >
      <Table.Cell textAlign='left' disabled={product.deleted} width={9}>
        <UpdateProductForm field='name' product={product} onSubmit={dispatch} position={'top left'} trigger={<Fragment>{product.name}</Fragment>} />
      </Table.Cell>
      <Table.Cell collapsing disabled={product.deleted} width={4}>
        <UpdateProductForm field='price' product={product} onSubmit={dispatch} position={'top center'} trigger={<Button basic content={`$ ${product.price}`} />} />
      </Table.Cell>
      <Table.Cell disabled={product.deleted} collapsing positive={product.stocked} negative={!product.stocked} onClick={() => dispatch({ type: 'update_stock', payload: { id: product.id, stocked: !product.stocked } })}>
        {product.stocked ? <Icon name='checkmark' /> : <Icon name='close' />}
        {product.stocked ? 'In Stock' : 'Out of Stock'}
      </Table.Cell>
      <Table.Cell collapsing>
        {!product.deleted && <Popup
          trigger={<Button size='mini' color="red" icon onClick={() => dispatch({ type: 'remove_product', payload: { id: product.id } })}>
            <Icon name='trash' />
          </Button>}
          position='top center'
          content={`Delete Product`}
        />}
        {product.deleted && <Popup
          trigger={<Button size='mini' color="orange" icon onClick={() => dispatch({ type: 'undelete_product', payload: { id: product.id } })}>
            <Icon name='undo' />
          </Button>}
          position='top center'
          content={`Restore Product`}
        />}
      </Table.Cell>
    </Table.Row>
  );
}