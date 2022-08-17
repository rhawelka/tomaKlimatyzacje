while (!document.querySelector("body > app-root > div > msi-common-search")) {
    await new Promise(resolve => setTimeout(console.log(resolve), 10));
    console.log("dupa")
}