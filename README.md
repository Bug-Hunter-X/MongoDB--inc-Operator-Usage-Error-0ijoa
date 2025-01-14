# MongoDB $inc Operator Usage Error
This repository demonstrates a common error when using the `$inc` operator in MongoDB's `updateOne` method.  The incorrect usage can lead to unintended data modification.

## Bug Description
The primary issue involves misusing the `$inc` operator, resulting in unexpected data changes. In this scenario, negative values cause unexpected decrements instead of intended increments.   This often stems from simple coding mistakes, but its consequences can be critical if not detected immediately.

## Solution
The solution corrects the use of the `$inc` operator by specifying the correct positive or negative value according to intended behavior.
