export class Collection {
  imgSrc: string[] = [
    'add-photo-svgrepo-com.svg',
    'Arrows_1_Artboard_18-1024.webp',
    'rectangle-thin-svgrepo-com.svg',
    'download (1).jpg',
    'download (2).jpg',
    'OIP (1).jpg',
    'OIP (2).jpg',
    'OIP (3).jpg',
    'th (1).jpg',
    'search-alt-2-svgrepo-com.svg',
    'circle-dashed-svgrepo-com.svg',
    'circle-information-svgrepo-com.svg',
    'arrow-narrow-left-svgrepo-com.svg',
    'cross-svgrepo-com.svg',
    'image-1-svgrepo-com.svg',
    'star-fall-2-svgrepo-com (1).svg',
    'star-fall-minimalistic-svgrepo-com.svg'
  ];
  videoSrc: string[] = ['Loading Screen Effect.mp4'];
  fetchingData = {
    access_token: 'iVGCaws5b3BYF0g',
    model_version: 'insect_id:2.0.0',
    custom_id: null,
    input: {
      latitude: null,
      longitude: null,
      similar_images: true,
      images: [
        'https://insect.kindwise.com/media/images/59bf3e012f534274889366001109670d.jpg',
      ],
      datetime: '2024-12-04T11:58:00.617168+00:00',
    },
    result: {
      classification: {
        suggestions: [
          {
            id: '2abe07914ad76570',
            name: 'Papilio machaon',
            probability: 0.9431,
            similar_images: [
              {
                id: 'd7b131fd3adc9bec839d71b3e76fdd29e3a84c77',
                url: 'https://insect-id.ams3.cdn.digitaloceanspaces.com/similar_images/2/d7b/131fd3adc9bec839d71b3e76fdd29e3a84c77.jpg',
                similarity: 0.834,
                url_small:
                  'https://insect-id.ams3.cdn.digitaloceanspaces.com/similar_images/2/d7b/131fd3adc9bec839d71b3e76fdd29e3a84c77.small.jpg',
              },
              {
                id: '644a8b50f4f55b677d92a3f1ebe569eee2a65e01',
                url: 'https://insect-id.ams3.cdn.digitaloceanspaces.com/similar_images/2/644/a8b50f4f55b677d92a3f1ebe569eee2a65e01.jpg',
                similarity: 0.386,
                url_small:
                  'https://insect-id.ams3.cdn.digitaloceanspaces.com/similar_images/2/644/a8b50f4f55b677d92a3f1ebe569eee2a65e01.small.jpg',
              },
            ],
            details: {
              common_names: [
                'swallowtail',
                'Old World Swallowtail',
                'Common Swallowtail',
                'Common Yellow Swallowtail',
              ],
              taxonomy: {
                class: 'Insecta',
                genus: 'Papilio',
                order: 'Lepidoptera',
                family: 'Papilionidae',
                phylum: 'Arthropoda',
                kingdom: 'Animalia',
              },
              url: 'https://en.wikipedia.org/wiki/Papilio_machaon',
              inaturalist_id: 56529,
              rank: 'species',
              description: {
                value:
                  'Papilio machaon, the Old World swallowtail, is a butterfly of the family Papilionidae. The butterfly is also known as the common yellow swallowtail or simply the swallowtail (a common name applied to all members of the family, but this species was the first to be given the name). It is the type species of the genus Papilio. This widespread species is found in much of the Palearctic (it is the only swallowtail in most of Europe) and in North America.',
                citation: 'https://en.wikipedia.org/wiki/Papilio_machaon',
                license_name: 'CC BY-SA 3.0',
                license_url: 'https://creativecommons.org/licenses/by-sa/3.0/',
              },
              image: {
                value:
                  'https://insect-id.ams3.cdn.digitaloceanspaces.com/knowledge_base/wikidata/2fa/2fa22c7771055c1d725c7da4a1633c4923f513c6.jpg',
                citation: '//commons.wikimedia.org/wiki/User:Entomolo',
                license_name: 'CC BY-SA 4.0',
                license_url: 'https://creativecommons.org/licenses/by-sa/4.0/',
              },
              role: null,
              danger_description: null,
              language: 'en',
              entity_id: '2abe07914ad76570',
            },
          },
          {
            id: '61b70a6f4a26dff1',
            name: 'Papilio zelicaon',
            probability: 0.0215,
            similar_images: [
              {
                id: '4d793ecdb37ea66988725f6f00b9954df9a40e71',
                url: 'https://insect-id.ams3.cdn.digitaloceanspaces.com/similar_images/2/4d7/93ecdb37ea66988725f6f00b9954df9a40e71.jpg',
                license_name: 'CC BY 4.0',
                license_url: 'https://creativecommons.org/licenses/by/4.0/',
                citation: 'Justin Paulin',
                similarity: 0.654,
                url_small:
                  'https://insect-id.ams3.cdn.digitaloceanspaces.com/similar_images/2/4d7/93ecdb37ea66988725f6f00b9954df9a40e71.small.jpg',
              },
              {
                id: '6f47c517f48a013bd18c00bcafdb0f34af204f92',
                url: 'https://insect-id.ams3.cdn.digitaloceanspaces.com/similar_images/2/6f4/7c517f48a013bd18c00bcafdb0f34af204f92.jpeg',
                license_name: 'CC BY 4.0',
                license_url: 'https://creativecommons.org/licenses/by/4.0/',
                citation: 'Millie Basden',
                similarity: 0.307,
                url_small:
                  'https://insect-id.ams3.cdn.digitaloceanspaces.com/similar_images/2/6f4/7c517f48a013bd18c00bcafdb0f34af204f92.small.jpeg',
              },
            ],
            details: {
              common_names: ['Anise Swallowtail'],
              taxonomy: {
                class: 'Insecta',
                genus: 'Papilio',
                order: 'Lepidoptera',
                family: 'Papilionidae',
                phylum: 'Arthropoda',
                kingdom: 'Animalia',
              },
              url: 'https://en.wikipedia.org/wiki/Papilio_zelicaon',
              inaturalist_id: 51097,
              rank: 'species',
              description: {
                value:
                  'Papilio zelicaon, the anise swallowtail, is a common swallowtail butterfly of western North America. Both the upper and lower sides of its wings are black, but the upper wing has a broad yellow stripe across it, giving the butterfly an overall yellow appearance. There are striking blue spots on the rear edge of the rear wing, and the characteristic tails of the swallowtails. Its wingspan is 52–80 mm (2.04-3.15 inches). Its body is somewhat shorter than the rather similar western tiger swallowtail, with which its range overlaps; it also lacks the black stripes, converging toward the tail, of the latter. There is a somewhat darker subspecies, P. z. nitra, which is rare throughout the range, though somewhat more often found at lower elevations.',
                citation: 'https://en.wikipedia.org/wiki/Papilio_zelicaon',
                license_name: 'CC BY-SA 3.0',
                license_url: 'https://creativecommons.org/licenses/by-sa/3.0/',
              },
              image: {
                value:
                  'https://insect-id.ams3.cdn.digitaloceanspaces.com/knowledge_base/wikidata/5ab/5abfb98bbdb9270dc5ca58f82779a76a7819802f.jpg',
                citation: '//commons.wikimedia.org/wiki/User:Calibas',
                license_name: 'CC BY-SA 4.0',
                license_url: 'https://creativecommons.org/licenses/by-sa/4.0/',
              },
              role: null,
              danger_description: null,
              language: 'en',
              entity_id: '61b70a6f4a26dff1',
            },
          },
        ],
      },
      is_insect: {
        probability: 0.92513794,
        threshold: 0.5,
        binary: true,
      },
    },
    status: 'COMPLETED',
    sla_compliant_client: true,
    sla_compliant_system: true,
    created: 1733313480.617168,
    completed: 1733313480.953115,
  };
  fetchingDataDetails = {
    data: {
      details: {
        name: 'Cerura vinula',
        common_names: ['Puss Moth'],
        taxonomy: {
          class: 'Insecta',
          genus: 'Cerura',
          order: 'Lepidoptera',
          family: 'Notodontidae',
          phylum: 'Arthropoda',
          kingdom: 'Animalia',
        },
        life_cycle: [
          {
            stage: 'Egg',
            appearance:
              'Small, round, and pale green, laid in batches on leaves of host plants.',
          },
          {
            stage: 'Larva (Caterpillar)',
            appearance:
              "Distinctive appearance with a large, green body, two prominent 'horns' on the thorax, and a tail-like appendage.  Can change color slightly depending on the environment.",
          },
          {
            stage: 'Pupa',
            appearance:
              'Brownish-gray pupa formed in a loose cocoon within leaf litter or crevices.',
          },
          {
            stage: 'Adult (Moth)',
            appearance:
              'Brownish-gray forewings and lighter hindwings.  The adults have a wingspan of around 5-7 cm.',
          },
        ],
        host_plants: ['Poplar (Populus spp.)', 'Willow (Salix spp.)'],
        range: 'Europe and parts of Asia.',
        harm_for_agriculture:
          'The puss moth caterpillar can defoliate poplar and willow trees, particularly younger ones.  Heavy infestations can lead to growth reduction and damage to commercially grown trees.',
        effective_control_methods: [
          {
            method: 'Biological Control',
            description:
              'Natural predators such as birds, parasitic wasps, and other insects can help keep populations in check.',
          },
          {
            method: 'Handpicking',
            description:
              'Manually removing caterpillars from affected trees, particularly effective in small-scale infestations or for young trees.',
          },
          {
            method: 'Bacillus thuringiensis (Bt)',
            description:
              'Application of a Bt-based insecticide can be effective against puss moth caterpillars.  Always follow label instructions carefully.',
          },
          {
            method: 'Insecticides',
            description:
              'Chemical insecticides can also control puss moth larvae, but should be used judiciously due to potential effects on non-target species.',
          },
        ],
      },
    },
    description:
      'Pareronia is a genus of butterflies of the subfamily Pierinae within the family Pieridae. The species are found in Southeast Asia and are mimics of the Danainae genus Parantica.',
    url: 'https://en.wikipedia.org/wiki/Cerura_vinula',
    image:
      'https://insect-id.ams3.cdn.digitaloceanspaces.com/knowledge_base/wikidata/726/726d30aa45f62c6e3fd1982e41fccb25261ebf04.jpg',
    images: [
      'https://insect-id.ams3.cdn.digitaloceanspaces.com/knowledge_base/inaturalist/32c/32c3ad42666bc41a648674f2a64da815e6b88dcb.jpg',
      'https://insect-id.ams3.cdn.digitaloceanspaces.com/knowledge_base/inaturalist/2d6/2d6d6af2e53f2840cd8b212d7738683017f1626e.jpg',
      'https://insect-id.ams3.cdn.digitaloceanspaces.com/knowledge_base/inaturalist/2af/2af420c6b6d19d90e70a1e1ef2afc9f7bfc4d99f.jpg',
    ],
  };
}
