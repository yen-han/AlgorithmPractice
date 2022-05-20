/*
From codility 
A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.

For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps. The number 32 has binary representation 100000 and has no binary gaps.

Write a function:

    int solution(int N);

that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.

For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5. Given N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.

Write an efficient algorithm for the following assumptions:

        N is an integer within the range [1..2,147,483,647].
*/
#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <math.h>

int rangeCheck();
int solution(int N);

int main(void)
{
    int givenNumber, result;
    printf("Write a positive integer for finding binary gap: ");
    // Call function to check range of positive integer
    givenNumber = rangeCheck();
    // Call function to find binary gap
    result = solution(givenNumber);
    printf("Binary Gap of %d : %d", givenNumber, result);
    return 0;
}

int rangeCheck()
{
    int givenNumber, exit = 0;
    do 
    {
        scanf("%d", &givenNumber);
        // Check if the given number is within the range
        if (givenNumber > 0 && givenNumber <= 2147483647)
        {
            exit = 1;
        }
        else
        {
            printf("ERROR: The integer should be within the range of 1 and 2,147,483,647\n\n");
            printf("Write positive integer for finding binary gap: ");
        }
    } while (!exit); 
    return givenNumber;
}

int solution(int N)
{
    int i, maxIndex = 0, binaryGap;
    int counter = 0;
    // Initialize with unmeaningful number
    int binary[35] = {99};

    // Change to binary & store it in an array
    for (i = 0; N > 0; i++)
    {
        binary[i] = N % 2;
        N = N / 2;
        // Maximum index number
        maxIndex = i;
    }

    // Display converted binary number
    printf("Binary Representation: ");
    for (i = maxIndex; i >= 0; i--)
    {
        printf("%d", binary[i]);
    }

    // Count consecutive 0's
    for (i = maxIndex; i >= 0; i--)
    {
        if (binary[i] == 0)
        {
            counter++;
        }
        else if (binary[i] == 1)
        {
            ; // No action
        }
        // Check for longest binary gap
        if ((i-1) >= 0 && counter >= binaryGap && binary[i-1] == 1)
        {
            binaryGap = counter;
            counter = 0;
        }
    }
    printf("\n");

    return binaryGap;
}