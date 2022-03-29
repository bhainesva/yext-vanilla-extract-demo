import React, { useState } from 'react';
import { Button } from '../my-library';
import { button } from '../design-system/cobalt.css';
import { input, form } from './searchForm.css';

interface IProps {
  onChange: any
}

const SearchForm: React.FC<IProps> = ({
  onChange
}) => {

  return (
    <form onSubmit={onChange} className={form}>
      <input
        className={input}
        type="text"
        onChange={onChange}
        name="query"
      />
      <Button className={button({
        color: 'light',
        size: 'full',
      })}>
        Search
      </Button>
    </form>
  )
}

export default SearchForm;