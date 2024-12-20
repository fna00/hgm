import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
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

interface FilterState {
  products: Product[]; 
  selectedProductId:number | null
  filteredProducts: Product[]; 
  selectedSubCategoryId: number | null;
  loading: boolean; 
  error: string | null;
}

const initialState: FilterState = {
  products: [],
  filteredProducts: [],
  selectedSubCategoryId: 1 || null,
  selectedProductId:null,
  loading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk<Product[]>(
  'filter/fetchProducts',
  async () => {
    const response = await fetch('http://localhost:5082/api/Product/gets/subcategoryId');
    if (!response.ok) {
      throw new Error('Ürünler yüklenemedi!');
    }
    return await response.json();
  }
);

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {

    setProductId: (state, action: PayloadAction<number | null>) => {
      state.selectedProductId = action.payload
    },
    // Kategori seçimi için reducer
    setSubCategoryId: (state, action: PayloadAction<number | null>) => {
      state.selectedSubCategoryId = action.payload;

      // Seçilen kategoriye göre ürünleri filtrele
      state.filteredProducts = action.payload
        ? state.products.filter((product) => product.subCategoryId === action.payload)
          .map((product) => ({
            ...product,
            subCategoryName: product.subCategoryName 
        }))
        : state.products;
   },
  
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Bir hata oluştu';
      });
  },
});

export const { setSubCategoryId , setProductId} = filterSlice.actions;

export const {} = filterSlice.actions

export default filterSlice.reducer;