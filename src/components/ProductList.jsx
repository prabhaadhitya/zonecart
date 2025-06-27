import Loader from './Loader';
import ProductItem from './ProductItem';

function ProductList(props) {

  const {filteredSortedGroupByArr} = props;
  
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
