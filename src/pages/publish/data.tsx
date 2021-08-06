import { Attachment, Case, Embedded, Tutorial } from 'types/articles';

export const tutorialsInitialState: Array<Tutorial> = [
  {
    title: '',
    videoUrl: '',
    description: '',
  },
];

export const casesInitialState: Array<Case> = [
  {
    title: '',
    url: '',
    description: '',
    image: 1,
  },
];

export const attachmentsInitialState: Array<Attachment> = [
  {
    title: '',
    file: 1,
  },
];

export const embeddedsInitialState: Array<Embedded> = [
  {
    title: '',
    urlEmbedded: '',
  },
];

export const FieldsInitial: Array<any> = [
  {
    fieldName: 'tutorials',
    fieldDescription: 'Tutoriais',
    data: tutorialsInitialState,
    fields: [
      {
        name: 'Titulo',
        attribute: 'title',
        type: 'text',
      },
      {
        name: 'Url do Video',
        attribute: 'videoUrl',
        type: 'text',
      },
      {
        name: 'Descrição',
        attribute: 'description',
        type: 'text',
      },
    ],
  },
  {
    fieldName: 'cases',
    fieldDescription: 'Casos de Uso',
    data: casesInitialState,
    fields: [
      {
        name: 'Titulo',
        attribute: 'title',
        type: 'text',
      },
      {
        name: 'Descrição',
        attribute: 'description',
        type: 'text',
      },
      {
        name: 'Url',
        attribute: 'url',
        type: 'text',
      },
      {
        name: 'Imagem',
        attribute: 'image',
        type: 'image',
      },
    ],
  },
  {
    fieldName: 'attachments',
    fieldDescription: 'Anexos',
    data: attachmentsInitialState,
    fields: [
      {
        name: 'Titulo',
        attribute: 'title',
        type: 'text',
      },
      {
        name: 'Arquivo',
        attribute: 'file',
        type: 'image',
      },
    ],
  },
  {
    fieldName: 'embeddeds',
    fieldDescription: 'Materiais Incorporados',
    data: embeddedsInitialState,
    fields: [
      {
        name: 'Titulo',
        attribute: 'title',
        type: 'text',
      },
      {
        name: 'Url de incorporação',
        attribute: 'urlEmbedded',
        type: 'text',
      },
    ],
  },
];
