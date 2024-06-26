import { Container, Text, VStack, Heading, Box, Image, SimpleGrid, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { FaUtensils } from "react-icons/fa";

const recipes = [
  {
    id: 1,
    title: "Spaghetti Carbonara",
    image: "https://via.placeholder.com/150",
    description: "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
  },
  {
    id: 2,
    title: "Chicken Tikka Masala",
    image: "https://via.placeholder.com/150",
    description: "Chunks of grilled chicken (tikka) cooked in a creamy, spiced tomato sauce.",
  },
  {
    id: 3,
    title: "Beef Stroganoff",
    image: "https://via.placeholder.com/150",
    description: "A Russian dish of sautéed pieces of beef served in a sauce with smetana (sour cream).",
  },
];

const Index = () => {
  return (
    <Container centerContent maxW="container.lg" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Recipe Sharing Website
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Discover and share your favorite recipes with the world!
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} width="100%">
          {recipes.map((recipe) => (
            <LinkBox as="article" key={recipe.id} p={5} borderWidth="1px" rounded="md" _hover={{ shadow: "lg" }}>
              <Image src={recipe.image} alt={recipe.title} rounded="md" mb={4} />
              <Box>
                <Heading as="h3" size="md" mb={2}>
                  <LinkOverlay href={`/recipe/${recipe.id}`}>{recipe.title}</LinkOverlay>
                </Heading>
                <Text>{recipe.description}</Text>
              </Box>
            </LinkBox>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;