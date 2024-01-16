import {
  container,
  content,
  image_container,
  button_container,
  contact_button,
  signup_button,
  gradient_block,
} from "./header.module.css";
import fullLogo from "../../public/full-logo.png";

export function Header() {
  return (
    <div className={container}>
      <div className={content}>
        <div className={gradient_block}></div>
        <div className={image_container}>
          <img src={fullLogo} />
        </div>
        <div className={button_container}>
          <button className={contact_button}>Contact us</button>
          <button className={signup_button}>Join our waitlist</button>
        </div>
      </div>
    </div>
  );
}