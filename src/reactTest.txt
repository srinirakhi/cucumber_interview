

The goal of this test is to write a basic web form in react with input validation and conditional rendering.

The form should display the following input fields to the user:

1. Name
2. Age
3. Password
4. Confirm Password

With the following input constraints:

1. Name should be a valid string of length greater than 0 and less than 25
2. Age should be a valid integer and no less than 18
3. Password should be a valid string of at least 8 characters and no more than 15
4. Confirm Password should match Password exactly*

*The Confirm Password constraint should only be checked when the Password is already valid.

Whenever the user changes the input for any of the fields, the input for that field should be checked against the constraints above. If the constraint is failed, display a custom error message for that particular field (you may use the constraints themselves as the error text or write your own). The error message should display in red next to the field with the failed constraint. When input is further modified and becomes valid input, the error message should not display.

Bonus 1: Display a 5th input field called "Hobbies" with an Add button next to it. When the user enters a new hobby and selects the Add button, that hobby should be added to a running list of hobbies which displays below the input field.

Bonus 2: The Hobbies input should be accepted if the user presses enter OR the add button, and the input should automatically clear when a hobby is added.