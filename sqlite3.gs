type Table = [([Char],([Char],[Char]))]

sql=[("emp",(["name"],["vaibhav"])),("emp",(["lname"],["ghadge"])),("emp",(["name"],["ron"]))]

ctype Field where
        Tbl : String->Field      

ctype Sqlite3 where
      Select : [String]->Field->Sqlite3
    

sq.(Select.att.(Tbl.x))=  f1.x.sql.att
f1.tbl.sql.att= f2.att.([b|(a,b)<-sql]).att


f2._.[].att=[]
f2.[].(((a::aa),b)::xss).att =  f2.att.xss.att
f2.(x::xs).p@(((a::aa),b)::xss).att
	|x==a=(a,b):: f2.xs.p.att
	|otherwise=f2.xs.p.att