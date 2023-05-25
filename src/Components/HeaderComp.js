import React from 'react';
import './HeaderComp.css'

function HeaderComp(props) {
    return (
        <div className='container-fluid head'>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-6 col-md-4'>
                        <h1 className='logo'>Wookie</h1>
                    </div>
                    <div className='col-md-8 d-flex gap-4 justify-content-center align-items-center'>
                        <div className='listsSec'>
                            <ul className='d-flex justify-content-around gap-3'>
                                <li>Home</li>
                                <li>Genre</li>
                                <li>Comedy</li>
                                <li>Acton</li>
                                <li>Romance</li>
                                <li>Top IMDB</li>
                            </ul>
                        </div>
                        <div className='search d-flex justify-content-between align-items-center'>
                            <input type='text' placeholder='Enter keywords here...' />
                            <i class="fa-sharp fa-solid fa-magnifying-glass" id='icon'></i>
                        </div>
                        <div>
                            <button className='btn'>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default HeaderComp;