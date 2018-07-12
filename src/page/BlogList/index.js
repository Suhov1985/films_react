import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import Loader from '../../component/Loader'

import './styles.css'

class BlogList extends Component{
    state = {
        data: [],
        activeLoader: false
    }
    componentWillMount () {
        this.setState({activeLoader: true})
    }
    componentDidMount () {
        const {lang, blogItem} = this.props.movie
        blogItem(lang)
            .then(res => {
                return res.json()
            })
            .then(response => {
                this.setState({
                    data: response.results,
                    activeLoader: false
                })

            })
    }
    render () {
        const {data} = this.state
        const {img} = this.props.movie
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

const MapStateToProps = state => ({
    movie: state.movie
})
const MapActionToProps = dispatch => ({

})

export default connect(MapStateToProps, MapActionToProps)(BlogList)