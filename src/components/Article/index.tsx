import { useState } from 'react';
import { Box, Heading, Flex, HStack, Icon } from '@chakra-ui/react';
import {
  FiFileText,
  FiPlayCircle,
  FiGrid,
  FiFolder,
  FiPlus,
  FiDownload,
} from 'react-icons/fi';
import { VscAccount } from 'react-icons/vsc';

import ArticleTab from './tabs/article';
import TutorialsTab from './tabs/tutorials';
import UseCasesTab from './tabs/useCases';
import FilesTab from './tabs/files';

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
    <Box pt={14} display="flex" alignItems="start">
      <Box pr={28} height="286px" position="relative">
        <HStack
          mb={3}
          cursor="pointer"
          onClick={() => setSelectedTab(tabs.article)}
        >
          <Icon
            mr={1}
            w={5}
            h={5}
            as={FiFileText}
            color={selectedTab === tabs.article ? 'white' : 'normal'}
          />
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
          <Icon
            mr={1}
            w={5}
            h={5}
            as={FiPlayCircle}
            color={selectedTab === tabs.tutorials ? 'white' : 'normal'}
          />
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
          <Icon
            mr={1}
            w={5}
            h={5}
            as={FiGrid}
            color={selectedTab === tabs.useCases ? 'white' : 'normal'}
          />
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
          onClick={() => setSelectedTab(tabs.files)}
        >
          <Icon
            mr={1}
            w={5}
            h={5}
            as={FiFolder}
            color={selectedTab === tabs.files ? 'white' : 'normal'}
          />
          <Heading
            fontSize="16px"
            fontWeight={selectedTab === tabs.files ? 'bold' : 'normal'}
            whiteSpace="nowrap"
          >
            Arquivo anexados
          </Heading>
        </HStack>
        <HStack
          mb={3}
          cursor="pointer"
          onClick={() => setSelectedTab(tabs.others)}
        >
          <Icon
            mr={1}
            w={5}
            h={5}
            as={FiPlus}
            color={selectedTab === tabs.others ? 'white' : 'normal'}
          />
          <Heading
            fontSize="16px"
            fontWeight={selectedTab === tabs.others ? 'bold' : 'normal'}
            whiteSpace="nowrap"
          >
            Outros materiais
          </Heading>
        </HStack>
        <HStack mb={20} cursor="pointer">
          <Icon mr={1} w={5} h={5} as={FiDownload} />
          <Heading fontSize="16px" fontWeight="normal" whiteSpace="nowrap">
            Exportar
          </Heading>
        </HStack>
        <Flex cursor="pointer" align="center">
          <Icon mr={2} w={9} h={9} color="#999999" as={VscAccount} />
          <Box display="flex" flexDirection="column" justifyContent="center">
            <Heading
              mb={2}
              fontSize="12px"
              fontWeight="normal"
              color="gray.200"
            >
              Nome e sobrenome
            </Heading>
            <Heading
              fontSize="12px"
              fontWeight="normal"
              color="gray.200"
              whiteSpace="nowrap"
            >
              05 de ago de 2021 às 16:00
            </Heading>
          </Box>
        </Flex>
      </Box>
      <Box w="100%">
        {selectedTab === tabs.article && <ArticleTab />}
        {selectedTab === tabs.tutorials && <TutorialsTab />}
        {selectedTab === tabs.useCases && <UseCasesTab />}
        {selectedTab === tabs.files && <FilesTab />}
        {selectedTab === tabs.others && <ArticleTab />}
      </Box>
    </Box>
  );
}
