import "./Footer.scss";
import databiz from "../assets/client-databiz.svg";
import audio from "../assets/client-audiophile.svg";
import meet from "../assets/client-meet.svg";
import maker from "../assets/client-maker.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <img id="data" src={databiz} />
      <img id="audio" src={audio} />
      <img id="meet" src={meet} />
      <img id="maker" src={maker} />
    </footer>
  );
};
