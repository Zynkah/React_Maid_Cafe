//coffee
import americano from '../assets/img/americano.jpg';
import cappuccino from '../assets/img/cappuccino.jpg';
import flatWhite from '../assets/img/flatWhite.jpg';
import latte from '../assets/img/latte.jpg';
import macchiato from '../assets/img/macchiato.jpg';
import mocha from '../assets/img/mocha.jpg';

//tea
import blackCurrant from '../assets/img/blackCurrant.jpg';
import earlGrey from '../assets/img/earlGrey.jpg';
import greenTea from '../assets/img/greenTea.jpg';
import peppermint from '../assets/img/peppermint.jpg';
import rooibos from '../assets/img/rooibos.jpg';
import spicedChai from '../assets/img/spicedChai.jpg';

//soup
import italianWedding from '../assets/img/italianWedding.jpeg';
import clamChowder from '../assets/img/clamChowder.jpg';
import frenchOnion from '../assets/img/frenchOnion.jpg';
import lobsterBisque from '../assets/img/lobsterBisque.jpg';
import minestrone from '../assets/img/minestrone.jpg';
import tomatoBasil from '../assets/img/tomatoBasil.jpg';

//salads
import caesar from '../assets/img/caesar.jpg';
import crabLouie from '../assets/img/crabLouie.jpg';
import nicoise from '../assets/img/nicoise.jpg';
import steakCobb from '../assets/img/steakCobb.jpg';
import turkeyClub from '../assets/img/turkeyClub.jpg';
import wedge from '../assets/img/wedge.jpg';

//sandwiches
import blt from '../assets/img/blt.jpg';
import chickenWrap from '../assets/img/chickenWrap.jpg';
import cucumber from '../assets/img/cucumber.jpg';
import monteCristo from '../assets/img/monteCristo.jpg';
import reuben from '../assets/img/reuben.jpg';
import waldorfChicken from '../assets/img/waldorfChicken.jpg';

//dessert
import bananaFoster from '../assets/img/bananaFoster.jpg';
import carrotCake from '../assets/img/carrotCake.jpg';
import cheesecake from '../assets/img/cheesecake.jpg';
import cremeBrulee from '../assets/img/cremeBrulee.jpg';
import tiramisu from '../assets/img/tiramisu.jpg';
import tuxedoCake from '../assets/img/tuxedoCake.jpg';

