const mongoose = require("mongoose");

const VariableProductVariation = mongoose.model("VariableProductVariation", {
  sku: {
    type: String,
    require: true,
  },
  product_id: {
    type: Number,
    require: true,
  },
  color_id: {
    type: Number,
    require: true,
  },
  size_id: {
    type: Number,
    require: true,
  },
  quantity: {
    type: Number,
    require: true,
  },
  stock_status: {
    type: Boolean,
    require: true,
  },
  stock_threshold: {
    type: Number,
    require: true,
  },
  regular_price: {
    type: Number,
    require: true,
  },
  discounted_price: {
    type: Number,
    require: true,
  },
  discounted_percentage: {
    type: Number,
    require: true,
  },
  productVariation_feature_img: {
    type: String,
    require: true,
  },
  productVariation_gallery_imgs: {
    type: String,
    require: true,
  },
  status: {
    type: String,
    require: true,
  },
  updated_at: { type: Date, default: Date.now },
});

module.exports = { VariableProductVariation };
