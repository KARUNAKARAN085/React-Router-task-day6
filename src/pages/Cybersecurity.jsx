import Navigation from '../Components/Navigation'

const Cybersecurity = () => {


  const cardData = [
    {
      id:3,
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA-qzSNQUpJwc48BAyHqLwCCRgQXK-uFe9Lu9GLQVcpWt7jdEqvo_R0Sr6MQ&s",
      title:"Cybersecurity",
      desc:"Learn to protect systems",
    },
  ]

  return (
    <>
      <Navigation/>
      <section className="">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4" style={{justifyContent: 'space-evenly'}}>
          {
          cardData.map((data) => (
            <>
              <div className="col">
                <div className="card h-100" style={{boxShadow: '1px 2px'}}>
                  <img src={data.img} className='card-img-top' alt="..." />
                  <div className="card-body text-center">
                  <p class="card-text text-center">{data.desc}</p>
                  </div>
                </div>
              </div>
            </>
          ))
        }
          </div>
        </div>
      </section>
    </>
  )
}

export default Cybersecurity