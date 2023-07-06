// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
import "hardhat/console.sol";

contract FileStorage {
    struct File {
        uint256 id;
        FileType fileType;
        string fileName;
        string filePath;
        string externalUrl;
        string description;
    }

    enum FileType {
        NFT,
        PHOTO,
        VIDEO,
        AUDIO,
        DOCUMENT
    }

    /*========================= CONTRACT STATE =========================*/
    mapping(address => mapping(FileType => File[])) public store;

    /*========================= EVENTS =================================*/
    event FileStored(File file);
    event FileUpdated(File file);
    event FileRemoved(File file);

    /*========================= PUBLIC API =============================*/
    function addFile(
        FileType fileType,
        string memory fileName,
        string memory filePath,
        string memory externalUrl,
        string memory description
    ) public {
        uint256 id = store[msg.sender][fileType].length;
        File memory file = File(
            id,
            fileType,
            fileName,
            filePath,
            externalUrl,
            description
        );
        store[msg.sender][fileType].push(file);
        emit FileStored(file);
    }

    function updateFile(
        FileType fileType,
        uint256 id,
        string memory fileName,
        string memory externalUrl,
        string memory description
    ) public {
        File memory file = store[msg.sender][fileType][id];
        file.fileName = fileName;
        file.externalUrl = externalUrl;
        file.description = description;
        store[msg.sender][fileType][id] = file;
        emit FileUpdated(file);
    }

    function removeFile(FileType t, uint256 index) public {
        address acc = msg.sender;
        uint256 lastIndex = store[acc][t].length - 1;
        File memory file = store[acc][t][index];
        store[acc][t][index] = store[acc][t][lastIndex];
        store[acc][t][index].id = index;
        store[acc][t].pop();
        emit FileRemoved(file);
    }

    /*========================= VIEWS ================================*/
    function getNFTs() public view returns (File[] memory) {
        return store[msg.sender][FileType.NFT];
    }

    function getNFT(uint256 id) public view returns (File memory) {
        return store[msg.sender][FileType.NFT][id];
    }

    function getPhotos() public view returns (File[] memory) {
        return store[msg.sender][FileType.PHOTO];
    }

    function getPhoto(uint256 id) public view returns (File memory) {
        return store[msg.sender][FileType.PHOTO][id];
    }

    function getVideos() public view returns (File[] memory) {
        return store[msg.sender][FileType.VIDEO];
    }

    function getVideo(uint256 id) public view returns (File memory) {
        return store[msg.sender][FileType.VIDEO][id];
    }

    function getAudios() public view returns (File[] memory) {
        return store[msg.sender][FileType.AUDIO];
    }

    function getAudio(uint256 id) public view returns (File memory) {
        return store[msg.sender][FileType.AUDIO][id];
    }

    function getDocuments() public view returns (File[] memory) {
        return store[msg.sender][FileType.DOCUMENT];
    }

    function getDocument(uint256 id) public view returns (File memory) {
        return store[msg.sender][FileType.DOCUMENT][id];
    }

    /*========================= INTERNAL API ===========================*/
}
