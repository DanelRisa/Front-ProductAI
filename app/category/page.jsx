"use client";
import { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '@/components/Sidebar';
import ProductCard from '@/components/ProductCard';
import Loading from '@/components/Loading';
import MenuIcon from '@/components/MenuIcon';


const CategoryPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingProducts, setLoadingProducts] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [selectedSupermarket, setSelectedSupermarket] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc"); // "asc" for ascending, "desc" for descending
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(true);
    console.log(isSidebarOpen);
  };

  const handleSort = () => {
    const sorted = selectedSupermarket
      ? [...filteredProducts]
      : [...selectedProduct];

    sorted.sort((a, b) => {
      // Assuming the price is in string format, convert it to numbers for comparison
      const priceA = parseFloat(a.price.replace(/\D/g, ""));
      const priceB = parseFloat(b.price.replace(/\D/g, ""));

      if (sortOrder === "asc") {
        return priceA - priceB;
      } else {
        return priceB - priceA;
      }
    });

    if (selectedSupermarket) {
      setFilteredProducts(sorted);
    } else {
      setSelectedProduct(sorted);
    }

    // Toggle the sorting order on each click
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };



  const handleSupermarketFilter = (supermarketName) => {
    if (supermarketName === selectedSupermarket) {
      setSelectedSupermarket(null);
      setFilteredProducts([]);
    } else {
      const filtered = selectedProduct.filter((product) => product.supermarket === supermarketName);
      setSelectedSupermarket(supermarketName);
      setFilteredProducts(filtered);
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const urlSearchParams = new URLSearchParams(window.location.search);
        const name = urlSearchParams.get('name');
        let body = new Object();
        body.name = name;
        console.log(JSON.stringify(body));
        const response = await axios.post('https://fastapi-z5dp.onrender.com/posts/ingredients/', body);
        console.log(response.data)
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleProductClick = async (productName) => {
    try {
      setLoadingProducts(true);
      const response = await axios.post('https://fastapi-z5dp.onrender.com/posts/products/find', {
        product_name: productName,
      });
      // console.log(response.data)
      setSelectedProduct(response.data);
    } catch (error) {
      console.error("Error fetching product details:", error);
      setSelectedProduct([]);
    } finally {
      setLoadingProducts(false);
    }
  };

  if (loading) return <Loading></Loading>

  return (
    <div className="max-w-[1440px] mx-auto flex sm:flex-row justify-center">
      <div className="">
        <Sidebar products={products} onProductClick={handleProductClick} isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      </div>
      <div className="w-full px-5">
        <div className="flex flex-colflex flex-col sm:flex-row items-center justify-center ">
          <div className="flex sm:flex-row">

            <button onClick={toggleSidebar} className={` lg:hidden ${isSidebarOpen ? 'hidden' : 'block'} `}><MenuIcon /></button>


            <button onClick={handleSort} className="p-2 ml-4 bg-blue-500 text-white sm:ml-2 rounded-md border">
              Цены {sortOrder === "asc" ? "дороже" : "дешевле"}
            </button>

            <button
              className={`px-4 ml-4 py-2 sm:mt-0 sm:ml-2 rounded-md border ${selectedSupermarket === "Arbuz" ? "bg-green-500 text-white" : "bg-white text-blue-500"
                }`}
              onClick={() => handleSupermarketFilter("Arbuz")}
            >
              Arbuz
            </button>
            <button
              className={`px-4 ml-4 py-2 sm:mt-0 sm:ml-2 rounded-md border ${selectedSupermarket === "Galmart" ? "bg-green-500 text-white" : "bg-white text-blue-500"
                }`}
              onClick={() => handleSupermarketFilter("Galmart")}
            >
              Galmart
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-10">

          {loadingProducts ? (
            <Loading />
          ) : (
            (selectedSupermarket ? filteredProducts : selectedProduct).map((product, index) => (
              <ProductCard
                key={index}
                title={product.title}
                price={product.price}
                image={product.image_url}
                product_url={product.product_url}
                _id={product._id}
                showButton={true}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
