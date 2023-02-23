require("@nomicfoundation/hardhat-toolbox");
require("@tenderly/hardhat-tenderly");


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",

	networks: {
		local: {
			url: 'http://127.0.0.1:8545'
	  	}
	},
  
	tenderly: {
		username: "angadsinghagarwal",
		project: "sea"
	}

};
