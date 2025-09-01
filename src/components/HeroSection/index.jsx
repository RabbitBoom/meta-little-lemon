import Dialog from "components/Dialog";
import ReserveForm from "components/ReserveForm";
import f1 from "images/f1.jpg";
import "./index.css";
function HeroSection() {
  return (
    <div className="hero-section">
      <h1>Little Lemon</h1>
      <h2>Chicago</h2>
      <div className="hero-desc">
        <div className="flex-1">
          <p className="hero-info">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
        </div>
        <img src={f1} alt="Chicago" />
      </div>
      <Dialog
        trigger={
          <button
            className="hero-button"
            type="button"
            aria-label="Reserve a table"
          >
            Reserve a table
          </button>
        }
      >
        <ReserveForm />
      </Dialog>
    </div>
  );
}

export default HeroSection;