export const MENU = [
    {
        id: 0,
        name: 'Americano',
        image: americano,
        featured: false,
        price: '$4.00',
        description:
            'A type of coffee drink prepared by diluting an espresso with hot water, giving it a similar strength to, but different flavor from, traditionally brewed coffee.'
    },
    {
        id: 1,
        name: 'Cappuccino',
        image: cappuccino,
        featured: false,
        price: '$4.00',
        description:
            'An espresso based coffee drink that originated in Italy and is prepared with steamed milk foam.'
    },
    {
        id: 2,
        name: 'Flat White',
        image: flatWhite,
        featured: false,
        price: '$4.00',
        description:
            'A coffee drink consisting of espresso with microfoam.'
    },
    {
        id: 3,
        name: 'Latte',
        image: latte,
        featured: false,
        price: '$4.00',
        description:
            "A milk coffee that boasts a silky layer of foam as a real highlight to the drink. A true latte will be made up of one or two shots of espresso, steamed milk and a final, thin layer of frothed milk on top."
    },
    {
        id: 4,
        name: 'Macchiato',
        image: macchiato,
        featured: false,
        price: '$4.00',
        description:
            'An espresso coffee drink with a small amount of milk, usually foamed. In Italian, macchiato means "stained" or "spotted", so the literal translation of caffè macchiato is "stained coffee" or "marked coffee".'
    },
    {
        id: 5,
        name: 'Mocha',
        image: mocha,
        featured: true,
        price: '$4.00',
        description:
            'A chocolate-flavoured warm beverage that is a variant of a caffè latte.'
    },
    {
        id: 6,
        name: 'Black Currant',
        image: blackCurrant,
        featured: false,
        price: '$4.00',
        description:
            'Black currant tea is a caffeine free drink made from the leaves and the dried fruits from the black currant bush. A pungent, fruity drink, black currant tea has a full bodied fruit flavor similar to berries. It is packed with antioxidants, vitamins, and minerals and offers a great deal of therapeutic value.'
    },
    {
        id: 7,
        name: 'Earl Grey',
        image: earlGrey,
        featured: false,
        price: '$4.00',
        description:
            'Earl Grey tea has one defining ingredient – bergamot, an orange fruit. It is commonly grown in parts of Italy. it is a hybrid of lemon and bitter orange.'
    },
    {
        id: 8,
        name: 'Green Tea',
        image: greenTea,
        featured: false,
        price: '$4.00',
        description:
            'Green tea is a type of tea that is harvested and then quickly preserved. Whereas black tea leaves are allowed to oxidize after they are picked, green tea leaves are immediately heated to prevent oxidation. Oxidation is a natural process.'
    },
    {
        id: 9,
        name: 'Peppermint',
        image: peppermint,
        featured: false,
        price: '$4.00',
        description:
            'Peppermint tea is a popular herbal tea that is naturally calorie- and caffeine-free. Some research has suggested that the oils in peppermint may have a number of other health benefits, such as fresher breath, better digestion, and reduced pain from headaches. Peppermint tea also has antibacterial properties.'
    },
    {
        id: 10,
        name: 'Rooibos',
        image: rooibos,
        featured: false,
        price: '$4.00',
        description:
            'Rooibos tea is a red herbal tea that comes from the fermented leaves of the Aspalathus linearis shrub, a plant native to South Africa. Many people enjoy it as an alternative to green or black tea. Unfermented green rooibos tea is also available. Rooibos tea has a sweet, delicate, and earthy flavor.'
    },
    {
        id: 11,
        name: 'Spiced Chai',
        image: spicedChai,
        featured: false,
        price: '$4.00',
        description:
            'Spiced chai is a ginger tea made with cream, strong black tea, and ginger. The type of chai most commonly served as chai in the United States is masala chai. It, too, is flexible in terms of spices and flavors, but there are six ingredients that are pretty consistently used in masala chai. Cardamom Cardamom is a versatile spice that grows in hot, humid climates such as southern India, Guatemala, and Tanzania. It adds distinct flavor to both sweet and savory dishes.'
    },
    {
        id: 12,
        name: 'Italian Wedding',
        image: italianWedding,
        featured: false,
        price: '$6.00',
        description:
            'This Italian wedding soup is a marriage of homemade mini meatballs, colorful vegetables, and pearl couscous.'
    },
    {
        id: 13,
        name: 'Clam Chowder',
        image: clamChowder,
        featured: false,
        price: '$6.00',
        description:
            'Clam chowder is a moniker used to describe just about any soup that contains clams and broth. Most clam chowders are also made with potatoes, onions, or celery, while some even add in bacon. Oyster or saltine crackers almost always accompany the soup.'
    },
    {
        id: 14,
        name: 'French Onion',
        image: frenchOnion,
        featured: false,
        price: '$6.00',
        description:
            'French Onion is a soup usually based on meat stock and onions, and often served gratinéed with croutons or a larger piece of bread covered with cheese floating on top.'
    },
    {
        id: 15,
        name: 'Lobster Bisque',
        image: lobsterBisque,
        featured: false,
        price: '$6.00',
        description:
            'Lobster bisque soup follows the traditional definition of a bisque. It includes lobster and has a luscious, creamy, smooth tomato-based broth. '
    },
    {
        id: 16,
        name: 'Minestrone',
        image: minestrone,
        featured: false,
        price: '$6.00',
        description:
            'Minestrone is a thick soup of Italian origin made with vegetables, often with the addition of pasta or rice, sometimes both. Common ingredients include beans, onions, celery, carrots, leaf vegetables, stock, parmesan cheese and tomatoes.'
    },
    {
        id: 17,
        name: 'Tomato Basil',
        image: tomatoBasil,
        featured: false,
        price: '$6.00',
        description:
            'A delicious tomato based soup with heavy cream, chopped basil, sugar, salt and pepper. Served with croutons.'
    },
    {
        id: 18,
        name: 'Caesar',
        image: caesar,
        featured: false,
        price: '$6.00',
        description:
            'Caesar salad is infused with the fresh and zesty flavors of lime, anchovies, olive oil, egg and garlic.'
    },
    {
        id: 19,
        name: 'Crab Louie',
        image: crabLouie,
        featured: false,
        price: '$6.00',
        description:
            'The main ingredient for Crab Louie, as the name suggests, is crab meat. The preferred crab is Dungeness Crab, but other crab meat can be substituted, including cheaper imitation crab meat. Although variations of the recipe exist, an essential ingredient is a creamy dressing such as Louis dressing, Thousand Island dressing or Green goddess dressing.'
    },
    {
        id: 20,
        name: 'Nicoise',
        image: nicoise,
        featured: false,
        price: '$6.00',
        description:
            'Nicoise is essentially a French composed salad, much like our American Cobb salad, but with tuna, green beans, and potatoes, instead of chicken, bacon, and avocado. Salad Niçoise hails from Nice, on the Mediterranean Sea, though like so many foods we enjoy here of French origin, has changed a bit to adapt to our tastes.'
    },
    {
        id: 21,
        name: 'Steak Cobb',
        image: steakCobb,
        featured: false,
        price: '$6.00',
        description:
            'Steak Cobb in a bowl layer in the salad greens, tomatoes, egg, cheese and avocado slices. Sprinkle all with salt and pepper. Once the steak has rested slice thin strips against the grain. '
    },
    {
        id: 22,
        name: 'Wedge',
        image: wedge,
        featured: false,
        price: '$6.00',
        description:
            'A classic wedge salad is the perfect start or side to a steakhouse dinner, barbecue, or four-course meal. Load a simple iceberg wedge with homemade blue cheese dressing, crumbled bacon, chopped tomatoes, and tangy pickled onions. It couldn’t be simpler in its elegance, and is a favored method of adding acid and vegetables to a rich meal.'
    },
    {
        id: 23,
        name: 'Waldorf Chicken',
        image: waldorfChicken,
        featured: false,
        price: '$8.00',
        description:
            'This Waldorf Chicken Salad is a refreshing and filling dish loaded with fruit, veggies, and nuts.'
    },
    {
        id: 24,
        name: 'BLT',
        image: blt,
        featured: false,
        price: '$8.00',
        description:
            'A BLT is a type of sandwich, named for the initials of its primary ingredients, bacon, lettuce, and tomato.'
    },
    {
        id: 25,
        name: 'Chicken Wrap',
        image: chickenWrap,
        featured: false,
        price: '$8.00',
        description:
            'Simply mix together a cream cheese, sour cream, Cheddar cheese, green onions, and mustard, and roll up the mixture in a tortilla along with shredded chicken and cabbage.'
    },
    {
        id: 26,
        name: 'Cucumber',
        image: cucumber,
        featured: false,
        price: '$8.00',
        description:
            'This simple, elegant staple of the famous British afternoon tea, known as cucumber sandwich, is a concoction made with crustless triangles of lightly buttered white bread that is filled with paper-thin cucumber slices, a little bit of salt, and a dash of lemon juice.'
    },
    {
        id: 27,
        name: 'Monte Cristo',
        image: monteCristo,
        featured: false,
        price: '$8.00',
        description:
            'A Monte Cristo sandwich is an egg-dipped ham and cheese sandwich that is pan or deep fried, a variation of the French croque monsieur.'
    },
    {
        id: 28,
        name: 'Reuben',
        image: reuben,
        featured: false,
        price: '$8.00',
        description:
            'The Reuben sandwich is a North American grilled sandwich composed of corned beef, Swiss cheese, sauerkraut, and Thousand Island dressing or Russian dressing, grilled between slices of rye bread.'
    },
    {
        id: 29,
        name: 'Turkey Club',
        image: turkeyClub,
        featured: false,
        price: '$8.00',
        description:
            'This club sandwich is made with cooked turkey, lettuce, slices of fresh ripe tomato, crispy and crunchy bacon, and cranberry sauce in between toasted white bread slathered with mayo.'
    },
    {
        id: 30,
        name: 'Banana Foster',
        image: bananaFoster,
        featured: false,
        price: '$6.00',
        description:
            'Bananas Foster is an American dessert that originated in New Orleans made with cooked bananas served in a butter, brown sugar and rum sauce. The caramelized liquor-based sauce is often prepared via flambé.'
    },
    {
        id: 31,
        name: 'Carrot Cake',
        image: carrotCake,
        featured: false,
        price: '$6.00',
        description:
            'Carrot cake, also known as passion cake, is cake that contains carrots mixed into the batter. Most modern carrot cake recipes have a white cream cheese frosting. Sometimes nuts such as walnuts or pecans are added into the cake batter, as well as spices such as cinnamon, ginger and ground mixed spice. '
    },
    {
        id: 32,
        name: 'Cheesecake',
        image: cheesecake,
        featured: false,
        price: '$6.00',
        description:
            'Cheesecake is a sweet dessert consisting of one or more layers. The main, and thickest, layer consists of a mixture of a soft, fresh cheese, typically cottage cheese, cream cheese or ricotta, eggs, and sugar.'
    },
    {
        id: 33,
        name: 'Creme Brulee',
        image: cremeBrulee,
        featured: false,
        price: '$6.00',
        description:
            'Crème brûlée or crème brulée , also known as burnt cream or Trinity cream, and virtually identical to the original crema catalana, is a dessert consisting of a rich custard base topped with a layer of hardened caramelized sugar.'
    },
    {
        id: 34,
        name: 'Tiramisu',
        image: tiramisu,
        featured: false,
        price: '$6.00',
        description:
            'Tiramisu is a coffee-flavoured Italian dessert. It is made of ladyfingers dipped in coffee, layered with a whipped mixture of eggs, sugar, and mascarpone cheese, flavoured with cocoa.'
    },
    {
        id: 35,
        name: 'Tuxedo Cake',
        image: tuxedoCake,
        featured: false,
        price: '$6.00',
        description:
            'Tuxedo Cake is a rich chocolate cake with double chocolate filling, both white and dark chocolate, and a swirled chocolate topping. This decadent triple layer chocolate cake recipe is so delicious, and can be made for any occasion!'
    },
];
