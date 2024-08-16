import Mongoose from "mongoose"
// @ts-ignore
import MongooseSlug from "mongoose-slug-generator"

const slug = MongooseSlug
const { Schema } = Mongoose;

const options = {
  separator: '-',
  lang: 'en',
  truncate: 120
};

Mongoose.plugin(slug, options);

// Product Schema
const ProductSchema = new Schema({
  sku: {
    type: String
  },
  name: {
    type: String,
    trim: true
  },
  slug: {
    type: String,
    unique: true
  },
  // slug: {
  //   type: String,
  //   slug: 'name',
  //   unique: true
  // },
  imageUrl: {
    type: String
  },
  imageKey: {
    type: String
  },
  description: {
    type: String,
    trim: true
  },
  quantity: {
    type: Number
  },
  price: {
    type: Number
  },
  taxable: {
    type: Boolean,
    default: false
  },
  isActive: {
    type: Boolean,
    default: true
  },
  // brand: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'Brand',
  //   default: null
  // },
  updated: Date,
  created: {
    type: Date,
    default: Date.now
  }
});

export const Product = Mongoose.model('Product', ProductSchema);
