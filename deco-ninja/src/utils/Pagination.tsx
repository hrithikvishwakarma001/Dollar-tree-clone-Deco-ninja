import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import { Button, ButtonGroup, Select, useColorModeValue } from '@chakra-ui/react';
import React from 'react'

const Pagination = ({ total,page,setLimit,setPage }:{total:number|string,page:string|number,setPage:any,setLimit:any}) => {
  const bgColor = useColorModeValue('gray.100', 'root.blueGray');
  return (
    <ButtonGroup>
      <Button
       bg={bgColor}
        isDisabled={page === 1}
        data-cy='pagination-first-button'
        onClick={() => setPage(1)}>
        First
      </Button>
      <Button
        bg={bgColor}
        isDisabled={page === 1}
        data-cy='pagination-previous-button'
        onClick={() => setPage(Number(page) - 1)}>
        <ArrowLeftIcon />
      </Button>
      <Select
        bg={bgColor}
        data-cy='pagination-limit-select'
        onChange={(e) => setLimit(e.target.value)}>
        <option data-cy='pagination-limit-3'
         style={{
         backgroundColor:`{bgColor}`
        }}
        >Set Limit</option>
        <option data-cy='pagination-limit-3'
         style={{
         backgroundColor:`{bgColor}`
        }}
        >3</option>
        <option data-cy='pagination-limit-6'
         style={{
         backgroundColor:`{bgColor}`
        }}
        >6</option>
        <option data-cy='pagination-limit-9'
         style={{
         backgroundColor:`{bgColor}`
        }}
        >9</option>
        <option data-cy='pagination-limit-9'
         style={{
         backgroundColor:`{bgColor}`
        }}
        >12</option>
        <option data-cy='pagination-limit-9'
         style={{
         backgroundColor:`{bgColor}`
        }}
        >15</option>
        <option data-cy='pagination-limit-9'
         style={{
         backgroundColor:`{bgColor}`
        }}
        >18</option>
      </Select>
      <Button
        bg={bgColor}
        isDisabled={page === total}
        data-cy='pagination-next-button'
        onClick={() => setPage(Number(page) + 1)}>
        <ArrowRightIcon />
      </Button>
      <Button
        bg={bgColor}
        isDisabled={page === total}
        data-cy='pagination-last-button'
        onClick={() => setPage(total)}>
        Last
      </Button>
    </ButtonGroup>
  );
}

export default Pagination