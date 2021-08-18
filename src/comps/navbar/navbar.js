import React, { Component } from 'react';
import Image from "../../images/cropped.png";
import Image2 from "../../images/logo.png";
import './navbar.css';
import navitems from './navitems';
export default class navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked:false,
            button:true,
            login:false,
            signup:false,
            navbar:true
        }
    }
    onClick=()=>{
        this.setState({clicked:!this.state.clicked});
    }
    closeMenu=()=>{
        this.setState({clicked:false});
    }
    showButton=()=>{
        if(window.innerWidth>=768){
            this.setState({button:true});
        }else{
            this.setState({button:false});
        }
    }
    changeNavbar=()=>{
        if(window.scrollY<window.innerHeight/4){
            this.setState({navbar:true});
        }else{
            this.setState({navbar:false});
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.changeNavbar);
    }
    render() {
        return(
            <div>
                <header className={this.state.navbar?'headernav':'headernav active'}>
                    <a className={this.state.navbar?'hidelogo':'showlogo'} href="/"><img src={Image}   alt="logo"/></a>
                    <a className={this.state.navbar?'showlogo':'hidelogo'} href="/"><img src={Image2}  alt="logo"/></a>
                    <nav>
                        <ul className={this.state.clicked?'navmenu active':'navmenu'}>
                            {navitems.map((item,i)=>{
                                return(
                                    <li key={i} >
                                        <a href={item.url} key={i} className={this.state.navbar?'fontnav':'fontnav active'} onClick={this.closeMenu}>{item.name}</a>
                                    </li>
                                )
                            })}
{/*                             
                            <li key="9" >
                                <a key="9" href='/' className="navlinks" onClick={this.onOpenLogIn}>Log In</a>
                            </li> */}
                        </ul>                    
                    </nav>
                    <div className='menuicon' onClick={this.onClick}>
                            <i className={this.state.clicked?'fas fa-times':'fas fa-bars'}/>
                    </div>
                </header>
            </div>
        )
    }
}