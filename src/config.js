const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);

// General metadata for Ethereum
const namePrefix = "NFT";
const description = "Description...";
const baseUri = "ipfs://___cid___";

const numWorkers = 24;
const batchSize = 1; // only matters when numWorkers > 1

const format = {
  width: 2_048,
  height: 2_048,
  smoothing: false,
};

const layerConfigurations = [
  {
    growEditionSizeTo: 5,
    layersOrder: [
      { name: "Background", options: { bypassDNA: true } },
      // { name: "" },
    ],
  },
];

const shuffleLayerConfigurations = true;

const debugLogs = false;

const background = {
  generate: false,
  brightness: "100%",
  static: true,
  default: "#ffffff",
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10_000;

const preview = {
  thumbPerRow: 100,
  thumbWidth: format.width / 8,
  imageRatio: format.height / format.width,
  imageName: "collection.png",
};

module.exports = {
  namePrefix,
  description,
  baseUri,

  format,

  layerConfigurations,
  shuffleLayerConfigurations,

  debugLogs,

  background,
  rarityDelimiter,
  uniqueDnaTorrance,

  preview,

  numWorkers,
  batchSize,
};
