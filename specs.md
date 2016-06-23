### Pig Latin JS specs

## 1. The program should append "ay" to words that start with a vowel
* Example input: iguana
* Example output: iguanaay

## 2. With words that begin with a single consonant, move the first consonant to the end of the word, and append "ay."
* Example input: dog
* Example output: ogday

## 3. With words that begin with more than one consonant, move those consonants to the end of the word, and append "ay."
* Example input: thrive
* Example output: ivethray

## 4. Words that begin with "qu", move the "qu" to the end, and add "ay."
* Example input: quest
* Example output: estquay

## 5. Words that begin with one or more consonants AND "qu", move those consonants AND the "qu" to the end, and append "ay."
* Example input: squire
* Example output: iresquay

## 6. With words that begin with "y" and are followed by a vowel, move the "y" to the end of the word, and append "ay."
* Example input: yellow
* Example output: ellowyay

## 7. Words that begin with "y" AND one or more consonants, move the "y" and the consonants to the end of the word, and append "ay."
* Example input: Yreka
* Example output: ekayray

## 8. Input that contains multiple words, split input into individual words, and apply above rules to EACH word.

Functions needed:

a. Does the word start with a vowel ? If so, return "true".
b. Return the index of the first vowel in the word.
c. Split the word before the first vowel.
d. Switch the two word fragments.
e. Append "ay".
f. Split multiword input into individual words. --> use .split(space) // define space as var = " ";

.pop
.contains
