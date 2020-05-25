import React from 'react';
import { Card, Image, Icon, Button } from 'semantic-ui-react';
/*import cls from "./../CSS/BookCard.module.css"*/





class BookCard extends React.Component {


    render() {

        const {title, author, price, image, addToCart, addedCount, number} = this.props;




            return (
                <div class="carta">
                    <div className="card-image">
                        <img class="imageS" src={image} alt={title}/>
                    </div>
                    <Card.Content>
                        <Card.Header>{title}</Card.Header>
                        <Card.Meta>
                            <span className="date">{author}</span>
                        </Card.Meta>
                    </Card.Content>
                    <Card.Content extra>
                        <a>
                            <Icon name="rub"/>
                            {/*<span className={cls.blr}>Br</span>*/}
                            {price}
                        </a>
                        <p> Заказать по телефону <phone class="ggg">{number}</phone></p>
                    </Card.Content>
                    <div class='ButtonCard'>
                        <Button class='ButtonCard' onClick={ (
                            addToCart.bind(this, this.props)

                        )  }>
                            Добавить в корзину {addedCount > 0 && `(${addedCount})`}
                        </Button>

                    </div>

                </div>
            );
        }




}

export default BookCard;
