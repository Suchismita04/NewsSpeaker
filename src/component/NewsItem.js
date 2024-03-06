import React from 'react'

const NewsItem =(props)=> {

 
    let { title, description, imgUrl, newsUrl, author, date, source } = props  // these are props

    return (
      <div className='my-3'>
        <div className="card">
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ "left": "85%","zIndex": "1" }}>
            {source}</span>

          <img src={!imgUrl ? "https://images.bild.de/65956553d774b2714ac40a3e/01b56a4859c0f92dd8176ff7fc969811,6d4de8f0?w=1280" : imgUrl} className="card-img-top" alt="Error" />
          <div className="card-body">
            <h5 className="card-title"> {title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-body-secondary">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  
}

export default NewsItem
