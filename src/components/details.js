import PropTypes from 'prop-types';
// import { BsArrowRightCircle } from 'react-icons/bs';

export default function Detail({ item }) {
  return (
    <div className="mt-3">
      <div>
        <h2 className="text-center mb-3">Crypto Currency Data</h2>
      </div>
      <ul className="list-unstyled list-group mb-3">
        <li className="list-group-item d-flex justify-content-between text-white fw-bold">
          <span>Name</span>
          <span>{item.name}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between text-white fw-bold">
          <span>State</span>
          <span>{item.state}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between text-white fw-bold">
          <span>City</span>
          <span>{item.city}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between text-white fw-bold">
          <span>Street</span>
          <span>{item.street}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between text-white fw-bold">
          <span>Brewery-type</span>
          <span>{item.brewery_type}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between text-white fw-bold">
          <span>Postal-code</span>
          <span>{item.postal_code}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between text-white fw-bold">
          <span>Address</span>
          <span>{item.address_1}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between text-white fw-bold">
          <span>Longitude</span>
          <span>{parseFloat(item.longitude).toFixed(4)}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between text-white fw-bold">
          <span>Latitude</span>
          <span>{parseFloat(item.latitude).toFixed(4)}</span>
        </li>
        {/* <li className="list-group-item d-flex justify-content-between text-white fw-bold">
          <span>Vwap24Hr</span>
          <span>{parseFloat(item.vwap24Hr).toFixed(4)}</span>
        </li> */}
        <li className="list-group-item d-flex justify-content-between text-white fw-bold">
          <span>Explorer</span>
          <a href={item.website_url} target="_blank" rel="noopener noreferrer">
            <BsArrowRightCircle className="text-white fs-4" />
          </a>
        </li>
      </ul>
    </div>
  );
}

Detail.propTypes = {
  item: PropTypes.shape({
    rank: PropTypes.string,
    name: PropTypes.string,
    symbol: PropTypes.string,
    supply: PropTypes.string,
    maxSupply: PropTypes.string,
    marketCapUsd: PropTypes.string,
    volumeUsd24Hr: PropTypes.string,
    priceUsd: PropTypes.string,
    changePercent24Hr: PropTypes.string,
    vwap24Hr: PropTypes.string,
    explorer: PropTypes.string,
  }).isRequired,
};
