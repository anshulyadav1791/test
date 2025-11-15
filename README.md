# Python notes

# Python Character Set
* Letters -A to Z, a to z
* Digits 0 to 9
* Special Symbols - + * / ectc.
* Whitespaces - Blank Space, tab, carriage return, newline, formfeed
* Other characters - Python can process all ASCII and Unicode charcters as part of data or literals

# Variables 
## A variable is a name given to a memory location in a program.
# Data Types
* Integers
* String
* Float
* Boolean
* None

# Keywords 
Keyworks are reserved wwords in python.
|    and     |    else     |    in      |    return    |    if      |    if      |
|------------|-------------|------------|--------------|------------|------------|
|    as      |    except   |    is      |    True      |    pass    |    pass    |
|    assert  |    finally  |    lambda  |    try       |    elif    |    elif    |
|    break   |    False    |    nonlacl |    with      |    import  |    del     |
|    class   |    for      |    None    |    while     |    raise   |    or      | 
|    continue|    from     |    not     |    yield     |    import  |    global  |
|    def     |

# Operators
## Arithmetic Operators
+ - * / % **
## Relatinal / Compraison Operators
==, !=, >, <, <=
## Assignment Oprators
=, +=, -=, *=, %=, **= 
## Logical Operators
and, or, not

## Type Conversion
## Type Casting
# Input in Python 
input() statement is used to accept values (using keyboards) from user

input() # result for input() is always a str

int(input()) #int

float(input()) #float 

# Strings
## String is data type that stores a sequence of characters.
## Basic Operations
### concatention
    "hello" + "world" ---->  "helloworld
### length of str
    len(str)

### Slicing 
   Accessing parts of a string 
   str[ starting_idx : ending_idx ] #ending idx is not included
   strw = "ApnaCallege"
   str[ 1 : 4 ] is "pna"
   str[ : 4 ] is same as str [ 0: 4]
   str[1 : ] is same as str[ 1: len(str) ]
