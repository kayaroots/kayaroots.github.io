var form = document.getElementById('form')

//Function to get the value is choosen in the Select Input.
function getSelectValue () {
  var select = document.getElementById("list").value
  return select;
}

//Get the values when the submit button is clicked and generate a Alert.
form.addEventListener('submit', function(event){
  var name = document.getElementById('name').value;
  var lastName = document.getElementById('lastName').value;
  var email = document.getElementById('email').value;
  var comment = document.getElementById('comment').value;
  alert(`First Name : ${name}, Last Name: ${lastName}, Email: ${email}, Comment: ${comment}, How may I help you: ${getSelectValue()}.`);

});


//Function to see if is empty the input.
function isEmpty(){
  let submit = document.getElementById('submit');
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let comment = document.getElementById('comment').value;
  let phone = document.getElementById('phone').value;

  if (name !=="" && email !=="" && comment !=="" && phone !=="") {
    submit.removeAttribute("disabled");
  } else{
    submit.getAttribute('disabled');
  }
}
