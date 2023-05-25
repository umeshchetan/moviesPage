import React, { useState } from 'react';
import { movies } from './ApiDataComp';
import { Card, Button } from 'react-bootstrap';
import './HomeComp.css'
import MovieDetailComp from './MovieDetailComp';

export default function HomeComp({ formdata }) {
    const [data, setData] = useState(movies)
    console.log(movies)
    const [show, setShow] = useState(false)
    const [movie, setMovie] = useState('')
    const handlePage = (item) => {
        setMovie(item)
        setShow(true)
    }
    return (
        <div className='container-fluid'>
            <div className='container'>
                <div className='d-flex justify-content-between align-items-center'>
                    <h1 className='heading'>Action Movies</h1>
                    <h1 className='heading2'><span>Welcome:</span> {formdata.email}</h1>
                </div>
                {show ? <MovieDetailComp movie={movie} setShow={setShow} /> : ''}

                <div className='parent row align-items-center gap-3 '>
                    {data.map((items, id) => {
                        return (
                            <div className='col-md-2 cards' >
                                <div onClick={(id) => handlePage(items)}>
                                    <img src={items.poster} />
                                </div>
                                <div>
                                    <h3 className='title'>{items.title}</h3>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
