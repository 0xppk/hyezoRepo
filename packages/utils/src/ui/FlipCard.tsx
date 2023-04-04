export default function FlipCard() {
  return (
    <div className="flipcard">
      <div className="flipcard_content">
        <div className="flipcard_front">
          <h3 className="flipcard_title">Front</h3>
          <p className="flipcard_subtitle">TIme for some</p>
        </div>
        <div className="flipcard_back">
          <p className="flipcard_body">Back</p>
        </div>
      </div>
    </div>
  );
}
