 

## Example

```javascript

var channel = crema('request -method=GET authorize');

console.log(channel.type); //request
console.log(channel.tags.method); //GET
console.log(channel.route.paths[0]); //authorize

```


## Syntax

```javascript
crema('type -tag=value route OR route2');


## Use Cases

- [beanpole](beanpole)
- [dolce](dolce)
