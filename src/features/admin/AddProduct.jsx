import { useState } from "react";

import axios from "axios";

import styled from "styled-components";
import { toast } from "react-toastify";

function AddProduct() {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [price, setPrice] = useState(0);
  const [info, setInfo] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    if (!title || !imageUrl || price < 1)
      return toast.info("Fill in the required details!");

    const newProduct = {
      title,
      imageUrl,
      price,
      info,
    };

    await axios
      .post("http://localhost:4545/admin/add-product", newProduct)
      .then((res) => {
        console.log(res);

        Navigate("/home");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setTitle("");
        setImageUrl("");
        setPrice(0);
        setInfo("");
      });
  }

  return (
    <div className="container">
      <StyledForm onSubmit={handleSubmit}>
        <div className="input-label">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="input-label">
          <label>Image URL</label>
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>

        <div className="input-label">
          <label>Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="input-label">
          <label>Info</label>
          <input
            type="text"
            value={info}
            onChange={(e) => setInfo(e.target.value)}
          />
        </div>

        <button className="btn btn-sm btn-success">Add</button>
      </StyledForm>
    </div>
  );
}

const StyledForm = styled.form`
  height: 100%;
  text-align: center;
  margin-top: 2rem;
`;

export default AddProduct;
