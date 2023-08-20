---
title: "Understanding the fundamentals of summation symbol (sigma) in mathematic"
tags: ['math']
date: "2022-09-13"
---

# Summation Symbol ($\sum$)
In mathematic the summation symbol capital sigma is generally used to reqpresents summation of similar terms.

# Simple Sum
For example, adding a sequence of number up to the n number starting from 1 can be compactly describe in this manner:

$$
\begin{aligned}
  \sum_{i=1}^n i = 1 + 2 + 3 + ... + n \\
  \text{where,} \\
  \text{i = lowerbound of the summation} \\ 
  \text{n = upperbound of the summation}
\end{aligned}
$$


More generally, the expression $\sum_{i=1}^n x_i$ represents the sum of n terms

$$
  x_1 + x_2 + x_3 + ... + x_n
$$

A few more examples:

$$
\begin{aligned}
  \sum_{i=1}^n 4x_i  &= 4x_1 + 4x_2 + 4x_3 + ... + 4x_n \\ 
                     &= 4(x_1 + x_2 + x_3 + ... + x_n)
\end{aligned}
$$
Thus,
$$
  \sum_{i=1}^n 4x_i  = 4(\sum_{i=1}^n x_i)
$$

Another example:

$$
\begin{aligned}
  \sum_{i=1}^3 (x_i+y_i) &= (x_1 + y_1) + (x_2 + y_2) + (x_3 + y_3)  \\
                          &= x_1 + x_2 + x_3 + y_1 + y_2 + y_3
\end{aligned}
$$

Thus,

$$
  \sum_{i=1}^n (x_i+y_i)   = \sum_{i=1}^n x_i + \sum_{i=1}^n y_i
$$

## Attention
We must not confuse the following expressions pairs. Because the expression:

$$
  \sum_{i=1}^n x_iy_i
$$

is not the same as:

$$
  (\sum_{i=1}^n x_i)(\sum_{i_1}^n y_i)
$$

And the expression

$$
  \sum_{i=1}^n x_i^2
$$

is not the same as:

$$
  (\sum_{i=1}^n x_i)^2
$$

Let's explorer further on why that is by subsituting some arbitrary numbers into the variables.

For example, given $i=1$, $n = 3$, $x_1 = 4$, $x_2 = 2$, $x_3 = 7$ and $y_1 = 2$, $y_2 = 2$, $y_3 = 3$:

Conclusion 1,

$$
\begin{aligned}
  \sum_{i=1}^n x_iy_i &\neq (\sum_{i=1}^n x_i)(\sum_{i=1}^n y_i) \\
    x_1 y_1 + x_2 y_2 + x_3 y_3 &\neq (x_1 + x_2 + x_3)(y_1 + y_2 + y_3) \\
    (4*2) + (2*2) + (7*3) &\neq (4+2+7) *(2+2+3) \\ 
                    31  &\neq 91
\end{aligned}
$$

Conclusion 2,

$$
\begin{aligned}
  \sum_{i=1}^n x_i^2        &\neq (\sum_{i=1}^n x_i)^2 \\
    x_1^2  + x_2^2  + x_3^2 &\neq (x_1 + x_2 + x_3)^2 \\
    4^2 + 2^2 + 7^2         &\neq (4+2+7)^2 \\ 
                    69      &\neq 169
\end{aligned}
$$

# Double Sums
Summation doubles are just simply summation of a summation, the below expression are the ones you'll likely encounter when you're dealing with double sums.

The basic double sum expression:

$$
\begin{aligned}
 \sum_{i=1}^m x_i \sum_{j=1}^n y_j &= \sum_{i=1}^m \sum_{j=1}^n x_i y_j
\end{aligned}
$$

Let's replace some arbitrary numbers into upperbounds of the summations to explore them:

$$
\begin{aligned}
 \sum_{i=1}^3 \sum_{j=1}^2 x_i y_j &= \sum_{i=1}^3 (x_iy_1 + x_iy_2) \\
                                   &= x_1y_1 + x_1y_2 + x_2y_1 + x_2y_2 +x_3y_1 + x_3y_2
\end{aligned}
$$

Less general case:

$$
\begin{aligned}
(\sum_{i=1}^n x_i)^2 &= \sum_{i=1}^n x_i \sum_{j=1}^n x_j \\
                      &= \sum_{i=1}^n \sum_{j=1}^n x_i x_j \\
                      &= \sum_{i=1}^n x_i^2 + \sum_{i=1}^n \sum_{j=1}^n x_i x_j (j\neq i)
