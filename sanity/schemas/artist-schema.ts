const artist = {
    name: 'artist',
    title: 'Artists',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 96,
        },
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'bio',
        title: 'Bio',
        type: 'array',
        of: [{ type: "block" }]
      },
      {
        name: 'socialLinks',
        title: 'Social Media Links',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'platform',
                title: 'Platform',
                type: 'string',
              },
              {
                name: 'url',
                title: 'URL',
                type: 'url',
              },
            ],
          },
        ],
      },
    ],
  };

  export default artist;
  