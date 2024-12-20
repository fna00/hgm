/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import Carousel from "@/components/CarouselProps";
import { Sidebar } from "@/components/SideBar/SideBar";
import  Card  from "@/components/Card/Card";;
import Popup from "@/components/Popup/Popup";

import slide1 from '../../../assets/slide1.jpg';
import slide2 from '../../../assets/slide2.jpg';
import slide3 from '../../../assets/slide3.jpg';

import {RootState} from '@/app/store/store';
// import { toggleOpening } from "@/app/store/openingSlice";
import SearchBar from '@/components/SearchBar/SearchBar';
// import Image from "next/image";
import { PulseLoader } from "react-spinners";
import {Pagination} from "@nextui-org/pagination";


interface ProductTypes {
  id: number;
  productId: number;
  productTypeId: number;
  productName: string;
  productTypeText: string;
  productTypeValue: string;
}

interface ProductAttributes {
  id: number;
  name: string;
  value: string;
  productId: number;
  productName: string;
}

interface Product {
  id: number;
  name: string;
  package: number;
  box: number;
  isActive: boolean;
  ourSelected: boolean;
  image: string;
  subCategoryId: number;
  subCategoryName: string;
  brandId: number;
  brandName: string;
  productTypes: ProductTypes[]; 
  productAttributes: ProductAttributes[];  
}

interface SubCategory {
  id: number;
  name: string;
  description: string;
  image: string;
  categoryId: number;
  categoryName: string;
}

interface ProductResponse {
  pageNumber: number,
  pageSize: number,
  totalPages: number,
  totalRecords: number,
  data: Product[],
  message: string,
  isSuccess: boolean
}

