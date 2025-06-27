import { useState } from "react"

function ProductItem(props) {
    const [counter, setCounter] = useState(0);
    const {product} = props;

  return (
    <div>
      <div className='flex flex-col justify-center items-center w-90 m-3 border-1 
                border-indigo-500/50 rounded-2xl hover:shadow-xl' key={product.id}>
                <img className='size-60' src={product.image}/>
                <div className='text-center'>
                  <h1 className='font-light mt-2'>{product.title}</h1>
                  <b><h2 className='mt-4 mb-2'>${product.price}</h2></b>
                 {counter===0 ? <button onClick={()=>setCounter(counter+1)} className='bg-blue-500 text-white border- p-2 mb-1 rounded-md'>
                    Add to Cart
                  </button> : 
                    <div>
                        <button onClick={()=>setCounter(counter+1)} className='bg-blue-500 text-white border- p-2 mb-1 rounded-md'>+</button>
                        <span>{counter}</span>
                         <button onClick={()=>setCounter(counter-1)} className='bg-blue-500 text-white border- p-2 mb-1 rounded-md' >-</button>
                    </div>}
                </div>
              </div>
    </div>
  )
}

export default ProductItem
