---
slug: til2023
title: Things I TIL'ed in 2023
authors: pdeng
tags: [til]
---

The best and most indirect way to journal and review the year

<!--truncate-->

2023's collection of TILs may appear somewhat eclectic, but isn't each year a tapestry woven with threads of serendipity? This compilation might be a bit shorter, with some more profound insights than the usual bite-sized TILs, but I hope you'll find it an enjoyable read.

1. Scare quotes
    * Quotation marks put around a term or sentence when it is not required to spread doubt
    > Some examples that come to my mind are "global warming", "pandemic", "bug"

1. Bit Rot
    * When code is not actively maintained, also known as software rot
    >  A similar concept for data engineering exists and I think a good name for it would be data rot
      * Where people forget what specific fields mean or problems that are embedded in the data
      * Stems from embedding custom or business logic into the extract-transform-load pipeline for the sake of easier queries for the end-users
      * This behavior can quickly degrade into long-term maintainability and usability issues and cause data rot

1. Doumbek
    * ![](https://upload.wikimedia.org/wikipedia/commons/b/bb/Goblet_drum_01.jpg)
    * Egyptian drum, a mesmerizing percussion instrument producing "Doom," "Tak," and "Pa" sounds

1. Chrono-urbanism
    * A way of planning the city around *time* instead of *space*
    * The Northstar for chrono-urbanism city planning would be the "[15-minute city](https://www.15minutecity.com/blog/hello)" where access to essential needs of a person are met within 15 minutes
        * A secondary goal would be to meet this not just physically but also financially
    * Seattle is exploring this concept in their [20-year vision plan](https://www.seattle.gov/opcd/ongoing-initiatives/seattle-2035-comprehensive-plan)

1. [Russell's Paradox](https://en.wikipedia.org/wiki/Russell%27s_paradox)
    * Bertrand Russell in 1901 showed that every set theory that contains an unrestricted comprehension principle leads to contradictions
        * Discovered independently by Ernst Zermelo in 1899
    * Unrestricted comprehension principle is that for any sufficiently well-defined property, there is the set of all and only the objects that have that property

    > So that was probably very confusing, tbh that was a lot of copying and pasting, so trying to explain this paradox in layman's terms, I have two examples

    1. Barber paradox: a barber is "one who shaves all those, and those only, who do not shave themselves" and the question is: does the barber shave themself?
        * If the barber shaves themselves then by the definition above, he is no longer a barber
        * But if a barber doesn't shave themself then he belongs in the group of people that needs to be shaved by a barber which is themself
    1. The other is: that all rules have exceptions
        * If this is a rule, then there must be an exception where there is a set of rules without exceptions
        * However, if that were to be true then the original statement would be false

1. Punch card machines predate computers
    * Used in the late 18th and early 19th century for looms to weave different patterns on clothes and it was later used by IBM in the 1890s to program code
    > I have always associated punch cards with the old computers that took up an entire floor and thinking about handing in computer assignments that were in a binder full of punch cards and accidentally feeding them in the wrong order and having the program crash

1. [Shoshikantetsu](https://asnewman.github.io/shoshikantetsu)
    * To carry out something as intended when you have low motivation
    > I need to remember this in the latter half of the year when most of the New Year resolutions are going by the wayside!

1. Stroad
    * A portmanteau (an old TIL) of street and road
    * Coined by the American civil engineer Charles Marohn to describe poorly designed infrastructure that fails to do the job of either a street or road so it ends up doing both poorly
    * A street is meant to be a destination in itself with shops and restaurants to promote pedestrian use
    * A road is meant to transport people from point A to B
    > Personally my favourite TIL of the year!

1. [Cunningham's Law](https://xkcd.com/386/)
    * The internet's ironic wisdom: To find the right answer, post the wrong one
    > The obligatory xkcd reference. Not sure who Cunningham is or if it's a reference to something.

1. Ferrite bead
    * Remember those bulgy plastic before the plug that looks like this ![](https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Cable_end.JPG/220px-Cable_end.JPG)
    * It is meant to suppress high-frequency electronic noise in the circuit which prevents electromagnetic interference from and to the device

1. Da Hong Pao Mother Trees
    * ![](https://static.wixstatic.com/media/bd777d_51bff6f886f341c08b2f1ca325c72ebd~mv2.jpg)
    * The origin of Da Hong Pao (big red robe) tea is from a story where a scholar was on his way to take the imperial exam, the Gaokao of olden days, but was exhausted from the journey. A monk brewed some tea and he was able to continue his journey and ended up with the top score. On the way home, he paid tribute to the tree where the tea was from by putting his red robe from attaining the top score around it
    * There are 6 trees in the rocks of Jiu Long Ke in Wuyi, Fujian which have been around for 360 years
    * According to folklore, the teas from these trees were sent as tribute to the Emperor
        * In 1998, 20g of tea produced from these trees was auctioned for 20,000 USD
        * It is no longer allowed to harvest from these trees as they are protected national heritage

1. Hemingway Cats
    * 6-toed cats (polydactyl) cats that live on Hemingway's property
        * They all carry the gene but half exhibit the physical trait
    * Ernest Hemingway was given a 6-toed cat by a ship's captain
    * His residence in Key West is relatively isolated, so the descendants are kept relatively within the same gene pool

1. Whale Falls
    * The phenomenon where a large whale carcass falls into the deep ocean floor relatively intact
      * The carcass can house a complex localized ecosystem for sea organisms for decades
    * First discovered in 1987, by the submersible vessels that were used in the Titanic Salvage

1. Duck Tape
    * It originates from duck cloth (from the Dutch word doek) which is a heavy woven fabric that can be made waterproof by coating it with wax
    * Strips of these duck cloth were used as decoration or to strengthen shoes
    > Settling the age-old debate: it's "duck" tape not "duct" tape

1. Nerfing
    > Always knew that it was a gaming term that means to tune down the ability or the mechanic of a character, opposite of buffing
    * Learned that it is a reference to the Nerf guns being the soft version of the actual thing

1. Bone Dry Martini
    * Gin in a chilled glass, sometimes washed with vermouth just to be discarded before pouring in the gin

1. Ergodicity
    > This is gonna be a long one but super worthwhile

    * An ergodic system is when the average outcome of a cohort is the **same** as the average outcome of the individual over time
        * For example, if there are 100 gamblers in a casino and they make bets with the odd 1/100 gamblers will go bankrupt. But this means that, if gambler number 28 goes bust, it does not affect gambler number 29. Using the standard cost-benefit analysis * this activity would have a good expected average return
        * However, if this is applied to a single person across 100 days with the same odds. This person can go bust on day 28 and have no money for future days.
        * This means that the ensemble probability can't be applied to the time probability of a single individual * not an ergodic system!
    * Usually, financial decisions *assume* an ergodic system when in reality it is *actually* non-ergodic
        * For example, for retirement planning we often assume a constant rate of return on investment. However, if you layer in the actual sequence of the rate of return that averages out to the constant rate on top of your anticipated expenses - you could potentially be in a situation where you have to take out investments when it is not favorable
    * Relating to the idea from Nassim Taleb's book Antifragile, there is an idea that some things respond negatively to volatility while others respond positively
        * Things that respond positively are antifragile and also ergodic

1. Abilene Paradox
    * When the group makes a decision contrary to all the individuals' preferences
    * Stems from thinking that others in the group would prefer something even though they personally don't
    > Maybe you've experienced this as a couple where you end up making a decision that you mistakenly thought the other person wanted

1. PF Chang, Haagen-Dazs
    * Examples of a marketing tactic to give the audience an expectation for the product
    * The PF in PF Chang stands for Paul Fleming one of the two co-founders, the other is Philip Chiang
    >  But when the initials are used as the restaurant name it was able to hide the non-Asian roots, kind of similar to JK Rowling hiding her gender by abbreviating her name because of the gender discrimination that was in the publishing world
    * Haagen-Dazs was invented by the creators to "sound Danish"
        * A tribute to their good treatment of Jews during WWII

1. [Chianti Rooster Legend](https://www.beginnerwineguide.com/what-is-the-story-behind-that-rooster-on-the-neck-of-the-wine-bottle/)
    * The area between Florence and Siena in Italy was under contention and after decades of battles, they decided to settle it once and for all
    * Decided to settle it with their knights race to the boundary at the sound of a rooster's crow in the mornings
    * They were able to choose their own roosters and the Florentines picked a black rooster that they starved for days
    * Because of the starvation, it croaked way before sunrise, and the Florentine knight raced to only 20KM away from the Sienna walls
    > Yes I know it's just folklore but also hilarious to think the Siennians (?) were just like, okay we accept you won that fair and square

1. Why is the glacier water blue
    * Minerals from glaciers, known as glacier flour, absorb short wavelengths, giving glacier water its striking blue hue
    > for reference: ROYGBIV

1. [Noctalgia](https://www.space.com/light-pollution-loss-dark-skies-noctalgia)
    * Means sky grief
    * A new term to describe the loss of the dark sky due to light pollution
    > Reminds me of the words from the dictionary obscure sorrows

1. When pigs fly
    * An adynaton, which is a hyperbole that is so extreme to imply the impossible
    * Other adynatons include:
        * "I will sooner have a beard grow in the palm of my hand than he shall get one on his cheek"
        * "Not before Hell freezes over"
        * "When the Leafs win the Cup" ;)
    > There seems to be a trend of animal references (when cows fly, when hens grow teeth, when cow coughs, when an owl's tail blooms, when donkeys fly, when fish climb poplar trees)

1. Drunk bears in Montana
    1. There is a railroad near Glacier National Park where the trains will sometimes spill grain and it gets fermented from the sun. The bears in the area would come and get drunk off the fermented grain and either tries to outrun the train on the track or would be wasted on the track which leads to their deaths
    * No preventative action has been actively taken right now because the rail company believes that grizzly bears will be delisted as a threatened species
    > Of the measures that were discussed the only one that seems reasonable is to not load the train in a way that would cause spillage. This seems obvious enough since the grain seems to be lost on the road anyway

1. Footgun
    * A programming joke for a feature that results in the user shooting themself in the foot

1. Schrodinger's Cat
    > The common usage of this reference today is that it is an explainer for quantum mechanics but in actuality, it was a criticism of Copenhagen's interpretation which included the idea that quantum mechanics is intrinsically indeterministic
    * Erwin Schrodinger came up with this paradoxical example to illustrate the *absurdity* of Copenhagen's interpretation where the cat can be *simultaneously* alive and dead in the box that contains a radiation monitor that can release poison
    * The collapse of the states happens when one looks into the box but when exactly did the quantum superposition end?

1. Why is the Napa Valley a great place to grow grapes for wine
    * Diuaral temperature range
        * The big temperature swing from day to night allows for the grapes to ripen for longer on the vine as the low temperature pauses the growth of the grapes
        * This gives the grapes a "long hang time" to develop more flavor for wine
        * The temperature swing comes from the cooling effect of the Pacific Ocean
        * Winegrowers will use fans to move the hotter air above the ground down during very cold nights to prevent frost from forming
    * Diversity of soil types
        * As a result of geological activity 150 million years ago
        * It is also well-drained and deep
    * Policy
        * It became the first agricultural reserve in the US in 1968 which has stringent protections of the land for wine growing only

1. Why are there roses at the end of vineyard rows
    * There are several explanations but could all be urban legends
    * Disease detection system
        * Roses are more sensitive to disease or insect infestation and could serve as an early warning system for the health of the vineyard
        * But winegrowers have also said if there are insects on the roses there is probably not enough time to protect the grapes
    * Turn signal for the horses or oxen
        * Back when farm animals were used, roses were used to ensure they didn't cut across the rows and damage the grapes

1. Madeira Wine
    * Fortified wine made on the Portuguese Madeira Islands by oxidizing wine through heat and aging
    * This produces wine that can be stored for a long long time, for decades and even centuries
        * The oldest known vintage is a 1715 Terrantez
    * The Solera process is a way to age liquids by fractional blending of older products with younger ones to increase the average age
        * It means "on the ground" in Spanish because the fractional blending transfers from between barrels from the top to bottom

    > The Madeira wine produced in Napa uses this process with a very old vintage that was stored and forgotten when the family hid their alcohol during the prohibition and pivoted to another business

1. Kona Coffee
    * Grown exclusively in Kona, Hawaii on the Big Island
    * First planted by Don Francisco de Paula Marin in 1817 and popularized by Samuel Ruggles in 1828
        * Started to switch the local sugar plantation owners over to growing coffee
        * But destroyed by weather and pests in the 1850s
    * Hermann Widemann in 1892 planted a variety of Guatemalan bean, which is called Kona Typica today
        * Then coffee prices crashed in 1899 which caused most coffee growers to switch back to sugar again
        * Brought back into popularity during WWII and created another boom in the industry on Kona
    * Micheal Norton sold cheap coffee under the name "100% Kona Coffee" during 1993 and 1996
        * The coffee farmers of Kona formed the Kona Coffee Council to protect the quality and reputation of Kona Coffee
    * Quality and standard to be Kona Coffee
        * Must be hand-picked
        * Grown on volcanic soil in the Kona region full of nitrates, phosphates, iron, and manganese
        * Harvested late in the season to ensure ripeness
        * The western slopes of Big Island where Kona is located also provide the ideal environment for coffee growing as the plants get abundant sun but also protection from flooding and excess sun from the hills and clouds

1. Pleonasm
    * Redundancy in words
        * Sometimes it is intentionally used to create emphasis but sometimes it is a result of incorporating foreign words either through trade, travel, or colonialism

    > A few we are all familiar with are "Chai tea", "Naan bread" or "Queso cheese"

    * But there are a lot more examples
        * Geography related
            * The El Capitan -> The "the" Capitan
            * Lake Tahoe -> Lake **Da ow** a ga -> Lake "edge of the lake"
            * Lake Michigan -> Lake Michigama -> Lake "large lake"
            * Mississippi River -> Misi-sipi River -> "Big river" River
        * Sports related
            * The Los Angeles Angles -> The "the" "angles" Angles
        * Acronym related
            * PIN number
            * Please RSVP
            * SI System
            * RAM memory

1. A* algorithm
    * A weighted Dijkstra's algorithm that makes it much more efficient
    * The weighting can be thought of as changing the height or potential of the nodes based on the distance to the destination and results in changing the bidirectional edge's length

1. Island Gigantism
    * The curious phenomenon of island-dwelling animals growing larger than their mainland counterparts.
    * Potentially caused by the lack of predators which a smaller body is needed for survival
    * Or potentially the larger body is needed to survive the scarce resources on the island or the harsher environments

1. Effective Altruism
    * Started as a movement in Oxford that aims to maximize the good as much as possible
    * This could mean taking actions that can lead to gaining the ability to enable someone/something to do more good than doing the good themselves because it's ineffective
        * An extreme example would be prioritizing the actions that lead to great amounts of wealth so that you can donate to organizations that are doing good instead of joining the organization to do good

    > The recent poster boy of this movement was Sam Bankman-Fried. So that wasn't a good look

1. Six nines in pi
    * A famous coincidence that at the 762nd decimal place of pi, there are 6 nines
    * Sometimes called "Feynman point" but it is not clear when Feynman made this reference
    * The position of the first 9 repeated nines is at 564,665,206

1. Diehard tests
    * A battery of statistical tests for the randomness quality of a random number generator
    * Side note: true randomness is unintuitive to us because we are sensitive to patterns
        * We would see repeated numbers as patterns and assume true "randomness" should give us new and yet-to-be-seen numbers
        * But if we used common sense and imagine there is a fair six-sided dice, after a number has appeared the probability that the next roll will be a new one would not change, especially not increased
        * A common user expectation for Spotify shuffle or random photo function is to not have repeated results but in reality, the true random behavior would be for the results to be repeated more often as more of the results are discovered
    * Developed by George Marsaglia in 1995 and extended to the dieharder tests
    * Some interesting things
        * Birthday spacings: the spacing between the points should be asymptotically exponentially distributed * based on the birthday paradox
        * Monkey tests: treat a sequence of some number of bits as "words", and the number of "words" that do not appear should follow a known distribution * based on the infinite monkey theorem

1. Wiki
    * Hawaiian word for "quick"
    * The free shuttle bus at the Honolulu Airport is named Wiki Wiki Shuttle, which is an example of repeating a word for emphasis known as epizeuxis or palilogia
    * The first wiki, user-editable website was named WikiWikiWeb as the creator Ward Cunningham originally intended to name it QuickWeb
    * Wikipedia is a portmanteau of wiki and encyclopedia

1. Gaslight
    * A popular slang that means someone is psychologically manipulating you to cause you to question your memories and perception of reality
    * An example would be someone blatantly lying about a shared experience that contradicts the memories of the victim to convince them that the victim is crazy or overreacting
    * This colloquialism is derived from a 1944 film with the same title where the female protagonist's new husband is dimming gaslights in secret to drive her mad
