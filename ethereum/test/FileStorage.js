const { expect } = require("chai");

const Category = {
  NFT: 0,
  PHOTO: 1,
  VIDEO: 2,
  AUDIO: 3,
  DOCUMENT: 4,
};

Object.freeze(Category);

const enumToFuncMapping = {
  [Category.NFT]: "getNFTs",
  [Category.PHOTO]: "getPhotos",
  [Category.VIDEO]: "getVideos",
  [Category.AUDIO]: "getAudios",
  [Category.DOCUMENT]: "getDocuments",
};

describe("FileStorage", function () {
  let store;
  let dummy = [0, "dummy", "dummy", "dummy", "dummy"];

  before(async function () {
    store = await hre.ethers.deployContract("FileStorage");
    await store.waitForDeployment();
    console.log(`FileStorage deployed to: ${store.target}`);
  });

  it("should add a file", async () => {
    for (const key in Category) {
      if (Object.hasOwnProperty.call(Category, key)) {
        const type = Category[key];
        const method = enumToFuncMapping[type];
        let files = await store[method]();
        expect(files.length).to.equal(0);
        dummy[0] = type;
        await store.addFile(...dummy);
        files = await store[method]();
        expect(files.length).to.equal(1);
      }
    }
  });

  it("should list all files", async () => {
    for (const key in Category) {
      if (Object.hasOwnProperty.call(Category, key)) {
        const type = Category[key];
        const method = enumToFuncMapping[type];
        const files = await store[method]();
        expect(files.length).to.equal(1);
      }
    }
  });

  it("should list a file", async () => {
    for (const key in Category) {
      if (Object.hasOwnProperty.call(Category, key)) {
        const type = Category[key];
        const method = enumToFuncMapping[type].slice(0, -1);
        const file = await store[method](0);
        expect(file.category).to.equal(type);
        expect(file.fileName).to.equal(dummy[1]);
        expect(file.path).to.equal(dummy[2]);
        expect(file.externalUrl).to.equal(dummy[3]);
        expect(file.description).to.equal(dummy[4]);
      }
    }
  });

  it("should update a file", async () => {
    for (const key in Category) {
      if (Object.hasOwnProperty.call(Category, key)) {
        const type = Category[key];
        const method = enumToFuncMapping[type].slice(0, -1);
        const file = await store[method](0);
        expect(file.category).to.equal(type);
        expect(file.fileName).to.equal(dummy[1]);
        expect(file.path).to.equal(dummy[2]);
        expect(file.externalUrl).to.equal(dummy[3]);
        expect(file.description).to.equal(dummy[4]);

        const phrase = "-updated";
        const values = dummy
          .map((prop, index) => (index === 0 ? type : prop))
          .map((prop) => (typeof prop === "string" ? prop + phrase : prop));

        await store.updateFile(0, ...values);

        const updated = await store[method](0);
        expect(updated.category).to.equal(type);
        expect(updated.fileName).to.equal(dummy[1] + phrase);
        expect(updated.path).to.equal(dummy[2] + phrase);
        expect(updated.externalUrl).to.equal(dummy[3] + phrase);
        expect(updated.description).to.equal(dummy[4] + phrase);
      }
    }
  });

  it("should remove a file", async () => {
    for (const key in Category) {
      if (Object.hasOwnProperty.call(Category, key)) {
        const type = Category[key];
        const method = enumToFuncMapping[type];
        let files = await store[method]();
        expect(files.length).to.equal(1);
        await store.removeFile(type, 0);
        files = await store[method]();
        expect(files.length).to.equal(0);
      }
    }
  });
});
