import { useEffect, useState, useContext } from 'react'
import ProductList from './ProductList';
import Categories from './Categories';
import basicOps from '../utility/basicOps';
import { Link } from 'react-router-dom';
import { PageContainer } from '../context/PageContextProvider';
import { useDarkMode } from '../context/DarkModeContextProvider';
import LightIcon from '../assets/icons/LightIcon';
import DarkIcon from '../assets/icons/DarkIcon';


function Home() {
    
    const [products, setProducts] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortDir, setSortDir] = useState(0);
    const [categories, setCategories] = useState(null);
    const [currCategory, setCurrCategory] = useState("All categories");
    const {pageNum, pageSize, setPageNum} = useContext(PageContainer);
    const {darkMode, toggleDarkMode} = useDarkMode();
    
 
    function handleInput(event) {
      setSearchTerm(event.target.value);
      setPageNum(1);
    }

    function fetchDetails(){
      async function fn(){
        const res = await fetch("https://fakestoreapi.in/api/products");
        const productsData = await res.json();
        setProducts(productsData.products);
      }
      fn();
    }

    function fetchCategoryDetails(){
      async function fn(){
        const res = await fetch("https://fakestoreapi.in/api/products/category");
        const categoriesData = await res.json();
        setCategories(categoriesData.categories);
      }
      fn();
    }

    useEffect(fetchDetails,[]);

    useEffect(fetchCategoryDetails, []);

    let objects = basicOps(products, searchTerm, sortDir, currCategory, pageNum, pageSize);
    if (objects == undefined) {
      return;
    }
    let filteredSortedGroupByArr = objects.filteredSortedGroupByArr;
    let totalPages = objects.totalPages;
    
    
  return ( 
    <div>
      <header className='flex justify-center items-center w-full h-12 bg-gray-300'>
        <input 
          type='text' 
          className='border-1 rounded-lg w-80 h-8 bg-[#a78bfa] border-indigo-500/50' 
          value={searchTerm}
          placeholder='Search Elements'
          onChange={handleInput}
        />
        <div className='flex'>
          <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>setSortDir(1)} viewBox="0 0 24 24" fill="currentColor" className="size-8 bg-white rounded-lg ml-2 mr-2">
            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm.53 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v5.69a.75.75 0 0 0 1.5 0v-5.69l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z" clipRule="evenodd" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>setSortDir(-1)} viewBox="0 0 24 24" fill="currentColor" className="size-8 bg-white rounded-lg ml-2 mr-2">
            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-.53 14.03a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V8.25a.75.75 0 0 0-1.5 0v5.69l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3Z" clipRule="evenodd" />
          </svg>
        </div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
        </div>
        <div className='flex ml-4'>
          {darkMode ? <button onClick={toggleDarkMode}><LightIcon /></button> : 
                      <button onClick={toggleDarkMode}><DarkIcon /></button>}
        </div>
      </header>

      <div className='bg-gray-500 h-10'>
        <Categories categories={categories} setCurrCategory={setCurrCategory} />
      </div>

      <div className={darkMode ? 'dark' : '' }>
        <main className='flex justify-center min-w-60 bg-white text-black dark:bg-gray-900 dark:text-white'>
          <div className='flex flex-col'>
            <ProductList filteredSortedGroupByArr={filteredSortedGroupByArr} />
            <div className='flex justify-center'>
              <svg xmlns="http://www.w3.org/2000/svg" onClick={() => {
              if(pageNum > 1) {
                setPageNum(pageNum - 1);
              }
              }} viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z" clipRule="evenodd" />
                </svg>
              <div>{pageNum}</div>
              <svg xmlns="http://www.w3.org/2000/svg" onClick={() => {
                if(pageNum < totalPages) {
                  setPageNum(pageNum + 1);
                }
                }} viewBox="0 0 24 24" fill="currentColor" className="size-6">
                  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z" clipRule="evenodd" />
                </svg>
            </div>
          </div>                
        </main>
      </div>
      
    </div>
  )
}

export default Home
