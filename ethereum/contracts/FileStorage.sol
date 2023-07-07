// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
import "hardhat/console.sol";

contract FileStorage {
    struct File {
        uint256 id;
        string fileName;
        string fileType;
        string filePath;
        string externalUrl;
        string description;
        Category category;
    }

    enum Category {
        NFT,
        PHOTO,
        VIDEO,
        AUDIO,
        DOCUMENT
    }

    /*========================= CONTRACT STATE =========================*/
    mapping(address => mapping(Category => File[])) public store;

    /*========================= EVENTS =================================*/
    event FileStored(File file);
    event FileUpdated(File file);
    event FileRemoved(File file);

    /*========================= PUBLIC API =============================*/
    function addFile(
        string memory fileName,
        string memory fileType,
        string memory filePath,
        string memory externalUrl,
        string memory description,
        Category category
    ) public {
        File memory file = File(
            store[msg.sender][category].length,
            fileName,
            fileType,
            filePath,
            externalUrl,
            description,
            category
        );
        store[msg.sender][category].push(file);
        emit FileStored(file);
    }

    function updateFile(
        uint256 id,
        string memory fileName,
        string memory externalUrl,
        string memory description,
        Category prevCategory,
        Category newCategory
    ) public {
        File memory file = store[msg.sender][prevCategory][id];
        file.id = store[msg.sender][newCategory].length;
        file.category = newCategory;
        file.fileName = fileName;
        file.externalUrl = externalUrl;
        file.description = description;
        store[msg.sender][newCategory].push(file);
        emit FileUpdated(file);
    }

    function removeFile(uint256 index, Category cat) public {
        address acc = msg.sender;
        uint256 lastIndex = store[acc][cat].length - 1;
        File memory file = store[acc][cat][index];
        store[acc][cat][index] = store[acc][cat][lastIndex];
        store[acc][cat][index].id = index;
        store[acc][cat].pop();
        emit FileRemoved(file);
    }

    /*========================= VIEWS ================================*/
    function getNFTs() public view returns (File[] memory) {
        return store[msg.sender][Category.NFT];
    }

    function getNFT(uint256 id) public view returns (File memory) {
        return store[msg.sender][Category.NFT][id];
    }

    function getPhotos() public view returns (File[] memory) {
        return store[msg.sender][Category.PHOTO];
    }

    function getPhoto(uint256 id) public view returns (File memory) {
        return store[msg.sender][Category.PHOTO][id];
    }

    function getVideos() public view returns (File[] memory) {
        return store[msg.sender][Category.VIDEO];
    }

    function getVideo(uint256 id) public view returns (File memory) {
        return store[msg.sender][Category.VIDEO][id];
    }

    function getAudios() public view returns (File[] memory) {
        return store[msg.sender][Category.AUDIO];
    }

    function getAudio(uint256 id) public view returns (File memory) {
        return store[msg.sender][Category.AUDIO][id];
    }

    function getDocuments() public view returns (File[] memory) {
        return store[msg.sender][Category.DOCUMENT];
    }

    function getDocument(uint256 id) public view returns (File memory) {
        return store[msg.sender][Category.DOCUMENT][id];
    }

    /*========================= INTERNAL API ===========================*/
}
