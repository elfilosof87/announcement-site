import {
  container,
  content,
  text_container,
  title,
  description,
  signup_button,
  image_container,
} from "./mobile.module.css";
import mobile from "../../public/mobile.png";

export function MobileSection() {
  return (
    <div className={container}>
      <div className={content}>
        <div className={text_container}>
          <p className={title}>The Future of Home Search</p>
          <p className={description}>
            Search any element in a real estate listing using AI & Computer
            Vision.
          </p>
          <a href="#forms">
            <button className={signup_button}>Join our waitlist</button>
          </a>
        </div>
        <div className={image_container}>
          <img src={mobile} />
        </div>
      </div>
    </div>
  );
}
