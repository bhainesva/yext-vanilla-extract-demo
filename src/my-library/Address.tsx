import { addressStyle } from "./Address.css";

interface Props {
  className?: any
}

const Address: React.FC<Props> = ({ className }) => {
  return (
		<div className={`Address ${addressStyle}`}>
			<div className="Address-row">
				<span className="Address-street-1">
					1101 Wilson Blvd
				</span>
			</div>
			<div className="Address-row">
				<span className="Address-city">Arlington</span>, <span className="Address-state">VA</span> <span className="Address-zip">22209</span>
			</div>
			<div className="Address-row">
				<span className="Address-country">
					US
				</span>
			</div>
		</div>
  );
};

export default Address;
