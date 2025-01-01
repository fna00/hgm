"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector} from "react-redux"; 
import axios from "axios";
import {RootState} from '@/app/store/store'

import { toggleOpening } from "@/app/store/openingSlice";

import { setSubCategoryId } from "@/app/store/filterSlice";

import Image from "next/image";

interface SubCategory {
  id: number;
  name: string;
  description: string;
  image: string;
  categoryId: number;
  categoryName: string;
}

interface Category {
  id: number;
  name: string;
  subCategories: SubCategory[];
}

export function Sidebar() {
  const [categories, setCategories] = useState<Category[]>([]);

  const dispatch = useDispatch();

  const isOpen = useSelector((state: RootState) => state.opening.isOpen); 
  const selectedSubCategoryId = useSelector((state: RootState) => state.filter.selectedSubCategoryId);

  const toggleSidebar = () => {
    dispatch(toggleOpening()); 
  };

  useEffect(() => {
    axios.get("http://localhost:5082/api/Category/gets/cat?sortBy=Name")
      .then((response) => {
        setCategories(response.data.data)
      })
      .catch((error) => {
              console.error(error);
            });
  }, []);

  const handleSubCategorySelect = (subCategoryId: number) => {
    dispatch(setSubCategoryId(subCategoryId));
  };
  
  return (
    <div className={`min-h-max bg-gray-700 text-white `}
      style={{
        width: isOpen ? "30px" : "256px",
        transition: "width 0.3s ease"
      }}
    >
      <div 
        style={{
          translate: isOpen ? "-220px" :"0px" 
        }}
      >
      <div className="p-4 text-lg font-bold whitespace-nowrap flex items-center gap-6">
        <p>Ürün Kategorileri</p>
        <Image
          src={isOpen ? "/8213451.png" : "/8213439.png" }
          alt="image" 
          width={20} 
          height={20} 
          className={`cursor-pointer transform transition-transform duration-300`}
          onClick={toggleSidebar}
        />
      </div> 
      <nav className="flex flex-col space-y-2 p-4">
        {categories.length > 0 ? (
          categories.map((category) => (
            <details key={category.id} className="group">
              <summary className="flex items-center justify-between gap-2 rounded-md p-2 hover:bg-gray-700">
                <span className="flex items-center gap-2 whitespace-nowrap">
                  <span>•</span>
                  {category.name}
                </span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              {category.subCategories.length > 0 && (
                <div className="mt-2 space-y-1 pl-4">
                  {category.subCategories.map((subCategory) => (
                    <a
                      key={subCategory.id}
                      href="#"
                      onClick={() => handleSubCategorySelect(subCategory.id)} 
                      className={`block rounded-md p-2 hover:bg-gray-700 whitespace-nowrap ${
                        selectedSubCategoryId === subCategory.id
                          ? "bg-gray-900  text-red-400"
                          : ""
                      }`}
                    >
                      {subCategory.name}
                    </a>
                  ))}
                </div>
              )}
            </details>
          ))
        ) : (
          <div className="text-gray-400">Kategoriler yüklenemedi veya bulunamadı.</div>
        )}
      </nav>
    </div>
    </div>
  );
}