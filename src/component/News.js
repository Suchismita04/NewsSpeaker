import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



const News = (props) => {



  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }



  const updateNews = async () => {

    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=5d40e4fa2b6245c2b43167f7616688d9&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    setLoading(true)

    let parsedData = await data.json()

    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
  }
  useEffect(() => {
    updateNews()
  }, [])

  const fetchMoreData = async () => {
    setPage(page + 1)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=5d40e4fa2b6245c2b43167f7616688d9&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
    setLoading(false)
  };
  return (
    <>
      {loading && <  Spinner />}
      <h2 className='text-center'>NewsSpeaker-Top  {capitalizeFirstLetter(props.category)} Headlines</h2>

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">

          <div className="row">
            {/* <Navbar parentCallback={handleCallback}/> */}
            {articles.map((element, index) => {
              const key = `${element.url}-${element.id}`
             
              return <div className='col-md-4' key={key}>
                <NewsItem title={element.title ? element.title : ""} description={element.description} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
              </div>
            })}

          </div>
        </div>

      </InfiniteScroll>

    </>

  )

}

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general"


}
News.propTypes = {
  country: PropTypes.string.isRequired,
  pageSize: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired

}

export default News
