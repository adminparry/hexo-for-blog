---
title: jQuery.Callbacks()
---

维护一个函数队列

实例方法

### add

向内部队列添加函数，总有三种参数形式

``` bash
<script type="text/javascript">
	var cb  = $.Callbacks();
	cb.add(function () {
	    console.log('add one');
	});
	cb.add(function () {
	    console.log('add one1');
	}, function () {
	    console.log('add two1');
	});
	cb.add([
	    function () {
	        console.log('add one2');
	    }, function () {
	        console.log('add two2');
	    }
	]);
</script>
```
### fire

依次执行队列里的函数

``` bash
<script type="text/javascript">
	var cb = $.Callbacks();

	cb.add([
	    function () {
	        console.log('add one');
	    }, function () {
	        console.log('add two');
	    }
	]);

	cb.fire();
	//add one
	//add two
</script>
```
### fireWith

跟fire一致 只是接受一个上下文参数

``` bash
<script type="text/javascript">
	var cb = $.Callbacks();

	var obj = {
	    name: 'objName'
	};

	cb.add(function (age) {
	    console.log(this.name, age);
	});

	cb.fireWith(obj, [26]);//objName 26
</script>
```


### empty

清空函数队列

``` bash
<script type="text/javascript">
	var cb = $.Callbacks();

	cb.add(function () {
	    console.log('add one');
	});

	cb.empty();
	cb.fire();
</script>
```
### has
判断函数队列中是否存在某个函数*比较引用地址
``` bash
<script type="text/javascript">
	var cb = $.Callbacks();

	function demo() {
	    console.log('demo');
	}
	cb.add(demo);
	console.log(cb.has(demo));//true
</script>
```
### remove
从内部队列中移除某些函数

``` bash
<script type="text/javascript">
	var cb = $.Callbacks();

	function demo1() {
	    console.log('demo1');
	}

	function demo2() {
	    console.log('demo2');
	}

	cb.add(demo1, demo2);
	cb.remove(demo1, demo2);
	cb.fire();
</script>
```

### disable
禁用回调列表。这种情况会清空函数队列，禁用核心功能。意味着这个回调管理报废了。

``` bash
<script type="text/javascript">
	var cb = $.Callbacks();

	cb.add(function () {
	    console.log('add');
	});

	cb.disable();
	cb.fire();
</script>
```

### disabled
回调管理是否被禁用
``` bash
<script type="text/javascript">
	var cb = $.Callbacks();

	cb.add(function () {
	    console.log('add');
	});

	cb.disable();
	console.log(cb.disabled());//true
</script>
```
### lock
锁定回调管理
``` bash
<script type="text/javascript">
	var cb = $.Callbacks();

	cb.add(function () {
	    console.log('add');
	});

	cb.lock();
	cb.fire();
</script>
```

### locked
回调管理是否被锁

``` bash
<script type="text/javascript">
	var cb = $.Callbacks();

	cb.add(function () {
	    console.log('add');
	});

	cb.lock();
	console.log(cb.locked());//true
</script>
```

### fired
回调队列是否执行过
``` bash
<script type="text/javascript">
	var cb = $.Callbacks();

	cb.add(function () {
	    console.log('add');
	});

	cb.fire();//add
	console.log(cb.fired());//true
</script>
```
实例参数

### once

函数队列执行后立即释放

``` bash
<script type="text/javascript">
	//添加参数
	var cb = $.Callbacks('once');

	cb.add(function () {
	    console.log('add');
	});

	cb.fire();//add
	cb.fire();
</script>
```

### unique

相同的函数不会被重复添加到内部队列中

``` bash
<script type="text/javascript">
	//添加参数
	var cb = $.Callbacks('unique');

	function demo() {
	    console.log('demo');
	}
	cb.add(demo, demo);

	cb.fire();//demo
</script>
```

### stopOnFalse

内部队列里的函数是依次执行的，当某个函数的返回值是false时，停止继续执行剩下的函数

``` bash
<script type="text/javascript">
	//添加参数
	var cb = $.Callbacks('stopOnFalse');

	cb.add([
	    function () {
	        console.log('add one');
	        return false;
	    },
	    function () {
	        console.log('add two');
	    }
	]);

	cb.fire();//add one
</script>
```

### memory

当函数队列fire或fireWith一次过后，内部会记录当前fire或fireWith的参数。当下次调用add的时候，会把记录的参数传递给新添加的函数并立即执行这个新添加的函数

``` bash
<script type="text/javascript">
	var cb = $.Callbacks('memory');

	cb.add(function (name) {
	    console.log('one', name);
	});

	cb.fire('Jacky');//first Jacky

	cb.add(function (name) {
	    console.log('two', name);
	});//two Jacky
	cb.fire('bob');
	// one bob two bob
</script>
```

