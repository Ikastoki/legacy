package exercises_31_40;

/*
Concatenate First and Last Name into One String
Given two strings, firstName and lastName, return a single string in the format "last, first".

Examples
concatName("First", "Last") ➞ "Last, First"

concatName("John", "Doe") ➞ "Doe, John"

concatName("Mary", "Jane") ➞ "Jane, Mary"
Notes
Don't forget to return the result.
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab.
 */

public class Exercise_33 {
    public static void main(String[] args) {
        System.out.println(concatName("First", "Last"));
        System.out.println(concatName("John", "Doe"));
        System.out.println(concatName("Mary", "Jane"));
    }

    public static String concatName(String firstName, String lastName) {
        return firstName + ", " + lastName;
    }
}
