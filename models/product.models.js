const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  /*Q: Does P of the ProductSchema needs to be capital? */
  {
    name: {
      type: String,
      required: [true, "Enter product Name"],
    },
    quantity: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", ProductSchema);
/*Q: Is it compulsarry to have both of these name const Product and then under the bracket "Product"?*/

module.exports = Product;
