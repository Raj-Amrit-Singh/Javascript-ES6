message = () => {
  const name = `Hi ${document.getElementById("name").value}`;
  let myPromise = new Promise((resolve, reject) => {
    let today = new Date();
    resolve(today.getHours());
  })
    .then((hour) => {
      if (hour >= 12 && hour < 17) {
        alert(`${name} Good Afternoon!!!!!`);
      }
      else if (hour >= 17 && hour < 20) {
        alert(`${name} Good Evening`);
      }
      else if (hour >= 20 && hour < 24) {
        alert(`${name} Good Night`);
      }
    });
}