import './App.css';
import RegisterationForm from './components/RegisterationForm';
import Swal from 'sweetalert2';
import { Component } from 'react';
import Greeting from './components/Greeting';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isRegisterd:false,
      name: null,
      email: "john@example.com",
      password: null
  }
  this.formHandler=this.formHandler.bind(this)
 
  }


  render(){

    return (
      <div>

      
      {this.state.isRegisterd?<Greeting name={this.state.name}/>:<RegisterationForm submit={this.formHandler} />}
    </div>

);
}



 formHandler=(event)=>{

  // sweat alert
  
  const { value: accept } =  Swal.fire({
    title: 'Terms and conditions',
    input: 'checkbox',
    inputValue: 1,
    inputPlaceholder:
      'I agree with the terms and conditions',
    confirmButtonText:
      'Continue <i class="fa fa-arrow-right"></i>',
    inputValidator: (result) => {
      return !result && 'You need to agree with T&C'
    }
  })
  
  if (accept) {
    Swal.fire('You agreed with T&C :)')
  }






  //seat alert end
  event.preventDefault();
  const email=event.target.email.value;
  const name=event.target.name.value;
  const pass=event.target.password.value;
  
  this.setState({name,email,pass,isRegisterd:true},()=>console.log(this.state))
  
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
    title: 'Signed Up successfully'
  })
}
}
export default App;
