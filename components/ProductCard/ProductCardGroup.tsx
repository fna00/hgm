import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem,
  CardImg,
} from "reactstrap";
import { CardGroup, } from "react-bootstrap";

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

const ProductCardGroup = () => {
  const [products, setProducts] = useState<Product[]>([]); 

  useEffect(() => {
    fetch("http://localhost:5082/api/Product/gets/name") 
    .then((response) => response.json())
        .then((result) => {
          if (result?.data && Array.isArray(result.data)) {
            setProducts(result.data); 
        } else {
          console.error("API'den beklenmeyen formatta veri döndü:", result);
          setProducts([]);
        }
      })
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  const renderProductAttributes = (attributes: ProductAttributes[]) => {
    return attributes.map((attribute) => (
      <ListGroupItem key={attribute.id} className="border-b-[1px] border-neutral-400">
        {attribute.name}: {attribute.value}
      </ListGroupItem>
    ));
  };

  const renderProductTypes = (types: ProductTypes[]) => {
    return types.map((type) => (
      <ListGroupItem key={type.id} className="border-b-[1px] border-neutral-400">
        Ürün Tipi:{type.productTypeText}
      </ListGroupItem>
    ));
  };

  return (
    <div className="flex flex-co l min-h-screen">
      <CardGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center  bg-white">
        {products.map((product) => (
          <Card key={product.id} style={{ width: "18rem" }} className=" text-black bg-gray-100 hover:bg-gray-300 rounded-lg shadow-lg p-2 ">
            {/* Fotoğraf, sadece varsa gösterilir */}
            <CardImg
              alt={product.name}
              src={product.image || "https://via.placeholder.com/300x200"} // Eğer ürün resmi yoksa varsayılan resim
              top
              className="w-[300px] h-[200px] border-8 hover:shadow-xl transition-all"
            />
            <CardBody>
              <CardTitle tag="h5" className="text-2xl border-b border-neutral-400">{product.name}</CardTitle>
              <CardText className="border-b border-neutral-400">Satış Durumu: {product.isActive ? "Aktif" : "Pasif"}</CardText>
            </CardBody>
            <ListGroup flush>

              {product.productAttributes && renderProductAttributes(product.productAttributes)}

              {product.productTypes && renderProductTypes(product.productTypes)}
            </ListGroup>
            {/* <CardBody>
              <Button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold"
                href={`products/${product.id}`}
              >
                Detaylar
              </Button>
            </CardBody> */}
          </Card>
        ))}
      </CardGroup>
    </div>
  );
};

export default ProductCardGroup;


