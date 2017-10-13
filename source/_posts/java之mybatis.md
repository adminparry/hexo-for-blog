---
title: java之mybatis
---
MyBatis 是支持定制化 SQL、存储过程以及高级映射的优秀的持久层框架。MyBatis 避免了几乎所有的 JDBC 代码和手动设置参数以及获取结果集。MyBatis 可以对配置和原生Map使用简单的 XML 或注解，将接口和 Java 的 POJOs(Plain Old Java Objects,普通的 Java对象)映射成数据库中的记录。


### 安装

``` bash
<dependency>
  <groupId>org.mybatis</groupId>
  <artifactId>mybatis</artifactId>
  <version>x.x.x</version>
</dependency>
```

### 在spring中构建 SqlSessionFactory

``` bash
<bean id="sqlSessionFactory" class="org.mybatis.spring.SqlSessionFactoryBean">
	<property name="configLocation" value="classpath:mybatis-config.xml" />
	<property name="dataSource" ref="dataSource" />
	<property name="mapperLocations" value="classpath:mapper/*.xml"></property>
</bean>
<bean class="org.mybatis.spring.mapper.MapperScannerConfigurer">    
	<property name="basePackage" value="com.xxx.dao" />    
	<property name="sqlSessionFactoryBeanName" value="sqlSessionFactory"></property>  
</bean>
```
### 添加实体类

``` bash
package com.xxx.entity;

public class Goods {
	private int id;
	private String goodsname;
	private double price;
	private int num;
	private String category;
	private String note;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getGoodsname() {
		return goodsname;
	}
	public void setGoodsname(String goodsname) {
		this.goodsname = goodsname;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public int getNum() {
		return num;
	}
	public void setNum(int num) {
		this.num = num;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getNote() {
		return note;
	}
	public void setNote(String note) {
		this.note = note;
	}
}

```

### 在basePackage添加dao接口

``` bash

package com.xxx.dao;

import java.util.List;

import com.xxx.entity.Goods;

public interface GoodsDao {
	public List<Goods> selectGoods();
	
	public int insertGoods(Goods goods);
	
	public int deleteGoods(int id) ;

	public int updateGoods(Goods goods);
}

```
### 在mapperLocations中添加Mapper

``` bash

<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd"> 
<mapper namespace="com.company.onlineretailers.dao.OrderIDao"> 
    <resultMap type="GoodsEntity" id="GoodsResultMap"> 
        <id property="id" column="id"/> 
        <result property="orderdate" column="orderdate"/> 
        <result property="gid" column="gid"/>
        <result property="uid" column="uid"/>
        <result property="note" column="note"/>      
    </resultMap> 
          
    <select id="selectOrder"  resultType="GoodsEntity" resultMap="GoodsResultMap"> 
        <![CDATA[
            SELECT * from _goods
        ]]>  
    </select> 
    <insert id="insertOrder" parameterType="GoodsEntity">
    	<![CDATA[
    		insert into _goods values(null,#{orderdate},#{gid},#{uid},#{note})
    	]]> 
    </insert>
    
    <delete id="deleteOrder" parameterType="int">
    	<![CDATA[
    		delete from _goods where id=#{id}
    	]]> 
    </delete>
    <update id="updateOrder" parameterType="GoodsEntity">
    	<![CDATA[
    		update _goods o set o.orderdate = #{orderdate},o.note = #{note}  where id=#{id}
    	]]> 
    </update>
</mapper>

```
### 在mybatis-config.xml中添加实体映射

``` bash

<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE configuration PUBLIC "-//mybatis.org//DTD Config 3.0//EN" "http://mybatis.org/dtd/mybatis-3-config.dtd">
<configuration>
	 
	<typeAliases>
		
		<typeAlias alias="GoodsEntity" type="com.xxx.Goods" />
		<typeAlias alias="OrderEntity" type="com.xxx.Order" />
	</typeAliases>
	
	
</configuration>   

```
### 更多

更多操作细节请参考官方http://www.mybatis.org/mybatis-3/zh/index.html


