## Command

Some command just like javascript, the only different is keyword and this language will translate to javascript and run as javascript. I know, this is just for fun.
### Variable

Assign variable
```
anu foo iku "hello world"
// let foo = "hello world"

seriously foo iku 123
// const foo = 123
```

Reassign variable
```
yoiki foo iku "hello world 2"
// foo = "hello world 2"
```

**Boolean**

```
literally foo iku positive vibes
// let foo = true

literally foo iku worth it
// let foo = true

literally foo iku negative vibes
// let foo = false
```

### Print / Console.log
```
duduhno "Hello world"
// console.log("Hello world")

duduhno foo
// console.log(foo)
```


### Condition

```
kalo foo iku "Hello world"
  duduhno "its hello world"
uwes

// transform to
if(foo == "Hello world"){
  console.log("its hello world")
}
```

```
kalo foo lebih gede 3
  duduhno "its bigger than 3"
perhaps foo iku 3
  duduhno "foo is 3"
kalogak
  duduhno "its smaller than 3"
uwes

// transform to
if(foo > 3){
  console.log("its bigger than 3")
} else if (foo == 3) {
  console.log("foo is 3")
} else {
  console.log("its smaller than 3")
}
```

Comparison : 
- `iku`: ' == ',
- `gak`: ' != ',
- `lebih gede`: ' > ',
- `lebih kecil`: ' < ',
- `lebih gede sama dengan`: ' >= ',
- `lebih kecil sama dengan`: ' <= '

### Loop

#### **`For` loop**:
```
fomo i endup 10
  kalo i lebih gede 3
    duduhno "loop ke " + i
  uwes
uwes

// transform to
for (let i = 0; i < 10; i++) {
  if (i > 3){
    console.log("loop ke " + i);
  }
}
```

#### **`For of` loop**:
```
fomo semua foo dari bar
  duduhno foo
uwes

// transform to
for (const foo of bar) {
  console.log(foo);
}
```

#### **`break`** and **`continue`**:
```
stop
// break;

skip
// continue;
```

### Function
```
so about my_story
    literally umur iku 21
    duduhno "Umur lu " + umur
thats it sih

call my_story

so about fungsi_param_banyak a b c
    duduhno "a: " + a
    duduhno "b: " + b
    duduhno "c: " + c
thats it sih

call fungsi_param_banyak 3 4 5
```

### Async Function
```
overthinking my_story
    literally umur iku 21
    duduhno "Umur lu " + umur
thats it sih

call my_story

so about fungsi_param_banyak a b c
    duduhno "a: " + a
    duduhno "b: " + b
    duduhno "c: " + c
thats it sih

call fungsi_param_banyak 3 4 5
```

### Try Catch & Exception
```
trust issue
  duduhno "Something wrong"
  toxic "Error message"
backstab
  duduhno "Catch error"
yaudahlahya
  duduhno "finish finally"
uwes


// transform to
try {
  console.log("Something wrong");
  throw new Error("Error message");
} catch {
  console.log("Catch error");
} finally {
  console.log("finish finally");
} 
```
