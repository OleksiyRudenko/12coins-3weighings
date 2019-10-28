# 12 coins, 3 weighings

There are 12 coins. One is fake and its
weight is different from that of legit coins.

After 3 weighings tell which coin is fake.

## Installation

Run `npm install` or `yarn install` to install
required dependencies (Jest test framework).

Scripts:
- `yarn start` or `npm start` will run main algorithm tests
- `yarn dev` or `npm dev` will run `experimenting.js`
  supposed to use at algorithm development phase
- `yarn test` of `npm test` runs test of
  the built-in weight balancing helper

## The task

Your task is to write the code that would identify
the fake coin among 12 given.

Add some meat to `findFake` function in `./find-fake.js`.
The function parameters are:
* `array` - an array of coins weight, exactly 12 entries,
  all values are the same with exception for one which
  may be greater or lesser than others 
* `balance` - a function to weigh the coins

Your function is expected to return an array of two
items where first item is a fake coin index in the 
input array and the second item is fake coin's weight/value.

So, `findFake([21,21,21,21,21,21,29,21,21,21,21,21], balanceMaker())`
would return `[7,29]` representing a fake coin where
`7` is an index of fake coin and `29` is its weight.

Use `balance` function inside your `findFake` 
to make weighings.
You may use your own but final tests will employ
the one provided by the author. It also calculates
number of its own invocations for you
(remember, 3 invocations is a maximum). 

The `balance` functions takes 3 arguments that are:
- `array` - a source array of 12 coins weight
- `set1indices` - indices of coins to put on the left plate
- `set2indices` - indices of coins to put on the right plate

The function returns 0 if both are equal, a value `< 0`
if coins on the left are lighter, and a value `> 0`
if coins on the left are heavier. 

For example `balance([2,5,2,2,2,2,2,2,2,2,2,2], [0,1], [7,8])`
would return `3` since `2+5 - 2+2 == 3`, which means
coins on the left plate are heavier.

Launch your experiments from `./experimenting.js`.
This module imports what is required and also
demonstrates a pattern of `findFake` invocation
using a balance function maker. 

Run `yarn dev` or `npm dev` to conduct your experiments. 

### Final tests

Once you feel done run `yarn start` or `npm start`
to have a complete test of your algorithm.

There gonna be 24 tests. All must pass for a good algorithm.

The only thing it cannot test is when you use your own
method of weighing that doesn't restrict the number
of weighings.

### Hints

Consider addressing to the hints below only after
a couple of attempts to solve the problem.  

<details><summary>Hint 1. Switch plates</summary>
<p>

Change of balance may help. So consider moving coins
between the plates. For example,
if `1 + 2 + 3 < 4 + 5 + 6` and `1 + 2 + 4 > 3 + 5`
then the fake coin is either `3` or `4` cause moving them
changes the balance.

</p>
</details>

<details><summary>Hint 2. Exclude</summary>
<p>

If `1 + 2 + 3 < 4 + 5 + 6` and `1 + 2 == 5 + 6`
then the fake coin is obviously either `3` or `4`.

</p>
</details>

<details><summary>Hint 3. Mix approaches</summary>
<p>

Employing both approaches above in a single weighing
can save you a weighing attempt. 

</p>
</details>
