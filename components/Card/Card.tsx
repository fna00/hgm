/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { setProductId } from "@/app/store/filterSlice";
import Image from "next/image";
import { useDispatch } from "react-redux";

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

  const Card: React.FC<Product> = (props) => {
    const dispatch = useDispatch();



    return (
      
<div className="w-60 h-96 text-black bg-gray-100 hover:bg-gray-300 rounded-lg shadow-lg p-2">
  <button onClick={() => dispatch(setProductId(props.id as any))}>

        <Image
          width={300}
          height={200}
          alt="image"
          src={props.image || "https://via.placeholder.com/300x200"}
          className="w-[300px] h-[200px]  hover:shadow-xl transition-all"
        />
        <div>
          <div className="text-2xl border-b border-neutral-400">{props.name}</div>
          {/* {props.isActive !== undefined && <div className="border-b border-neutral-400">Satış Durumu: {props.isActive ? "Aktif" : "Pasif"}</div>} */}
          <div className="border-b border-neutral-400">Satış Durumu: {props.isActive ? "Aktif" : "Pasif"}</div>
          <div className="border-b border-neutral-400">Seçtiklerimiz: {props.ourSelected ? "Aktif" : "Pasif"}</div>
          {props.brandName !== "Null" && 
            <div className="mt-2">
              <ul className="list-disc pl-5">
                <li>
                  Marka:{props.brandName}
                </li> 
              </ul>
            </div>
          }
          {props.productTypes && props.productTypes.length > 0 && (
            <div className="mt-2">
              <ul className="list-disc pl-5">
                {props.productTypes.map((data) => (
                  <li key={data.id}>
                    Ürün: {data.productTypeText}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {props.productAttributes && props.productAttributes.length > 0 && (
            <div className={`mt-2  text-${props.isActive ? "xl" : "sm"}`}>
              <ul className="list-disc pl-5">
                {props.productAttributes.map((data) => (
                  <li key={data.id}>
                    {data.name}: {data.value}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
  </button>

      </div>
     
      
    );
  };
  
  export default Card;
