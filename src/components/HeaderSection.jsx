import './HeaderSection.css'
import ItemList2 from './ItemList2';

import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

function HeaderSection({ title, txtPlus }) {
    return (  
        <section className='list-items container'>
            <nav>
                <h3>{title}</h3>
                <div className="link">
                    <p>{ txtPlus }</p>
                    <ArrowForwardIosRoundedIcon />
                    <div className="dash-circle"></div>
                </div>
            </nav>
            <div className="content">
                <ItemList2 />
                <ItemList2 />
                <ItemList2 />
                <ItemList2 />
                <ItemList2 />
                <ItemList2 />
                <ItemList2 />
                <ItemList2 />
                <ItemList2/>
            </div>
        </section>
    );
}

export default HeaderSection;