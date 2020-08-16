import React, {Component} from 'react';
import '../css/Shipping.css'
import '../css/Cart.css'

class Shipping extends Component {
    constructor(props) {
        super(props);
        this.state = {
                name: '',
                address: '',
                phone: '',
                mail: '',
                option: ''
        }
       
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        const dataUser = [];
        dataUser.push(this.state.name,this.state.address,this.state.phone,this.state.mail,this.state.option);
        
        fetch('/shipping',{
        method: "POST",
        body: JSON.stringify(dataUser),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      }).then(response => {
        response.json().then(data =>{
          console.log("Successful" + data);
        })
    })
        e.preventDefault();
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
      
        e.preventDefault();
    }
    
    render(state) {
       
        return (
            <div>
                <div className='container'>
                    <div className="wrapper_form">
                        <form onSubmit={this.handleSubmit}>
                            <p><label for="textField" >Name*:</label>
                            <input  id="textField" name='name' onChange={this.handleChange}/></p>
                            <p><label for="passField" >Adress*:</label>
                            <input  id="passField" name='address' onChange={this.handleChange}/></p>
                            <p><label for="textField" >Phone*:</label>
                            <input  id="textField" name='phone' onChange={this.handleChange}/></p>
                            <p><label for="textField" >E-mail</label>
                            <input  id="textField" name='mail' onChange={this.handleChange}/></p>
                            <p><label for="textField" >Shipping options</label>
                            <select  id="textField" name='option' onChange={this.handleChange}> 
                                <option name='freeShipping'>Free shipping</option>
                                <option name='expreeShipping'>Express shipping - additional 9.99$</option>
                                <option name='courierShippinng'>Courier shipping - additional 19.99$</option>
                            </select></p>
                            <p><input type="submit" value="PAY" class="submitField" /></p>
                     </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Shipping;