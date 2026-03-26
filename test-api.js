async function checkList() {
  const rs = await fetch('https://fooapi.com/api/movies');
  const js = await rs.json();
  const data = js.data;
  console.log('List count:', data.length);
  console.log('Sample movie ID:', data[0].id);
  console.log('Sample movie keys:', Object.keys(data[0]));
}
checkList();
