import './HeaderSection.css'

import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

function HeaderSection({ title, txtPlus }) {
    return (  
        <section className='list-items container'>
            <nav>
                <h3>{title}</h3>
                <div className="link">
                    <a>{ txtPlus }</a>
                    <ArrowForwardIosRoundedIcon/>
                </div>
            </nav>
            <div className="content">

            </div>
        </section>
    );
}

export default HeaderSection;