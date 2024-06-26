import { Container, Text, VStack, Heading, Box, Image, SimpleGrid, LinkBox, LinkOverlay, Button } from "@chakra-ui/react";
import { FaUtensils } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Index = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const storedRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
    setRecipes(storedRecipes);
  }, []);

  return (
    <Container centerContent maxW="container.lg" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Recipe Sharing Website
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Discover and share your favorite recipes with the world!
        </Text>
        <Button as={Link} to="/submit-recipe" colorScheme="teal" size="lg">
          Submit a Recipe
        </Button>
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