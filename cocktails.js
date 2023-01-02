const cocktails = [
  // {
  //   name: 'Whiskey Sour',
  //   liquor: ['whiskey'],
  //   ingredients: [
  //     ['2 Ounces', 'whiskey'],
  //     ['3/4 Ounces', 'lemon juice, freshly squeezed'],
  //     ['1/2 Ounce', 'simple syrup'],
  //     ['1/2 Ounce', 'egg whites (Optional)'],
  //   ],
  //   garnish: 'Garnish: Angostura Bitters',
  //   directions: [
  //     'Step 1: Add bourbon, lemon juice, simple syrup and egg white, if using, to a shaker and dry-shake for 30 seconds without ice.',
  //     'Step 2: Add ice and shake again until well-chilled.',
  //     'Step 3: Strain into a rocks glass or a coupe.',
  //     'Step 4: Garnish with 3 or 4 drops of Angostura bitters.',

  //   ]
  // },
  //   {
  //   name: 'Whiskey Highball',
  //   liquor: ['whiskey'],
  //   ingredients: [
  //     ['2 Ounces', 'whiskey'],
  //     ['4 Ounces', 'chilled club soda']
  //   ],
  //   garnish: 'Garnish: Lemon Wedge',
  //   directions: [
  //     'Step 1: Add the whiskey into a highball glass with ice.',
  //     'Step 2: Top with club soda and stir gently and briefly to combine.',
  //   ],
  // },
  // {
  //   name: 'Old Fashioned',
  //   liquor: ['whiskey'],
  //   ingredients: [
  //     ['2 Ounces', 'whiskey'],
  //     ['3 Dashes', 'Angostura bitters'],
  //     ['1 Tspn', 'water'],
  //     ['1 Teaspoon', 'sugar'],
  //   ],
  //   garnish: 'Garnish: orange peel',
  //   directions: [
  //     'Step 1: Add the sugar and bitters into a mixing glass, then add the water, and stir until the sugar is nearly dissolved.',
  //     'Step 2: Fill the mixing glass with ice, add the bourbon, and stir until well-chilled.',
  //     'Step 3: Strain into a rocks glass over one large ice cube.',
  //     'Step 4: Express the oil of an orange twist over the glass, then drop into the glass to garnish.',
  //   ]
  //   },
  // {
  //   name: 'Manhattan',
  //   liquor: ['whiskey', 'vermouth'],
  //   ingredients: [
  //     ['2 Ounces', 'whiskey'],
  //     ['1 Ounce', 'vermouth'],
  //     ['3 Dashes', 'Angostura bitters'],
  //   ],
  //   garnish: 'Garnish: Luxardo cherry',
  //   directions: [
  //     'Step 1: Add the rye whiskey, sweet vermouth, and bitters into a mixing glass with ice and stir until well-chilled.',
  //     'Step 2: Strain into a chilled Nick & Nora or coupe glass.',
  //     'Step 3: Garnish with a brandied cherry (or a lemon twist, if preferred)',
  //   ],
  // },
  // {
  //   name: 'Irish Mule',
  //   liquor: ['whiskey'],
  //   ingredients: [
  //     ['2 Ounces', 'whiskey'],
  //     ['6 Ounces', 'ginger beer'],
  //     ['1 Ounce', 'lime juice'],
  //   ],
  //   garnish: 'Garnish: lime wedge',
  //   directions: [
  //     'Step 1: Pour ingredients into copper mug or serving glass of your choice.',
  //     'Step 2: Add ice and garnish with lime, serve.',
  //   ],
  // },
  // {
  //   name: 'Mint Julep',
  //   liquor: ['whiskey'],
  //   ingredients: [
  //     ['2 Ounces', 'whiskey'],
  //     ['8', 'mint leaves'],
  //     ['1/4 Ounce', 'simple syrup'],
  //     ['1/2 Ounce', 'White Creme de Cacao'],
  //   ],
  //   garnish: 'Garnish: mint sprig',
  //   directions: [
  //     'Step 1: Place the mint leaves and simple syrup into a Julep cup and gently muddle.',
  //     'Step 2: Add the bourbon and white creme de cacao, then pack the cup halfway with crushed ice.',
  //     'Step 3: Stir until the cup is frosted on the outside.',
  //     'Step 4: Top with more crushed ice to form a mound.',
  //     'Step 5: Garnish with a mint sprig and a Thin Mint cookie.',
  //   ],
  // },
  // {
  //   name: 'The Vieux Carre',
  //   liquor: ['whiskey', 'cognac', 'vermouth'],
  //   ingredients: [
  //     ['1/2 Ounce', 'whiskey'][('1/2 Ounce', 'cognac')],
  //     ['1/2 Ounce', 'sweet vermouth'],
  //     ['1 Dash', 'Peychaud bitters'],
  //     ['1 Dash', 'Angostura bitters'],
  //   ],
  //   garnish: 'Garnish: Cocktail cherry or Luxardo cherry',
  //   directions: [
  //     'Step 1: Add all ingredients to glass and stir (do not shake).',
  //     'Step 2: Add 1 handful of ice and continuously stir for 30 seconds.',
  //     'Step 3: Add ice to a lowball glass and strain drink into it.',
  //     'Step 4: Garnish with cherry and serve.',
  //   ],
  // },
  // {
  //   name: 'Hot Toddy',
  //   liquor: ['whiskey'],
  //   ingredients: [
  //     ['2 Ounces', 'whiskey'],
  //     ['1 Teaspoon', 'honey'],
  //     ['4 Ounces', 'boiling water'],
  //     ['1/2 ounce', 'lemon juice'],
  //     ['4', 'cloves'],
  //   ],
  //   garnish: 'Garnish: Lemon',
  //   directions: [
  //     'Step 1: Fill a mug with boiling water and let stand for a minute or two to warm.',
  //     'Step 2: Meanwhile, stick the cloves into the lemon peel or wheel and set aside.',
  //     'Step 3: Empty the mug and fill about halfway with fresh boiling water.',
  //     'Step 4: Add the sugar and stir to dissolve.',
  //     'Step 5: Add the prepared lemon peel or wheel and stir.',
  //     'Step 6: Add the lemon juice and whiskey, and stir again.',
  //   ],
  // },
  // {
  //   name: 'Whiskey Eggnog',
  //   liquor: ['whiskey'],
  //   ingredients: [
  //     ['4 Ounces', 'whiskey'],
  //     ['2 Eggs', 'separated'],
  //     ['1/4 Cup', 'sugar'],
  //     ['1 1/2 Cup', 'whole Milk'],
  //     ['1/2 Cup', 'heavy Cream'],
  //     ['2 Eggs', 'separated'],
  //   ],
  //   garnish: 'Garnish: grated nutmeg',
  //   directions: [
  //     'Step 1: In a large bowl, beat the egg yolks with 3 tablespoons of the sugar until fluffy.',
  //     'Step 2: Stir in the milk, heavy cream and your spirit of choice.',
  //     'Step 3: In a separate bowl, beat the egg whites with the remaining 1 tablespoon of sugar until soft peaks form.',
  //     'Step 4: Fold the egg whites into the yolk mixture.',
  //     'Step 5: Divide between four rocks glasses or punch or tea cups.',
  //     'Step 6: Garnish each with freshly grated nutmeg.',
  //   ],
  // },
  // {
  //   name: 'Whiskey & Coke',
  //   liquor: ['whiskey'],
  //   ingredients: [
  //     ['2 Ounces', 'whiskey'],
  //     ['4-6 Ounces', 'Coca-Cola'],
  //   ],
  //   garnish: 'Garnish: lemon twist',
  //   directions: [
  //     'Step 1: Add the whiskey into a double rocks glass over one large ice cube or a highball glass filled with ice.',
  //     'Step 2: Top with the cola and stir briefly and gently to combine.',
  //     'Step 3: Garnish with a lemon twist, if desired',
  //   ],
  // },

  // End Of Whiskey
  /*------------------------ */
  //Begin Vodka

  // {
  //   name: 'White Russian',
  //   liquor: ['vodka', 'khalua'],
  //   ingredients: [
  //     ['2 Ounce', 'vodka'],
  //     ['1 Ounce', 'Kahlua'],
  //     ['1 Splash', 'heavy cream'],
  //   ],
  //   garnish: 'Garnish: none',
  //   directions: [
  //     'Step 1: Add the vodka and Kahlúa to a rocks glass filled with ice.',
  //     'Step 2: Top with the heavy cream and stir.',
  //   ],
  // },
  // {
  //   name: 'Bankers Lunch',
  //   liquor: ['vodka', 'vermouth'],
  //   ingredients: [
  //     ['1 1/2 Ounces', 'vodka'],
  //     ['1 1/2 Ounces', 'vermouth'],
  //     ['1 1/2 Ounces', 'grapefruit juice'],
  //   ],
  //   garnish: 'Garnish: grapefruit twist',
  //   directions: [
  //     'Step 1: Add all the ingredients into a shaker with ice and shake until well-chilled.',
  //     'Step 2: Strain into a rocks glass over fresh ice.',
  //     'Step 3: Garnish with a grapefruit twist.',
  //   ],
  // },
  // {
  //   name: 'West Side',
  //   liquor: ['vodka'],
  //   ingredients: [
  //     ['2 Ounces', 'vodka'],
  //     ['1/2 Ounce', 'simple syrup'],
  //     ['3 pinches', 'fresh mint'],
  //     ['1 Ounce', 'club soda'],
  //   ],
  //   garnish: 'Garnish: none',
  //   directions: [
  //     'Step 1: Add the vodka, lemon juice, simple syrup and mint to a shaker with ice and shake until well-chilled.',
  //     'Step 2: Open the shaker and add a splash of club soda.',
  //     'Step 3: Strain into a chilled cocktail glass.',
  //   ],
  // },
  // {
  //   name: 'Vodka Martini',
  //   liquor: ['vodka', 'vermouth'],
  //   ingredients: [
  //     ['2 1/2 Ounces', 'vodka'],
  //     ['1/2 Ounce', 'vermouth'],
  //     ['1 dash', 'orange bitters'],
  //   ],
  //   garnish: 'Garnish: lemon twist',
  //   directions: [
  //     'Step 1: Add the vodka, dry vermouth and orange bitters into a mixing glass with ice and stir until very well-chilled, about 20 to 30 seconds.',
  //     'Step 2: Strain into a chilled cocktail glass.',
  //     'Step 3: Garnish with a lemon twist.',
  //   ],
  // },
  // {
  //   name: 'Cosmopolitan',
  //   liquor: ['vodka'],
  //   ingredients: [
  //     ['1 1/2 Ounces', 'vodka'],
  //     ['3/4 Ounces', 'Cointreau'],
  //     ['3/4 Ounces', 'lime juice'],
  //     ['1/2 Ounce', 'cranberry juice cocktail'],
  //   ],
  //   garnish: 'Garnish: lime wedge',
  //   directions: [
  //     'Step 1: Add the vodka, Cointreau, lime juice, and cranberry juice cocktail into a shaker with ice and shake until well-chilled.',
  //     'Step 2: Strain into a chilled cocktail glass.',
  //     'Step 3: Garnish with a lime wedge.',
  //   ],
  // },
  // {
  //   name: 'Harvey Wallbanger',
  //   liquor: ['vodka', 'liqueur'],
  //   ingredients: [
  //     ['1 1/4 Ounces', 'vodka'],
  //     ['1/2 Ounce', 'liqueur'],
  //     ['3 Ounces', 'orange juice'],
  //   ],
  //   garnish: 'Garnish: orange slice',
  //   directions: [
  //     'Step 1: Fill a tall glass with ice, then add the vodka and orange juice and stir.',
  //     'Step 2: Float the liqueur on top.',
  //     'Step 3: Garnish with a skewered orange slice and maraschino cherry.',
  //   ],
  // },
  // {
  //   name: 'Espresso Martini',
  //   liquor: ['vodka', 'Kahlua'],
  //   ingredients: [
  //     ['2 Ounces', 'vodka'],
  //     ['1/2 Ounce', 'Kahlua'],
  //     ['1/2 Ounce', 'simple syrup'],
  //   ],
  //   garnish: 'Garnish: coffee beans',
  //   directions: [
  //     'Step 1: Add vodka, coffee liqueur, espresso and simple syrup to a shaker filled with ice and shake until well-chilled.',
  //     'Step 2: Strain into a chilled cocktail glass.',
  //     'Step 3: Garnish with 3 coffee beans.',
  //   ],
  // },
  // {
  //   name: 'Classic Bloody Mary',
  //   liquor: ['vodka'],
  //   ingredients: [
  //     ['2 Ounces', 'vodka'],
  //     ['1', 'lemon wedge'],
  //     ['1', 'lime wedge'],
  //     ['4 Ounces', 'tomato juice'],
  //     ['2 Teaspoons', 'horseradish'],
  //     ['2 Dashes', 'Tobasco sauce'],
  //     ['2 Dashes', 'Worcestershire sauce'],
  //     ['1 Pinch', 'ground black pepper'],
  //   ],
  //   garnish:
  //     'Garnish: parsley sprig, green olives, lime wedge, and celery stalk',
  //   directions: [
  //     'Step 1: Pour some celery salt onto a small plate.',
  //     'Step 2: Rub the juicy side of the lemon or lime wedge along the lip of a pint glass.',
  //     'Step 3: Roll the outer edge of the glass in celery salt until fully coated, then fill the glass with ice and set aside.',
  //     'Step 4: Squeeze the lemon and lime wedges into a shaker and drop them in.',
  //     'Step 5: Add the vodka, tomato juice, horseradish, Tabasco, Worcestershire, black pepper, paprika, plus a pinch of celery salt along with ice and shake gently.',
  //     'Step 6: Strain into the prepared glass.',
  //     'Step 7: Garnish with parsley sprig, 2 speared green olives, a lime wedge and a celery stalk (optional).',
  //   ],
  // },
  // {
  //   name: 'Lemon Drop',
  //   liquor: ['vodka'],
  //   ingredients: [
  //     ['2 Ounces', 'vodka'],
  //     ['1/2 Ounce', 'triple sec'],
  //     ['1 Ounce', 'lemon juice'],
  //     ['1 Ounce', 'simple syrup'],
  //   ],
  //   garnish: 'Garnish: sugar rim',
  //   directions: [
  //     'Step 1: Coat the rim of a cocktail glass with sugar and set aside (do this a few minutes ahead so the sugar can dry and adhere well to the glass).',
  //     'Step 2: Add the vodka, triple sec, lemon juice and simple syrup to a shaker with ice and shake until well-chilled.',
  //     'Step 3: Strain into the prepared glass.',
  //   ],
  // },
  // {
  //   name: 'Vodka Tonic',
  //   liquor: ['vodka'],
  //   ingredients: [
  //     ['2 Ounces', 'vodka'],
  //     ['6 Ounces', 'tonic water'],
  //     ['1', 'lemon'],
  //   ],
  //   garnish: 'Garnish: lemon peel',
  //   directions: [
  //     'Step 1: Add the vodka to a Collins glass.',
  //     'Step 2: Fill the glass with ice, then top with the tonic water and add an optional squeeze of lemon.',
  //     'Step 3: Garnish with lemon peel.',
  //   ],
  // },

  // End Of Whiskey
  /*------------------------ */
  //Begin Rum
  // {
  //   name: 'Daiquiri',
  //   liquor: ['rum'],
  //   ingredients: [
  //     ['2 Ounces', 'light rum'],
  //     ['1 Ounce', 'lime juice'],
  //     ['3/4 Ounces', 'demerara sugar syrup'],
  //   ],
  //   garnish: 'Garnish: lime twist',
  //   directions: [
  //     'Step 1: Add the rum, lime juice and demerara sugar syrup to a shaker with ice, and shake until well-chilled.',
  //     'Step 2: Strain into a chilled coupe.',
  //     'Step 3: Garnish with a lime twist.',
  //   ],
  // },
  // {
  //   name: 'Strawberry Daiquiri',
  //   liquor: ['rum'],
  //   ingredients: [
  //     ['1 1/2 Ounces', 'rum'],
  //     ['1 Ounce', 'lime Juice'],
  //     ['1 Ounce', 'simple Syrup'],
  //     ['Ice', 'crushed to oblivion'],
  //   ],
  //   garnish: 'Garnish: Edible Orchid (Optional)',
  //   directions: [
  //     'Step 1: Add the rum, rich simple syrup, lime juice and strawberries into a blender with 5 to 6 ice cubes and blend until smooth.',
  //     'Step 2: Pour into a Margarita glass or wine goblet.',
  //     'Step 3: Garnish with an optional edible orchid.',
  //   ],
  // },
  // {
  //   name: 'Mojito',
  //   liquor: ['rum'],
  //   ingredients: [
  //     ['2 Ounces', 'light rum'],
  //     ['1/2 Ounce', 'simple syrup'],
  //     ['3/4 Ounces', 'lime juice'],
  //     ['6-8 Ounces', 'club soda'],
  //   ],
  //   garnish: 'Garnish: lime wheel, mint sprig',
  //   directions: [
  //     'Step 1: Lightly muddle the mint with the simple syrup in a shaker.',
  //     'Step 2: Add the rum, lime juice and ice, and give it a brief shake, then strain into a highball glass over fresh ice. Alternatively, you can use pebble ice instead and gently swizzle it all together.',
  //     'Step 3: Top with the club soda.',
  //     'Step 4: Garnish with a mint sprig and lime wheel.',
  //   ],
  // },
  // {
  //   name: 'Dark and Stormy',
  //   liquor: ['rum'],
  //   ingredients: [
  //     ['2 Ounces', 'dark rum'],
  //     ['1/2 Ounce', 'lime juice'],
  //     ['6 Ounces', 'ginger beer'],
  //   ],
  //   garnish: 'Garnish: lime wheel',
  //   directions: [
  //     'Step 1: Add rum and lime juice to a tall glass filled with ice.',
  //     'Step 2: Top with the ginger beer.',
  //     'Step 3: Garnish with a lime wheel.',
  //   ],
  // },
  // {
  //   name: 'Piña Colada',
  //   liquor: ['rum'],
  //   ingredients: [
  //     ['2 Ounces', 'light rum'],
  //     ['1 1/2 Ounces', 'cream of coconut'],
  //     ['1 1/2 Ounces', 'pineapple juice'],
  //     ['1/2 Ounces', 'lime juice'],
  //   ],
  //   garnish: 'Garnish: pineapple wedge',
  //   directions: [
  //     'Step 1: Add the rum, cream of coconut and pineapple and lime juices to a shaker with ice and shake vigorously for 20 to 30 seconds.',
  //     'Step 2: Strain into a chilled Hurricane glass over pebble ice.',
  //     'Step 3: Garnish with a pineapple wedge.',
  //   ],
  // },
  // {
  //   name: 'Rum Punch',
  //   liquor: ['rum'],
  //   ingredients: [
  //     ['1 1/4 Ounces', 'light rum'],
  //     ['1 1/4 Ounces', 'dark rum'],
  //     ['2 Ounces', 'pineapple juice'],
  //     ['1 Ounce', 'orange juice'],
  //     ['1/4 Ounce', 'lime juice'],
  //   ],
  //   garnish: 'Garnish: maraschino cherry',
  //   directions: [
  //     'Step 1: Add light rum, dark rum, pineapple, orange and lime juices, and grenadine into a shaker with ice, and shake until well-chilled.',
  //     'Step 2: Strain into a Hurricane glass over fresh ice.',
  //     'Step 3: Garnish with a maraschino cherry.',
  //   ],
  // },
  // {
  //   name: 'Mai Tai',
  //   liquor: ['rum'],
  //   ingredients: [
  //     ['1 1/2 Ounces', 'light rum'],
  //     ['1/2 Ounce', 'dark rum'],
  //     ['3/4 Ounces', 'orange curacao'],
  //     ['3/4 Ounces', 'lime juice, freshly squeezed'],
  //     ['1/2 Ounce', 'orgeat'],
  //   ],
  //   garnish: 'Garnish: lime wheel, mint sprig',
  //   directions: [
  //     'Step 1: Add the white rum, curaçao, lime juice and orgeat into a shaker with crushed ice and shake lightly (about 3 seconds).',
  //     'Step 2: Pour into a double rocks glass.',
  //     'Step 3: Float the dark rum over the top.',
  //     'Step 4: Garnish with a lime wheel and mint sprig.',
  //   ],
  // },
  // {
  //   name: 'Long Island Iced Tea',
  //   liquor: ['vodka', 'rum', 'tequila', 'gin'],
  //   ingredients: [
  //     ['3/4 Ounce', 'vodka'],
  //     ['3/4 Ounce', 'light rum'],
  //     ['3/4 Ounce', 'silver tequila'],
  //     ['3/4 Ounce', 'gin'],
  //     ['3/4 Ounce', 'triple sec'],
  //     ['3/4 Ounce', 'simple syrup'],
  //     ['3/4 Ounce', 'lemon juice'],
  //     ['4 Ounces', 'cola'],
  //   ],
  //   garnish: 'Garnish: lemon wedge',
  //   directions: [
  //     'Step 1: Add the vodka, rum, tequila, gin, triple sec, simple syrup and lemon juice to a Collins glass filled with ice.',
  //     'Step 2: Top with a splash of the cola and stir briefly.',
  //     'Step 3: Garnish with a lemon wedge.',
  //     'Step 4: Serve with a straw.',
  //   ],
  // },
  // // End Of Whiskey
  // /*------------------------ */
  // //Begin Tequila

  // {
  //   name: 'Smoke Follows Beauty',
  //   liquor: ['tequila'],
  //   ingredients: [
  //     ['2 ounces', 'tequila'],
  //     ['3/4 Ounce', 'triple sec'],
  //     ['3 Slices', 'cucumber'],
  //     ['2 stalks', 'cilantro'],
  //     ['3/4 Ounce', 'lime juice'],
  //     ['1/4 Ounce', 'agave syrup'],
  //   ],
  //   garnish: 'Garnish: jicama slice',
  //   directions: [
  //     'Step 1: In a shaker, muddle the cucumber and cilantro.',
  //     'Step 2: Add the tequila, infused triple sec, lime juice, agave syrup, and ice, and shake until well-chilled.',
  //     'Step 3: Double-strain into a Nick & Nora glass.',
  //     'Step 4: Garnish with a chilled slice of jicama seasoned with sal de gusano.',
  //   ],
  // },
  // {
  //   name: 'Lone Ranger',
  //   liquor: ['tequila'],
  //   ingredients: [
  //     ['1 1/2 Ounces', 'silver tequila'],
  //     ['1 Ounce', 'lemon juice'],
  //     ['1/2 Ounce', 'simple syrup'],
  //     ['2 Ounces', 'rosé sparklin wine'],
  //   ],
  //   garnish: 'Garnish: lemon twist',
  //   directions: [
  //     'Step 1: Add the tequila, lemon juice and simple syrup to a shaker with ice and shake until well-chilled.',
  //     'Step 2: Add the sparkling wine.',
  //     'Step 3: Strain into a Collins glass filled with fresh ice.',
  //     'Step 4: Garnish with a lemon twist.',
  //   ],
  // },
  // {
  //   name: 'Tequila Mockingbird',
  //   liquor: ['tequila'],
  //   ingredients: [
  //     ['2 Ounces', 'silver tequila'],
  //     ['1 Slice', 'jalapeno'],
  //     ['3', 'watermelon cubes'],
  //     ['3/4 Ounce', 'agave syrup'],
  //   ],
  //   garnish: 'Garnish: none',
  //   directions: [
  //     'Step 1: Muddle the jalapeño slice and watermelon cubes in a shaker to extract the juices.',
  //     'Step 2: Add tequila, lime juice, agave syrup and ice, and shake until well-chilled.',
  //     'Step 3: Fine-strain into a rocks glass over fresh ice.',
  //   ],
  // },
  // {
  //   name: 'Watermelon Margarita',
  //   liquor: ['tequila'],
  //   ingredients: [
  //     ['1 1/2 Ounces', 'silver tequila'],
  //     ['4', 'mint leaves'],
  //     ['1/2 Ounce', 'lime juice'],
  //     ['1/2 Ounce', 'watermelon juice'],
  //   ],
  //   garnish: 'Garnish: watermelon slice, mint sprig',
  //   directions: [
  //     'Step 1: Add the mint leaves and agave into a shaker and gently muddle.',
  //     'Step 2: Add the tequila, lime juice and watermelon juice to the muddled mint leaves, then add ice and shake until well-chilled.',
  //     'Step 3: Double-strain into a rocks glass over fresh ice.',
  //     'Step 3: Garnish with a fresh mint sprig and a watermelon slice.',
  //   ],
  // },

  /* End Tequila
     Start Gin
  */
  // {
  //   name: 'New York Sour',
  //   liquor: ['gin'],
  //   ingredients: [
  //     ['2 Ounces', 'American gin'],
  //     ['3/4 Ounces', 'sour cherry cordial'],
  //     ['1/2 Ounce', 'lemon juice'],
  //     ['4 Ounces', 'club soda'],
  //   ],
  //   garnish: 'Garnish: lemon twist',
  //   directions: [
  //     'Step 1: Add all the ingredients except the club soda to a shaker and fill with ice.',
  //     'Step 2: Shake, and strain into a Collins glass filled with fresh ice.',
  //     'Step 3: Top with club soda and garnish with a lemon twist.',
  //   ],
  // },

  // {
  //   name: 'El Chapo',
  //   liquor: ['gin', 'aperol'],
  //   ingredients: [
  //     ['1 1/2 Ounces', 'gin'],
  //     ['1 Ounce', 'strawberry infused aperol'],
  //     ['6 Ounces', 'grapefruit beer'],
  //   ],
  //   garnish: 'Garnish: 2 strawberry slices',
  //   directions: [
  //     'Step 1: Fill a rocks glass with ice, then add the gin and strawberry-infused Aperol.',
  //     'Step 2: Top with the beer.',
  //     'Step 3: Garnish with two fresh strawberry slices speared on a cocktail pick.',
  //     '*Strawberry-infused Aperol: Soak a half pint of fresh strawberries in a 750 mL bottle of Aperol for at least eight hours or overnight, then strain the solids. Store the infused Aperol in the refrigerator.',
  //   ],
  // },

  // {
  //   name: 'Bees Knees',
  //   liquor: ['gin'],
  //   ingredients: [
  //     ['2 Ounces', 'gin'],
  //     ['3/4 Ounces', 'lemon juice'],
  //     ['1/2 Ounce', 'honey syrup'],
  //   ],
  //   garnish: 'Garnish: lemon twist',
  //   directions: [
  //     'Step 1: Add the gin, lemon juice and honey syrup into a shaker with ice and shake until well-chilled.',
  //     'Step 2: Strain into a chilled cocktail glass.',
  //     'Step 3: Garnish with a lemon twist.',
  //   ],
  // },

  // {
  //   name: 'Gin Rickey',
  //   liquor: ['gin'],
  //   ingredients: [
  //     ['2 Ounces', 'gin'],
  //     ['1/2 Ounces', 'lime juice'],
  //     ['4 Ounces', 'club soda'],
  //   ],
  //   garnish: 'Garnish: lime wheels',
  //   directions: [
  //     'Step 1: Fill a highball glass with ice and add the gin and lime juice.',
  //     'Step 2: Top with club soda.',
  //     'Step 3: Garnish with 2 lime wheels.',
  //   ],
  // },

  // {
  //   name: 'Timberpoint Cooler',
  //   liquor: ['gin', 'aperol'],
  //   ingredients: [
  //     ['2 Ounces', 'gin'],
  //     ['1 Ounce', 'aperol'],
  //     ['3/4 Ounces', 'lime juice'],
  //     ['1/2 Ounce', 'simple syrup'],
  //     ['4 Ounces', 'club soda'],
  //   ],
  //   garnish: 'Garnish: cucumber slice',
  //   directions: [
  //     'Step 1: Add all ingredients except club soda into a shaker with ice and shake until well-chilled.',
  //     'Step 2: Strain into a Collins glass over fresh ice.',
  //     'Step 3: Top with the club soda and stir gently to combine.',
  //     'Step 4: Garnish with a long slice of cucumber, placed along the inside of the glass to form a spiral shape.',
  //   ],
  // },

  // {
  //   name: 'Ring the Alarm',
  //   liquor: ['tequila', 'aperol'],
  //   ingredients: [
  //     ['1 1/2 Ounces', 'tequila'],
  //     ['1/2 Ounces', 'aperol'],
  //     ['1 Ounce', 'pineapple juice'],
  //     ['1/4 Ounce', 'agave nectar'],
  //     ['1 dash', 'bitters'],
  //     ['1', 'lime wedge'],
  //     ['1/2 Ounces', 'lime juice'],
  //   ],
  //   garnish: 'Garnish: lime wheel',
  //   directions: [
  //     'Step 1: Rub the rim of a rocks glass with the lime wedge, coat with the spice rim and set aside.',
  //     'Step 2: Add all ingredients into a shaker with ice and shake until well-chilled.',
  //     'Step 3: Strain into the prepared rocks glass over fresh ice.',
  //     'Step 4: Garnish with a lime wheel.',
  //   ],
  // },

  // {
  //   name: 'Naked and Famous',
  //   liquor: ['tequila', 'aperol'],
  //   ingredients: [
  //     ['3/4 Ounces', 'tequila'],
  //     ['3/4 Ounces', 'aperol'],
  //     ['3/4 Ounces', 'yellow chartreuse'],
  //     ['3/4 Ounces', 'lime juice'],
  //   ],
  //   garnish: 'Garnish: none',
  //   directions: [
  //     'Step 1: Add all ingredients into a shaker with ice and shake until well-chilled.',
  //     'Step 2: Strain into a chilled coupe glass.',
  //   ],
  // },
  {
    name: 'Boilermaker',
    liquor: ['whiskey'],
    ingredients: [
      ['1 1/2 Ounces', 'whiskey'],
      ['8 Ounces', 'beer'],
    ],
    garnish: 'Garnish: none',
    directions: [
      'Step 1: Pour the whiskey into a shot glass.',
      'Step 2: Fill a pint glass halfway with beer.',
      'Step 3: Drop the shot glass into the beer.',
    ],
  },
];

console.log(JSON.stringify(cocktails));
