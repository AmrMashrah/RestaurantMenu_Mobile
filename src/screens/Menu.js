import {SafeAreaView, ScrollView, Text, StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import {
  Card,
  CardTitle,
  CardContent,
  CardAction,
  CardButton,
  CardImage,
} from 'react-native-cards';
import {CartContext} from '../services/CartContext';

const Menu = () => {
  const {addItemToCart} = useContext(CartContext);

  const onAddToCartPressed = id => {
    addItemToCart(id);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <Text style={styles.redText}>APPETIZERS</Text>
        <Card>
          <CardImage source={require('../images/bonelesswings.png')} />
          <CardTitle
            title="Boneless Wings and Skins Sampler"
            subtitle="$7.99"
            subtitleAbove
          />
          <CardContent text="Boneless buffalo Wings (chose from garlic, bbq, or spicy) and made to order Potato Skins." />
          <CardAction separator={true} inColumn={false}>
            <CardButton
              onPress={() => {
                onAddToCartPressed(100);
              }}
              title="ADD TO CART"
              color="#B42B3F"
            />
          </CardAction>
        </Card>
        <Card>
          <CardImage source={require('../images/nachos.jpeg')} />
          <CardTitle
            title="Three Cheese Nachos"
            subtitle="$7.99"
            subtitleAbove
          />
          <CardContent text="A mountain of crisp tortilla chips smothered in Monterey Jack, mozzarella, and cheddar cheeses then topped with red onions, jalapenos, fresh cilantro, salsa, and sour cream." />
          <CardAction separator={true} inColumn={false}>
            <CardButton
              onPress={() => {
                onAddToCartPressed(101);
              }}
              title="ADD TO CART"
              color="#B42B3F"
            />
          </CardAction>
        </Card>
        <Card>
          <CardImage source={require('../images/artichoke.jpeg')} />
          <CardTitle
            title="Spinach Artichoke Dip"
            subtitle="$6.99"
            subtitleAbove
          />
          <CardContent text="Made with tender artichoke hearts and creamy Parmesan cheese. Served with unlimited crisp tortilla chips." />
          <CardAction separator={true} inColumn={false}>
            <CardButton
              onPress={() => {
                onAddToCartPressed(102);
              }}
              title="ADD TO CART"
              color="#B42B3F"
            />
          </CardAction>
        </Card>
        <Card>
          <CardImage source={require('../images/SantaFeChicken.jpeg')} />
          <CardTitle
            title="Santa Fe Chicken Quesadilla"
            subtitle="$7.99"
            subtitleAbove
          />
          <CardContent text="Seasoned chicken with grilled peppers and onions, feta, and Swiss cheese. Grilled then topped with our Chile sauce." />
          <CardAction separator={true} inColumn={false}>
            <CardButton
              onPress={() => {
                onAddToCartPressed(103);
              }}
              title="ADD TO CART"
              color="#B42B3F"
            />
          </CardAction>
        </Card>
        <Text style={styles.redText}>BREAKFAST</Text>
        <Card>
          <CardImage source={require('../images/threeEggs.jpeg')} />
          <CardTitle
            title="Three Eggs Any Style"
            subtitle="$6.59"
            subtitleAbove
          />
          <CardContent text="With hash browns, ham, 2 bacon and 2 sausage links or 1 patty." />
          <CardAction separator={true} inColumn={false}>
            <CardButton
              onPress={() => {
                onAddToCartPressed(104);
              }}
              title="ADD TO CART"
              color="#B42B3F"
            />
          </CardAction>
        </Card>
        <Card>
          <CardImage source={require('../images/omelette.jpeg')} />
          <CardTitle title="Plain Omelette" subtitle="$4.99" subtitleAbove />
          <CardContent text="Add any of the following items .99 each: Bacon, Sausage, Ham, Mushroom, Broccoli. Add Swiss or American cheese, .60 " />
          <CardAction separator={true} inColumn={false}>
            <CardButton
              onPress={() => {
                onAddToCartPressed(105);
              }}
              title="ADD TO CART"
              color="#B42B3F"
            />
          </CardAction>
        </Card>
        <Card>
          <CardImage source={require('../images/farmersOmelette.jpeg')} />
          <CardTitle title="Farmers Omelette" subtitle="$7.29" subtitleAbove />
          <CardContent text="Made with bacon, ham, onions, cheese and the hashbrowns inside." />
          <CardAction separator={true} inColumn={false}>
            <CardButton
              onPress={() => {
                onAddToCartPressed(106);
              }}
              title="ADD TO CART"
              color="#B42B3F"
            />
          </CardAction>
        </Card>
        <Text style={styles.redText}>SANDWICHES</Text>
        <Card>
          <CardImage source={require('../images/pastrami.png')} />
          <CardTitle title="Pastrami Sandwich" subtitle="$8.99" subtitleAbove />
          <CardContent text="Sliced pastrami with Swiss cheese, dijon mustard, and cole slaw." />
          <CardAction separator={true} inColumn={false}>
            <CardButton
              onPress={() => {
                onAddToCartPressed(107);
              }}
              title="ADD TO CART"
              color="#B42B3F"
            />
          </CardAction>
        </Card>
        <Card>
          <CardImage source={require('../images/superclub.png')} />
          <CardTitle
            title="Super Club Sandwich"
            subtitle="$7.39"
            subtitleAbove
          />
          <CardContent text="Triple decker on white or wheat toast with ham, bacon, turkey, lettuce, tomato, and American cheese with mayo." />
          <CardAction separator={true} inColumn={false}>
            <CardButton
              onPress={() => {
                onAddToCartPressed(108);
              }}
              title="ADD TO CART"
              color="#B42B3F"
            />
          </CardAction>
        </Card>
        <Card>
          <CardImage source={require('../images/reubensandwich.jpeg')} />
          <CardTitle
            title="Grilled Reuben Sandwich"
            subtitle="$6.99"
            subtitleAbove
          />
          <CardContent text="Corned beef, sauerkraut, Swiss cheese and Thousand Island dressing grilled on rye." />
          <CardAction separator={true} inColumn={false}>
            <CardButton
              onPress={() => {
                onAddToCartPressed(109);
              }}
              title="ADD TO CART"
              color="#B42B3F"
            />
          </CardAction>
        </Card>
        <Text style={styles.redText}>SPECIALS</Text>
        <Card>
          <CardImage source={require('../images/coneyhotdog.jpeg')} />
          <CardTitle
            title="Special Coney Hot Dog"
            subtitle="$2.99"
            subtitleAbove
          />
          <CardContent text="Spiced ground beef covering a coney dog topped with chili, mustard and onions in a steamed bun." />
          <CardAction separator={true} inColumn={false}>
            <CardButton
              onPress={() => {
                onAddToCartPressed(110);
              }}
              title="ADD TO CART"
              color="#B42B3F"
            />
          </CardAction>
        </Card>
        <Card>
          <CardImage source={require('../images/coneycombo.png')} />
          <CardTitle title="Coney Combo" subtitle="$7.09" subtitleAbove />
          <CardContent text="Our famous coney island, fries and a mini Greek salad" />
          <CardAction separator={true} inColumn={false}>
            <CardButton
              onPress={() => {
                onAddToCartPressed(111);
              }}
              title="ADD TO CART"
              color="#B42B3F"
            />
          </CardAction>
        </Card>
        <Card>
          <CardImage source={require('../images/pastitsio.png')} />
          <CardTitle title="Pastitsio" subtitle="$7.69" subtitleAbove />
          <CardContent text="Made with layers of macaroni, ground beef, eggs, milk and seasonings. Served with rice." />
          <CardAction separator={true} inColumn={false}>
            <CardButton
              onPress={() => {
                onAddToCartPressed(112);
              }}
              title="ADD TO CART"
              color="#B42B3F"
            />
          </CardAction>
        </Card>
        <Card>
          <CardImage source={require('../images/cheesequesadilla.jpeg')} />
          <CardTitle title="Cheese Quesadilla" subtitle="$5.39" subtitleAbove />
          <CardContent text="Warm tortilla filled with green peppers, onions and Cheddar cheese. Served with guacamole and salsa." />
          <CardAction separator={true} inColumn={false}>
            <CardButton
              onPress={() => {
                onAddToCartPressed(113);
              }}
              title="ADD TO CART"
              color="#B42B3F"
            />
          </CardAction>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  redText: {
    color: '#B42B3F',
    fontSize: 30,
    fontWeight: 'bold',
    margin: 10,
  },
});

export default Menu;
