// import React from 'react';
// import styles from '../styles/Products.module.css';

// interface Product {
//   id: number;
//   name: string;
//   price: string;
//   stock: number;
//   category: string;
//   status: 'active' | 'inactive';
//   image: string;
// }

// const Products: React.FC = () => {
//   const products: Product[] = [
//     { 
//       id: 1, 
//       name: 'Wireless Headphones', 
//       price: '$99.99', 
//       stock: 50, 
//       category: 'Electronics', 
//       status: 'active',
//       image: 'https://via.placeholder.com/50'
//     },
//     { 
//       id: 2, 
//       name: 'Smart Watch', 
//       price: '$199.99', 
//       stock: 30, 
//       category: 'Electronics', 
//       status: 'active',
//       image: 'https://via.placeholder.com/50'
//     },
//     { 
//       id: 3, 
//       name: 'Outdated Product', 
//       price: '$49.99', 
//       stock: 0, 
//       category: 'Other', 
//       status: 'inactive',
//       image: 'https://via.placeholder.com/50'
//     }
//   ];

//   return (
//     <div className={styles.container}>
//       <div className={styles.header}>
//         <h1 className={styles.title}>Products</h1>
//         <button className={styles.addButton}>+ Add Product</button>
//       </div>
      
//       <table className={styles.table}>
//         <thead>
//           <tr>
//             <th>Image</th>
//             <th>Name</th>
//             <th>Price</th>
//             <th>Stock</th>
//             <th>Category</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map((product) => (
//             <tr key={product.id}>
//               <td><img src={product.image} alt={product.name} className={styles.productImage} /></td>
//               <td>{product.name}</td>
//               <td>{product.price}</td>
//               <td>{product.stock}</td>
//               <td>{product.category}</td>
//               <td>
//                 <span className={`${styles.statusBadge} ${
//                   product.status === 'active' ? styles.statusActive : styles.statusInactive
//                 }`}>
//                   {product.status.charAt(0).toUpperCase() + product.status.slice(1)}
//                 </span>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Products;

import React from 'react';

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
    <div className="p-5">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-2xl font-semibold text-gray-800">Products</h1>
        <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md font-medium">
          + Add Product
        </button>
      </div>
      
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <img src={product.image} alt={product.name} className="w-10 h-10 rounded-md object-cover" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{product.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.price}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.stock}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.category}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    product.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {product.status.charAt(0).toUpperCase() + product.status.slice(1)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;