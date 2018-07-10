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
                <div className="row">
                    <div className="col-md-4">
                        <img className={'big-img'} src={img + data['backdrop_path']} alt=""/>
                    </div>
                    <div className="col-md-8">
                        <h1 className={'article-title'} >{data['title']}</h1>
                        <h2 className={'article-origin'} >{data['original_title']}</h2>
                        <p>Бюджет - {data['budget']}</p>
                        <div className="homepage">Ойициальный сайт - {data['homepage']}</div>
                        <h3>Описание:</h3>
                        <div className="desc">{data['overview']}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ArticleItem