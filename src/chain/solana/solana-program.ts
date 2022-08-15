export type SolanaPrograms = {
  version: '0.1.0';
  name: 'solana_programs';
  instructions: [
    {
      name: 'initialize';
      accounts: [
        {
          name: 'manager';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'factory';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [];
    },
    {
      name: 'publishStory';
      accounts: [
        {
          name: 'author';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'factory';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'story';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'cid';
          type: 'string';
        },
      ];
    },
    {
      name: 'updateStory';
      accounts: [
        {
          name: 'author';
          isMut: false;
          isSigner: true;
        },
        {
          name: 'story';
          isMut: true;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'id';
          type: 'u64';
        },
        {
          name: 'cid';
          type: 'string';
        },
      ];
    },
    {
      name: 'publishStoryNft';
      accounts: [
        {
          name: 'author';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'story';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'mintState';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'findsMint';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'findsRecvAccount';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'id';
          type: 'u64';
        },
        {
          name: 'price';
          type: 'u64';
        },
        {
          name: 'total';
          type: 'u64';
        },
        {
          name: 'authorReserved';
          type: 'u64';
        },
        {
          name: 'image';
          type: 'string';
        },
        {
          name: 'title';
          type: 'string';
        },
        {
          name: 'description';
          type: 'string';
        },
      ];
    },
    {
      name: 'mintStoryNft';
      accounts: [
        {
          name: 'minter';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'story';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'mintState';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'mint';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'tokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'findsMint';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'findsSendAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'findsRecvAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'metadata';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenMetadataProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'masterEdition';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'associatedTokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'id';
          type: 'u64';
        },
      ];
    },
  ];
  accounts: [
    {
      name: 'storyFactory';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'nextId';
            type: 'u64';
          },
          {
            name: 'manager';
            type: 'publicKey';
          },
          {
            name: 'published';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'story';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'id';
            type: 'u64';
          },
          {
            name: 'author';
            type: 'publicKey';
          },
          {
            name: 'cid';
            type: 'string';
          },
        ];
      };
    },
    {
      name: 'storyNftMintState';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'id';
            type: 'u64';
          },
          {
            name: 'total';
            type: 'u64';
          },
          {
            name: 'price';
            type: 'u64';
          },
          {
            name: 'sold';
            type: 'u64';
          },
          {
            name: 'authorReserved';
            type: 'u64';
          },
          {
            name: 'authorClaimed';
            type: 'u64';
          },
          {
            name: 'image';
            type: 'string';
          },
          {
            name: 'description';
            type: 'string';
          },
          {
            name: 'title';
            type: 'string';
          },
          {
            name: 'findsRecvAddress';
            type: 'publicKey';
          },
          {
            name: 'findsMint';
            type: 'publicKey';
          },
        ];
      };
    },
  ];
  events: [
    {
      name: 'StoryUpdated';
      fields: [
        {
          name: 'id';
          type: 'u64';
          index: false;
        },
      ];
    },
    {
      name: 'StoryNftPublished';
      fields: [
        {
          name: 'id';
          type: 'u64';
          index: false;
        },
      ];
    },
    {
      name: 'NftMinted';
      fields: [
        {
          name: 'storyId';
          type: 'u64';
          index: false;
        },
        {
          name: 'mint';
          type: 'publicKey';
          index: false;
        },
      ];
    },
  ];
};

export const IDL: SolanaPrograms = {
  version: '0.1.0',
  name: 'solana_programs',
  instructions: [
    {
      name: 'initialize',
      accounts: [
        {
          name: 'manager',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'factory',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: 'publishStory',
      accounts: [
        {
          name: 'author',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'factory',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'story',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'cid',
          type: 'string',
        },
      ],
    },
    {
      name: 'updateStory',
      accounts: [
        {
          name: 'author',
          isMut: false,
          isSigner: true,
        },
        {
          name: 'story',
          isMut: true,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'id',
          type: 'u64',
        },
        {
          name: 'cid',
          type: 'string',
        },
      ],
    },
    {
      name: 'publishStoryNft',
      accounts: [
        {
          name: 'author',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'story',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mintState',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'findsMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'findsRecvAccount',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'id',
          type: 'u64',
        },
        {
          name: 'price',
          type: 'u64',
        },
        {
          name: 'total',
          type: 'u64',
        },
        {
          name: 'authorReserved',
          type: 'u64',
        },
        {
          name: 'image',
          type: 'string',
        },
        {
          name: 'title',
          type: 'string',
        },
        {
          name: 'description',
          type: 'string',
        },
      ],
    },
    {
      name: 'mintStoryNft',
      accounts: [
        {
          name: 'minter',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'story',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'mintState',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mint',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'tokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'findsMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'findsSendAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'findsRecvAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'metadata',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenMetadataProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'masterEdition',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'id',
          type: 'u64',
        },
      ],
    },
  ],
  accounts: [
    {
      name: 'storyFactory',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'nextId',
            type: 'u64',
          },
          {
            name: 'manager',
            type: 'publicKey',
          },
          {
            name: 'published',
            type: 'u64',
          },
        ],
      },
    },
    {
      name: 'story',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'id',
            type: 'u64',
          },
          {
            name: 'author',
            type: 'publicKey',
          },
          {
            name: 'cid',
            type: 'string',
          },
        ],
      },
    },
    {
      name: 'storyNftMintState',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'id',
            type: 'u64',
          },
          {
            name: 'total',
            type: 'u64',
          },
          {
            name: 'price',
            type: 'u64',
          },
          {
            name: 'sold',
            type: 'u64',
          },
          {
            name: 'authorReserved',
            type: 'u64',
          },
          {
            name: 'authorClaimed',
            type: 'u64',
          },
          {
            name: 'image',
            type: 'string',
          },
          {
            name: 'description',
            type: 'string',
          },
          {
            name: 'title',
            type: 'string',
          },
          {
            name: 'findsRecvAddress',
            type: 'publicKey',
          },
          {
            name: 'findsMint',
            type: 'publicKey',
          },
        ],
      },
    },
  ],
  events: [
    {
      name: 'StoryUpdated',
      fields: [
        {
          name: 'id',
          type: 'u64',
          index: false,
        },
      ],
    },
    {
      name: 'StoryNftPublished',
      fields: [
        {
          name: 'id',
          type: 'u64',
          index: false,
        },
      ],
    },
    {
      name: 'NftMinted',
      fields: [
        {
          name: 'storyId',
          type: 'u64',
          index: false,
        },
        {
          name: 'mint',
          type: 'publicKey',
          index: false,
        },
      ],
    },
  ],
};
