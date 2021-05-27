  function selectUserRoleLogin(){
    document.getElementById('selectUserRoleLogin').style.display = "block";
    document.getElementById('selectUserRoleSignup').style.display = "none";
    document.getElementById('inputSignup').style.display = "none";
  }
  
  function userRoleLogin(){  
    if(document.getElementById('userCustomerLogin').checked){
      document.getElementById('inputLoginCustomer').style.display = "block";
      document.getElementById('inputLoginAdmin').style.display = "none";
    } else if(document.getElementById('userAdminLogin').checked){
      document.getElementById('inputLoginAdmin').style.display = "block";
      document.getElementById('inputLoginCustomer').style.display = "none";
    } else {
      document.getElementById('inputLoginCustomer').style.display = "none";
      document.getElementById('inputLoginAdmin').style.display = "none";
    }
  }
  
  function selectUserRoleSignup(){
    document.getElementById('selectUserRoleSignup').style.display = "block";
    document.getElementById('selectUserRoleLogin').style.display = "none";
    document.getElementById('inputLoginCustomer').style.display = "none";
    document.getElementById('inputLoginAdmin').style.display = "none";
  }
  
  function userRoleSignup(){
    if(document.getElementById('userCustomerSignup').checked){
      document.getElementById('inputSignup').style.display = "block";
    } else if(document.getElementById('userAdminSignup').checked){
      document.getElementById('inputSignup').style.display = "block";
    } else {
      document.getElementById('inputSignup').style.display = "none";
      document.getElementById('inputSignup').style.display = "none";
    }
  }
  
  var check = function() {
    if (document.getElementById('password').value ==
      document.getElementById('confirm_password').value) {
      document.getElementById('message').style.color = 'green';
      document.getElementById('message').innerHTML = 'matching';
      document.getElementById('register').disabled = false;
    } else {
      document.getElementById('message').style.color = 'red';
      document.getElementById('message').innerHTML = 'not matching';
      document.getElementById('register').disabled = true;
    }
  }