\end{aligned}
$$

Explanations for above relations with an example of $n=3$:

Let's sort out the  $(\sum_{i=1}^3 x_i)^2$ first:

$$
\begin{aligned}
(\sum_{i=1}^3 x_i)^2  &= (x_1+x_2+x_3)^2 \\ 
                        &= (x_1^2 + x_2^2 + x_3^2)+(2x_1x_2 + 2x_1x_3 + 2x_2x_3) \\
                        &= x_1^2 + x_2^2 + x_3^2+x_1x_2 + x_1x_3 + x_2x_3 + x_1x_2 + x_1x_3 + x_2x_3
\end{aligned}
$$

Exploring relation 1:

$$
\begin{aligned}
\sum_{i=1}^3 x_i \sum_{j=1}^3 x_j   &= (x_1+x_2+x_3)(x_1+x_2+x_3) \\
                        &= x_1^2 + x_2^2 + x_3^2+x_1x_2 + x_1x_3 + x_2x_3 + x_1x_2 + x_1x_3 + x_2x_3
\end{aligned}
$$

Exploring relation 2:

$$
\begin{aligned}
\sum_{i=1}^3 \sum_{j=1}^3 x_i x_j   &= \sum_{i=1}^3 (x_ix_1 + x_ix_2 + x_ix_3) \\
  &= (x_1x_1 + x_1x_2 + x_1x_3) + (x_2x_1 + x_2x_2 + x_2x_3) +(x_3x_1 + x_3x_2 + x_3x_3) \\
  &= x_1^2 + x_2^2 + x_3^2+x_1x_2 + x_1x_3 + x_2x_3 + x_1x_2 + x_1x_3 + x_2x_3
\end{aligned}
$$

Explanation for last relation:

$$
\begin{aligned}
\sum_{i=1}^3 x_i^2 + \sum_{i=1}^3 \sum_{j=1}^n x_i x_j (i \neq j)
&= (x_1^2 + x_2^2 + x_3^2 ) + x_1(x_2+x_3) + x_2(x_1+x_3) + x_3(x_1+x_2) \\
  &= x_1^2 + x_2^2 + x_3^2+x_1x_2 + x_1x_3 + x_2x_3 + x_1x_2 + x_1x_3 + x_2x_3
\end{aligned}
$$

There are few other complex double sums examples but we'll not dive into them in this article.

# Double Index
Sometime in computer science and afew other areas where we need to represent the data of a table or a matrix. In the following example we'll explorer double index notations where in $x_ij$ the first index (i) represent the number of the row where the data is located and the second (j) to the column.
> $x_{49}$ represents the data at row 4 and column 9

Example:

  Given

$$
\begin{aligned}
  x_{11} = 2, x_{12} = 4, x_{13} = 5, x_{14} = 1 \\
  x_{21} = 1, x_{22} = 8, x_{23} = 3,  x_{24} = 2 \\
  x_{31} = 11, x_{32} = 9, x_{33} = 2, x_{34} = 3
\end{aligned}
$$

Let's visualize the data with a table.

| x         | $x_{j=1}$   | $x_{j=2}$   | $x_{j=3}$ | $x_{j=4}$ |
|-----------|-------------|-------------|-----------|-----------|
| $x_{i=1}$ | 2           | 4           | 5         | 1         |
| $x_{i=2}$ | 1           | 8           | 3         | 2         |
| $x_{i=3}$ | 11          | 9           | 2         | 3         |

To figure out the sum of the terms of a row, we fix the index of the row and vary for all possible values, the index of the column.

For exmaple:

$$
\sum_{j=1}^3 x_{1j} = x_{11} + x_{12} + x_{13} + x_{14} = 2 + 4 + 5 + 1 = 12
$$

To carry out the summation of the whole of the table, we vary both indices and use double sum:

$$
\begin{aligned}
  \sum_{i=1}^3 \sum_{j=4}^4 &= \sum_{i=3}^3 x_{i1} +x_{i2} +x_{i3} +x_{i4}  \\
  &= x_{11} + x_{12} + x_{13} + x_{14} + x_{21} + x_{22} + x_{23} + x_{24} + x_{31} + x_{32} + x_{33} + x_{34} \\
  &= 2 + 4 + 5 + 1 + 1 + 8 + 3 + 2 + 11 + 9 + 2 + 3  \\
  &= 51
\end{aligned}
$$