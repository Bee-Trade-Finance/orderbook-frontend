import { ThemeConsumer } from '../context/ThemeContext';
import { FaExchangeAlt, FaRegListAlt, FaChessBoard, FaWallet } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import '../assets/scss/module/_bottom-nav.scss'
const BottomNavTabs = () => {
    let history = useHistory();
    return <ThemeConsumer>
        {({data}) => {
            return <div className={`bottom-nav-tabs-container ${data.theme} text-warning`}>
                <div onClick={() => history.push('/trade/BTF-USDT')}>
                    <FaExchangeAlt />
                    <p>Exchange</p>
                </div>
                <div onClick={() => history.push('/markets')}>
                    <FaRegListAlt />
                    <p>Markets</p>
                </div>
                <div onClick={() => history.push('/stake')}>
                    <FaChessBoard />
                    <p>Staking</p>
                </div>
                <div onClick={() => history.push('/wallet')}>
                    <FaWallet />
                    <p>Balances</p>
                </div>
            </div>
        }}
    </ThemeConsumer>
     
}

export default BottomNavTabs