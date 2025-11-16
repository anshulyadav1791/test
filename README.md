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

 # Lists in Python 
 A Built-in data type that stores set of values
 It can store elements of different trpes (integer, float, string, etc.)
 marks = [87, 64, 33, 95, 76] #marks[0], marks[1]...
 
 student = ["Karan", 85, "Delhi"] #student[0], student[1]..

 student[0] = "Arjun" #allwed in python

 len(student) #returns length

 # List Slicing 
 Similar to String Slicing
 * list_name[starting_idx:ending_idx] #ending idx is not including
 * marks = [87, 64, 33, 95, 76]
 * marks[ 1:4 ] is [64,33,95]
 * marks[  :4 ] is same as marks[0:4]
 * marks[ 1:  ] is same as marks[1: len(marks)]
 * marks[ -3: -1] is [33, 95]

# List Methods
* list = [2,1,3]
* list.append(4) #adds one element at the end
* list.sort() #sorts in ascending order [1,2,3,4]
* list.sort(reverse=True) #sorts in descending order [3,2,1]
* list.reverse() #reverses list [3,1,2]
* list.insert(idx,el) #insert element at index
* list.remove(1) #removess first occurrence of element [2,3,1]
* list.pop(idx) # removes element at idx

# Tuples in Python
a built-in data type that lest uss create immutable sequenes of values.

tup = (74, 83, 83, 93) #tup[0], tup[1]...

tup[0] = 43 #NOT allowed in python

tup1 = ()

tup = (1,)

tup3 = (1,2,3)

# Dictionary in Pythin 
### Dictionaries are used to store data value in key:value pairs
### They are unordered, mutable(changeable) & don't allow duplicate keys
    dict = {
        "name" : "shradha",
        "cgpa" : 9.6,
        "marks" : [98, 97, 94],
    }
dict["name"], dict["cgpa"], dict["marks"]
dict["key"] = "value" #to assign or add new

