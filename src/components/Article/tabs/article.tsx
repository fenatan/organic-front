import {
  Heading,
  Text,
  Box,
  Wrap,
  WrapItem,
  Button,
  Icon,
  useDisclosure,
  Flex,
  ButtonGroup,
} from '@chakra-ui/react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { FiBookmark, FiShare2, FiSlash } from 'react-icons/fi';

export default function Article() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box mb={8}>
        <Heading mb={14}>Título</Heading>
        <Text textAlign="left">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
          molestie consequat, vel illum dolore eu feugiat nulla facilisis at
          vero eros et accumsan et iusto odio dignissim qui blandit praesent
          luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
          Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
          molestie consequat, vel illum dolore eu feugiat nulla facilisis at
          vero eros et accumsan et iusto odio dignissim qui blandit praesent
          luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
          Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </Text>
      </Box>
      <Box mb={10}>
        <Heading fontSize="16px" mb={2}>
          Tags
        </Heading>
        <Wrap spacing={5}>
          <WrapItem>
            <Box
              cursor="pointer"
              display="flex"
              alignItems="center"
              justifyContent="center"
              w="100px"
              h="41px"
              bg="primary.100"
              borderRadius="8px"
            >
              <Heading fontSize="16px" fontWeight="normal" color="black.100">
                #Tag1
              </Heading>
            </Box>
          </WrapItem>
          <WrapItem>
            <Box
              cursor="pointer"
              display="flex"
              alignItems="center"
              justifyContent="center"
              w="100px"
              h="41px"
              bg="primary.100"
              borderRadius="8px"
            >
              <Heading fontSize="16px" fontWeight="normal" color="black.100">
                #Tag1
              </Heading>
            </Box>
          </WrapItem>
          <WrapItem>
            <Box
              cursor="pointer"
              display="flex"
              alignItems="center"
              justifyContent="center"
              w="100px"
              h="41px"
              bg="primary.100"
              borderRadius="8px"
            >
              <Heading fontSize="16px" fontWeight="normal" color="black.200">
                #Tag1
              </Heading>
            </Box>
          </WrapItem>
        </Wrap>
      </Box>
      <Box mb={10}>
        <Heading fontSize="16px">Avaliação</Heading>
        <Box onClick={onOpen} cursor="pointer" mb={10}>
          <Heading fontSize="70px" display="flex" alignItems="baseline">
            10
            <Heading fontSize="16px">/10</Heading>
            <Heading
              cursor="pointer"
              textDecoration="underline"
              ml={6}
              fontSize="16px"
              fontWeight="normal"
            >
              Avaliar
            </Heading>
          </Heading>
        </Box>
      </Box>
      <Box mb={10} display="flex" justifyContent="center">
        <Button
          mr={6}
          size="sm"
          fontSize="14px"
          w="160px"
          h="40px"
          borderRadius="3xl"
          border="1px solid #FFFFFF"
          color="#FFF"
          bg="transparent"
          _focus={{
            boxShadow: '',
          }}
          _hover={{
            opacity: '0.7',
          }}
        >
          <Icon mr={2} w={4} h={4} color="#fff" as={FiBookmark} />
          Salvar
        </Button>
        <Button
          mr={6}
          size="sm"
          fontSize="14px"
          w="160px"
          h="40px"
          borderRadius="3xl"
          border="1px solid #FFFFFF"
          color="#FFF"
          bg="transparent"
          _focus={{
            boxShadow: '',
          }}
          _hover={{
            opacity: '0.7',
          }}
        >
          <Icon mr={2} w={4} h={4} color="#fff" as={FiShare2} />
          Compartilhar
        </Button>
        <Button
          size="sm"
          fontSize="14px"
          w="160px"
          h="40px"
          borderRadius="3xl"
          border="1px solid #FFFFFF"
          color="#FFF"
          bg="transparent"
          _focus={{
            boxShadow: '',
          }}
          _hover={{
            opacity: '0.7',
          }}
        >
          <Icon mr={2} w={4} h={4} color="#fff" as={FiSlash} />
          Denunciar
        </Button>
        <Modal size="xl" isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent width="600px" maxW="600px" padding="70px 40px">
            <ModalHeader>
              <Heading>Avaliação de artigo</Heading>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text fontSize="16px" lineHeight="26px" mb="5">
                Colabore com a nota do artigo, levando em consideração se a
                informação foi útil para você.{' '}
              </Text>
              <Text fontSize="12px" mb="3">
                Nota de avaliação
              </Text>
              <ButtonGroup
                background="transparent"
                border="transparent"
                spacing="2"
                fontSize="10px"
              >
                <Button
                  fontSize="12px"
                  padding="1"
                  lineHeight="1px"
                  height="27px"
                  w="37px"
                  background="transparent"
                  _hover={{
                    background: '#00E88F',
                  }}
                >
                  1
                </Button>
                <Button
                  fontSize="12px"
                  padding="1"
                  lineHeight="1px"
                  height="27px"
                  w="37px"
                  background="transparent"
                  _hover={{
                    background: '#00E88F',
                  }}
                >
                  2
                </Button>
                <Button
                  fontSize="12px"
                  padding="1"
                  lineHeight="1px"
                  height="27px"
                  w="37px"
                  background="transparent"
                  _hover={{
                    background: '#00E88F',
                  }}
                >
                  3
                </Button>
                <Button
                  fontSize="12px"
                  padding="1"
                  lineHeight="1px"
                  height="27px"
                  w="37px"
                  background="transparent"
                  _hover={{
                    background: '#00E88F',
                  }}
                >
                  4
                </Button>
                <Button
                  fontSize="12px"
                  padding="1"
                  lineHeight="1px"
                  height="27px"
                  w="37px"
                  background="transparent"
                  _hover={{
                    background: '#00E88F',
                  }}
                >
                  5
                </Button>
                <Button
                  fontSize="12px"
                  padding="1"
                  lineHeight="1px"
                  height="27px"
                  w="37px"
                  background="transparent"
                  _hover={{
                    background: '#00E88F',
                  }}
                >
                  6
                </Button>
                <Button
                  fontSize="12px"
                  padding="1"
                  lineHeight="1px"
                  height="27px"
                  w="37px"
                  background="transparent"
                  _hover={{
                    background: '#00E88F',
                  }}
                >
                  7
                </Button>
                <Button
                  fontSize="12px"
                  padding="1"
                  lineHeight="1px"
                  height="27px"
                  w="37px"
                  background="transparent"
                  _hover={{
                    background: '#00E88F',
                  }}
                >
                  8
                </Button>
                <Button
                  fontSize="12px"
                  padding="1"
                  lineHeight="1px"
                  height="27px"
                  w="37px"
                  background="transparent"
                  _hover={{
                    background: '#00E88F',
                  }}
                >
                  9
                </Button>
                <Button
                  fontSize="12px"
                  padding="1"
                  lineHeight="1px"
                  height="27px"
                  w="37px"
                  background="transparent"
                  _hover={{
                    background: '#00E88F',
                  }}
                >
                  10
                </Button>
              </ButtonGroup>
            </ModalBody>

            <ModalFooter>
              <Button
                mt={6}
                size="sm"
                fontSize="14px"
                w="150px"
                h="40px"
                borderRadius="3xl"
                border="none"
                color="black.100"
                mr="auto"
                bg="primary.100"
                _focus={{
                  boxShadow: '',
                }}
                _hover={{
                  opacity: '0.8',
                }}
              >
                Avaliar
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
}
