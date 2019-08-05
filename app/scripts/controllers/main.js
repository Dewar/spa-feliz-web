'use strict';

/**
 * @ngdoc function
 * @name spafelizApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the spafelizApp
 */
angular.module('spafelizApp').controller('mainCtrl', mainCtrl);

mainCtrl.$inject = ['spaServicesHttp'];

function mainCtrl(spaServicesHttp) {
  var ctx = this;
  ctx.$onInit = onInit;
  ctx.findSpaServices = findSpaServices;

  function onInit() {
    ctx.findSpaServices();
  }

  async function findSpaServices() {
    try {
      let response = await spaServicesHttp.getAll()
      ctx.services = response.data
    } catch (error) {
      console.log(error)
    }
  }
};
