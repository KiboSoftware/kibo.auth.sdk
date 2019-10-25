/**
 * Kibo AppDev Service
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.KiboAppDevService);
  }
}(this, function(expect, KiboAppDevService) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new KiboAppDevService.MozuAppDevContractsAppStoreCategoryNode();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('MozuAppDevContractsAppStoreCategoryNode', function() {
    it('should create an instance of MozuAppDevContractsAppStoreCategoryNode', function() {
      // uncomment below and update the code to test MozuAppDevContractsAppStoreCategoryNode
      //var instane = new KiboAppDevService.MozuAppDevContractsAppStoreCategoryNode();
      //expect(instance).to.be.a(KiboAppDevService.MozuAppDevContractsAppStoreCategoryNode);
    });

    it('should have the property fullPath (base name: "fullPath")', function() {
      // uncomment below and update the code to test the property fullPath
      //var instane = new KiboAppDevService.MozuAppDevContractsAppStoreCategoryNode();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new KiboAppDevService.MozuAppDevContractsAppStoreCategoryNode();
      //expect(instance).to.be();
    });

    it('should have the property categories (base name: "categories")', function() {
      // uncomment below and update the code to test the property categories
      //var instane = new KiboAppDevService.MozuAppDevContractsAppStoreCategoryNode();
      //expect(instance).to.be();
    });

    it('should have the property parentPath (base name: "parentPath")', function() {
      // uncomment below and update the code to test the property parentPath
      //var instane = new KiboAppDevService.MozuAppDevContractsAppStoreCategoryNode();
      //expect(instance).to.be();
    });

    it('should have the property isFolder (base name: "isFolder")', function() {
      // uncomment below and update the code to test the property isFolder
      //var instane = new KiboAppDevService.MozuAppDevContractsAppStoreCategoryNode();
      //expect(instance).to.be();
    });

    it('should have the property hasChildren (base name: "hasChildren")', function() {
      // uncomment below and update the code to test the property hasChildren
      //var instane = new KiboAppDevService.MozuAppDevContractsAppStoreCategoryNode();
      //expect(instance).to.be();
    });

    it('should have the property content (base name: "content")', function() {
      // uncomment below and update the code to test the property content
      //var instane = new KiboAppDevService.MozuAppDevContractsAppStoreCategoryNode();
      //expect(instance).to.be();
    });

    it('should have the property children (base name: "children")', function() {
      // uncomment below and update the code to test the property children
      //var instane = new KiboAppDevService.MozuAppDevContractsAppStoreCategoryNode();
      //expect(instance).to.be();
    });

  });

}));
