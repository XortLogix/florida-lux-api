const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const propertySchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    code: {
      type: String,
    },
    description: {
        type: String,
    },
    status: {
        type: String,
        defaultValue: 'incoming',
        enum: ['for_sale', 'sold', 'incoming', 'for_rent'],
    },
    media: [{
      smUrl: {
        type: String,
      },
      mdUrl: {
        type: String,
      },
      xlUrl: {
        type: String,
      },
    }],
    neighborhood: {
        type: String,
    },
    addressLine1: {
        type: String,
    },
    addressLine2: {
        type: String,
      },
    state: {
        type: String,
      },
    city: {
        type: String,
      },
    country: {
        type: String,
      },
    zipCode: {
        type: String,
    },
    longitude: {
        type: String,
    },    
    latitude: {
        type: String,
    },
    area: {
        type: String,
    },
    areaUnit: {
        type: String,
    },
    leasePeroid: {
        type: String,
    },
    salePrice: {
        type: String,
    },
    reducedPrice: {
        type: String,
    },
    currency: {
        type: String,
    },
    visitHours: {
        type: String,
    },
    bedroomCount: {
        type: String,
    },
    bathCount: {
        type: String,
    },
    tags: {
        type: Array,
    },
    reference: {
        type: String,
    },
    agentId: {
        type: Schema.Types.ObjectId,
        ref: 'Agent'    
    },
    filters: [{
        type: Schema.Types.ObjectId,
        ref: 'Filter'    
    }],
  },
  {
    timestamps: true,
  }
);

/**
 * @typedef Property
 */
const Property = mongoose.model('Property', propertySchema);

module.exports = Property;
