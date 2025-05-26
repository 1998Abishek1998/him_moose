import React from 'react';
import styles from '../styles/Products.module.css';

interface Product {
  id: number;
  name: string;
  price: string;
  stock: number;
  category: string;
  status: 'active' | 'inactive';
  image: string;
}

const Products: React.FC = () => {
  const products: Product[] = [
    { 
      id: 1, 
      name: 'Wireless Headphones', 
      price: '$99.99', 
      stock: 50, 
      category: 'Electronics', 
      status: 'active',
      image: 'https://via.placeholder.com/50'
    },
    { 
      id: 2, 
      name: 'Smart Watch', 
      price: '$199.99', 
      stock: 30, 
      category: 'Electronics', 
      status: 'active',
      image: 'https://via.placeholder.com/50'
    },
    { 
      id: 3, 
      name: 'Outdated Product', 
      price: '$49.99', 
      stock: 0, 
      category: 'Other', 
      status: 'inactive',
      image: 'https://via.placeholder.com/50'
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Products</h1>
        <button className={styles.addButton}>+ Add Product</button>
      </div>
      
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Category</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td><img src={product.image} alt={product.name} className={styles.productImage} /></td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.stock}</td>
              <td>{product.category}</td>
              <td>
                <span className={`${styles.statusBadge} ${
                  product.status === 'active' ? styles.statusActive : styles.statusInactive
                }`}>
                  {product.status.charAt(0).toUpperCase() + product.status.slice(1)}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;