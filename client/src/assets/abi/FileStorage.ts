export default [
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256'
          },
          {
            internalType: 'enum FileStorage.FileType',
            name: 'fileType',
            type: 'uint8'
          },
          {
            internalType: 'string',
            name: 'fileName',
            type: 'string'
          },
          {
            internalType: 'string',
            name: 'filePath',
            type: 'string'
          },
          {
            internalType: 'string',
            name: 'externalUrl',
            type: 'string'
          },
          {
            internalType: 'string',
            name: 'description',
            type: 'string'
          }
        ],
        indexed: false,
        internalType: 'struct FileStorage.File',
        name: 'file',
        type: 'tuple'
      }
    ],
    name: 'FileRemoved',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256'
          },
          {
            internalType: 'enum FileStorage.FileType',
            name: 'fileType',
            type: 'uint8'
          },
          {
            internalType: 'string',
            name: 'fileName',
            type: 'string'
          },
          {
            internalType: 'string',
            name: 'filePath',
            type: 'string'
          },
          {
            internalType: 'string',
            name: 'externalUrl',
            type: 'string'
          },
          {
            internalType: 'string',
            name: 'description',
            type: 'string'
          }
        ],
        indexed: false,
        internalType: 'struct FileStorage.File',
        name: 'file',
        type: 'tuple'
      }
    ],
    name: 'FileStored',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256'
          },
          {
            internalType: 'enum FileStorage.FileType',
            name: 'fileType',
            type: 'uint8'
          },
          {
            internalType: 'string',
            name: 'fileName',
            type: 'string'
          },
          {
            internalType: 'string',
            name: 'filePath',
            type: 'string'
          },
          {
            internalType: 'string',
            name: 'externalUrl',
            type: 'string'
          },
          {
            internalType: 'string',
            name: 'description',
            type: 'string'
          }
        ],
        indexed: false,
        internalType: 'struct FileStorage.File',
        name: 'file',
        type: 'tuple'
      }
    ],
    name: 'FileUpdated',
    type: 'event'
  },
  {
    inputs: [
      {
        internalType: 'enum FileStorage.FileType',
        name: 'fileType',
        type: 'uint8'
      },
      {
        internalType: 'string',
        name: 'fileName',
        type: 'string'
      },
      {
        internalType: 'string',
        name: 'filePath',
        type: 'string'
      },
      {
        internalType: 'string',
        name: 'externalUrl',
        type: 'string'
      },
      {
        internalType: 'string',
        name: 'description',
        type: 'string'
      }
    ],
    name: 'addFile',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256'
      }
    ],
    name: 'getAudio',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256'
          },
          {
            internalType: 'enum FileStorage.FileType',
            name: 'fileType',
            type: 'uint8'
          },
          {
            internalType: 'string',
            name: 'fileName',
            type: 'string'
          },
          {
            internalType: 'string',
            name: 'filePath',
            type: 'string'
          },
          {
            internalType: 'string',
            name: 'externalUrl',
            type: 'string'
          },
          {
            internalType: 'string',
            name: 'description',
            type: 'string'
          }
        ],
        internalType: 'struct FileStorage.File',
        name: '',
        type: 'tuple'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getAudios',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256'
          },
          {
            internalType: 'enum FileStorage.FileType',
            name: 'fileType',
            type: 'uint8'
          },
          {
            internalType: 'string',
            name: 'fileName',
            type: 'string'
          },
          {
            internalType: 'string',
            name: 'filePath',
            type: 'string'
          },
          {
            internalType: 'string',
            name: 'externalUrl',
            type: 'string'
          },
          {
            internalType: 'string',
            name: 'description',
            type: 'string'
          }
        ],
        internalType: 'struct FileStorage.File[]',
        name: '',
        type: 'tuple[]'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256'
      }
    ],
    name: 'getDocument',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256'
          },
          {
            internalType: 'enum FileStorage.FileType',
            name: 'fileType',
            type: 'uint8'
          },
          {
            internalType: 'string',
            name: 'fileName',
            type: 'string'
          },
          {
            internalType: 'string',
            name: 'filePath',
            type: 'string'
          },
          {
            internalType: 'string',
            name: 'externalUrl',
            type: 'string'
          },
          {
            internalType: 'string',
            name: 'description',
            type: 'string'
          }
        ],
        internalType: 'struct FileStorage.File',
        name: '',
        type: 'tuple'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getDocuments',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256'
          },
          {
            internalType: 'enum FileStorage.FileType',
            name: 'fileType',
            type: 'uint8'
          },
          {
            internalType: 'string',
            name: 'fileName',
            type: 'string'
          },
          {
            internalType: 'string',
            name: 'filePath',
            type: 'string'
          },
          {
            internalType: 'string',
            name: 'externalUrl',
            type: 'string'
          },
          {
            internalType: 'string',
            name: 'description',
            type: 'string'
          }
        ],
        internalType: 'struct FileStorage.File[]',
        name: '',
        type: 'tuple[]'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256'
      }
    ],
    name: 'getNFT',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256'
          },
          {
            internalType: 'enum FileStorage.FileType',
            name: 'fileType',
            type: 'uint8'
          },
          {
            internalType: 'string',
            name: 'fileName',
            type: 'string'
          },
          {
            internalType: 'string',
            name: 'filePath',
            type: 'string'
          },
          {
            internalType: 'string',
            name: 'externalUrl',
            type: 'string'
          },
          {
            internalType: 'string',
            name: 'description',
            type: 'string'
          }
        ],
        internalType: 'struct FileStorage.File',
        name: '',
        type: 'tuple'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getNFTs',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256'
          },
          {
            internalType: 'enum FileStorage.FileType',
            name: 'fileType',
            type: 'uint8'
          },
          {
            internalType: 'string',
            name: 'fileName',
            type: 'string'
          },
          {
            internalType: 'string',
            name: 'filePath',
            type: 'string'
          },
          {
            internalType: 'string',
            name: 'externalUrl',
            type: 'string'
          },
          {
            internalType: 'string',
            name: 'description',
            type: 'string'
          }
        ],
        internalType: 'struct FileStorage.File[]',
        name: '',
        type: 'tuple[]'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256'
      }
    ],
    name: 'getPhoto',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256'
          },
          {
            internalType: 'enum FileStorage.FileType',
            name: 'fileType',
            type: 'uint8'
          },
          {
            internalType: 'string',
            name: 'fileName',
            type: 'string'
          },
          {
            internalType: 'string',
            name: 'filePath',
            type: 'string'
          },
          {
            internalType: 'string',
            name: 'externalUrl',
            type: 'string'
          },
          {
            internalType: 'string',
            name: 'description',
            type: 'string'
          }
        ],
        internalType: 'struct FileStorage.File',
        name: '',
        type: 'tuple'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getPhotos',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256'
          },
          {
            internalType: 'enum FileStorage.FileType',
            name: 'fileType',
            type: 'uint8'
          },
          {
            internalType: 'string',
            name: 'fileName',
            type: 'string'
          },
          {
            internalType: 'string',
            name: 'filePath',
            type: 'string'
          },
          {
            internalType: 'string',
            name: 'externalUrl',
            type: 'string'
          },
          {
            internalType: 'string',
            name: 'description',
            type: 'string'
          }
        ],
        internalType: 'struct FileStorage.File[]',
        name: '',
        type: 'tuple[]'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256'
      }
    ],
    name: 'getVideo',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256'
          },
          {
            internalType: 'enum FileStorage.FileType',
            name: 'fileType',
            type: 'uint8'
          },
          {
            internalType: 'string',
            name: 'fileName',
            type: 'string'
          },
          {
            internalType: 'string',
            name: 'filePath',
            type: 'string'
          },
          {
            internalType: 'string',
            name: 'externalUrl',
            type: 'string'
          },
          {
            internalType: 'string',
            name: 'description',
            type: 'string'
          }
        ],
        internalType: 'struct FileStorage.File',
        name: '',
        type: 'tuple'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getVideos',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256'
          },
          {
            internalType: 'enum FileStorage.FileType',
            name: 'fileType',
            type: 'uint8'
          },
          {
            internalType: 'string',
            name: 'fileName',
            type: 'string'
          },
          {
            internalType: 'string',
            name: 'filePath',
            type: 'string'
          },
          {
            internalType: 'string',
            name: 'externalUrl',
            type: 'string'
          },
          {
            internalType: 'string',
            name: 'description',
            type: 'string'
          }
        ],
        internalType: 'struct FileStorage.File[]',
        name: '',
        type: 'tuple[]'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'enum FileStorage.FileType',
        name: 't',
        type: 'uint8'
      },
      {
        internalType: 'uint256',
        name: 'index',
        type: 'uint256'
      }
    ],
    name: 'removeFile',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      },
      {
        internalType: 'enum FileStorage.FileType',
        name: '',
        type: 'uint8'
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    name: 'store',
    outputs: [
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256'
      },
      {
        internalType: 'enum FileStorage.FileType',
        name: 'fileType',
        type: 'uint8'
      },
      {
        internalType: 'string',
        name: 'fileName',
        type: 'string'
      },
      {
        internalType: 'string',
        name: 'filePath',
        type: 'string'
      },
      {
        internalType: 'string',
        name: 'externalUrl',
        type: 'string'
      },
      {
        internalType: 'string',
        name: 'description',
        type: 'string'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'enum FileStorage.FileType',
        name: 'fileType',
        type: 'uint8'
      },
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256'
      },
      {
        internalType: 'string',
        name: 'fileName',
        type: 'string'
      },
      {
        internalType: 'string',
        name: 'externalUrl',
        type: 'string'
      },
      {
        internalType: 'string',
        name: 'description',
        type: 'string'
      }
    ],
    name: 'updateFile',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  }
]
