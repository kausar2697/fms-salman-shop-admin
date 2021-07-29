import "./addProduct.css";
import Layout from "../../../components/Layout";

const AddProduct = () => {
  return (
    <Layout sidebar>
      <div className="newProduct">
        <h1 className="addProductTitle">New Medicine</h1>
        <form className="addProductForm">
          {/* <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="file" />
          <ImageUpload cardName="Input Image" imageGallery={galleryImageList} />
        </div> */}
          <div className="addProductItem">
            <label>Medicine Name + Weight</label>
            <input type="text" placeholder="Acitrin 10 (Tab)" />
          </div>
          <div className="addProductItem">
            <label>Company Name / Manufacturer Name</label>
            <input type="text" placeholder="Aci Limited" />
          </div>
          <div className="addProductItem">
            <label>Group Name / Generic Name</label>
            <input type="text" placeholder="Ampicilin" />
          </div>
          <div className="addProductItem">
            <label>Manufacturer Country</label>
            <input type="text" placeholder="Bangladesh" />
          </div>
          <div className="addProductItem">
            <label>Pack Size</label>
            <input type="text" placeholder="123" />
          </div>

          <div
            style={{ display: "flex", flexDirection: "row", width: "500px" }}
          >
            <div className="addProductItem">
              <label>TP</label>
              <input type="text" placeholder="123" />
            </div>

            <div className="addProductItem">
              <label>Vat(%) Per Unit</label>
              <input type="text" placeholder="123" />
            </div>

            <div className="addProductItem">
              <label>Discount(%)</label>
              <input type="text" placeholder="123" />
            </div>
          </div>

          <div className="addProductItem">
            <label>Purchase Price</label>
            <input type="text" placeholder="123" />
          </div>

          <div className="addProductItem">
            <label>Sale Price</label>
            <input type="text" placeholder="123" />
          </div>

          <div className="addProductItem">
            <label>Product Code</label>
            <input type="text" placeholder="XKSRFDS" />
          </div>

          <div className="addProductItem">
            <label>Product Alart Qty</label>
            <input type="text" placeholder="123" />
          </div>
          {/* <div className="addProductItem">
          <label>Active</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div> */}
          <button className="addProductButton">Create</button>
        </form>
      </div>
    </Layout>
  );
};

export default AddProduct;
