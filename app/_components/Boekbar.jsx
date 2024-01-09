export default function Boekbar() {
  return (
    <section className="boekbar">
      <div className="boekoptiesbar">
        <div className="boekopties">
          <div className=" data ">
            data
            <div className="dvt"> van - </div>
          </div>

          <div className=" datalijn "></div>

          <div className=" soortaccomodatie">
            soort acomodatie
            <div className="stc"> tent - camper ETC.</div>
          </div>

          <div className=" soortacclijn"></div>

          <button className="boeken" type="button">
            <a href="/reserveren"></a> boeken
          </button>
        </div>
      </div>
    </section>
  );
}
