import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';

import './ItemList.css'

function ItemList2() {
    return (  
        <div className="item-list-2">
            <div className="img">
                <img src="https://cdn-612d39b2c1ac189e9851cc81.closte.com/wp-content/uploads/2022/01/Cats-Corporation-3.jpg" alt="" />
            </div>
            <div className="details">
                <div>
                    <h6>Super Mario</h6>
                    <p>
                        <CategoryOutlinedIcon/>
                        <span>12345</span>
                    </p>
                </div>
                <div className="stat">
                    <p>-287.23%</p>
                </div>
            </div>
            
        </div>
    );
}

export default ItemList2;