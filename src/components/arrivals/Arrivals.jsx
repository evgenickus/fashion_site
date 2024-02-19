import Card from '../card/Card'
import './arrivals.css'
import cat01Ing from './../../img/categories/cat-01.jpg'
import cat02Ing from './../../img/categories/cat-02.jpg'
import cat03Ing from './../../img/categories/cat-03.jpg'




const Arrivals = () => {
  return (
    <section className="arrivals">
      <div className="container">
        <div className="arrivals_header">
          <h2 className="title-2">NEW ARRIVALS</h2>
          <div className="arrivals_cards">
            <Card content={cat01Ing} title='Hoodies & Sweetshirt' />
            <Card content={cat02Ing} title='Coats & Parkas' />
            <Card content={cat03Ing} title='Tees & T-Shirt' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Arrivals