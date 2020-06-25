import App from '../App';
import {connect} from 'react-redux';
import {showLoading, hideLoading, requestProductsSaga, addToCart, delFromCart} from '../actions/productActions';

import {RootState} from '../index';

const mapStateToProps = (state: RootState) => ({
	loading: state.product.loading,
	products: state.product.products,
	cart: state.product.cart,
});

const mapDispatchToProps = {
	showLoading,
	hideLoading,
	requestProductsSaga,
	addToCart,
	delFromCart,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(App);
