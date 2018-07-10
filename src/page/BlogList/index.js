import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Loader from '../../component/Loader'

import './styles.css'

class BlogList extends Component{
    state = {
        data: [],
        img: "https://image.tmdb.org/t/p/w185_and_h278_bestv2",
        activeLoader: false
    }
    componentWillMount () {
        this.setState({activeLoader: true})
    }
    componentDidMount () {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=24f501845f94ecdd83b2fe94f252059a&language=ru-Ru&page=1',
            {
                method: "GET"
            }).then(res => {
                return res.json()
        }).then(response => {
            this.setState({
                data: response.results,
                activeLoader: false
            })
        })
    }
    render () {
        const {data, img} = this.state
        return (
            <div className="container">
                <div className="ListBlock row">
                    {
                        data.map((item, index) =>{
                            return (
                                <div
                                    className="col-lg-6 col-md-12"
                                    key={index}
                                >
                                    <div className="ItemBlock">
                                        <Link
                                            to={`/article/${item.id}`}
                                        >
                                            <div className='list__img'><img src={img + item['backdrop_path']} alt=""/></div>
                                        </Link>
                                        <div className='list__desc'>
                                            <div className="list__desc-top">
                                                <div className='list__rate'>{item.vote_average}</div>
                                                <Link
                                                    to={`/article/${item.id}`}
                                                >
                                                    <div className='list__name'>{item.title}</div>
                                                </Link>
                                                <div className='list__date'>{item.release_date}</div>
                                            </div>
                                            <div className='list__text'>{item.overview}</div>
                                            <div className="list__desc-bottom">
                                                <Link
                                                    to={`/article/${item.id}`}
                                                >
                                                    <div className='list__more'>Подробнее</div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    {
                        this.state.activeLoader && <Loader/>
                    }
                </div>
            </div>
        )
    }
}

export default BlogList