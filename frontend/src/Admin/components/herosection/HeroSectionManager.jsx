import { Grid, Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import { heroSectionData } from "../../HeroSectionSource";

const HeroSectionManager = () => {
  const [data, setData] = useState(heroSectionData);

  const [imageFile, setImageFile] = useState(null);



  const handleHeadingChange = (event, id) => {
    const updatedData = data.map((item) =>
      item.id === id ? { ...item, heading: event.target.value } : item
    );
    setData(updatedData);
  };

  const handleLinkChange = (event, id) => {
    const updatedData = data.map((item) =>
      item.id === id ? { ...item, link: event.target.value } : item
    );
    setData(updatedData);
  };

  const handleImageUpload = (event, id) => {
    const file = event.target.files[0];
    const updatedData = data.map((item) =>
      item.id === id ? { ...item, image: URL.createObjectURL(file) } : item
    );
    setData(updatedData);
    setImageFile(file);
  };
  

  const handleImageChange = (event, id) => {
    const fileInput = document.getElementById(`image-upload-${id}`);
    fileInput.click();
  };
  

  return (
    <Grid container spacing={2}>
      {data.map((item) => (
        <Grid item xs={4} key={item.id}>
          <img src={item.image} alt={item.heading} style={{ width: "100%" }} />
          <TextField
            value={item.image}
            onClick={(event) => handleImageChange(event, item.id)}
            label="Image"
            variant="outlined"
            fullWidth
            InputProps={{
              readOnly: true,
            }}
          />
          <input
            type="file"
            id={`image-upload-${item.id}`}
            style={{ display: "none" }}
            onChange={(event) => handleImageUpload(event, item.id)}
          />
          <TextField
            value={item.heading}
            onChange={(event) => handleHeadingChange(event, item.id)}
            label="Heading"
            variant="outlined"
            fullWidth
          />
          <TextField
            value={item.link}
            onChange={(event) => handleLinkChange(event, item.id)}
            label="Link"
            variant="outlined"
            fullWidth
          />
          <Button component={Link} to={item.link} variant="contained">
            {item.buttonText}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};

export default HeroSectionManager;