function ProductPage() {

  const images = [slide1, slide2, slide3];

  const [products , setProducts] = useState<Product[]>([]); 

  const [subcategories, setSubCategories] = useState<SubCategory>();

  const [currentPage, setCurrentPage] = useState<number>(1);

  const [pageSize, setPageSize] = useState<number>(1)

  const [productResponse, setProductResponse] = useState<ProductResponse>()

  const [searchQuery, setSearchQuery] = useState("")

  /* const [searchResult, setSearchResults] = useState<Product[]>([]) */

/*   const [dataToMap, setDataToMap] = useState<Product[]>([]) */

  const [loading, setLoading] = useState(false);

  const {selectedSubCategoryId} = useSelector((state) => (state as any).filter)
  
  const {selectedProductId} = useSelector((state) => (state as any).filter )

/*   const apiUrl = selectedSubCategoryId ? ("Product/gets/subcategoryId?id=" + selectedSubCategoryId) : "Product/gets/selected" */

 /*  const dispatch = useDispatch(); */

  const isOpen = useSelector((state: RootState) => state.opening.isOpen); 

/*   const toggleSidebar = () => {
    dispatch(toggleOpening()); 
  };

  console.log("isOpen",isOpen)
  console.log("toggleSidebar",toggleSidebar) */
  
  
  

  // SUBCATEGORY
  useEffect(() => {
    if (selectedSubCategoryId === null) return;
    setLoading(true);
    axios.get(`http://localhost:5082/api/SubCategory/get/id?id=${selectedSubCategoryId}`)
      .then((response) => {
        setSubCategories(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false); 
      });
  }, [selectedSubCategoryId]);

 


//PRODUCT
/* useEffect(() => {
  setLoading(true); // Loading başlat
  axios.get("http://localhost:5082/api/" + apiUrl)
    .then((response) => {
      setProducts(response.data.data);
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      setLoading(false); // Loading bitir
    });
}, [apiUrl]); */

  // const handleSearch = async () => {
  //   setLoading(true); 
  //   try {
  //     const response = await axios.post("http://localhost:5082/api/Product/post/ByFilterAnd", {
  //       name: searchQuery,
  //       subCategoryId:selectedSubCategoryId
  //     });
  //     if (response.data.isSuccess) {
  //       if (response.data.data.length > 0) {
  //         setSearchResults(response.data.data);
  //       }
  //     }
  //   } catch (error: unknown) {
  //     if (axios.isAxiosError(error)) {
  //       console.log("Error Response:", error.response);
  //       console.log("Error Message:", error.message);
  //     } else {
  //       console.log("Non-Axios error:", error);
  //     }
  //   } finally {
  //     setLoading(false); 
  //   }
  // };


/*   const handlePageChange = (page: number) => {
      setCurrentPage(page);
  }

  const handlePageSize = (pageSize: number) => {
    setPageSize(pageSize);
  } */


  useEffect(() => {
    const fetchData = async () => {
      if (searchQuery.trim() !== "" || selectedSubCategoryId) {
        setLoading(true); 
        try {
          const response = await axios.post("http://localhost:5082/api/Product/PostAllWithPaginaiton", {
            name: searchQuery,
            subCategoryId: selectedSubCategoryId,
            page: currentPage,
            pageSize: pageSize
          });
          if (response.data.isSuccess) {
            setProductResponse(response.data)
            if (response.data.data.length > 0) {
              setProducts(response.data.data);
            } else {
              setProducts([]);
            }
          }
        } catch (error: unknown) {
          if (axios.isAxiosError(error)) {
            console.log("Error Response:", error.response);
            console.log("Error Message:", error.message);
          } else {
            console.log("Non-Axios error:", error);
          }
        } finally {
          setLoading(false); 
        }
      }
    };
  
    fetchData();
  }, [searchQuery, selectedSubCategoryId, currentPage, pageSize]);
  

/*  useEffect(()=> {
  if(products.length >0) {
    setDataToMap(products)
  } else {
    setDataToMap(products)
  }
  console.log( "search result: ", products)
 }, [products])
 */

  return (
  <div className="flex flex-col md:flex-row max-w-full mx-auto bg-white shadow-md overflow-hidden">
    <Sidebar />
    <div
      className={`content-center p-4 flex flex-col space-y-8 py-8 bg-slate-400 ${
        isOpen ? "md:w-[100%]" : "md:w-full"
      }`}
    >
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <PulseLoader color="#e21717" size={12} speedMultiplier={1.5} />
        </div>
      ) : (
        <>
          <div className=" flex flex-col h-48 rounded-lg flex justify-center items-center py-36">
            <SearchBar
              onSearch={() => {}}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
            <Carousel images={images} />
          </div>
          <div>
            <p>{subcategories?.name}</p>
            <span className="pt-2">{subcategories?.description}</span> 
          </div>
          <div>
            {selectedProductId && <Popup />}
          </div>
          <div
            className={`grid grid-cols-4 gap-8 ${
              isOpen ? "grid-cols-5" : "grid-cols-4"
            }`}
          >
            {Array.isArray(products) &&
              products.map((item, i) => (
                <div key={i} className="">
                  <Card
                    name={item.name}
                    id={item.id}
                    isActive={item.isActive}
                    ourSelected={item.ourSelected}
                    productAttributes={item.productAttributes}
                    image={item.image}
                    brandName={item.brandName}
                    productTypes={item.productTypes}
                  />
                </div>
              ))}
          </div>
        </>
      )}
         <Pagination
        loop
        total={productResponse?.totalPages ?? 1}
        initialPage={1}
        page={currentPage}
        onChange={setCurrentPage}
        showControls
        size={"sm"}
        variant={"light"}
        classNames={{
          base: "flex justify-center mt-4",
          item: "w-10 h-10 flex items-center justify-center rounded-full text-gray-700 hover:bg-red-700",
          cursor: "w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-red-300",
          chevronNext: "",
          prev: "w-10 h-10 flex items-center justify-center rounded-full",
          next: "w-10 h-10 flex items-center justify-center rounded-full",
        }}
      />

    </div>
  </div>
);

}

export default ProductPage;