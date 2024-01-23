import React from 'react';
import main from '../../assets/image/main.jpg';
import styled from 'styled-components';
import { Logo } from '../index'

function Landing() {
    return (
        <Wrapper>
            <main>
                <nav>
                    <Logo />
                </nav>

                <div className='container page'>
                    {/* info */}
                    <div className='info'>
                        <h1>Nigerian Based <span>Service</span> Provider</h1>
                        <p>
                            VisCorner is a platform that connects service providers with potential customers around them. Thousands of customers come to our website to tell us what they need and we forward those requests to service providers near them.
                        </p>
                        <button className='btn btn-primary'>Login/Register</button>
                    </div>
                    <img src={main} alt='job junt' className='img main-img' />
                </div>

            </main>
        </Wrapper>

    )
};

    // <Router>
    //   <div>
    //     <Navbar />
    //     <Landing />
    //     <CustomerRequests />
    //     <Footer />
    //   </div>
    // </Router>

const Wrapper = styled.main`
main {
    background-color: aliceblue;
}
nav {
    width:90vw;
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    span{
    font-weight: 500;
    font-size: 36px;
    align-items: center;
    justify-content: center;
    margin-top: 80px;
        margin-right: 100px;
    }
    .logo{
        margin-top: 100px;
        margin-right: 30px;
        max-width: 100px; /* adjust this value to your desired size */
        height: 100px;
    }
}
.page {
    min-height:calc(100vh - 20vh);
    display: grid;
    align-items: center;
    margin-top: 2rem;
}
h1 {
    font-weight: 700;
    span{
        color:#3b82f6;
    } 
}
p{
    color: var(--grey-600);
}
.main-img{
    display: none;
}
@media (min-width:992px){
    .page{
        grid-template-columns: 1fr 1fr;
        column-gap: 3rem;
}
.main-img {
    display: block;
}
}
`;

export default Landing;


