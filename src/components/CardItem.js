import { Card } from 'react-bootstrap'

function CardItem(props) {

    return (
    <Card bg='dark' text='white' style={{ width: '18rem' , alignItems: 'center'}}>
    <Card.Img variant="top" src={props.src}  style={{ width: '5rem' , height: '5rem'}}/>
    <Card.Body>
        <Card.Title>{props.id.toUpperCase()}</Card.Title>
        <Card.Text>
        EUR {props.price}
        </Card.Text>
    </Card.Body>
    </Card>
    );
}

export default CardItem;
