import React from "react"

const LocalSuppliers = (props) => {
  return (
    <section className="container">
      <h3>Local suppliers</h3>
      <div className="row">
        <div className="col s5">
          <h4>
            <strong>Commonsense Organics</strong>
          </h4>
          <h5>About:</h5>
          <p>
            The seed for Commonsense was sown in 1975. Jim Kebbell and Marion
            Wood (and a bunch of other hippie dreamers) bought some land in Te
            Horo and named it Common Property. The idea was to grow vegetables
            as a way to connect young and marginalised people with the land.
          </p>
          <h5>Website:</h5>
          <a target="_blank" href="https://commonsenseorganics.co.nz/">
            <p>commonsenseorganics.co.nz</p>
          </a>
        </div>
        <div className="col s1"></div>

        <div className="col s5">
          <h4>
            <strong>LOKAI</strong>
          </h4>
          <h5>About:</h5>
          <p>LOKAI connects local growers to the community.</p>
          <p>
            Order vege boxes tailored to bring you produce from local growers.
            Each LOKAI Veg Box is carefully crafted to bring you the best of
            what is seasonally available locally.
          </p>
          <p>Orders are done online through the LOKAI app.</p>
          <h5>Website:</h5>
          <a target="_blank" href="https://lokai.nz/">
            <p>lokai.nz</p>
          </a>
        </div>

        <div className="col s5">
          <h4>
            <strong>Urban Harvest</strong>
          </h4>
          <h5>About:</h5>
          <p>
            Urban Harvest is all about feeding you well. That means supplying
            you and your team or family with the freshest, tastiest, local
            fruit, vegetables, milk, eggs and delicious catering to keep you
            healthy, productive and happy.
          </p>
          <h5>Website:</h5>
          <a target="_blank" href="https://urbanharvest.co.nz/">
            <p>urbanharvest.co.nz</p>
          </a>
        </div>
        <div className="col s1"></div>

        <div className="col s5">
          <h4>
            <strong>Newtown Green Grocer</strong>
          </h4>
          <h5>About:</h5>
          <p>
            Newtown Green Grocer brings you the freshest produce, including a
            variety of seasonal items, at prices that can’t be beat.
          </p>
          <h5>Website:</h5>
          <a target="_blank" href="http://newtowngreengrocer.co.nz/">
            <p>newtowngreengrocer.co.nz</p>
          </a>
        </div>
      </div>
    </section>
  )
}

export default LocalSuppliers
