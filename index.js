    
      var form = document.querySelector('.needs-validation');

      
      form.addEventListener('submit', function (event) {
          if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
             
              var alert = document.querySelector('#form-alert');
              alert.style.display = 'block';
          }
         
          form.classList.add('was-validated');
      }, false);