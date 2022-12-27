/*
Model:
  {
    name: 'Daiquiri',
    liquor: ['rum'],
    ingredients: [
      ['white rum', '50ml'],
      ['lime juice', '25ml'],
      ['sugar syrup', '10ml'],
      ['ice', 'crushed to oblivion'],
    ],
    garnish: ['optional: see directions'],
    directions: `STEP 1
    Shake all the ingredients in a cocktail shaker and strain into a cocktail glass.
    
    3 TWISTS
    Strawberry daiquiri
    This cocktail should only be attempted with fruit that’s really ripe and sweet – if the berries are the big, bland variety from the chiller cabinet, the end result will just taste of mush. Allow one large handful of hulled strawberries for each cocktail. Place them in the empty shaker and give them a gentle crush with a muddler or pestle, then add the other ingredients and shake as normal and strain into your cocktail glass. Out of season, you could also make a version of this drink using Funkin strawberry purée which will be almost as good.
    Hemingway’s ‘Papa Doble’ daiquiri
    The writer Ernest Hemingway drank at El Floridita in Havana so often they ended up creating a daiquiri recipe especially for him called the Papa Doble, made with a quadruple measure of white rum, lime, grapefruit juice and maraschino liqueur. I don’t think many of us could handle a drink this size – as delicious as it is – so I’ve scaled it back a bit: 50ml white rum, 15ml pink grapefruit juice, 15ml lime juice, 15ml Luxardo maraschino liqueur, 5ml sugar syrup, shaken and strained into a cocktail glass or blended with ice, depending on what you prefer.
    La Terraza’s blue daiquiri
    Another place Hemingway liked to drink when he went fishing was a little waterside bar about 10 miles outside Havana called La Terraza. La Terraza’s signature daiquiri is made with blue curaçao, so it’s the colour of a lagoon. You can make one too, simply by substituting 15ml Bols Blue curaçao in a normal daiquiri in place of the sugar syrup. A delicious guilty pleasure on a summer’s day, especially with a cocktail umbrella.`,
  },

  holy shit i didn't know we were writing their life story 
*/

const whiskeySour = {
  name: 'Whiskey Sour',
  liquor: ['whiskey'],
  ingredients: [
    ['lemon juice', '4 parts'],
    ['maple syrup or simple syrup', '3 parts'],
  ],
  garnish: ['orange peel', 'cocktail cherry'],
  directions: 'Shake in a cocktail shaker with ice, serve.',
};

const whiskeyHighball = {
  name: 'Whiskey Highball',
  liquor: [['whiskey', '2 parts']],
  ingredients: [['soda water, ginger ale or ginger beer', '4 parts']],
  garnish: ['lemon wedge'],
  directions:
    'Fill a glass with ice, pour in the whiskey and mixer, stir gently. Squeeze in the lemon wedge and serve.',
};

const whiskeyOldFashioned = {
  name: 'Old Fashioned',
  liquor: [['1 part', 'whiskey']],
  ingredients: [
    ['bitters', '4 dashes'],
    ['1', 'sugar cube'],
  ],
  garnish: ['orange peel', 'cocktail cherry'],
  direcitons:
    'Muddle bitters, sugar cube and 1/2 teaspoon water. Fill a glass with ice, pour in the whiskey and muddled bitters, stir gently. Squeeze orange peel over the drink, then add the cherry and serve.',
};

const whiskeyManhattan = {
  name: 'Manhattan',
  liquor: [['2 ounces', 'whiskey']],
  ingredients: [
    ['1 ounce', 'sweet red vermouth'],
    ['3 dashes', 'Angostura or orange bitters'],
  ],
  garnish: ['Luxardo cherry'],
  direcitons:
    'Combine all ingredients in a glass and stir. Add 1 handful of ice and stir continuously for 30 seconds. Strain, garnish with cherry and serve.',
};

const whiskeyIrishMule = {
  name: 'Irish Mule',
  liquor: [['1/4 cup', 'whiskey']],
  ingredients: [
    ['1/2 cup', 'ginger beer'],
    ['1 tablespoon', 'lime juice'],
  ],
  garnish: ['lime'],
  direcitons:
    'Pour ingredients into copper mug or serving glass of your choice. Add ice and garnish with lime, serve.',
};

const whiskeyMintJulep = {
  name: 'Mint Julep',
  liquor: [['2 ounce', 'whiskey']],
  ingredients: [
    ['8', 'mint leaves'],
    ['1/4 ounce', 'simple syrup'],
  ],
  garnish: ['ming sprig', 'Angostura bitters'],
  direcitons:
    'Lightly muddle mint leaves in simple syrup. Add bourban and pack glass tightly with ice and stir. Garnish with mint sprig and a few drops of bitters, serve.',
};

const whiskeyVieuxCarre = {
  name: 'The Vieux Carre',
  liquor: [['1/2 ounce', 'whiskey']],
  ingredients: [
    ['1/2 ounce', 'Cognac'],
    ['1/2 ounce', 'sweet vermouth'],
    ['1/2 ounce', 'Benedictine'],
    ['1 dash', 'Peychaud bitters'],
    ['1 dash', 'Angostura bitters'],
  ],
  garnish: ['cocktail cherry or Luxardo cherry'],
  direcitons:
    'Add all ingredients to glass and stir (do not shake). Add 1 handful of ice and continuously stir for 30 seconds. Add ice to a lowball glass and strain drink into it. Garnish with cherry and serve.',
};

const whiskeyParisBetweenTheWars = {
  name: 'Paris Between the Wars',
  liquor: [['3/4 ounce', 'whiskey']],
  ingredients: [
    ['3/4 ounce', 'Campari'],
    ['1 tablespoon', 'lemon juice'],
    ['1 tablespoon', 'simple syrup'],
    ['2 tablespoons', 'dry sparkling wine'],
  ],
  garnish: ['lemon peel strip'],
  direcitons:
    'Add all ingredients to a cocktail shaker with ice. Strain into a glass and top with the sparkling wine. Garnish with lemon peel strip and serve.',
};

const whiskeyHotToddy = {
  name: 'Hot Toddy',
  liquor: [['1 1/2 ounces', 'whiskey']],
  ingredients: [
    ['1 spoonful', 'honey'],
    ['4 ounces', 'boiling water'],
    ['1/2 ounce', 'lemon juice'],
  ],
  garnish: ['lemon'],
  direcitons:
    'Combine all ingredients into a coffee cup, garnish with lemon and serve.',
};

const whiskeyEggnog = {
  name: 'Whiskey Eggnog',
  liquor: [['5 parts', 'whiskey']],
  ingredients: [['4 parts', 'eggnog']],
  garnish: ['nutmeg'],
  direcitons:
    'Combine whiskey and eggnog in a glass. Sprinkle nutmeg on top, serve.',
};

/*

const  = {
  name: '',
  liquor: [['', '']],
  ingredients: [
    ['', ''],
    ['', ''],
  ],
  garnish: [''],
  direcitons: '',
};

*/
