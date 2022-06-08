// import logo from './logo.svg';
import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import './App.css';

export class App extends Component {
    render() {
        return (
        <div className=''>
            <Navbar dark color="success">
                <div className='container'>
                    <NavbarBrand href="/">Home</NavbarBrand>
                    <NavbarBrand href="/menu">Menu</NavbarBrand>
                    <NavbarBrand href="/about">About</NavbarBrand>
                    <NavbarBrand href="/contact">Contact</NavbarBrand>
                </div>
            </Navbar>
            <Menu/>
        </div>
        )
    }
}

// const App = React.createElement(
//     'div',
//     {className: 'greeting'},
//     'Hello, React'
// );

// const App = {
//     type: 'h1',
//     props: {
//         className: 'greeting',
//         children: 'Hello, React'
//     }
// };

// function App() {
//     return ( 
//         <div>Hello</div>
//     );
// }

export default App;