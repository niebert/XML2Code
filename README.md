# XML2Code

XML2Code is a project that defines an XML syntax that is meant to be as data sink for different programming languages.
The starting point is UML and XML as the language for representation of programming code.

## Package 
A package is wrapped in PACKAGE-Tag
```
<PACKAGE name="mypackage">

</PACKAGE>
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
    
   </CONDITION>
   <THEN>
    
   </THEN>
   <ELSE>
    
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
       <EXPRESSIOn order="1">
          <VARIABLE name="i" />
       </EXPRESSION>
       <EXPRESSIOn order="2">
          <VARIABLE name="max" />
       </EXPRESSION>
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
       <EXPRESSION order="1">
          <VARIABLE name="i" />
       </EXPRESSION>
       <EXPRESSION order="2">
          <VARIABLE name="max" />
       </EXPRESSION>
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

