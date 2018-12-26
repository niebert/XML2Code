
<!-- BEGIN: src/readme/usage.md -->

## Quick Start for Library-Users
Just copy the `docs/`-folder and adapt the JSON-schema `docs/schema` and the JSON data in the folder `docs/db/` to the schema for your requirements. If you want to create your own JSON schema use the [JSON2Schema tool](https://niebert/github.io/JSON2Schema).

# XML2Code

XML2Code is a project that defines an XML syntax that is meant to be as data sink for different programming languages.
The starting point is UML and XML as the language for representation of programming code.

XML-Parser can read the XML-Code and cross compile to an programming language of choice. Even a browser with a integrated XML-parser could be used to cross compile XML2Code Sources into another programming language.

## XML2Code is Not a XML Programming Language!
* `XML2Code` is not meant to be a language to develop software or libraries, classes, packages, ... in `XML` syntax.
* `XML2Code` is an iterims format from one programming language into another programming language or as a contribution to [executable XML](https://en.wikipedia.org/wiki/Executable_UML).
* `XML2Code` can be used to represent an Abstract Syntax Tree for cross-compilation from one programming language intp another (e.g. cross-compile a valuable library in `PHP` into `JavaScript`, to have these libraries available in a new software project for which these functions are currently missing).

## XML2Code and JSON
[UglifyJS](https://github.com/mishoo/UglifyJS2) can be used to create an Abstract Syntax Tree (AST) from Javascript source code (see [UglifyJS Parser](http://lisperator.net/uglifyjs/parser)). The provided AST from UglifyJS can be used to create an XML representation.

## WebApps and Software
The underlying data structure for code generation is an Abstract Syntax Tree (AST) for the code. Starting from the programming language `Javascript` the well-know library [UglifyJS]()

## Package
A package is wrapped in PACKAGE-Tag
```
<PACKAGE name="MyPackage">

</PACKAGE>
```

## Class
A Class is wrapped in CLASS-Tag
```
<CLASS name="MyClass">

</CLASS>
```
Inherit from a Super Class with the name "MySuperClass"
```
<CLASS name="MyClass" inherit="MySuperClass">

</CLASS>
```
A class with one attribute
```
<CLASS name="MyClass">
   <ATTRIBUTE name="aAge" class="Integer">
   </ATTRIBUTE>
</CLASS>
```
A class with one attribute "aAge" init with 0
```
<CLASS name="myclass">
   <ATTRIBUTE name="aAge" class="Integer">
     0
   </ATTRIBUTE>
</CLASS>
```
A class with one method "mIncrementAge()" without parameter:
```
<CLASS name="MyClass">
   <DEFATTRIBUTE name="aAge" class="Integer">
     0
   </DEFATTRIBUTE>
   <DEFMETHOD name="mIncrementAge">
     <SETATTRIBUTE name="aAge">
        <ATTRIBUTE name="aAge">
        </ATTRIBUTE>
        <OPERATOR value="+" />
        1
     </SETATTRIBUTE>
   </DEFMETHOD>
</CLASS>
```
A class with one method "mIncrementAge(pAddAge:Integer)" with one parameter.
Set attribute is represented in programming languages with "self" or "this".
```
<CLASS name="MyClass">
   <DEFATTRIBUTE name="aAge" class="Integer">
     0
   </DEFATTRIBUTE>
   <DEFMETHOD name="mIncrementAge">
     <PARAMETER name="pAddAge" class="Integer"/>
     <SETATTRIBUTE name="aAge">
        <ATTRIBUTE name="aAge" />
        <OPERATOR value="+" />
        <VARIABLE name="pAddAge" />
     </SETATTRIBUTE>
   </DEFMETHOD>
</CLASS>
```
## Create an Object
The following XML-Statement creates an instance of certain class `MyClass`.
E.g.
```javascript
var vMyVar = new MyClass();
```

```
<SETVARIABLE name="vMyVar">
   <NEW name="MyClass">
   </NEW>
</SETVARIABLE>
```

## Control Statements

### IF-Statement
The following code shows an IF-Statement without ELSE-Block
```
<IF>
   <CONDITION>

   </CONDITION>
   <THEN>

   </THEN>
</IF>
```
The following code shows an IF-Statement with ELSE-Block
```
<IF>
   <CONDITION>
    .....
   </CONDITION>
   <THEN>
    .....
   </THEN>
   <ELSE>
    ....
   </ELSE>
</IF>
```

### FOR-Statement
Init a variable with i=0, i&lt;max, i=i+1
```
<FOR>
   <DEFVARIABLE name="i" class="Integer">
      <CONSTANT class="Integer" value="0" />
   </DEFVARIABLE>
   <CONDITION>
     <LESS>
       <BLOCK>
          <VARIABLE name="i" />
       </BLOCK>
       <BLOCK>
          <VARIABLE name="max" />
       </BLOCK>
     </LESS>
   </CONDITION>
   <ITERATION>
      <SETVARIABLE name="i">
        <VARIABLE name="i" />
        <OPERATOR value="+" />
        <CONSTANT class="Integer" value="1" />
      </SETVARIABLE>
   </ITERATION>
   <DO>
    .....
   </DO>
</FOR>
```

### WHILE-Statement
Init a variable with i=0 before the while statement and perform the iteration until  i&lt;max, increment for all loops with i=i+1.

```
<DEFVARIABLE name="i" class="Integer">0</FORVARIABLE>
<WHILE>
   <CONDITION>
     <LESS>
       <BLOCK>
          <VARIABLE name="i" />
       </BLOCK>
       <BLOCK>
          <VARIABLE name="max" />
       </BLOCK>
     </LESS>
   </CONDITION>
   <DO>
     .....
      <SETVARIABLE name="i">
        <VARIABLE name="i" />
        <OPERATOR value="+" />
        1
      </SETVARIABLE>
   </DO>
</WHILE>
```

<!-- END:   src/readme/usage.md -->
