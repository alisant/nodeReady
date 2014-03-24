var obj = JSON.parse(process.argv[2]);

Object.keys(obj).forEach(function (key) {
  console.log("%s=%s", key, obj[key]);
});