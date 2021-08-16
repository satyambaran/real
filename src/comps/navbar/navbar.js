import React, { Component } from 'react';
import Image from "../../images/cropped.png";
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
        if(window.scrollY<1150){
            this.setState({navbar:true});
            // console.log('satyam')
        }else{
            this.setState({navbar:false});
            // console.log('sam')
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.changeNavbar);
        // console.log(this.state.navbar);
    }
    // onOpenSignUp=()=>{
    //     this.setState({signup:true})
    // }
    // onOpenLogIn=()=>{
    //     this.setState({login:true})
    // }
    // onCloseSignUp=()=>{
    //     this.setState({signup:false})
    // }
    // onCloseLogIn=()=>{
    //     this.setState({login:false})
    // }
    render() {
        return(
            <div>
                <header className={this.state.navbar?'headernav':'headernav active'}>
                    <a href="/"><img src={Image}  alt="logo"/></a>
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