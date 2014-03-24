process.argv[2].split(',').forEach(function (element, index) {
  console.log('[%s] %s', index, element);
});
