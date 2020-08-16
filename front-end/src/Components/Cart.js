import React, {Component} from 'react';
import  '../css/Cart.css';
import {BrowserRouter,Route,Link} from 'react-router-dom'
import Shipping from './Shippig';
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory();

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users:[]
        }
       this.hundleChange = this.hundleChange.bind(this);
        this.amountAdd = this.amountAdd.bind(this);
        this.amountReduce = this.amountReduce.bind(this);
        this.hundleSubmit = this.hundleSubmit.bind(this);
    }

    componentDidMount() {
        fetch("/users")
        .then(res => res.json())
        .then(users => this.setState({users}));

    }

  hundleChange(e) {
        this.setState({
            amount: e.target.value
        })
    }

    hundleSubmit(e) {
        
        e.preventDefault();
    }

    amountReduce(e) {
    

        e.preventDefault();
    }

    amountAdd(e) {
        let addAmout = this.state.users.map(user => console.log(user))
        

        e.preventDefault();
    }
  
    
    render() {
        const input = this.state.users.map(user => <input type="number"  name="amount" style={{width:"30px"}} max="50" min="0" value={user.amount} />)

        const photoLink="https://png.pngtree.com/png-vector/20191105/ourlarge/pngtree-striped-trolley-icon-shopping-trolley-icon-can-be-used-for-website-png-image_1957889.jpg";
        return (
            <BrowserRouter history={history}>
                <div className="container">
                <div className="wrapper">
                    <img className="photo_product" src={photoLink} alt="product" />
                    <img className="trash_icon" src="https://img.icons8.com/android/24/000000/trash.png"/>
                    <div className="product_description">
                        <h3 className="title">{this.state.users.map(user => <span>{user.title}</span>)}</h3>
                        <span className="product_item">{this.state.users.map(user => <span>{user.text}</span>)}</span>
                       
                    </div>
                   <hr className="vertical_line" size="100" />
                    <form className="quantity_product" onSubmit={this.hundleSubmit}>
                        <button onClick={this.amountReduce}>-</button>
                        {input}
                        <button onClick={this.amountAdd}>+</button>
                        <span style={{marginLeft:"1rem", fontWeight:"bold"}}>{this.state.users.map(user => <span>{user.price}</span >)}$</span>
                        <div className="buy_product">
                <div className="all_summ">{this.state.users.map(user => <span>{user.allSumm}</span>)}$</div>
                <Link to="/shipping-form">
                <button className="purchase" type='submit'>BUY</button>
                </Link>
                </div>
                    </form>
                </div>
                <Route  path="/shipping-form" component={Shipping} />
            </div>
            </BrowserRouter>
        )
    }
}

export default Cart;