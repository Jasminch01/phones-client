
const Phone = ({phone}) => {
const {name, description, price, image} = phone;
    return (
        <div>
            <h3>{name}</h3>
            <img src={image} alt="" />
            <p>{description}</p>
            <p>price : ${price}</p>
        </div>
    );
};

export default Phone;