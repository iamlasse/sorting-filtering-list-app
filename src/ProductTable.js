import React, { Fragment } from 'react'
import TransitionGroup from 'react-transition-group/TransitionGroup';
import CSSTransition from 'react-transition-group/CSSTransition'
import './productTable.css'
import { ProductRow } from './ProductRow';
import { ProductCategoryRow } from './ProductCategoryRow';
import { Table, Label } from "semantic-ui-react";

const ProductTable = ({ categories, showCategoryHeader, products, dispatch }) => {
  const getColor = categoryId => {
    switch (categoryId) {
      case 1:
        return 'purple'
      case 2:
        return 'red'
      case 3:
        return 'blue'
      default:
        return 'violet'
    }
  }

  let lastCategory = null
  let lastIndex = 0
  let showHeader = null

  return (
    <Fragment>
      <TransitionGroup component={null}>
        {products.map((item, i) => {
          const category = categories.find(ctg => ctg.id === item.categoryId)
          if (item.categoryId !== lastCategory && lastIndex <= i) {
            lastCategory = item.categoryId
            lastIndex = i
            showHeader = true
          } else {
            showHeader = false
          }
          return (
            <CSSTransition
              mountOnEnter
              unmountOnExit
              onEnter={() => console.log('ENTER')}
              onEntering={() => console.log('ENTERING')}
              onEntered={() => console.log('ENTERED')}
              onExit={() => console.log('EXIT')}
              onExiting={() => console.log('EXITING')}
              onExited={() => console.log('EXITED')}
              timeout={300} classNames={{
                enterActive: 'fadeIn',
                exitActive: 'fadeOut'
              }}
              key={item.id}>
              <Fragment key={item.id}>
                {showHeader && showCategoryHeader ? <Table.Row key={item.categoryId} >
                  <Table.Cell verticalAlign='middle' colSpan={4} width={16}>
                    <Label color={getColor(item.categoryId)} ribbon><ProductCategoryRow category={category.name} /></Label>
                  </Table.Cell>
                </Table.Row> : null}
                <ProductRow product={item} dispatch={dispatch} />
              </Fragment>
            </CSSTransition>
          )
        })}
      </TransitionGroup>
    </Fragment>
  );
}

ProductTable.defaultProps = {
  showCategoryHeader: true
}

export default ProductTable