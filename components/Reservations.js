import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Link from 'next/link'
 function createItem(itemText, index) {
    return (
      <ul>
      <li style={{'margin':'20px','fontSize':"24px"}}>{index+1}. Reservation for {itemText.name}</li>
      <br/>
      <div style={{'margin':'20px','fontSize':"24px"}}>{itemText.hotelName}</div>
      <br/>
      <div style={{'margin':'20px','fontSize':"24px"}}>{itemText.arrivalDate}</div>
      <br/>
      <div style={{'margin':'20px','fontSize':"24px"}}>{itemText.departureDate}</div>
      <br/>
      <br/>
      </ul>
    )
 }
function Reservations({ data:{ refetch,loading, error, reservations }}) {
  refetch()
  return(
  <span>
 	 {reservations.map(createItem)}
  </span>
  )
}

const query = gql`
  query reservations{
  	reservations{
         id
         name
         hotelName
         arrivalDate
         departureDate
       }
   }`

export default graphql(query)(Reservations)
