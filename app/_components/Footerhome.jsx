import { MdEmail } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineFacebook } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Footerhome() {
  return (
    <div id="contact" className="Footerbar">
      <div className="Footlogodiv">
        <img className="Footlogo" src="logo.png" alt="" />
      </div>

      <div className="Fotcont1">
        <div className="footcontact">
          <div>Contact</div>
          <div className="Footphone">
            {" "}
            <MdEmail size={32} />- Someone@example.com
          </div>
          <div className="Footphone">
            {" "}
            <MdLocalPhone size={32} />- 123456789{" "}
          </div>
        </div>
      </div>

      <div className="Footsoc">
        <div>
          {" "}
          <FaInstagram size={32} />
        </div>
        <div>
          <AiOutlineFacebook size={32} />
        </div>
        <div>
          <FaSquareXTwitter size={32} />
        </div>
      </div>
    </div>
  );
}
