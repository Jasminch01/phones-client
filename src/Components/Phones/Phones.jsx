import { useLoaderData } from "react-router-dom";
import Phone from "../Phone/Phone";


const Phones = () => {
    const phones = useLoaderData()
    return (
        <div>
            <p> All Phones {phones.length}</p>
            {
                phones.map(phone => <Phone key={phone.id} phone = {phone}></Phone>)
            }
        </div>
    );
};

export default Phones;