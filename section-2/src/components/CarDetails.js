

const CarDetails = ({brand, color, km, newCar}) => {
  return (
    <div>
        <h2>Car Details: </h2>
        <ul>
            <li>Brand: {brand}</li>
            <li>Color: {color}</li>
            <li>Km: {km}</li>
        </ul>
        {newCar && <p>This is a new car!</p>}
    </div>
  )
}

export default CarDetails