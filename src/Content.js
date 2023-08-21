import "./styles.css";
import playstore from "./google-play-badge.png";
import appstore from "./AppStoreBadge.svg";
export default function Content() {
  return (
    <div className="content">
      <h3>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </h3>
      <p className="explain">
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book.
      </p>
      <div style={{ display: "flex" }}>
        <img src={playstore} />
        <img src={appstore} />
      </div>
    </div>
  );
}
