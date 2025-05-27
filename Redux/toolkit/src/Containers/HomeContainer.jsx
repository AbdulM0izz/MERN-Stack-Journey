import { connect } from 'react-redux';
import Home from '../components/Home';
import { Add_To_Cart } from '../Services/Constants'
import { addToCart } from '../Services/Actions/Action';

const mapStateToProps = state => ({
    cartData: state.cartitems.cartdata
});

const mapDispatchToProps = dispatch => ({
    addToCartHandler: data => dispatch(addToCart(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
