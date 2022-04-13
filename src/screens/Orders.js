import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {DataTable} from 'react-native-paper';
import {useState} from 'react';
const Orders = () => {
  const [orders, setOrders] = useState([]);
  let requestBody = {
    query: `
        query {
          orders {
            _id
            orderNumber
            name
            phoneNumber
            email
            total
          }
        }
  `,
  };

  fetch('http://10.0.2.2:8000/graphql', {
    method: 'POST',
    body: JSON.stringify(requestBody),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(res => {
      if (res.status !== 200 && res.status !== 201) {
        throw new Error('FAILED');
      }
      return res.json();
    })
    .then(resData => {
      const orders = resData.data.orders;
      setOrders(orders);
    })
    .catch(err => {
      console.log(err);
    });
  return (
    <ScrollView style={styles.container}>
      <DataTable key={orders._id}>
        <DataTable.Header>
          <DataTable.Title>Order #</DataTable.Title>
          <DataTable.Title>Name</DataTable.Title>
          <DataTable.Title>Email</DataTable.Title>
          <DataTable.Title>Phone Number</DataTable.Title>
          <DataTable.Title>Total</DataTable.Title>
        </DataTable.Header>
        {orders.map(order => {
          return (
            <DataTable.Row>
              <DataTable.Cell>{order.orderNumber}</DataTable.Cell>
              <DataTable.Cell>{order.name}</DataTable.Cell>
              <DataTable.Cell>
                {order.email.substring(0, 4) + '***'}
              </DataTable.Cell>
              <DataTable.Cell>
                {order.phoneNumber.substring(0, 4) + '***'}
              </DataTable.Cell>
              <DataTable.Cell>${order.total}</DataTable.Cell>
            </DataTable.Row>
          );
        })}
      </DataTable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingHorizontal: 10,
  },
});
export default Orders;
