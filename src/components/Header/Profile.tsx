import { Box, Flex, Text, Avatar } from '@chakra-ui/react';

type ProfileProps = {
  showProfileData: boolean;
};

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Rafael Sergio</Text>
          <Text color="gray.300" fontSize="small">
            rafa.sergio.02@live.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Rafael Sergio"
        src="https://github.com/rafaelone.png"
      />
    </Flex>
  );
}
