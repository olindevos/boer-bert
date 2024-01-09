export default function Divacre() {
  return (
    <div id="activiteiten" className="divacre">
      Activiteiten en restaurants
      <div className="actcards">
        <div className="card1"></div>
        <div className="card2"></div>
        <div className="card3"></div>
      </div>
      <div className="meerzien">
        <div className="mz">Meer zien</div>
        <a href="actrr.html">
          {" "}
          <div className="meerzienknop"></div>{" "}
        </a>
      </div>
      <div className="rescards">
        <div className="rescard1"></div>
        <div className="rescard2"></div>
        <div className="rescard3"></div>
      </div>
    </div>
  );
}
