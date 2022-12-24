//Rum based cocktails
const rum = [
  {
    name: 'zombie',
    liquor: ['rum'],
    ingredients: [
      ['dark rum', '25ml'],
      ['white rum', '25ml'],
      ['lime juice', '50ml'],
      ['pineapple juice', '150ml'],
      ['grenadine', '1tsp'],
      ['over', 'ice'],
    ],
    garnish: ['orange wedge', 'maraschino cherries', 'mint sprig'],
    directions:
      'STEP 1: Pour the rums and fruit juices into a cocktail shaker filled with ice and shake hard until the outside of the shaker feels really cold. STEP 2: Strain the mixture into a tall glass or hurricane glass filled with ice, then slowly pour in the grenadine to colour the drink. STEP 3: Skewer the orange wedge and cherries on a cocktail stick. Garnish the drink with mint sprigs and the skewered fruit.',
  },

  {
    name: 'Dark & Stormy',
    liquor: ['rum'],
    ingredients: [
      ['dark rum', '50ml'],
      ['lime juice', '25ml'],
      ['sugar syrup', '5ml'],
      ['ginger beer', '100ml chilled'],
    ],
    garnish: [
      '2 dashes of Angostura bitters',
      'optional: lime wedge',
      'optionalAngostura orange bitters',
      'mint spring',
    ],
    directions: `STEP 1
      Put all the ingredients in a Collins or Highball glass over lots of ice, stir gently and garnish with a wedge of lime.
      
      3 TWISTS
      Orange mule
      Bring a sunburst of citrus to the brooding dark & stormy by making it with two dashes of orange bitters instead. Angostura orange bitters will give the drink more spicy, marmalade notes, while Bitter Truth orange bitters taste much more of freshly-peeled orange zest. Then make the drink as normal and garnish with a lime wedge.
      Minty mule
      Take inspiration from the mojito and mix up a dark & stormy twist with 50ml dark rum, 25ml lime juice, bitters and ginger beer served over crushed ice, garnished with a wedge of lime and a fragrant sprig of mint (for best results, give the mint a clap between your palms before tucking it into the drink as this will help to release the aromatic oils). Then add two straws and enjoy.
      Mexican mule
      Tequila really loves ginger and lime and all three come together beautifully in this Mexican twist on the mule. Just make the drink as normal but instead of rum, use a nice lightly-aged reposado tequila like Ocho or Olmeca Altos – it will give the drink a whole new layer of interest.`,
  },

  {
    name: 'Piña colada',
    liquor: ['rum'],
    ingredients: [
      ['white rum', '60ml'],
      ['pineapple juice', '120ml'],
      ['coconut cream', '60ml'],
    ],
    garnish: ['pinapple wedge'],
    directions: `STEP 1
      Pulse all the ingredients along with a handful of ice in a blender until smooth. Pour into a tall glass and garnish as you like. For a frozen blended version
      Mix the juice, rum and coconut cream together and freeze in ice cube trays. Then whiz the frozen cubes (with a couple of ice cubes if you like) to a slushy consistency.`,
  },

  {
    name: 'Mojito',
    liquor: ['rum'],
    ingredients: [
      ['white rum', '60ml'],
      ['lime', '1, juiced'],
      ['granulated sugar', '1tsp'],
      ['soda water', 'to taste'],
      ['mint leaves', 'small handful'],
    ],
    garnish: ['none'],
    directions: `STEP 1
      Muddle the lime juice, sugar and mint leaves in a small jug, crushing the mint as you go – you can use the end of a rolling pin for this. Pour into a tall glass and add a handful of ice.
      STEP 2
      Pour over the rum, stirring with a long-handled spoon. Top up with soda water, garnish with mint and serve.`,
  },

  {
    name: 'Mai tai',
    liquor: ['rum'],
    ingredients: [
      ['golden rum', '25ml'],
      ['dark rum', '25ml'],
      ['orange curacao', '1tbsp'],
      ['orgeat syrup', '2 tsp'],
      ['lime juice', '25ml'],
      ['sugar syrup', '2tsp'],
      ['ice', 'crushed and cubes'],
    ],
    garnish: [
      'pineapple wedge',
      'optional: lime wheel',
      'optional: cocktail cherry',
    ],
    directions: `STEP 1
    Pour the golden rum, curacao, orgeat, lime juice and sugar syrup into a cocktail shaker with a handful of ice cubes. Shake until the outside of the shaker feels really cold.
    
    STEP 2
    Fill a tumbler with crushed ice then strain the cocktail over it. Slowly pour the dark rum over the top so it stains the top of the drink a rusty gold.
    
    STEP 3
    Garnish with fruit like pineapple, lime and cocktail cherries if you like.`,
  },

  {
    name: 'Cuba Libre',
    liquor: ['rum'],
    ingredients: [
      ['white rum', '50ml'],
      ['cola', '100ml'],
      ['lime', '1/2'],
      ['ice', 'cubed'],
    ],
    garnish: ['none'],
    directions: `STEP 1
    Cut ½ a lime into four small wedges. Squeeze the juice from two of the wedges into a tall glass. Drop the remaining wedges into the glass and fill with ice. Pour in the rum then fill up with cola and stir gently.`,
  },

  {
    name: 'Spice 75',
    liquor: ['rum'],
    ingredients: [
      ['rum', '200ml'],
      ['allspice', '1tbsp'],
      ['lime', '90ml'],
      ['champagne', '600ml'],
    ],
    garnish: ['orange twist'],
    directions: `STEP 1
    Gently warm 60g golden caster sugar in a pan with 30ml water and 1 tbsp allspice. Cook gently until the sugar has dissolved, then leave the mixture to cool. Strain through a sieve lined with a coffee filter (or a double layer of kitchen paper).
    
    STEP 2
    Pour 60ml of the spiced syrup into a cocktail shaker along with 200ml rum and 90ml lime juice. Shake with ice and strain between six flute glasses. Top up with 600ml champagne and garnish each with an orange twist.`,
  },

  {
    name: 'Pineapple caipirinha',
    liquor: ['rum'],
    ingredients: [
      ['light rum', '400ml'],
      ['pinapple', '1'],
      ['limes', '4 juiced'],
      ['golden caster sugar', '8tbsp'],
      ['pinapple juice', '800ml'],
      ['ice', 'crushed'],
    ],
    garnish: ['none'],
    directions: `STEP 1
    Core the pineapple and cut into 3cm chunks. Place 8 small handfuls of pineapple, the lime juice, half the mint and the sugar into a pitcher and mash up with the end of a rolling pin or a fat wooden spoon.
    
    STEP 2
    Pour in the rum and a little crushed ice, then pour into 8 glasses, and add more crushed ice. Pour the pineapple juice over, filling to the rim. Garnish the glasses with extra mint sprigs and cocktail sticks with pieces of pineapple threaded on.`,
  },

  {
    name: 'Long island iced tea',
    liquor: ['rum', 'vodka', 'gin', 'tequila'],
    ingredients: [
      ['rum', '50ml'],
      ['London dry gin', '50ml'],
      ['vodka', '50ml'],
      ['reposado tequila', '50ml'],
      ['triple sec', '50ml'],
      ['lime juice', '50-100ml'],
      ['cola', '500ml'],
      ['limes', '2 cut into wedges'],
      ['ice', 'cubed'],
    ],
    garnish: ['none'],
    directions: `STEP 1
    Pour the vodka, gin, tequila, rum and triple sec into a large (1.5l) jug, and add lime juice to taste. Half fill the jug with ice, then stir until the outside feels cold.
    
    STEP 2
    Add the cola then stir to combine. Drop in the lime wedges.
    
    STEP 3
    Fill 4 tall glasses with more ice cubes and pour in the iced tea.`,
  },

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
];

module.exports = rum;
