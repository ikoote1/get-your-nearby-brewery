import PropTypes from 'prop-types';
import { BsArrowRightCircle } from 'react-icons/bs';
import imag from '../images/d.jpg';
import './styling/details.css';

export default function Detail({ item }) {
  return (
    <div className="map">
      <div className="text">
        <img src={imag} alt="imag" />
        <h2>{item.name}</h2>
      </div>
      <ul className="list">
        <li>
          <span>Name</span>
          <span>{item.name}</span>
        </li>
        <li>
          <span>State</span>
          <span>{item.state}</span>
        </li>
        <li>
          <span>City</span>
          <span>{item.city}</span>
        </li>
        <li>
          <span>Street</span>
          <span>{item.street}</span>
        </li>
        <li>
          <span>Brewery-type</span>
          <span>{item.brewery_type}</span>
        </li>
        <li>
          <span>Postal_code</span>
          <span>{item.postal_code}</span>
        </li>
        <li>
          <span>Address</span>
          <span>{item.address_1}</span>
        </li>
        <li>
          <span>Longitude</span>
          <span>{parseFloat(item.longitude).toFixed(4)}</span>
        </li>
        <li>
          <span>Latitude</span>
          <span>{parseFloat(item.latitude).toFixed(4)}</span>
        </li>
        <li>
          <span>Explorer</span>
          <a href={item.website_url}>
            <BsArrowRightCircle />
          </a>
        </li>
      </ul>
    </div>
  );
}

Detail.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    state: PropTypes.string,
    city: PropTypes.string,
    longitude: PropTypes.string,
    latitude: PropTypes.string,
    address_1: PropTypes.string,
    Phone: PropTypes.string,
    postal_code: PropTypes.string,
    website_url: PropTypes.string,
    street: PropTypes.string,
    brewery_type: PropTypes.string,
  }).isRequired,
};
