const swaggerDocument = {
  swagger: '2.0',
  info: {
    version: '1.0.0',
    title: 'APIs Mysterium Document',
    description:
      'This is a sample server Mysterium server.  You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).',
    termsOfService: '',
    contact: {
      name: 'Gobelin Malin',
      email: 'mariemeline.paus@gmail.com'
    }
  },
  host: 'mysterium-game.herokuapp.com',
  basePath: '/api',
  schemes: 'https',
  paths: {
    '/characters': {
      get: {
        description: 'Returns all characters',
        produces: ['application/json'],
        parameters: [
          {
            in: 'params',
            name: 'id',
            description: 'Character id',
            required: false,
            type: 'int'
          },
          {
            in: 'params',
            name: 'name',
            description: 'Character name',
            required: false,
            type: 'string'
          },
          {
            in: 'params',
            name: 'image',
            description: 'Character description',
            required: false,
            type: 'string'
          }
        ],
        responses: {
          '200': {
            description: 'A list of characters.',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/characterItem'
              }
            }
          }
        }
      },
      post: {
        description: 'Create one character with parameter : name, image',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'characterItem',
            description: 'Character item to add',
            schema: {
              $ref: '#/definitions/characterItem'
            }
          }
        ],
        responses: {
          '200': {
            description: 'Create one character.'
          },
          '500': {
            description: 'Error Server'
          }
        }
      },
      put: {
        description: 'Modify one character with parameter : name, image',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'characterItem',
            description: 'Character item to modify',
            schema: {
              $ref: '#/definitions/characterItem'
            }
          }
        ],
        responses: {
          '200': {
            description: 'Modify one character.'
          },
          '500': {
            description: 'Error Server'
          }
        }
      },
      delete: {
        description: 'Delete one character with parameter : id',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'characterItem',
            description: 'Character item to delete',
            schema: {
              $ref: '#/definitions/characterItem'
            }
          }
        ],
        responses: {
          '200': {
            description: 'Delete one character.'
          },
          '500': {
            description: 'Error Server'
          }
        }
      }
    },
    '/mediums': {
      get: {
        description: 'Returns all mediums',
        produces: ['application/json'],
        parameters: [
          {
            in: 'params',
            name: 'id',
            description: 'Medium id',
            required: false,
            type: 'int'
          },
          {
            in: 'params',
            name: 'name',
            description: 'Medium name',
            required: false,
            type: 'string'
          },
          {
            in: 'params',
            name: 'image',
            description: 'Medium image',
            required: false,
            type: 'string'
          }
        ],
        responses: {
          '200': {
            description: 'A list of mediums.',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/mediumItem'
              }
            }
          }
        }
      },
      post: {
        description: 'Create one medium with parameter : name, image',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'mediumItem',
            description: 'Medium item to add',
            schema: {
              $ref: '#/definitions/mediumItem'
            }
          }
        ],
        responses: {
          '200': {
            description: 'Create one medium.'
          },
          '500': {
            description: 'Error Server'
          }
        }
      },
      put: {
        description: 'Modify one medium with parameter : name, image',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'mediumItem',
            description: 'Medium item to modify',
            schema: {
              $ref: '#/definitions/mediumItem'
            }
          }
        ],
        responses: {
          '200': {
            description: 'Modify one medium.'
          },
          '500': {
            description: 'Error Server'
          }
        }
      },
      delete: {
        description: 'Delete one medium with parameter : id',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'mediumItem',
            description: 'Medium item to delete',
            schema: {
              $ref: '#/definitions/mediumItem'
            }
          }
        ],
        responses: {
          '200': {
            description: 'Delete one medium.'
          },
          '500': {
            description: 'Error Server'
          }
        }
      }
    },
    '/places': {
      get: {
        description: 'Returns all places',
        produces: ['application/json'],
        parameters: [
          {
            in: 'params',
            name: 'id',
            description: 'Place id',
            required: false,
            type: 'int'
          },
          {
            in: 'params',
            name: 'name',
            description: 'Place name',
            required: false,
            type: 'string'
          },
          {
            in: 'params',
            name: 'image',
            description: 'Place image',
            required: false,
            type: 'string'
          }
        ],
        responses: {
          '200': {
            description: 'A list of places.',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/placeItem'
              }
            }
          }
        }
      },
      post: {
        description: 'Create one place with parameter : name, image',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'placeItem',
            description: 'Place item to add',
            schema: {
              $ref: '#/definitions/placeItem'
            }
          }
        ],
        responses: {
          '200': {
            description: 'Create one place.'
          },
          '500': {
            description: 'Error Server'
          }
        }
      },
      put: {
        description: 'Modify one place with parameter : name, image',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'placeItem',
            description: 'Place item to modify',
            schema: {
              $ref: '#/definitions/placeItem'
            }
          }
        ],
        responses: {
          '200': {
            description: 'Modify one place.'
          },
          '500': {
            description: 'Error Server'
          }
        }
      },
      delete: {
        description: 'Delete one place with parameter : id',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'placeItem',
            description: 'Place item to delete',
            schema: {
              $ref: '#/definitions/placeItem'
            }
          }
        ],
        responses: {
          '200': {
            description: 'Delete one place.'
          },
          '500': {
            description: 'Error Server'
          }
        }
      }
    },
    '/weapons': {
      get: {
        description: 'Returns all weapons',
        produces: ['application/json'],
        parameters: [
          {
            in: 'params',
            name: 'id',
            description: 'Weapon id',
            required: false,
            type: 'int'
          },
          {
            in: 'params',
            name: 'name',
            description: 'Weapon name',
            required: false,
            type: 'string'
          },
          {
            in: 'params',
            name: 'image',
            description: 'Weaponn image',
            required: false,
            type: 'string'
          }
        ],
        responses: {
          '200': {
            description: 'A list of weapons.',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/weaponItem'
              }
            }
          }
        }
      },
      post: {
        description: 'Create one weapon with parameter : name, image',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'weaponItem',
            description: 'Weapon item to add',
            schema: {
              $ref: '#/definitions/weaponItem'
            }
          }
        ],
        responses: {
          '200': {
            description: 'Create one weapon.'
          },
          '500': {
            description: 'Error Server'
          }
        }
      },
      put: {
        description: 'Modify one weapon with parameter : name, image',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'weaponItem',
            description: 'Weapon item to modify',
            schema: {
              $ref: '#/definitions/weaponItem'
            }
          }
        ],
        responses: {
          '200': {
            description: 'Modify one weapon.'
          },
          '500': {
            description: 'Error Server'
          }
        }
      },
      delete: {
        description: 'Delete one weapon with parameter : id',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'weaponItem',
            description: 'Wepaon item to delete',
            schema: {
              $ref: '#/definitions/weaponItem'
            }
          }
        ],
        responses: {
          '200': {
            description: 'Delete one place.'
          },
          '500': {
            description: 'Error Server'
          }
        }
      }
    },
    '/visions/characters': {
      get: {
        description: 'Returns all visions of characters',
        produces: ['application/json'],
        parameters: [
          {
            in: 'params',
            name: 'id',
            description: 'Vision id',
            required: false,
            type: 'int'
          },
          {
            in: 'params',
            name: 'id_character',
            description: 'Vision id of character',
            required: false,
            type: 'int'
          },
          {
            in: 'params',
            name: 'image',
            description: 'Visoin image of character',
            required: false,
            type: 'string'
          }
        ],
        responses: {
          '200': {
            description: 'A list of visions of character.',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/visionCharacterItem'
              }
            }
          }
        }
      },
      post: {
        description: 'Create one vision character with parameter : id_character, image',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'visionCharacterItem',
            description: 'Vision character item to add',
            schema: {
              $ref: '#/definitions/visionCharacterItem'
            }
          }
        ],
        responses: {
          '200': {
            description: 'Create one vision character.'
          },
          '500': {
            description: 'Error Server'
          }
        }
      },
      put: {
        description: 'Modify one vision character with parameter : id_character, image',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'visionCharacterItem',
            description: 'Vision character item to modify',
            schema: {
              $ref: '#/definitions/visionCharacterItem'
            }
          }
        ],
        responses: {
          '200': {
            description: 'Modify one vision character.'
          },
          '500': {
            description: 'Error Server'
          }
        }
      },
      delete: {
        description: 'Delete one vision character with parameter : id',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'visionCharacterItem',
            description: 'Vision character item to delete',
            schema: {
              $ref: '#/definitions/visionCharacterItem'
            }
          }
        ],
        responses: {
          '200': {
            description: 'Delete one vision character.'
          },
          '500': {
            description: 'Error Server'
          }
        }
      }
    },

    '/visions/places': {
      get: {
        description: 'Returns all visions of places',
        produces: ['application/json'],
        parameters: [
          {
            in: 'params',
            name: 'id',
            description: 'Vision id',
            required: false,
            type: 'int'
          },
          {
            in: 'params',
            name: 'id_place',
            description: 'Vision id of place',
            required: false,
            type: 'int'
          },
          {
            in: 'params',
            name: 'image',
            description: 'Visoin image of place',
            required: false,
            type: 'string'
          }
        ],
        responses: {
          '200': {
            description: 'A list of visions of place.',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/visionPlaceItem'
              }
            }
          }
        }
      },
      post: {
        description: 'Create one vision place with parameter : id_place, image',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'visionPlaceItem',
            description: 'Vision place item to add',
            schema: {
              $ref: '#/definitions/visionPlaceItem'
            }
          }
        ],
        responses: {
          '200': {
            description: 'Create one vision place.'
          },
          '500': {
            description: 'Error Server'
          }
        }
      },
      put: {
        description: 'Modify one vision place with parameter : id_place, image',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'visionPlaceItem',
            description: 'Vision place item to modify',
            schema: {
              $ref: '#/definitions/visionPlaceItem'
            }
          }
        ],
        responses: {
          '200': {
            description: 'Modify one vision place.'
          },
          '500': {
            description: 'Error Server'
          }
        }
      },
      delete: {
        description: 'Delete one vision place with parameter : id',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'visionPlaceItem',
            description: 'Vision place item to delete',
            schema: {
              $ref: '#/definitions/visionPlaceItem'
            }
          }
        ],
        responses: {
          '200': {
            description: 'Delete one vision place.'
          },
          '500': {
            description: 'Error Server'
          }
        }
      }
    },
    '/visions/weapons': {
      get: {
        description: 'Returns all visions of weapons',
        produces: ['application/json'],
        parameters: [
          {
            in: 'params',
            name: 'id',
            description: 'Vision id',
            required: false,
            type: 'int'
          },
          {
            in: 'params',
            name: 'id_weapon',
            description: 'Vision id of weapon',
            required: false,
            type: 'int'
          },
          {
            in: 'params',
            name: 'image',
            description: 'Visoin image of weapon',
            required: false,
            type: 'string'
          }
        ],
        responses: {
          '200': {
            description: 'A list of visions of weapon.',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/visionWeaponItem'
              }
            }
          }
        }
      },
      post: {
        description: 'Create one vision weapon with parameter : id_weapon, image',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'visionWeaponItem',
            description: 'Vision weapon item to add',
            schema: {
              $ref: '#/definitions/visionWeaponItem'
            }
          }
        ],
        responses: {
          '200': {
            description: 'Create one vision weapon.'
          },
          '500': {
            description: 'Error Server'
          }
        }
      },
      put: {
        description: 'Modify one vision weapon with parameter : id_weapon, image',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'visionWeaponItem',
            description: 'Vision weapon item to modify',
            schema: {
              $ref: '#/definitions/visionWeaponItem'
            }
          }
        ],
        responses: {
          '200': {
            description: 'Modify one vision weapon.'
          },
          '500': {
            description: 'Error Server'
          }
        }
      },
      delete: {
        description: 'Delete one vision weapon with parameter : id',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'visionWeaponItem',
            description: 'Vision weapon item to delete',
            schema: {
              $ref: '#/definitions/visionWeaponItem'
            }
          }
        ],
        responses: {
          '200': {
            description: 'Delete one vision weapon.'
          },
          '500': {
            description: 'Error Server'
          }
        }
      }
    },
  },
  definitions: {
    characterItem: {
      type: 'object',
      properties: {
        id: {
          type: 'int',
          format: 'id',
          example: '1'
        },
        name: {
          type: 'string',
          example: 'Fleuriste'
        },
        image: {
          type: 'string',
          format: 'url',
          example: 'https://i.ibb.co/2FV1r4t/IMG-7528.jpg'
        }
      }
    },
    mediumItem: {
      type: 'object',
      properties: {
        id: {
          type: 'int',
          format: 'id',
          example: '1'
        },
        image: {
          type: 'string',
          format: 'url',
          example: 'https://i.ibb.co/PgpVCh6/IMG-7512.jpg'
        },
        name: {
          type: 'string',
          example: 'Blue'
        }
      }
    },
    placeItem: {
      type: 'object',
      properties: {
        id: {
          type: 'int',
          format: 'id',
          example: '1'
        },
        image: {
          type: 'string',
          format: 'url',
          example: 'https://i.ibb.co/4MRj6P2/IMG-7553.jpg'
        },
        name: {
          type: 'string',
          example: 'Salle de bain'
        }
      }
    },
    weaponItem: {
      type: 'object',
      properties: {
        id: {
          type: 'int',
          format: 'id',
          example: '1'
        },
        image: {
          type: 'string',
          format: 'url',
          example: 'https://i.ibb.co/4MRj6P2/IMG-7553.jpg'
        },
        name: {
          type: 'string',
          example: 'Pistoler'
        }
      }
    },
    visionCharacterItem: {
      type: 'object',
      properties: {
        id: {
          type: 'int',
          format: 'id',
          example: '1'
        },
        image: {
          type: 'string',
          format: 'url',
          example: 'https://i.ibb.co/613d8RM/IMG-7524.jpg'
        },
        id_character: {
          type: 'int',
          format: 'id',
          example: '3'
        }
      }
    },
    visionPlaceItem: {
      type: 'object',
      properties: {
        id: {
          type: 'int',
          format: 'id',
          example: '1'
        },
        image: {
          type: 'string',
          format: 'url',
          example: 'https://i.ibb.co/CVXK2Bz/IMG-7554.jpg'
        },
        id_place: {
          type: 'int',
          format: 'id',
          example: '1'
        }
      }
    },
    visionWeaponItem: {
      type: 'object',
      properties: {
        id: {
          type: 'int',
          format: 'id',
          example: '1'
        },
        image: {
          type: 'string',
          format: 'url',
          example: 'https://i.ibb.co/gTGXJVH/IMG-7558.jpg'
        },
        name: {
          type: 'string',
          example: 'tabouret'
        }
      }
    }
  }
};

module.exports = swaggerDocument;
