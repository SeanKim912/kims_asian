import "./Products.css";
import kimchi from '../../images/kimchi_closeup.png';
import kbeauty from '../../images/kbeauty.png';
import food from '../../images/asian_cuisine.png';

function Products() {
    return (
        <div className="products-container">
            <div className="products-category" style={{width: "33vw"}}>
                <div
                    className="product-image"
                    style={{
                        backgroundImage: `url(${kimchi})`,
                        width: "33vw"
                }}>
                    <div className="hover-gradient">
                        <div className="hover-text">
                            <h2>Kimchi</h2>
                            <p>Authentic homemade kimchi sold to you fresh!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="products-category" style={{width: "34vw"}}>
                <div
                    className="product-image"
                    style={{
                        backgroundImage: `url(${kbeauty})`,
                        width: "34vw"
                }}>
                    <div className="hover-gradient">
                        <div className="hover-text">
                            <h2>K-Beauty</h2>
                            <p>The latest in Korean skincare and cosmetics!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="products-category" style={{width: "33vw"}}>
                <div
                    className="product-image"
                    style={{
                        backgroundImage: `url(${food})`,
                        width: "33vw"
                }}>
                    <div className="hover-gradient">
                        <div className="hover-text">
                            <h2>Food from all of Asia</h2>
                            <p>We carry food and ingredients from Korea, Japan, and more!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;
