import * as React from 'react';

const Header = (productCount) => {
    return <header>
        <strong>Lumav</strong>
        <div>
            Products in cart: {productCount?.productCount}
        </div>
    </header>;
};

export default Header