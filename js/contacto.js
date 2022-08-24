function viewsArrayInput(){
    var arrayInput = new Array();
    var inputsValues = document.getElementsByClassName('datoInput'),
    namesValues = [].map.call(inputsValues,function(dataInput) {
        arrayInput.push (dataInput.value);
     }) ;
    arrayInput.forEach(function(inputsValuesData){
        console.log("EL DATO ES :" + inputsValuesData);
    });
}

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
  Toast.fire({
    icon: 'success',
    title: 'Signed in successfully'
  })