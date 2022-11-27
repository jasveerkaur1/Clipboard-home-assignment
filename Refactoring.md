# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

 * 1. First I reperated out the hardcoded values in as const
 * 2. Clean the code by:
 *  a. Handling the corner cases at first place
 *  b. Adding a seperate function, stringfyInput
 *  c. Renaming the candidate as generatedHash, as we are generating the hash and its more generic
 *  d. Defining the generatedHash, after handling corner cases
 *  e. If generatedHash.length > MAX_PARTITION_KEY_LENGTH, returing the value from block itself
