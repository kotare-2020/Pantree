import React from 'react'

const LocalSuppliers = props => {
  return (
    <section className="container">
      <h1>Local Suppliers</h1>
      <div className="row">
        <div className="col s5">
          <h4>
            <strong>Commonsense Organics</strong>
          </h4>
          <h5>Address:</h5>
          <p>147 Tory Street, Te Aro, Wellington 6011</p>
          <p>37 Rongotai Road, Kilbirnie, Wellington 6022</p>
          <h5>Opening Hours:</h5>
          <p>Monday - Friday: 8am - 7pm</p>
          <p>Saturday - Sunday: 9am - 6pm</p>
          <h5>Website:</h5>
          <a href="https://commonsenseorganics.co.nz/">
            <p>commonsenseorganics.co.nz</p>
          </a>
        </div>

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
          <p>
            Can't get to your veg market? Choose what you want and how you want
            it.
          </p>
          <p>Orders are done online through the LOKAI app.</p>
          <h5>Website:</h5>
          <a href="https://lokai.nz/">
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
          <h5>Email:</h5>
          <p>info@urbanharvest.co.nz</p>
          <h5>Phone:</h5>
          <p>021 440 487</p>
          <h5>Website:</h5>
          <a href="https://urbanharvest.co.nz/">
            <p>urbanharvest.co.nz</p>
          </a>
        </div>

        <div className="col s5">
          <h4>
            <strong>Newtown Green Grocer</strong>
          </h4>
          <h5>About:</h5>
          <p>
            Newtown Green Grocer brings you the freshest produce, including a
            variety of seasonal items, at prices that can’t be beat.
          </p>
          <h5>Address:</h5>
          <p>100 Riddiford Street , Newtown Wellington</p>
          <h5>Phone:</h5>
          <p>04 3899 555</p>
          <h5>Website:</h5>
          <a href="http://newtowngreengrocer.co.nz/">
            <p>newtowngreengrocer.co.nz</p>
          </a>
        </div>
      </div>
    </section>
  )
}

export default LocalSuppliers
