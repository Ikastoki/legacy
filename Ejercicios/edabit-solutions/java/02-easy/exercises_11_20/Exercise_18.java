package exercises_11_20;

/*
The 3 Programmers Problem
You hired three programmers and you (hopefully) pay them. Create a function that takes three numbers (the hourly wages of each programmer) and returns the difference between the highest-paid programmer and the lowest-paid.

Examples
programmers(147, 33, 526) ➞ 493

programmers(33, 72, 74) ➞ 41

programmers(1, 5, 9) ➞ 8
Notes
Don't forget to return the result.
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab.
 */
public class Exercise_18 {
    public static void main(String[] args) {
        System.out.println(programmers(147, 33, 526));
        System.out.println(programmers(33, 72, 74));
        System.out.println(programmers(1, 5, 9));
        System.out.println(programmers2(147, 33, 526));
    }

    public static int programmers(int one, int two, int three) {
        int min = Math.min(one, Math.min(two, three));
        int max = Math.max(one, Math.max(two, three));

        return max - min;
    }

    public static int programmers2(int one, int two, int three) {
        int min = one;
        int max = one;
        //Mínimo
        if (two < min) min = two;
        if (three < min) min = three;
        //Máximo
        if (two > max) max = two;
        if (three > max) max = three;

        return max - min;
    }
}
