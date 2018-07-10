import React, {Component} from 'react'

import Loader from '../../component/Loader'
import {articleItem} from '../../component/api/index'

import './styles.css'

class ArticleItem extends Component{
    state = {
        data: {},
        img: "https://image.tmdb.org/t/p/w185_and_h278_bestv2",
        activeLoader: false
    }
    componentWillMount() {
        this.setState({activeLoader: true})
        const {match: {params}} = this.props
        articleItem(params.id)
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
        const {data, img} = this.state
        return (
            <div className={'container'}>
                {
                    this.state.activeLoader && <Loader/>
                }
                <div className="">
                    <div className="jumbotron card">
                        <div className="col-md-12">
                            <div className='big-img'>
                                <img src={img + data['backdrop_path']} alt="Photo"/>
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
                            <h3>Описание:</h3>
                            <div className="desc">{data['overview']}</div>
                        </div>
                        <div className="gallery">
                            <div className="col">
                                <img src={img + data['poster_path']} alt="Photo"/>
                                <img src={img + data['poster_path']} alt="Photo"/>
                                <img src={img + data['poster_path']} alt="Photo"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ArticleItem