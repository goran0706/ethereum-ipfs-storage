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
            internalType: 'string',
            name: 'fileName',
            type: 'string'
          },
          {
            internalType: 'string',
            name: 'fileType',
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
          },
          {
            internalType: 'enum FileStorage.Category',
            name: 'category',
            type: 'uint8'
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
            internalType: 'string',
            name: 'fileName',
            type: 'string'
          },
          {
            internalType: 'string',
            name: 'fileType',
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
          },
          {
            internalType: 'enum FileStorage.Category',
            name: 'category',
            type: 'uint8'
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
            internalType: 'string',
            name: 'fileName',
            type: 'string'
          },
          {
            internalType: 'string',
            name: 'fileType',
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
          },
          {
            internalType: 'enum FileStorage.Category',
            name: 'category',
            type: 'uint8'
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
        internalType: 'string',
        name: 'fileName',
        type: 'string'
      },
      {
        internalType: 'string',
        name: 'fileType',
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
      },
      {
        internalType: 'enum FileStorage.Category',
        name: 'category',
        type: 'uint8'
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
            internalType: 'string',
            name: 'fileName',
            type: 'string'
          },
          {
            internalType: 'string',
            name: 'fileType',
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
          },
          {
            internalType: 'enum FileStorage.Category',
            name: 'category',
            type: 'uint8'
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
            internalType: 'string',
            name: 'fileName',
            type: 'string'
          },
          {
            internalType: 'string',
            name: 'fileType',
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
          },
          {
            internalType: 'enum FileStorage.Category',
            name: 'category',
            type: 'uint8'
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
            internalType: 'string',
            name: 'fileName',
            type: 'string'
          },
          {
            internalType: 'string',
            name: 'fileType',
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
          },
          {
            internalType: 'enum FileStorage.Category',
            name: 'category',
            type: 'uint8'
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
            internalType: 'string',
            name: 'fileName',
            type: 'string'
          },
          {
            internalType: 'string',
            name: 'fileType',
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
          },
          {
            internalType: 'enum FileStorage.Category',
            name: 'category',
            type: 'uint8'
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
            internalType: 'string',
            name: 'fileName',
            type: 'string'
          },
          {
            internalType: 'string',
            name: 'fileType',
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
          },
          {
            internalType: 'enum FileStorage.Category',
            name: 'category',
            type: 'uint8'
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
            internalType: 'string',
            name: 'fileName',
            type: 'string'
          },
          {
            internalType: 'string',
            name: 'fileType',
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
          },
          {
            internalType: 'enum FileStorage.Category',
            name: 'category',
            type: 'uint8'
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
            internalType: 'string',
            name: 'fileName',
            type: 'string'
          },
          {
            internalType: 'string',
            name: 'fileType',
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
          },
          {
            internalType: 'enum FileStorage.Category',
            name: 'category',
            type: 'uint8'
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
            internalType: 'string',
            name: 'fileName',
            type: 'string'
          },
          {
            internalType: 'string',
            name: 'fileType',
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
          },
          {
            internalType: 'enum FileStorage.Category',
            name: 'category',
            type: 'uint8'
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
            internalType: 'string',
            name: 'fileName',
            type: 'string'
          },
          {
            internalType: 'string',
            name: 'fileType',
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
          },
          {
            internalType: 'enum FileStorage.Category',
            name: 'category',
            type: 'uint8'
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
            internalType: 'string',
            name: 'fileName',
            type: 'string'
          },
          {
            internalType: 'string',
            name: 'fileType',
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
          },
          {
            internalType: 'enum FileStorage.Category',
            name: 'category',
            type: 'uint8'
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
        name: 'index',
        type: 'uint256'
      },
      {
        internalType: 'enum FileStorage.Category',
        name: 'cat',
        type: 'uint8'
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
        internalType: 'enum FileStorage.Category',
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
        internalType: 'string',
        name: 'fileName',
        type: 'string'
      },
      {
        internalType: 'string',
        name: 'fileType',
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
      },
      {
        internalType: 'enum FileStorage.Category',
        name: 'category',
        type: 'uint8'
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
      },
      {
        internalType: 'enum FileStorage.Category',
        name: 'prevCategory',
        type: 'uint8'
      },
      {
        internalType: 'enum FileStorage.Category',
        name: 'newCategory',
        type: 'uint8'
      }
    ],
    name: 'updateFile',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  }
]
