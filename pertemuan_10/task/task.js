// Refactored using Promises
function downloadPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const result = "windows-10.exe";
      resolve(result);
    }, 3000);
  });
}

downloadPromise()
  .then(result => {
    console.log("Download selesai");
    console.log(`Hasil Download: ${result}`);
  })
  .catch(error => {
    console.error("Error during download:", error);
  });

// Refactored using Async/Await
async function downloadAsync() {
  try {
    const result = await new Promise((resolve) => {
      setTimeout(() => {
        resolve("windows-10.exe");
      }, 3000);
    });

    console.log("Download selesai");
    console.log(`Hasil Download: ${result}`);
  } catch (error) {
    console.error("Error during download:", error);
  }
}

downloadAsync();