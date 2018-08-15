import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import uuid from 'uuid';
import {
  WhiteSpace, WingBlank,
  NavBar, InputItem, Button
} from 'antd-mobile'
function Submit({ addReservation }) {
  function handleSubmit(e) {
    e.preventDefault()

    let name = e.target.elements.name.value
    let hotelName = e.target.elements.hotelName.value
    let arrivalDate = e.target.elements.arrivalDate.value
    let departureDate = e.target.elements.departureDate.value

    if (name === '' || hotelName === '') {
      window.alert('Names are required!')
      return false
    }

  
    const nid=uuid.v1();
    addReservation(nid, name, hotelName, arrivalDate, departureDate)

    e.target.elements.name.style='display:none';
    e.target.elements.hotelName.style='display:none';
    e.target.elements.arrivalDate.style='display:none';
    e.target.elements.departureDate.style='display:none';
    alert('Reserved!')

  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create a Reservation</h1>

    <WhiteSpace size="lg" />
    <WingBlank size="lg" style={{'width':'50%'}}> <InputItem type="text" placeholder="Name" name="name"/></WingBlank>
    <WingBlank size="lg" style={{'width':'50%'}}> <InputItem type="text" placeholder="Hotel Name" name="hotelName" /></WingBlank>
    <WingBlank size="lg" style={{'width':'50%'}}> <InputItem type="text" placeholder="Arrival Date" name="arrivalDate" /></WingBlank>
    <WingBlank size="lg" style={{'width':'50%'}}><InputItem type="text" placeholder="Departure Date" name="departureDate" /></WingBlank>
    <button type="submit" inline style={{ margin: '24px' }}>Create</button>  
    </form>
  )
}

const addReservation = gql`
  mutation addReservation($id: String!,$name: String!, $hotelName: String!, $arrivalDate: String!,$departureDate: String!){
    addReservation(id: $id, name: $name,hotelName: $hotelName,arrivalDate: $arrivalDate,departureDate: $departureDate) 
    {
      id
      name
      hotelName
      arrivalDate
      departureDate
    }
  }
`

export default graphql(addReservation, {
  props: ({ mutate }) => ({
    addReservation: (id, name, hotelName, arrivalDate, departureDate) =>
      mutate({
        variables: { id, name, hotelName, arrivalDate, departureDate }
      })
  })
})(Submit)