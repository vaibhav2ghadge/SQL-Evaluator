table = [("emp",[("name",Uk),("lname",Pk)]),("stud",[("name",Fk."stud")]),("stud",[("name",Nt)])]
tvalue = [("emp",[["vaibhav","Ghadge"],["pavan","yevale"]])]

ctype Constraint where
      Pk : Constraint
      Fk : String->Constraint
      Nt: Constraint
      Uk: Constraint
ctype Statement where
     -- Select: [(Field,[([Field],[Field])])]->Statement
      Creat : String->[(String,Constraint)]->Statement
      Insert : String->[String]->Statement
      Null : Statement
-----------CREATE TABLE
creat.(Creat.x.y)
	|tblext.x= error.(x++" Table Already Exists")
	|otherwise =[(b,a)|(a,b)<-y]

----------END OF CREATE TABLE
----------INSERT TABLE
inser.(Insert.x.y)
	|not.(tblext.x) = error.(x++" Table Not Exists")
	|otherwise = f1.x.y

f1.x.y --for no of field
	|flength.x /= length.y = error.("check no field of Table "++x)
	|otherwise = f11.x.y 


f11.x.y
	|length.(concat.(f3.x.(y!!f2.x)))>0 = error.("Primary key Already There")
	|otherwise = f12.x.y

f12.x.y
	|length.(concat.(f33.x.(y!!f22.x)))>0 = error.("Unique key Already There")
	|otherwise = error.("nothing")

-----primary key---------
f3.x.y = [f4.i.x.y|i<-head.[b|(a,b)<-tvalue,a==x]]

f4.x.xx.y = [i|i<-[x!!(f2.xx)],i==y]--it return table value of pk 
f2.x= f9.([b|(a,b)<-head.[b|(a,b)<-table,a==x]])--it need table name and it return constaint list	
--it return pk constraint on wich no
f9.x=head.[i|i<-[0...(length.x)-1],x!!i==Pk]
-----------------------
-------------unique key---------


f33.x.y = [f44.i.x.y|i<-head.[b|(a,b)<-tvalue,a==x]]

f44.x.xx.y = [i|i<-[x!!(f22.xx)],i==y]--it return table value of pk 
f22.x= f99.([b|(a,b)<-head.[b|(a,b)<-table,a==x]])--it need table name and it return constaint list	
--it return pk constraint on wich no
f99.x=head.[i|i<-[0...(length.x)-1],x!!i==Uk]



----OTHER FUNCTION
---TABLE EXISTS OR NOT
tblext.x
	|length.([(a,b)|(a,b)<-table,a==x])>0 = True
	|otherwise = False

--------------------
---check total field of table
flength.x = length.(head.[b|(a,b)<-table,a==x])