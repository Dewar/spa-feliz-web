'use strict';

angular.module('spafelizApp')
  .controller('bookCtrl', bookCtrl);

bookCtrl.$inject = ['spaServicesHttp', 'spaBooksHttp'];

function bookCtrl(spaServicesHttp, spaBooksHttp) {
  var ctx = this;
  ctx.$onInit = onInit;
  ctx.loadSpaServicesHttp = loadSpaServicesHttp;
  ctx.createBook = createBook;
  ctx.bookRequest = {};

  function onInit() {
    ctx.loadSpaServicesHttp();
  }

  async function loadSpaServicesHttp() {
    try {
      let response = await spaServicesHttp.getAll();
      ctx.services = response.data
    } catch (error) {
      console.log(error);
      toastr.error("Error al obtener los servicios")
    }
  }

  async function createBook() {
    try {
      await spaBooksHttp.createBook(ctx.bookRequest)
      toastr.success("Se ha realizado la reserva")
    } catch (error) {
      console.log(error)
      toastr.error("Ha ocurrido un error al realizar la solicitud")
    }
  }
}
