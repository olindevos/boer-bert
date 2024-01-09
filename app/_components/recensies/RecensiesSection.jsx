import Recensie from "./Recensie";

export default function RecensiesSection() {
  return (
    <section id="recensies">
      <div className="recensiesbar">
        <div className="pt-16 pb-32 bg-groen text-wit">
          <h1 className="text-center">Recensies</h1>
          <div className="flex gap-16 justify-center flex-wrap mt-8">
            <Recensie
              name="Bert"
              stars={0.5}
              body="Lorem ipsum dolor sit amet"
            />
            <Recensie
              name="Bertine"
              stars={3}
              body="Lorem ipsum dolor sit amet"
            />
            <Recensie
              name="Gert"
              stars={4.5}
              body="Lorem ipsum dolor sit amet"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
