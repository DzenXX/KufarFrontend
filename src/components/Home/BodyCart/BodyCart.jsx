import React from 'react';
import noPhoto from '../../../styles/img/noPhoto.jpg'
import { Link } from 'react-router-dom';

function BodyCart(props) {

   // if ()
   // React.useEffect(() => {

   //    console.log(props.imageUrl)

   // }, [])

   React.useEffect(() => {
       console.log(props.imageUrl)
  
    }, []);


   return (
      
      <div className="body__cart body-cart">
<Link className='body-cart__wrapper'
to={{
pathname: `/fullPost/${props.id}`
}}
>
<div className="body-cart__image">
{/* <img src={`http://localhost:4444${props.imageUrl}`} alt="img" /> */}
{
props.imageUrl ? <img src={`http://localhost:4444${props.imageUrl}`} alt="avatar" /> : <img src={noPhoto} alt="img" />
}
</div>
<div className="body-cart__title">{props.place}, 16 октября</div>
<div className="body-cart__title">{props.title}</div>
<div className="body-cart__price">{props.price} руб</div>
</Link>

      </div>
      // </Link>
   )
}

export default BodyCart