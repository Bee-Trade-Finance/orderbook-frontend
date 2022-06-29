import { useEffect } from 'react';
import { Navbar, Nav, Dropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useWeb3React } from '@web3-react/core'
import { connectors } from "../connectors";
// import { networkParams } from "../networks";
import { ThemeConsumer } from '../context/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  const { activate, deactivate, active, account } = useWeb3React();

  useEffect(() => {
    
    // if(active && chainId !== 43114){
    //   alert('Please Change Network')
    // }
  })

  useEffect(()=> {
    let status = window.localStorage.getItem('disconnected');
    if(status === 'false'){
      activate(connectors.injected);
    }
    let el = document.querySelector('#darkTheme');
    if (el) {
      el.addEventListener('click', function () {
        document.body.classList.toggle('dark');
      });
    }
  }, [])

  useEffect(()=> {
    let status = window.localStorage.getItem('disconnected');
    if(status === 'false'){
      activate(connectors.injected);
    }
  }, [account])

  const setProvider = (type) => {
    window.localStorage.setItem("provider", type);
  };

  const connectWallet = () => {
    activate(connectors.injected);
    window.localStorage.setItem("disconnected", 'false');
    setProvider("injected");
  }

  const disconnectWallet = () => {
    window.localStorage.setItem("disconnected", 'true');
    deactivate();
  }

  return (
    <>
      <header className="light-bb">
        <Navbar expand="lg">
          <Link className="navbar-brand" to="/">
            
              {/* {({ data }) => {
                return data.theme === 'light' ? (
                  <img src={'img/logo.jpeg'} alt="logo" />
                ) : (
                  <img src={'img/logo.jpeg'} alt="logo" />
                );
              }} */}
              <img className='img-fluid img1' src={'/img/beefinance.jpg'} alt="logo" />
              <img className='img-fluid img2' src={'/img/logo.jpeg'} alt="logo" />
            
          </Link>
          
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav">
            <FontAwesomeIcon icon={faBars} className="text-warning"/>
          </Navbar.Toggle> */}
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navbar-nav mr-auto">
              <Link to="/trade/BTF-USDT" className="nav-link">
                Exchange
              </Link>
              <Link to="/markets" className="nav-link">
                Markets
              </Link>
              <Link to="/stake" className="nav-link">
                Staking
              </Link>
              <Link to="/wallet" className="nav-link">
                Wallet
              </Link>
            </Nav>
          </Navbar.Collapse>
          <Nav className="navbar-nav ml-auto" style={{flexDirection: 'row', alignItems: 'center'}}>
            <Dropdown className="header-custom-icon">
                <ThemeConsumer>
                  {({ data, update }) => (
                    <Button variant="default" onClick={update} id="darkTheme">
                      {data.theme === 'light' ? (
                        <i className="icon ion-md-moon"></i>
                      ) : (
                        <i className="icon ion-md-sunny"></i>
                      )}
                    </Button>
                  )}
                </ThemeConsumer>
              </Dropdown>
              {active?
              <button
                style={{borderRadius: 18}}
                className='btn btn-sm btn-outline-warning'>
                 <span style={{display: 'inline-flex', alignItems: 'center'}}> 
                    {account.substring(0,6)}...{account.substring(account.length-4,account.length)}
                  <i style={{fontSize: 20, marginLeft: '8px', marginRight: '8px', color: '#e7b50f'}} className='icon ion-md-radio-button-on'></i></span>
              </button>
              :
              <button 
                className='btn btn-sm btn-outline-warning' 
                style={{borderRadius: 14}}
                onClick={connectWallet} >
                Connect Wallet
              </button>
              }
              <Dropdown className="header-img-icon d-flex flex-row justify-items-center align-items-center">
                <Dropdown.Toggle variant="default">
                  <div className='text-warning'>
                    <FontAwesomeIcon icon={faEllipsis} style={{fontSize: 30}}/>
                  </div>
                  {/* <img src={'/img/avatar.svg'} alt="avatar" /> */}
                </Dropdown.Toggle>
                <Dropdown.Menu style={{position: 'absolute'}}>
                  <div className="dropdown-body">
                    <ul className="profile-nav">
                      <li className="nav-item">
                        <a href="https://beetrade.finance/" className="nav-link">
                          <i className="icon ion-md-globe"></i>
                          <span>Official Site</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <Link to="/wallet" className="nav-link">
                          <i className="icon ion-md-wallet"></i>
                          <span>My Wallet</span>
                        </Link>
                      </li>
                      <li className="nav-item" onClick={disconnectWallet}>
                        <Link to="#" className="nav-link red">
                          <i className="icon ion-md-power"></i>
                          <span>Disconnect Wallet</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
        </Navbar>
      </header>
    </>
  );
}

export default Header
