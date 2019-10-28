## Solution

Below is a variant of the balance puzzle solution.

Consider developing your own before diving into 
the one below.

Let's tag coins with hexadecimal (or rather tridecimal)
digits `1` to `9`, `a`, `b` and `c` to have 
a somewhat concise notation.

### Weighing 1.

If `1`+`2`+`3`+`4` == `5`+`6`+`7`+`8` then 
the fake one is among `9`, `a`, `b` and `c`.

Otherwise the fake one is among 8 coins weighed.
Let's keep in mind if the balance is `>` or `<`
for the change in balance would be an important
indicator.  

### Thread 1. Investigating `9`, `a`, `b`, `c`

If `9` == `a` then the fake one is either `b` or `c`.

Otherwise we can identify the fake (`9` or `a`)
by comparing it against any other coin.

If `9` == `1` then the fake is `a` or `9` otherwise.

If the fake one is either `b` or `c` then find it
by comparing against any other coin.

If `b` == `1` then the fake is `c` or `b` otherwise.

### Thread 2. Investigating `1`..`8`

We do not know yet if the fake is lighter
or heavier than the normal coin. We only
know that the `balance1` is `>` or `<`.

Let's put items `6`, `7` and `8` aside and compare
the remaining (adding one definitely legit coin 
for the better balance).
Let us also shuffle them a bit.
 
If `1`+`2`+`5` == `3`+`4`+`c`
then the fake one is among `6`, `7` and `8`.

Otherwise we keep in mind the value of the
balance2 in mind (`>` or `<`).

#### Thread 2.1. Investigating `6`, `7` and `8`

If `6` == `7` then the fake is `8`.

If `6` < `7` and balance1 is `>` then
the fake is `6`.

If `6` > `7` and balance1 is `<` then
the fake is `7`.


#### Thread 2.2. Investigating `1`..`5`

If balance1 is `>` and balance2 is `>` then
the fake is either of `1` and `2`.
If `1` == `c` then the fake is `2` or `1` otherwise. 

If balance1 is `>` and balance2 is `<` then
the fake is either of `3`, `4` and `5`, where
`5` is lighter if fake, and `3` or `4` is heavier
if fake. 
If `3` == `4` then the fake is 5.
If `3` > `4` then the fake is `3` or `4` otherwise. 

If balance1 is `<` and balance2 is `<` then 
fake is either of `1` and `2`.
If `1` == `c` then the fake is `2` or `1` otherwise. 

If balance1 is `<` and balance2 is `>` then
the fake is either of `3`, `4` and `5`, where
`5` is heavier if fake, and `3` or `4` is lighter
if fake. 
If `3` == `4` then the fake is 5.
If `3` < `4` then the fake is `3` or `4` otherwise. 
