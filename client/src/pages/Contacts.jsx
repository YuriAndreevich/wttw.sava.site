
// import ContactsForm from "components/contactsForm";

import "assets/css/contacts.scss";

import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";

function contacts() {
  return (
    <div className="contacts">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2257.5791772260895!2d28.638863466113694!3d55.53969897901484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0x1f369eddac7475ac!2z0KbQtdC90YLRgCDRgdC-0YbQuNCw0LvRjNC90L7Qs9C-INC-0LHRgdC70YPQttC40LLQsNC90LjRjw!5e0!3m2!1sru!2sby!4v1607510392182!5m2!1sru!2sby"
        width="600"
        height="450"
        frameBorder="0"
        className="contacts-map"
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      ></iframe>
      <div className="contacts-items">
        <div className="contacts-item">
          <LocalPhoneIcon color="main" />
          <p className="contacts-item-title">+375 (214) 52-28-40</p>
          <p className="contacts-item-title">+375 (214) 50-57-42</p>
        </div>
        <div className="contacts-item">
          <MailIcon color="main" />
          <p className="contacts-item-title">novopolotsk-ntcson@ntcson.by</p>
          <p className="contacts-item-title">info@ngpk.by</p>
        </div>

        <div className="contacts-item">
          <AddLocationAltIcon color="main" />
          <p className="contacts-item-title">
            211440 г. Новополоцк, ул. Парковая, 20 / 137
          </p>
          <p className="contacts-item-title">
            211440 г. Новополоцк, ул. Ктаторова, 16
          </p>
        </div>
      </div>

      {/* <ContactsForm /> */}
    </div>
  );
}

export default contacts;
