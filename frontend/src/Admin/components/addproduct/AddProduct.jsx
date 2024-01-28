import { TextField, Button, Typography, Box } from '@mui/material';
import React, { useState } from 'react';

const AddProductForm = () => {
  const [product, setProduct] = useState({
    id: 1,
    name: '',
    price: '',
    originalPrice: '',
   
    description1: '',
    description2: '',
    description3: '',
   
    highlights1: '',
    highlights2: '',
    highlights3: '',
    highlights4: '',
    highlights5: '',
    details: '',
    category: '',
    subCategory: '',
    image: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
  
      {
      setProduct((prevProduct) => ({
        ...prevProduct,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to save the product data
    console.log(product);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h6">Add Product</Typography>
      <TextField
        name="name"
        label="Product Name"
        value={product.name}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        name="price"
        label="Price"
        value={product.price}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        name="originalPrice"
        label="Original Price"
        value={product.originalPrice}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
    
<TextField
  name="description1"
  label="Description 1"
  
  value={product.description1}
  onChange={handleChange}
  fullWidth
  margin="normal"
/>
<TextField
  name="description2"
  label="Description 2"
  
  value={product.description2}
  onChange={handleChange}
  fullWidth
  margin="normal"
/>
<TextField
  name="description3"
  label="Description 3"

  value={product.description3}
  onChange={handleChange}
  fullWidth
  margin="normal"
/>

<TextField
  name="highlights1"
  label="Highlights 1"
 
  value={product.highlights1}
  onChange={handleChange}
  fullWidth
  margin="normal"
/>
<TextField
  name="highlights2"
  label="Highlights 2"

  value={product.highlights2}
  onChange={handleChange}
  fullWidth
  margin="normal"
/>
<TextField
  name="highlights3"
  label="Highlights 3"

  value={product.highlights3}
  onChange={handleChange}
  fullWidth
  margin="normal"
/>
<TextField
  name="highlights4"
  label="Highlights 4"

  value={product.highlights4}
  onChange={handleChange}
  fullWidth
  margin="normal"
/>
<TextField
  name="highlights5"
  label="Highlights 5"
 
  value={product.highlights5}
  onChange={handleChange}
  fullWidth
  margin="normal"
/>
      <TextField
        name="details"
        label="Details"
      
        value={product.details}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        name="category"
        label="Category"
        value={product.category}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        name="subCategory"
        label="Subcategory"
        value={product.subCategory}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        name="image"
        label="Image URL"
        value={product.image}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <Box mt={2}>
        <Button type="submit" variant="contained" color="primary">
          Add Product
        </Button>
      </Box>
    </form>
  );
};

export default AddProductForm;

