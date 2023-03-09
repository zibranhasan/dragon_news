import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { FaBookmark, FaEye, FaShareAlt, FaStar } from "react-icons/fa";

const NewsSummaryCart = ({news}) => {
    const {_id, title, author, details, image_url, total_view, rating} = news;
    console.log(news);
    return (
        <Card className="mb-5">
      <Card.Header className='d-flex justify-content-between align-items'>
         <div className='d-flex'>
            <Image  
            roundedCircle
            src={author.img}
            style={{height:'60px'}}
            >
            </Image>
            <div>
                <p>{author.name}</p>
                <p>{author.published_date}</p>
            </div>
         </div>
         <div>
            <FaBookmark></FaBookmark>
            <FaShareAlt></FaShareAlt>
         </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img varient='top' src={image_url}/>
        <Card.Text>
        {
            details.length > 250 ?
            <>{details.slice(0, 250) + '...' } <Link to={`/news/${_id}`}>Read More</Link></>
            :
            <>
                {details}
            </>
        }
        </Card.Text>
        
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between">
       <div>
        <FaStar className='text-warning me-2'></FaStar>
        <span>{rating?.number}</span>
       </div>
        <div>
           <FaEye className='me-2'></FaEye>
          <span>{total_view}</span>

        </div>
      </Card.Footer>
    </Card>
    );
};

export default NewsSummaryCart;