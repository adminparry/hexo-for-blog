---
title: mysql通用查询
---
mysql作为免费开源的持久层是非常优秀的一款关系型数据库,其内置的视图 存储过程 事务处理 等都非常的高效以及方便 深受广大开发者的青睐 

## 查询所有的库名称
``` bash
SELECT `SCHEMA_NAME` FROM `information_schema`.`SCHEMATA`
```
## 查询所有的表名称
``` bash
select table_name from information_schema.tables where table_schema='库名' and table_type='base table'
```
## 查询指定表所有的字段
``` bash
select column_name from information_schema.columns where table_schema='库名' and table_name='表名'
```

## 简单查询
``` bash
SELECT 列名称 FROM 表名称
SELECT * FROM 表名称
-- example：
-- SELECT LastName,FirstName FROM Persons
-- SELECT * FROM Persons
-- 相应的key 相应的value
```
## 简单修改
``` bash
update 表名 set name = 'ddd' where （条件） id_p='3' 

相应的key 相应的value
```
## 简单删除
``` bash
delete from 表名 where （条件）name=‘3’

name字段为3的整行删除
```
## 简单插入
``` bash
insert into 表名 (Id_P,date,name,proto,age,live) values ('5','2014_10','','2','2+','1');

相应的key 相应的value
```

