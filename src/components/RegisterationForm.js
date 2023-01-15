import React, { Component } from 'react';



export default class RegisterationForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
           
            email: "john@example.com"
            
        }
      
    }
  
    render() {
        return (
            <div>
                <form className='container card p-3 mt-3 register' onSubmit={this.props.submit}>
                    <h1 className='text-center'> Registeration Form</h1>
                    <div className='form-group'>
                        <label htmlFor='Name'>Name:</label>
                        <div>

                            <input type='text' name="name" className='form-control' />
                        </div>
                    </div>

                    <div className='form-group'>
                        <label htmlFor='Email'>Email:</label>
                        <div className=' '>
                            <input type="email" name="email" className='form-control ' value={this.state.email} onChange={(event) => {
                                const e = event.target.value
                                this.setState({ email: e })
                            }} />
                            
                        </div>
                    </div>

                    <div className='form-group'>
                        <label htmlFor='password'>password:</label>
                        <div>
                            <input type="password" name="password" className='form-control' />
                        </div>
                    </div>

                    <div className='form-group mt-2'>
                        <div>
                            <input type="submit" className='btn btn-primary' />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
