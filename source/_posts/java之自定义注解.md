---
title: java之自定义注解
---
注解本质是一个继承了Annotation的特殊接口，其具体实现类是Java运行时生成的动态代理类。而我们通过反射获取注解时，返回的是Java运行时生成的动态代理对象$Proxy1。通过代理对象调用自定义注解（接口）的方法，会最终调用AnnotationInvocationHandler的invoke方法。该方法会从memberValues这个Map中索引出对应的值。而memberValues的来源是Java常量池。

https://baike.baidu.com/item/%E6%B3%A8%E8%A7%A3/885706?fr=aladdin#3
### Retention
@Retention– 定义该注解的生命周期
  ●   RetentionPolicy.SOURCE : 在编译阶段丢弃。这些注解在编译结束之后就不再有任何意义，所以它们不会写入字节码。@Override, @SuppressWarnings都属于这类注解。
  ●   RetentionPolicy.CLASS : 在类加载的时候丢弃。在字节码文件的处理中有用。注解默认使用这种方式
  ●   RetentionPolicy.RUNTIME : 始终不会丢弃，运行期也保留该注解，因此可以使用反射机制读取该注解的信息。我们自定义的注解通常使用这种方式。

### Target 
@Target – 表示该注解用于什么地方。默认值为任何元素，表示该注解用于什么地方。可用的ElementType参数包括
  ● ElementType.CONSTRUCTOR:用于描述构造器
  ● ElementType.FIELD:成员变量、对象、属性（包括enum实例）
  ● ElementType.LOCAL_VARIABLE:用于描述局部变量
  ● ElementType.METHOD:用于描述方法
  ● ElementType.PACKAGE:用于描述包
  ● ElementType.PARAMETER:用于描述参数
  ● ElementType.TYPE:用于描述类、接口(包括注解类型) 或enum声明

### Documented
@Documented–一个简单的Annotations标记注解，表示是否将注解信息添加在java文档中。


### Inherited
@Inherited – 定义该注释和子类的关系
     @Inherited 元注解是一个标记注解，@Inherited阐述了某个被标注的类型是被继承的。如果一个使用了@Inherited修饰的annotation类型被用于一个class，则这个annotation将被用于该class的子类。

### 例子
