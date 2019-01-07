
import React, { Fragment } from 'react';
import { Input, Checkbox } from "semantic-ui-react";
export const SearchBar = ({ onSearch, onCheck, onDeleted, filterText, inStockOnly, showDeleted, inputRef }) => {
  // throw new Error('crashed')

  return (<Fragment>
    <Input icon='search' placeholder='Filter...' size='mini' ref={inputRef} value={filterText} onChange={onSearch} />
    <span className="check-box" style={{ paddingLeft: 10, }}>
      <Checkbox type="checkbox" checked={inStockOnly} onChange={onCheck} id="checkInStock" label="Show only in stock" />
    </span>
    <span className="check-box" style={{ paddingLeft: 10, }}>
      <Checkbox type="checkbox" checked={showDeleted} onChange={onDeleted} id="checkDeleted" label="Show Deleted" />
    </span>
  </Fragment>);
};
