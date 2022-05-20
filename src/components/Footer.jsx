import './Footer.css'

import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SendIcon from '@mui/icons-material/Send';

function Footer() {
    return (  
        <footer>
            <div className='links'>
                <article>
                    <header className='logo'>
                        <img src="https://images.ctfassets.net/hrltx12pl8hq/3j5RylRv1ZdswxcBaMi0y7/b84fa97296bd2350db6ea194c0dce7db/Music_Icon.jpg" alt="" />
                        <h5>NFT ART DZ</h5>
                    </header>
                    <section>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur fuga magnam ducimus neque minima beatae placeat esse voluptatibus. Iusto, maiores!</p>
                        <ul className="social-media">
                            <li><FacebookRoundedIcon /></li>
                            <li><TwitterIcon /></li>
                            <li><EmailIcon /></li>
                            <li><SportsEsportsIcon /></li>
                        </ul>
                    </section>
                </article>
                <article>
                    <header>
                        <h5>My Account</h5>
                    </header>
                    <section>
                        <ul className="list">
                            <li>Authors</li>
                            <li>Collection</li>
                            <li>Author Profile</li>
                            <li>Create Collection</li>
                        </ul>
                    </section>
                </article>
                <article>
                    <header>
                        <h5>Ressources</h5>
                    </header>
                    <section>
                        <ul className="list">
                            <li>Help &amp; Support</li>
                            <li>Live Auctions</li>
                            <li>Item Details</li>
                            <li>Activity</li>
                        </ul>
                    </section>
                </article>
                <article>
                    <header>
                        <h5>Company</h5>
                    </header>
                    <section>
                        <ul className="list">
                            <li>About Us</li>
                            <li>Contact Us</li>
                            <li>Our Blog</li>
                            <li>Discover</li>
                        </ul>
                    </section>
                </article>
                <article>
                <header>
                    <h5>Subscribe Us</h5>
                </header>
                <section className='subscribe'>
                    <input type="text" name="" id="" placeholder='info@youremail.com' />
                    <button>
                        <SendIcon/>
                    </button>
                </section>
                </article>
            </div>
            <div className='copy-right'>
                <p>&copy; 2022 NFT ART DZ | All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;