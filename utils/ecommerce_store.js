'use strict';
const request = require('request');
const PDFDocument = require('pdfkit');
const fs = require('fs');

module.exports = class EcommerceStore {
  constructor() {
    this.products = [
      {
        id: 1,
        title: 'Facial Set',
        description: 'This is the description of Product 1',
        price: 9.99,
        image: 'https://example.com/product1.jpg',
        rating: {
          rate: 4.5,
          count: 120,
        },
      },
      {
        id: 2,
        title: 'Body Lotion',
        description: 'This is the description of Product 2',
        price: 14.99,
        image: 'https://example.com/product2.jpg',
        rating: {
          rate: 3.8,
          count: 80,
        },
      },
    ];
  }

  async getProductById(productId) {
    return await this._fetchAssistant(`/products/${productId}`);
  }
  async getAllCategories() {
    return await this._fetchAssistant('/products/categories?limit=100');
  }
  async getProductsInCategory(categoryId) {
    return await this._fetchAssistant(`/products/category/${categoryId}?limit=10`);
  }

  generatePDFInvoice({ order_details, file_path }) {
    const doc = new PDFDocument();
    doc.pipe(fs.createWriteStream(file_path));
    doc.fontSize(25);
    doc.text(order_details, 100, 100);
    doc.end();
    return;
  }

  generateRandomGeoLocation() {
    let storeLocations = [
      {
        latitude: 44.985613,
        longitude: 20.1568773,
        address: 'New Castle',
      },
      {
        latitude: 36.929749,
        longitude: 98.480195,
        address: 'Glacier Hill',
      },
      {
        latitude: 28.91667,
        longitude: 30.85,
        address: 'Buena Vista',
      },
    ];
    return storeLocations[Math.floor(Math.random() * storeLocations.length)];
  }
};
