'use client';
import { setProductId } from '@/app/store/filterSlice';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios";
import Image from "next/image";

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
    id?: number;
    name?: string;
    package?: number;
    box?: number;
    isActive?: boolean;
    ourSelected?: boolean;
    image?: string;
    subCategoryId?: number;
    subCategoryName?: string;
    brandId?: number;
    brandName?: string;
    productTypes?: ProductTypes[];
    productAttributes?: ProductAttributes[];
  }
const Popup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const dispatch = useDispatch();
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const {selectedProductId} = useSelector((state) => (state as any).filter )

  const [productData, setProductData] = useState<Product>({});

  useEffect(() => {
    axios.get(`http://localhost:5082/api/Product/get/id?id=${selectedProductId}`)
      .then((res) => {
        setProductData(res.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [selectedProductId]);

  return (
    <div className="flex flex-col items-center justify-center  bg-gray-100">
      {/* <button
        onClick={togglePopup}
        className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Open Popup
      </button> */}

      {selectedProductId && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={togglePopup}
        >
          <div
            className="flex flex-col bg-white rounded-lg shadow-lg p-6 w-96 relative"
            onClick={(e) => e.stopPropagation()} 
          >
            <button
              onClick={() => dispatch(setProductId(null))}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
            >
              X
            </button>

             {productData ? (
              <div>
                <Image
                    width={300}
                    height={200}
                    alt="image"
                    src={productData.image || "https://via.placeholder.com/300x200"}
                    className="w-[300px] h-[200px] border-8 border-gray-100 hover:shadow-xl transition-all"
                />
                <p className="text-gray-700 mb-2">Ad: {productData.name}</p>
                <p className="text-gray-700 mb-2">Paket: {productData.package}</p>
                <p className="text-gray-700 mb-2">Kutu: {productData.box}</p>
                <p className="text-gray-700 mb-2">
                  Durum: {productData.isActive ? 'Aktif' : 'Pasif'}
                </p>
              </div>
            ) : (
              <p>Ürün bilgisi yükleniyor...</p>
            )}
            {/* <button
              onClick={() => dispatch(setProductId(null))}
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Close Popup
            </button> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
