const hre = require("hardhat");
const ethers = require("ethers");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying with account:", deployer.address);

  const Escrow = await hre.ethers.getContractFactory("FreelanceEscrow");

  const freelancer = "0x000000000000000000000000000000000000dead";
  const amount = ethers.parseEther("0.1");

  const escrow = await Escrow.deploy(freelancer, { value: amount });

  await escrow.waitForDeployment(); // ✅ Ethers v6 way

  console.log("✅ FreelanceEscrow deployed at:", escrow.target); // ✅ Use `.target` instead of `.address`
}

main().catch((error) => {
  console.error("❌ Deployment error:", error);
  process.exitCode = 1;
});