### 源码
``` bash
<script type="text/javascript">
	// String to Object flags format cache
	var flagsCache = {};

	// Convert String-formatted flags into Object-formatted ones and store in cache
	function createFlags( flags ) {
	    var object = flagsCache[ flags ] = {},
	        i, length;
	    flags = flags.split( /\s+/ );
	    for ( i = 0, length = flags.length; i < length; i++ ) {
	        object[ flags[i] ] = true;
	    }
	    return object;
	}
	var fn = function( flags ) {

	    // Convert flags from String-formatted to Object-formatted
	    // (we check in cache first)
	    flags = flags ? ( flagsCache[ flags ] || createFlags( flags ) ) : {};

	    var // Actual callback list
	        list = [],
	        // Stack of fire calls for repeatable lists
	        stack = [],
	        // Last fire value (for non-forgettable lists)
	        memory,
	        // Flag to know if list was already fired
	        fired,
	        // Flag to know if list is currently firing
	        firing,
	        // First callback to fire (used internally by add and fireWith)
	        firingStart,
	        // End of the loop when firing
	        firingLength,
	        // Index of currently firing callback (modified by remove if needed)
	        firingIndex,
	        // Add one or several callbacks to the list
	        add = function( args ) {
	            var i,
	                length,
	                elem,
	                type,
	                actual;
	            for ( i = 0, length = args.length; i < length; i++ ) {
	                elem = args[ i ];
	                type = jQuery.type( elem );
	                if ( type === "array" ) {
	                    // Inspect recursively
	                    add( elem );
	                } else if ( type === "function" ) {
	                    // Add if not in unique mode and callback is not in
	                    if ( !flags.unique || !self.has( elem ) ) {
	                        list.push( elem );
	                    }
	                }
	            }
	        },
	        // Fire callbacks
	        fire = function( context, args ) {
	            args = args || [];
	            memory = !flags.memory || [ context, args ];
	            fired = true;
	            firing = true;
	            firingIndex = firingStart || 0;
	            firingStart = 0;
	            firingLength = list.length;
	            for ( ; list && firingIndex < firingLength; firingIndex++ ) {
	                if ( list[ firingIndex ].apply( context, args ) === false && flags.stopOnFalse ) {
	                    memory = true; // Mark as halted
	                    break;
	                }
	            }
	            firing = false;
	            if ( list ) {
	                if ( !flags.once ) {
	                    if ( stack && stack.length ) {
	                        memory = stack.shift();
	                        self.fireWith( memory[ 0 ], memory[ 1 ] );
	                    }
	                } else if ( memory === true ) {
	                    self.disable();
	                } else {
	                    list = [];
	                }
	            }
	        },
	        // Actual Callbacks object
	        self = {
	            // Add a callback or a collection of callbacks to the list
	            add: function() {
	                if ( list ) {
	                    var length = list.length;
	                    add( arguments );
	                    // Do we need to add the callbacks to the
	                    // current firing batch?
	                    if ( firing ) {
	                        firingLength = list.length;
	                    // With memory, if we're not firing then
	                    // we should call right away, unless previous
	                    // firing was halted (stopOnFalse)
	                    } else if ( memory && memory !== true ) {
	                        firingStart = length;
	                        fire( memory[ 0 ], memory[ 1 ] );
	                    }
	                }
	                return this;
	            },
	            // Remove a callback from the list
	            remove: function() {
	                if ( list ) {
	                    var args = arguments,
	                        argIndex = 0,
	                        argLength = args.length;
	                    for ( ; argIndex < argLength ; argIndex++ ) {
	                        for ( var i = 0; i < list.length; i++ ) {
	                            if ( args[ argIndex ] === list[ i ] ) {
	                                // Handle firingIndex and firingLength
	                                if ( firing ) {
	                                    if ( i <= firingLength ) {
	                                        firingLength--;
	                                        if ( i <= firingIndex ) {
	                                            firingIndex--;
	                                        }
	                                    }
	                                }
	                                // Remove the element
	                                list.splice( i--, 1 );
	                                // If we have some unicity property then
	                                // we only need to do this once
	                                if ( flags.unique ) {
	                                    break;
	                                }
	                            }
	                        }
	                    }
	                }
	                return this;
	            },
	            // Control if a given callback is in the list
	            has: function( fn ) {
	                if ( list ) {
	                    var i = 0,
	                        length = list.length;
	                    for ( ; i < length; i++ ) {
	                        if ( fn === list[ i ] ) {
	                            return true;
	                        }
	                    }
	                }
	                return false;
	            },
	            // Remove all callbacks from the list
	            empty: function() {
	                list = [];
	                return this;
	            },
	            // Have the list do nothing anymore
	            disable: function() {
	                list = stack = memory = undefined;
	                return this;
	            },
	            // Is it disabled?
	            disabled: function() {
	                return !list;
	            },
	            // Lock the list in its current state
	            lock: function() {
	                stack = undefined;
	                if ( !memory || memory === true ) {
	                    self.disable();
	                }
	                return this;
	            },
	            // Is it locked?
	            locked: function() {
	                return !stack;
	            },
	            // Call all callbacks with the given context and arguments
	            fireWith: function( context, args ) {
	                if ( stack ) {
	                    if ( firing ) {
	                        if ( !flags.once ) {
	                            stack.push( [ context, args ] );
	                        }
	                    } else if ( !( flags.once && memory ) ) {
	                        fire( context, args );
	                    }
	                }
	                return this;
	            },
	            // Call all the callbacks with the given arguments
	            fire: function() {
	                self.fireWith( this, arguments );
	                return this;
	            },
	            // To know if the callbacks have already been called at least once
	            fired: function() {
	                return !!fired;
	            }
	        };

	    return self;
	};
</script>
```