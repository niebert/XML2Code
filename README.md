# XML2Code

XML2Code is a project that defines an XML syntax that is meant to be as data sink for different programming languages.
The starting point is UML and XML as the language for representation of programming code.

XML-Parser can read the XML-Code and cross compile to an programming language of choice. Even a browser with a integrated XML-parser could be used to cross compile XML2Code Sources into another programming language.

It is not meant to develop software or libraries, classes or packages in XML syntax. XML2Code is an iterims format from one programming language into another programming language or as a contibution to [executable XML](https://en.wikipedia.org/wiki/Executable_UML).

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
The following XML-Statement creates an instance of certain class "MyClass".
E.g. <tt>var vMyVar = new MyClass();</tt> 
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
   <DEFVARIABLE name="i" class="Integer">0</FORVARIABLE>
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
        1
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

