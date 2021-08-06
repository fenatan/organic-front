import React from 'react';
import Router from 'next/router';
import styled from 'styled-components';
import {
  Heading,
  Box,
  Input,
  FormControl,
  FormLabel,
  Button,
  Select,
  Flex,
  Grid,
  GridItem,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
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
import Header from 'components/Header';

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
  function slugify(text) {
    return text
      .toString()
      .toLowerCase()
      .normalize('NFD')
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-');
  }
  async function handleSave() {
    const result = await createArticle({
      ...article,
      tags: selectedItems.map((i) => i.value),
      content: content,
      author: +context.user.id,
      slug: slugify(article.title),
    });
    Router.push('/');
  }

  return (
    <>
      <Box minH="100vh" bg="black.100" color="gray.50" px={20}>
        <Header />

        <Flex width="100%" mt="20" columnGap="20">
          <Tabs
            flexGrow={1}
            orientation="vertical"
            align="start"
            textAlign="left"
          >
            <GridItem width="300px">
              <StyledTabList>
                <TabList>
                  <Tab textAlign="left">Artigo</Tab>
                  {FieldsInitial.map((field, i) => (
                    <Tab textAlign="left" key={i}>
                      {field.fieldDescription}
                    </Tab>
                  ))}
                </TabList>
              </StyledTabList>
            </GridItem>
            <GridItem width="100%">
              <TabPanels>
                <TabPanel>
                  <Box>
                    <FormControl marginBottom="30" id="title">
                      <FormLabel>Titulo</FormLabel>
                      <Input
                        name="title"
                        onChange={onChange}
                        value={article?.title}
                        type="text"
                      />
                    </FormControl>
                    <FormControl marginBottom="30" id="image">
                      <FormLabel>Imagem de capa</FormLabel>
                      <FileUpload handleFile={handleImageFile} />
                    </FormControl>
                    <FormControl marginBottom="30" id="content">
                      <FormLabel>Conteúdo</FormLabel>
                      <StyledEditor>
                        <ReactQuill
                          theme="snow"
                          value={content}
                          onChange={setContent}
                        />
                      </StyledEditor>
                    </FormControl>
                  </Box>
                </TabPanel>
                {FieldsInitial.map((field, i) => (
                  <TabPanel key={i}>
                    <Box marginBottom="30">
                      <h1>{field.fieldDescription}</h1>
                      <Button
                        onClick={() => handleAdd(field.data, field.fieldName)}
                        colorScheme="green"
                      >
                        Adicionar novo {field.fieldDescription}
                      </Button>
                      <Box padding="5" mt="5" border="1px solid #999">
                        {article[field.fieldName].map((f, idx) => (
                          <Box key={idx}>
                            {field.fields.map((fieldItem, index) => {
                              switch (fieldItem.type) {
                                case 'image':
                                  return (
                                    <FormControl
                                      marginTop="8"
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
                                      marginTop="8"
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
                                          onChangeArrayInputs(
                                            e,
                                            field.fieldName
                                          )
                                        }
                                        data-index={idx}
                                        value={f[fieldItem.attribute]}
                                        type="text"
                                      />
                                    </FormControl>
                                  );
                              }
                            })}
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  </TabPanel>
                ))}
              </TabPanels>
            </GridItem>
          </Tabs>
          <GridItem width="500px" ml="20px">
            <FormControl marginBottom="30" id="category">
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
            <FormControl marginBottom="30" id="tags">
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
            <Button
              mt={6}
              size="sm"
              fontSize="14px"
              w="100%"
              h="40px"
              borderRadius="3xl"
              border="none"
              color="black.100"
              bg="primary.100"
              onClick={handleSave}
              _focus={{
                boxShadow: '',
              }}
              _hover={{
                opacity: '0.8',
              }}
            >
              Publicar
            </Button>
          </GridItem>
        </Flex>
      </Box>
    </>
  );
}

const StyledEditor = styled.div`
  .ql-editor {
    min-height: 400px;
  }
`;

const StyledTabList = styled.div`
  .chakra-tabs__tablist {
    border: none;
  }
  .chakra-tabs__tab {
    justify-content: flex-start;
    padding: 12px;
    margin-bottom: 10px;
  }

  .chakra-tabs__tab[aria-selected='true'] {
    background: #00e88f;
    border: 1px solid #00e88f;
    box-sizing: border-box;
    border-radius: 8px;
    font-weight: 900;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.6px;
    color: #111111;
    text-align: left;
  }
`;
