function hi() {
  console.log("hi");
}
//deploy a contract and wait for it to deploy

async function main() {}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
