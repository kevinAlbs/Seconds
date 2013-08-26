GAME.data = {
	levels:[
		{
			name: "Chicken Fingers",
			walls: [
				{x: 110, w: 230, h: 10, y: 175}
			],
			rounds: [
			{
				stat: "Heat the oil",
				c: "The oil is now heating",
				i: "You used extra virgin olive oil!"
			},
			{
				stat: "Crack the eggs",
				c: "The eggs have been cracked",
				i: "There are shells in the cracked eggs!"
			},
			{
				stat: "Mix the eggs",
				c: "The eggs have been mixed",
				i: "You didn’t mix enough, the yolks are not broken"
			},
			{
				stat: "Coat the chicken",
				c: "The chicken is coated with eggs",
				i: "You accidently coat the chicken with an actual coat"
			},
			{
				stat: "Bread the chicken",
				c: "The chicken is breaded with breadcrumbs",
				i: "You bread the chicken hastely, these won't be crunchy"
			},
			{
				stat: "Put the chicken in the fryer",
				c: "The chicken is in the fryer",
				i: "You drop a piece of chicken"
			},
			{
				stat: "Cook the chicken",
				c: "You cook the chicken",
				i: "The chicken is overcooked and tough"
			},
			{
				stat: "Serve",
				c: "It looks beautiful",
				i: "The chicken looks unprofessional"
			}
			]
		},
		{
			name: "Fish Sticks",
			walls: [
				{x:0, w: 345, h: 10, y: 100},
				{x:90, w: 345, h: 10, y: 200}
			],
			rounds: [
				{
				stat: "Scale that fish",
					c: "The fish is naked",
					i: "You cut off too much!"
				},
				{
				stat: "Slice the fish into even strips",
					c: "The fish is stripped perfectly",
					i: "The fish has been cut unevenly!"
				},
				{
				stat: "Heat the oil",
					c: "The oil is now heating",
					i: "You used extra virgin olive oil!"
				},
				{
				stat: "Crack some eggs (again)",
					c: "Nice cracking",
					i: "You didn’t put enough force into it!"
				},
				{
				stat: "Separate the eggs",
					c: "The eggs have been separated",
					i: "You got yolk in the whites!"
				},
				{
				stat: "Dip those fish sticks",
					c: "Those sticks are looking nice and coated",
					i: "You didn’t dip enough, there are hardly any egg whites on the sticks"
				},
				{
				stat: "Fry those fish",
					c: "The fish is nice and crunchy",
					i: "The fish is too greasy"
				},
				{
				stat: "Don’t put the fish sticks in your mouth",
					c: "Very nice",
					i: "You’re a gay fish"
				}
			]
		},
		{
			name: "Pizza with Pepperoni",
			walls: [
				{x:140, y: 80, h: 330, w: 10},
				{x:290, y: 80, h: 330, w: 10},
				{x:160, y: 100, h: 10, w: 120},
				{x:150, y: 150, h: 10, w: 90},
				{x:200, y: 190, h: 10, w: 90}
			],
			rounds:[
				{
				stat: "Make the dough",
					c: "Your dough is looks delicious",
					i: "Your dough is a gooey mess!"
				},
				{
				stat: "Preheat the oven",
					c: "The oven is ready for cooking",
					i: "Your oven ignited in flames and exploded"
				},
				{
				stat: "Slice the pepperoni",
					c: "Your pepperoni is beautifully prepared",
					i: "You cut off your hand!"
				},
				{
				stat: "Shred the cheese",
					c: "Perfectly shredded, perfectly cheesy",
					i: "You cut the cheese instead"
				},
				{
				stat: "Arrange the toppings",
					c: "The pizza is a work of art",
					i: "At least you tried"
				},
				{
				stat: "Cook the pizza",
					c: "The pizza is perfectly crunchy",
					i: "The pizza has burst into flames"
				},
				{
				stat: "Remove the pizza from the oven",
					c: "Your pizza is almost ready to be served",
					i: "You grabbed it with your bare hands, burning them"
				},
				{
				stat: "Slice and serve your pizza",
					c: "You are the god of pizzas",
					i: "Your pizza is a disgrace"
				}
			]
		},
		{
			name: "Hamburger and Fries",
			walls: [
				{x:0, y: 300, h: 10, w: 85},
				{x:352, y: 300, h: 10, w: 85},
				{x:122, y: 300, w: 188, h: 10},
				{x:80, y: 95, h: 215, w: 10},
				{x:122, y: 95, h: 215, w: 10},
				{x:310, y: 95, h: 215, w: 10},
				{x:310, y: 95, h: 215, w: 10},
				{x:350, y: 95, h: 215, w: 10},
			],
			rounds: [
				{
				stat: "Toast the hamburger buns",
					c: "Your buns are nice and hot",
					i: "Your buns were burnt to a crisp"
				},
				{
				stat: "Prepare the patty",
					c: "Perfectly shaped to fit snugly inside your buns",
					i: "It’s more of a blob than a patty- oh well"
				},
				{
				stat: "Cook the patty",
					c: "Nice and juicy",
					i: "It’s almost inedible."
				},
				{
				stat: "Chop some potatoes",
					c: "Ready for frying",
					i: "It’s like you’re not even trying"
				},
				{
				stat: "Fry your french fries",
					c: "Les frites sont delicieux",
					i: "They’re all soggy. Ewww."
				},
				{
				stat: "Gather the condiments",
					c: "You’ve got everything you need",
					i: "You dropped everything. Both you and the burger are a complete mess"
				},
				{
				stat: "Construct the hamburger",
					c: "This is one serious burger",
					i: "Not even you would eat this burger"
				}
			]
		},
		{
			name: "Steak and Taters",
			walls: [
				{x:0, y: 320, h: 10, w: 410},
				{x:210, y: 20, h: 300, w: 10},
				{x:300, y: 20, h: 300, w: 10},
			],
			rounds:[
			{
			stat: "Peel your potatoes",
				c: "They look good already",
				i: "There’s still skin on them"
			},
			{
			stat: "Season the potatoes",
				c: "It is the perfect thyme of season",
				i: "There’s so much pepper you sneeze on it"
			},
			{
			stat: "Trim the fat",
				c: "The meat is lean as a bean",
				i: "The meat is still fatty"
			},
			{
			stat: "Tenderize the steak",
				c: "Nice beating",
				i: "You wuss, you hardly beat it"
			},

			{
			stat: "Cook to medium well",
				c: "Perfect cooking, nice and pink on the inside!",
				i: "I didn’t say well done"
			},
			{
			stat: "Garnish",
				c: "It’s beautiful",
				i: "You didn’t even try"
			}
			]
		},
		{
			name: "Crab Cakes",
			walls: [
			{x:50, y: 50, h: 100, w: 10},
			{x:100, y: 50, h: 100, w: 10},
			{x:150, y: 50, h: 100, w: 10},
			{x:200, y: 50, h: 100, w: 10},
			{x:250, y: 50, h: 100, w: 10},
			{x:300, y: 50, h: 100, w: 10},
			{x:350, y: 50, h: 100, w: 10},
			{x:400, y: 50, h: 100, w: 10},
			{x:25, y: 200, h: 100, w: 10},
			{x:75, y: 200, h: 100, w: 10},
			{x:125, y: 200, h: 100, w: 10},
			{x:175, y: 200, h: 100, w: 10},
			{x:225, y: 200, h: 100, w: 10},
			{x:275, y: 200, h: 100, w: 10},
			{x:325, y: 200, h: 100, w: 10},
			{x:375, y: 200, h: 100, w: 10},
			{x:425, y: 200, h: 100, w: 10},
			],
			rounds:[
				{
				stat: "Gather your ingredients",
					c: "The ingredients have been gathered",
					i: "Your crabmeat is expired. Why would you do this?"
				},
				{
				stat: "Prepare your ingredients",
					c: "You’re ready to make some crab cakes",
					i: "Better luck next time"
				},
				{
				stat: "Shape the crab cakes",
					c: "You’ve created a masterpiece",
					i: "You’ve created a monster"
				},
				{
				stat: "Heat the oil",
					c: "The oil is getting hot",
					i: "Somehow, you manage to set the whole kitchen on fire"
				},
				{
				stat: "Begin cooking the crab cakes",
					c: "So far, so good.",
					i: "Aaaand you burnt them"
				},
				{
				stat: "Flip the crab cakes and continue cooking",
					c: "You have executed a perfect flip",
					i: "You messed up and now the cakes are splattered everywhere"
				},
				{
				stat: "Remove cakes from the pan and serve",
					c: "Your mouth is watering at the sight of these beautiful cakes",
					i: "Despite your best efforts, you made an actual cake instead of a crab cake."
				}
			]
		},
		{
			name: "Pork Chop Sandwiches",
			walls: [
			{x:90, y: 100, h: 230, w: 10},
			{x:120, y: 90, h: 10, w: 193},
			{x:337, y: 100, h: 230, w: 10},
			{x:120, y: 250, h: 10, w: 193},
			{x:120, y: 320, h: 10, w: 193},
			{x:0, y: 200, h: 10, w: 90},
			{x:337, y: 200, h: 10, w: 100},
			],
			rounds: [
			{
			stat: "Toast some bread",
				c: "That’s good toast",
				i: "The toast is ruined"
			},
			{
			stat: "Make a nice spice rub for your pork",
				c: "You' re one step closer to a magnificent sandwich",
				i: "It’s just not very good at all"
			},
			{
			stat: "Prepare your pork chops",
				c: "Now you’re ready for grilling",
				i: "You might want to try that again"
			},
			{
			stat: "Cook your pork chops",
				c: "My god does that smell good",
				i: "You have somehow set the building on fire."
			},
			{
			stat: "Serve your wonderful sandwich",
				c: "The customer is pleased",
				i: "The customer didn’t seem to like it."
			},
			]
		},
		{
			name: "Roasted Duck",
			walls: [
			{x:0, y: 100, h: 10, w: 427},
			{x:10, y: 175, h: 10, w: 427},
			
			{x:10, y: 325, h: 10, w: 427},
			],
			rounds: [
				{
				stat: "Catch a duck",
					c: "Success!",
					i: "You couldn’t catch one so you decide to use a chicken instead"
				},
				{
				stat: "Prepare the duck",
					c: "He’s almost ready for roasting",
					i: "The bird fights back and escapes to freedom."
				},
				{
				stat: "Preheat the oven",
					c: "The oven is heating up",
					i: "The oven is on fire"
				},
				{
				stat: "Prepare some veggies to go with your duck",
					c: "Chopped and ready",
					i: "The veggies fight back and escape to freedom"
				},
				{
				stat: "Roast your duck and veggies",
					c: "Smells good",
					i: "It’s overcooked"
				},
				{
				stat: "Serve the meal",
					c: "Mission accomplished",
					i: "The duck comes back from the dead and eats your customer. Looks like you’re gonna be facing a lawsuit."
				}
			]
		},
		{
			name: "Sushi",
			walls: [
			{x:0, y: 100, h: 10, w: 427},
			{x:10, y: 175, h: 10, w: 427},
			{x:0, y: 250, h: 10, w: 427},
			{x:10, y: 325, h: 10, w: 427},
			],
			rounds: [
				{
				stat: "Cook some rice",
					c: "Cooked to perfection",
					i: "You’ve somehow managed to explode the pot of rice"
				},
				{
				stat: "Slice your fish",
					c: "Looks beautiful",
					i: "Sloppy work"
				},
				{
				stat: "Assemble the other ingredients",
					c: "Now you’re ready to make some sushi",
					i: "Derp!"
				},
				{
				stat: "Construct the sushi roll",
					c: "Everything seems to be in order",
					i: "Could be better"
				},
				{
				stat: "Roll the sushi",
					c: "Looking good",
					i: "Did you even try?"
				},
				{
				stat: "Slice your sushi and serve",
					c: "Your sushi is a work of art",
					i: "You have dishonored your family"
				}
			]
		},
		{
			name: "Beef Wellington",
			walls: [
			{x:0, y: 100, h: 10, w: 427},
			{x:10, y: 175, h: 10, w: 427},
			{x:0, y: 250, h: 10, w: 427},
			{x:10, y: 325, h: 10, w: 427},
			{x:150, y: 10, h: 390, w: 10},
			{x:300, y: 10, h: 390, w: 10},
			],
			rounds: [
				{
				stat: "Acquire some high quality beef",
					c: "Good",
					i: "Was that really so difficult?"
				},
				{
				stat: "Put that nice beef inside of a lovely puff pastry",
					c: "Perfect!",
					i: "That didn’t work out very well"
				},
				{
				stat: "Make a nice sauce to go with all this goodness",
					c: "Magnificent",
					i: "Could be better"
				},
				{
				stat: "Bake that delicious combination of food and serve it",
					c: "You are a master chef",
					i: "Were you even trying?"
				}
			]
		}
	],

	sounds:{
		pop: {
			src : "pop.wav",
			snd: null
		}
	}
};

//load sounds
for(i in GAME.data.sounds){
	GAME.data.sounds[i].snd = new Audio("snd/" + GAME.data.sounds[i].src);
	GAME.data.sounds[i].snd.addEventListener('ended', function(e){
		this.currentTime = 0;
		this.pause();
	});
}