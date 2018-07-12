import React, {Component} from 'react'
import {connect} from 'react-redux'

import Loader from '../../component/Loader'
// import {articleItem} from '../../component/api/index'

import './styles.css'

class ArticleItem extends Component{
    state = {
        data: {},
        activeLoader: false
    }
    componentWillMount() {
        this.setState({activeLoader: true})
        const {match: {params}} = this.props
        const {lang, articleItem} = this.props.movie
        articleItem(params.id, lang)
            .then(res => {
                return res.json()
            })
            .then(res => {
                this.setState({
                    data: res,
                    activeLoader: false
                })

            })
    }
    render(){
        const {data} = this.state
        const {img} = this.props.movie
        return (
            <div className={'container'}>
                {
                    this.state.activeLoader && <Loader/>
                }
                <div className="">
                    <div className="jumbotron card">
                        <div className="col-md-12">
                            <div className='big-img'>
                                <img src={img + data['backdrop_path']} alt=""/>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <h1 className={'article-title'} >{data['title']}</h1>
                            <h2 className={'article-origin'} >{data['original_title']}</h2>
                            <div className="rate">Рейтинг - {data['vote_average']}</div>
                            <div className="money">Бюджет - {data['budget']}</div>
                            <div className="runtime">Длительность - {data['runtime']} мин.</div>
                            <div className="date">Дата выхода - {data['release_date']}</div>
                            <div className="homepage">Ойициальный сайт - {data['homepage']}</div>
                            <div className="popularity">Популярность - {data['popularity']}</div>
                            <div className="desc">
                                <h3>Описание:</h3>
                                <p>{data['overview']}</p>
                            </div>
                        </div>
                        <div className="gallery">
                            <div className="row">
                                <div className="col">
                                    <img src={img + data['poster_path']} alt=""/>
                                </div>
                                <div className="col">
                                    <img src={img + data['backdrop_path']} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const MapStateToProps = state => ({
    movie: state.movie
})
const MapActionToProps = dispatch => ({})

export default connect(MapStateToProps, MapActionToProps)(ArticleItem)