import { useState } from 'react';
import { Box, Heading, Flex, HStack, Icon } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

import ArticleTab from './tabs/article';
import TutorialsTab from './tabs/tutorials';
import UseCasesTab from './tabs/useCases';

const tabs = {
  article: 'article',
  tutorials: 'tutorials',
  useCases: 'useCases',
  files: 'files',
  others: 'others',
};

export default function Article() {
  const [selectedTab, setSelectedTab] = useState(tabs.article);

  return (
    <Box pt={14} display="flex">
      <Box pr={28} height="286px" position="relative">
        <HStack
          mb={3}
          cursor="pointer"
          onClick={() => setSelectedTab(tabs.article)}
        >
          <Icon mr={2} as={AddIcon} />
          <Heading
            fontSize="16px"
            fontWeight={selectedTab === tabs.article ? 'bold' : 'normal'}
            whiteSpace="nowrap"
          >
            Artigo
          </Heading>
        </HStack>
        <HStack
          mb={3}
          cursor="pointer"
          onClick={() => setSelectedTab(tabs.tutorials)}
        >
          <Icon mr={2} as={AddIcon} />
          <Heading
            fontSize="16px"
            fontWeight={selectedTab === tabs.tutorials ? 'bold' : 'normal'}
            whiteSpace="nowrap"
          >
            Tutoriais
          </Heading>
        </HStack>
        <HStack
          mb={3}
          cursor="pointer"
          onClick={() => setSelectedTab(tabs.useCases)}
        >
          <Icon mr={2} as={AddIcon} />
          <Heading
            fontSize="16px"
            fontWeight={selectedTab === tabs.useCases ? 'bold' : 'normal'}
            whiteSpace="nowrap"
          >
            Casos de uso
          </Heading>
        </HStack>
        <HStack
          mb={3}
          cursor="pointer"
          onClick={() => setSelectedTab(tabs.article)}
        >
          <Icon mr={2} as={AddIcon} />
          <Heading
            fontSize="16px"
            fontWeight={selectedTab === tabs.tutorials ? 'bold' : 'normal'}
            whiteSpace="nowrap"
          >
            Arquivo anexados
          </Heading>
        </HStack>
        <HStack
          mb={3}
          cursor="pointer"
          onClick={() => setSelectedTab(tabs.article)}
        >
          <Icon mr={2} as={AddIcon} />
          <Heading
            fontSize="16px"
            fontWeight={selectedTab === tabs.tutorials ? 'bold' : 'normal'}
            whiteSpace="nowrap"
          >
            Outros materiais
          </Heading>
        </HStack>
        <HStack
          mb={20}
          cursor="pointer"
          onClick={() => setSelectedTab(tabs.article)}
        >
          <Icon mr={2} as={AddIcon} />
          <Heading fontSize="16px" fontWeight="normal" whiteSpace="nowrap">
            Exportar
          </Heading>
        </HStack>
        <Flex cursor="pointer" align="center">
          <Icon mr={2} as={AddIcon} />
          <Box display="flex" flexDirection="column" justifyContent="center">
            <Heading
              mb={2}
              fontSize="12px"
              fontWeight="normal"
              color="gray.300"
            >
              Nome e sobrenome
            </Heading>
            <Heading
              fontSize="12px"
              fontWeight="normal"
              color="gray.300"
              whiteSpace="nowrap"
            >
              05 de ago de 2021 às 16:00
            </Heading>
          </Box>
        </Flex>
      </Box>
      <Box maxW="100%">
        {selectedTab === tabs.article && <ArticleTab />}
        {selectedTab === tabs.tutorials && <TutorialsTab />}
        {selectedTab === tabs.useCases && <UseCasesTab />}
        {selectedTab === tabs.files && <ArticleTab />}
        {selectedTab === tabs.others && <ArticleTab />}
      </Box>
    </Box>
  );
}
