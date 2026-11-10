package exercises_31_40;

import java.util.Map;

/*
Volume of a Box
Create a function that takes an object argument sizes (contains width, length, height keys) and returns the volume of the box.

Examples
volumeOfBox({ width: 2, length: 5, height: 1 }) ➞ 10

volumeOfBox({ width: 4, length: 2, height: 2 }) ➞ 16

volumeOfBox({ width: 1, length: 2, height: 3 }) ➞ 6
Notes
Don't forget to return the result.
Remember that the values are in an object.
Volume is length * width * height.
 */


public class Exercise_35 {
    public static void main(String[] args) {
        System.out.println(volumeOfBoxes(Map.of("width", 2, "length", 5, "height", 1)));
        System.out.println(volumeOfBoxes(Map.of("width", 4, "length", 2, "height", 2)));
        System.out.println(volumeOfBoxes(Map.of("width", 1, "length", 2, "height", 3)));
    }

    public static int volumeOfBoxes(Map<String, Integer> sizes) {
        int width = sizes.get("width");
        int length = sizes.get("length");
        int height = sizes.get("height");

        return width * length * height;
    }
}

