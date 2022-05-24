const CardUser = ({
    picture,
    description,
    name,
    email
}) => {
    return(
    <div className="cardUser">
    
        <div className="card__cover" style={
                        {
                            background: `url(${picture}) no-repeat`, 
                        }
                    }>
            
        </div>

    
        <div className="card__content">
        <div className="card__content-meta">
            <h1>{name}</h1>
            <a href={`${email}`}>{email}</a>
        </div>
        <div className="card__content-description">{description}</div>
            
        </div>
  
    </div>
    );
}

export default CardUser