import Loader from './Loader';
import ProductItem from './ProductItem';
// import { useState } from 'react';

function ProductList(props) {

  // const [count, setCount] = useState(0);

  const {filteredSortedGroupByArr} = props;

  // function handleCount() {

  // }
  
  return (
    <div>
      {filteredSortedGroupByArr == null ? <div className='flex items-center'><Loader /></div> : 
        <div className='flex flex-wrap justify-center'>
          {filteredSortedGroupByArr.map((product)=>{
            return (
              <ProductItem product={product}/>
              )
          })}
        </div>}
    </div>
  )
}

export default ProductList
