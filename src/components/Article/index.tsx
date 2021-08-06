import { Box, Heading, Text, HStack, Icon } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

export default function Article() {
  return (
    <Box pt={14} display="flex">
      <Box pr={28} height="286px" position="relative">
        <HStack mb={3} cursor="pointer">
          <Icon mr={2} as={AddIcon} />
          <Heading fontSize="16px" fontWeight="normal">
            Artigo
          </Heading>
        </HStack>
        <HStack mb={3} cursor="pointer">
          <Icon mr={2} as={AddIcon} />
          <Heading fontSize="16px" fontWeight="normal">
            Tutoriais
          </Heading>
        </HStack>
        <HStack mb={3} cursor="pointer">
          <Icon mr={2} as={AddIcon} />
          <Heading fontSize="16px" fontWeight="normal">
            Casos de uso
          </Heading>
        </HStack>
        <HStack mb={3} cursor="pointer">
          <Icon mr={2} as={AddIcon} />
          <Heading fontSize="16px" fontWeight="normal">
            Arquivo anexados
          </Heading>
        </HStack>
        <HStack mb={3} cursor="pointer">
          <Icon mr={2} as={AddIcon} />
          <Heading fontSize="16px" fontWeight="normal">
            Outros materiais
          </Heading>
        </HStack>
        <HStack mb={3} cursor="pointer">
          <Icon mr={2} as={AddIcon} />
          <Heading fontSize="16px" fontWeight="normal">
            Exportar
          </Heading>
        </HStack>
      </Box>
      <Box maxW="100%">
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
    </Box>
  );
}
