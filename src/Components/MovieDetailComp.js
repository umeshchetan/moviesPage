import React, { useState } from 'react';
import './MovieDetailComp.css';

function MovieDetailComp({ movie, setShow }) {

    return (
        <div className='container-fluid'>
            <div className='container'>
                <div className='movieDet d-flex gap-4'>
                    <div className='moviImg'>
                        <img src={movie.poster} />
                    </div>
                    <div>
                        <h1 className='colorSame headTitle' >{movie.title}</h1>
                        <div className='d-flex gap-5'>
                            <p><span className='imdb'>IMDB </span> {movie.imdb_rating}</p>
                            <p><span className='mx-2'><i class="fa-sharp fa-solid fa-clock"></i></span>{movie.length}</p>
                        </div>
                        <div>
                            <p>{movie.overview}</p>
                        </div>
                        <div>
                            <div className='d-flex gap-5'>
                                <p>Genre: <span className='colorSame'>{movie.genres + ","}</span></p>
                                <p>Released: <span className='colorSame'>{movie.released_on}</span></p>
                            </div>
                            <div>
                                <p>Stars: <span className='colorSame'>{movie.cast + ","}</span></p>
                                <p>Director: {movie.director + ","}</p>
                                <p>Country: <span className='colorSame'>United States</span></p>
                            </div>
                        </div>

                    </div>
                    <div className='close'>
                        <i class="fa-solid fa-xmark" onClick={() => setShow(false)}></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieDetailComp;