import React from 'react';
import Router from 'next/router';
import {
  Heading,
  Box,
  Input,
  FormControl,
  FormLabel,
  Button,
  Select,
} from '@chakra-ui/react';
import { FileUpload } from 'components/Upload';
import AuthContext from 'contexts/auth';
import { useContext, useState } from 'react';
import { ArticleInput } from 'types/articles';
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';
import {
  tutorialsInitialState,
  FieldsInitial,
  casesInitialState,
  attachmentsInitialState,
  embeddedsInitialState,
} from './data';
import CategoriesService from 'services/categories';
import TagsService from 'services/tags';
import { CUIAutoComplete } from 'chakra-ui-autocomplete';
import { createArticle } from 'services/articles';

export async function getStaticProps() {
  const categories = await CategoriesService.getAll();
  const tags = await TagsService.getAll();
  return {
    props: {
      categories,
      tags,
    },
  };
}
export interface Item {
  value: string;
  label: string;
}
export default function Publish({ categories, tags }) {
  const [pickerItems, setPickerItems] = React.useState(
    tags.map((t) => ({ value: t.id, label: t.title }))
  );
  const [selectedItems, setSelectedItems] = React.useState<Item[]>([]);
  const [article, setArticle] = useState<ArticleInput>({
    title: '',
    category: null,
    tutorials: tutorialsInitialState,
    cases: casesInitialState,
    attachments: attachmentsInitialState,
    embeddeds: embeddedsInitialState,
  });

  const [content, setContent] = useState('');

  const context = useContext(AuthContext);

  function onChange({ target }) {
    const newValue = target.value;
    const inputName = target.name;
    setArticle((prevState) => {
      return {
        ...prevState,
        [inputName]: newValue,
      };
    });
  }

  const handleCreateItem = (item: Item) => {
    setPickerItems((curr) => [...curr, item]);
    setSelectedItems((curr) => [...curr, item]);
  };

  const handleSelectedItemsChange = (selectedItems?: Item[]) => {
    if (selectedItems) {
      setSelectedItems(selectedItems);
    }
  };
  function onChangeArrayInputs({ target }, type: string) {
    const newValue = target.value;
    const input = target.dataset.index;
    const inputName = target.name;

    setArticle((prevState) => {
      const tutorials = [...prevState[type]];
      tutorials[input] = {
        ...prevState[type][input],
        [inputName]: newValue,
      };
      console.log(tutorials[input]);
      return {
        ...prevState,
        [type]: tutorials,
      };
    });
  }

  async function onHandleImageArrayInputs(
    index: number,
    name: string,
    type: string,
    value: number
  ) {
    const newValue = value;
    const input = index;
    const inputName = name;

    setArticle((prevState) => {
      const tutorials = [...prevState[type]];
      tutorials[input] = {
        ...prevState[type][input],
        [inputName]: newValue,
      };
      console.log(tutorials[input]);
      return {
        ...prevState,
        [type]: tutorials,
      };
    });
  }

  async function handleImageFile(file: number) {
    setArticle((prevState) => {
      return {
        ...prevState,
        image: file,
      };
    });
  }

  function handleAdd(data, fieldName) {
    setArticle((prevState) => {
      const actual = [...prevState[fieldName], ...data];
      console.log('log', actual);
      return {
        ...prevState,
        [fieldName]: actual,
      };
    });
  }

  async function handleSave() {
    const result = await createArticle({
      ...article,
      tags: selectedItems.map((i) => i.value),
      content: content,
      author: +context.user.id,
    });
    Router.push('/login');
  }

  return (
    <>
      <Box bg="primary.100" w="100%" p={4} color="white">
        <Heading size="lg">Publicar artigo</Heading>
      </Box>
      <FormControl id="title">
        <FormLabel>Titulo</FormLabel>
        <Input
          name="title"
          onChange={onChange}
          value={article?.title}
          type="text"
        />
      </FormControl>
      <FormControl id="image">
        <FormLabel>Imagem de capa</FormLabel>
        <FileUpload handleFile={handleImageFile} />
      </FormControl>
      <FormControl id="content">
        <FormLabel>Conteúdo</FormLabel>
        <ReactQuill theme="snow" value={content} onChange={setContent} />
      </FormControl>
      <FormControl id="category">
        <FormLabel>Categoria</FormLabel>
        <Select
          onChange={onChange}
          name="category"
          value={article?.category}
          placeholder="Selecione a categoria"
        >
          {categories.map((category, i) => (
            <option key={i} value={category.id}>
              {category.name}
            </option>
          ))}
        </Select>
      </FormControl>
      <FormControl id="tags">
        <CUIAutoComplete
          label="Tags"
          placeholder="Selecine as tags do artigo"
          onCreateItem={handleCreateItem}
          items={pickerItems}
          selectedItems={selectedItems}
          onSelectedItemsChange={(changes) =>
            handleSelectedItemsChange(changes.selectedItems)
          }
        />
      </FormControl>

      {FieldsInitial.map((field, i) => (
        <div className="item-principal" key={i}>
          <h1>{field.fieldDescription}</h1>
          <Button
            onClick={() => handleAdd(field.data, field.fieldName)}
            colorScheme="green"
          >
            Adicionar novo {field.fieldDescription}
          </Button>
          <div className="listItems">
            {article[field.fieldName].map((f, idx) => (
              <div key={idx} className="listItems--card">
                {field.fields.map((fieldItem, index) => {
                  switch (fieldItem.type) {
                    case 'image':
                      return (
                        <FormControl
                          id={
                            field.fieldName +
                            '-' +
                            fieldItem.attribute +
                            '-' +
                            idx
                          }
                          key={index}
                        >
                          <FormLabel>{fieldItem.name}</FormLabel>
                          <FileUpload
                            handleFile={(f) =>
                              onHandleImageArrayInputs(
                                idx,
                                fieldItem.attribute,
                                field.fieldName,
                                f
                              )
                            }
                          />
                        </FormControl>
                      );
                    default:
                      return (
                        <FormControl
                          id={
                            field.fieldName +
                            '-' +
                            fieldItem.attribute +
                            '-' +
                            idx
                          }
                          key={index}
                        >
                          <FormLabel>{fieldItem.name}</FormLabel>
                          <Input
                            name={fieldItem.attribute}
                            onChange={(e) =>
                              onChangeArrayInputs(e, field.fieldName)
                            }
                            data-index={idx}
                            value={f[fieldItem.attribute]}
                            type="text"
                          />
                        </FormControl>
                      );
                  }
                })}
              </div>
            ))}
          </div>
        </div>
      ))}
      <Button onClick={handleSave} colorScheme="green">
        Cadastrar
      </Button>
    </>
  );
}
